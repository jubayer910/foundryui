"use client";
// Team table (spendix, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";

export function TeamTable() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1154px", height: "436px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "1154px", height: "44px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #ededed, inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "1px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Team</p>
        </div>
        <div style={{ width: "120px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Budget</p>
        </div>
        <div style={{ width: "120px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Spent</p>
        </div>
        <div style={{ width: "120px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Remaining</p>
        </div>
        <div style={{ width: "190px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Used</p>
        </div>
        <div style={{ width: "150px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Last 8 weeks</p>
        </div>
        <div style={{ width: "224px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Top vendor</p>
        </div>
      </div>
      <div data-fu="row" style={{ width: "1154px", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#e0e9fc", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#184099" }}>SR</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Engineering</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Sofia Reyes</p>
            </div>
          </div>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>$7,000</p>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,510</p>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#16a34a" }}>$5,490</p>
        </div>
        <div style={{ width: "190px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>22%</p>
          </div>
        </div>
        <svg data-fu="plot" style={{ width: "150px", height: "55px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="150" height="55" viewBox="0 0 150 55" fill="none" overflow="visible"><defs><linearGradient id="g13_u3f9" gradientUnits="userSpaceOnUse" x1="52.00" y1="0.00" x2="52.00" y2="25.03"><stop offset="0" stopColor="#2563eb" stopOpacity="0.16"/><stop offset="1" stopColor="#2563eb" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 1 16.5)" d="M0 23.0275 C0.89 22.5475 13.07 15.2075 14.86 15.0275 C16.64 14.8475 27.93 20.4475 29.71 20.0275 C31.5 19.6075 42.79 8.50748 44.57 8.02748 C46.35 7.54748 57.65 12.5075 59.43 12.0275 C61.21 11.5475 72.5 0.447478 74.29 0.0274782 C76.07 -0.392522 87.36 4.12748 89.14 5.02748 C90.93 5.92748 103.11 14.4275 104 15.0275 L104 25.0275 L0 25.0275 L0 23.0275 Z" fill="url(#g13_u3f9)"/><path transform="matrix(1 0 0 1 1 16.5)" d="M-0.332283 22.4114 C-0.672549 22.5949 -0.799622 23.0195 -0.616107 23.3598 C-0.432593 23.7 -0.00798408 23.8271 0.332283 23.6436 L0 23.0275 L-0.332283 22.4114 Z M14.86 15.0275 L14.93 15.724 L14.9304 15.7239 L14.86 15.0275 Z M29.71 20.0275 L29.5501 19.346 L29.5492 19.3462 L29.71 20.0275 Z M74.29 0.0274782 L74.4499 0.70897 L74.4508 0.70877 L74.29 0.0274782 Z M89.14 5.02748 L88.8241 5.65217 L88.8256 5.65288 L89.14 5.02748 Z M103.609 15.6079 C103.929 15.824 104.364 15.7393 104.58 15.4188 C104.797 15.0982 104.712 14.6632 104.391 14.4471 L104 15.0275 L103.609 15.6079 Z M0 23.0275 L0.332283 23.6436 C0.778801 23.4028 4.09616 21.4196 7.4379 19.5238 C9.12518 18.5666 10.8331 17.623 12.2272 16.9089 C12.9251 16.5515 13.5359 16.2559 14.0219 16.0457 C14.5403 15.8215 14.8304 15.734 14.93 15.724 L14.86 15.0275 L14.79 14.331 C14.4421 14.366 13.96 14.5472 13.4662 14.7607 C12.94 14.9883 12.2987 15.2994 11.589 15.6629 C10.1681 16.3907 8.43982 17.3458 6.7471 18.3061 C3.32884 20.2453 0.111199 22.1722 -0.332283 22.4114 L0 23.0275 Z M14.86 15.0275 L14.9304 15.7239 C15.0044 15.7164 15.2556 15.7443 15.7474 15.882 C16.2032 16.0096 16.7769 16.2044 17.4386 16.4486 C18.7619 16.9368 20.3819 17.6011 22.0219 18.2662 C23.653 18.9276 25.3034 19.5895 26.6599 20.0595 C27.3373 20.2943 27.9576 20.4869 28.4748 20.6075 C28.7334 20.6679 28.9788 20.7132 29.2005 20.7352 C29.4125 20.7561 29.6498 20.7609 29.8708 20.7088 L29.71 20.0275 L29.5492 19.3462 C29.5535 19.3452 29.5393 19.3488 29.4994 19.3498 C29.4608 19.3507 29.4078 19.3488 29.3384 19.342 C29.1982 19.3281 29.0169 19.2964 28.7929 19.2441 C28.345 19.1397 27.7774 18.9651 27.1182 18.7367 C25.8016 18.2805 24.1845 17.6324 22.548 16.9688 C20.9206 16.3088 19.2731 15.6332 17.9232 15.1351 C17.2484 14.8862 16.6341 14.6763 16.1248 14.5338 C15.6516 14.4013 15.1606 14.2935 14.7896 14.331 L14.86 15.0275 Z M29.71 20.0275 L29.8699 20.709 C30.0846 20.6586 30.3058 20.5481 30.5016 20.4354 C30.71 20.3154 30.9441 20.1603 31.1957 19.981 C31.6995 19.6218 32.3094 19.1395 32.983 18.5821 C34.3314 17.4662 35.9752 16.0162 37.6072 14.5746 C39.2445 13.1283 40.8699 11.6904 42.1972 10.5835 C42.8613 10.0297 43.4414 9.56676 43.905 9.23018 C44.1371 9.06171 44.3318 8.93099 44.4877 8.83811 C44.5653 8.79185 44.6281 8.75815 44.677 8.73483 C44.7012 8.72331 44.7199 8.71533 44.7336 8.71001 C44.7475 8.70458 44.7534 8.70302 44.7523 8.70334 L44.57 8.02748 L44.3877 7.35162 C44.1808 7.40743 43.9653 7.51973 43.7712 7.63535 C43.5653 7.75801 43.3331 7.9154 43.0826 8.0972 C42.5812 8.46116 41.9732 8.94742 41.3006 9.50831 C39.9545 10.6309 38.3118 12.0842 36.6803 13.5254 C35.0436 14.9712 33.418 16.405 32.0904 17.5035 C31.4261 18.0532 30.8463 18.5108 30.3831 18.8409 C30.1512 19.0062 29.9575 19.1332 29.803 19.2222 C29.7261 19.2665 29.6646 19.298 29.6173 19.3194 C29.5676 19.3417 29.5472 19.3467 29.5501 19.346 L29.71 20.0275 Z M44.57 8.02748 L44.7523 8.70334 C44.7512 8.70363 44.7678 8.69928 44.8088 8.69666 C44.8488 8.69411 44.9027 8.69374 44.9726 8.69754 C45.1138 8.70522 45.2958 8.72848 45.52 8.76969 C45.9685 8.85214 46.5367 8.99709 47.1965 9.18949 C48.5152 9.57399 50.1332 10.128 51.7732 10.6897 C53.4032 11.248 55.0552 11.814 56.4115 12.2095 C57.0892 12.4071 57.7098 12.5671 58.2269 12.6622 C58.4855 12.7097 58.7305 12.7433 58.9513 12.7554 C59.1632 12.7669 59.3969 12.7614 59.6123 12.7033 L59.43 12.0275 L59.2477 11.3516 C59.2488 11.3513 59.2322 11.3557 59.1912 11.3583 C59.1512 11.3608 59.0973 11.3612 59.0274 11.3574 C58.8862 11.3497 58.7042 11.3265 58.48 11.2853 C58.0315 11.2028 57.4633 11.0579 56.8035 10.8655 C55.4848 10.481 53.8668 9.92694 52.2268 9.36524 C50.5968 8.80694 48.9448 8.24097 47.5885 7.84546 C46.9108 7.64787 46.2902 7.48782 45.7731 7.39276 C45.5145 7.34523 45.2695 7.31162 45.0487 7.29961 C44.8368 7.28808 44.6031 7.29354 44.3877 7.35162 L44.57 8.02748 Z M59.43 12.0275 L59.6123 12.7033 C59.8192 12.6475 60.0347 12.5352 60.2288 12.4196 C60.4347 12.2969 60.6669 12.1396 60.9174 11.9578 C61.4188 11.5938 62.0268 11.1075 62.6994 10.5466 C64.0455 9.4241 65.6882 7.97079 67.3197 6.5296 C68.9564 5.08375 70.582 3.65 71.9096 2.55146 C72.5739 2.00171 73.1537 1.54419 73.6169 1.21401 C73.8488 1.04872 74.0425 0.921773 74.197 0.832799 C74.2739 0.788503 74.3354 0.756919 74.3827 0.735598 C74.4324 0.713216 74.4528 0.708286 74.4499 0.70897 L74.29 0.0274782 L74.1301 -0.654014 C73.9154 -0.603634 73.6942 -0.493188 73.4984 -0.38043 C73.29 -0.26043 73.0559 -0.105362 72.8043 0.0739949 C72.3005 0.433113 71.6906 0.915435 71.017 1.47287 C69.6686 2.58871 68.0248 4.03871 66.3928 5.48036 C64.7555 6.92667 63.1301 8.3646 61.8028 9.47144 C61.1387 10.0252 60.5586 10.4882 60.095 10.8248 C59.8629 10.9932 59.6682 11.124 59.5123 11.2168 C59.4347 11.2631 59.3719 11.2968 59.323 11.3201 C59.2988 11.3316 59.2801 11.3396 59.2664 11.345 C59.2525 11.3504 59.2466 11.3519 59.2477 11.3516 L59.43 12.0275 Z M74.29 0.0274782 L74.4508 0.70877 C74.5181 0.692884 74.7593 0.688555 75.2445 0.77417 C75.694 0.853499 76.2626 0.992139 76.9201 1.17846 C78.2329 1.55048 79.8485 2.09769 81.4755 2.69022 C84.7402 3.8792 87.974 5.22234 88.8241 5.65217 L89.14 5.02748 L89.4559 4.40279 C88.526 3.93262 85.2248 2.56576 81.9545 1.37474 C80.314 0.777266 78.6621 0.216974 77.3018 -0.168503 C76.6227 -0.360932 76.0033 -0.513543 75.4878 -0.604526 C75.0078 -0.689224 74.5069 -0.742927 74.1292 -0.653813 L74.29 0.0274782 Z M89.14 5.02748 L88.8256 5.65288 C89.2265 5.8545 90.2821 6.52562 91.7052 7.46878 C93.1084 8.39875 94.8232 9.5621 96.5122 10.7177 C99.8794 13.0214 103.164 15.3079 103.609 15.6079 L104 15.0275 L104.391 14.4471 C103.946 14.147 100.696 11.8835 97.3028 9.56225 C95.6118 8.40536 93.8904 7.23746 92.4786 6.3018 C91.0867 5.37934 89.9484 4.65046 89.4544 4.40208 L89.14 5.02748 Z" fill="#2563eb"/><path transform="matrix(1 0 0 1 102.5 29)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#2563eb"/><path transform="matrix(1 0 0 1 102.5 29)" d="M5 2.5 L3.8 2.5 C3.8 3.21797 3.21797 3.8 2.5 3.8 L2.5 5 L2.5 6.2 C4.54345 6.2 6.2 4.54345 6.2 2.5 L5 2.5 Z M2.5 5 L2.5 3.8 C1.78203 3.8 1.2 3.21797 1.2 2.5 L0 2.5 L-1.2 2.5 C-1.2 4.54345 0.456546 6.2 2.5 6.2 L2.5 5 Z M0 2.5 L1.2 2.5 C1.2 1.78203 1.78203 1.2 2.5 1.2 L2.5 0 L2.5 -1.2 C0.456546 -1.2 -1.2 0.456546 -1.2 2.5 L0 2.5 Z M2.5 0 L2.5 1.2 C3.21797 1.2 3.8 1.78203 3.8 2.5 L5 2.5 L6.2 2.5 C6.2 0.456546 4.54345 -1.2 2.5 -1.2 L2.5 0 Z" fill="#ffffff"/></svg>
        <div style={{ width: "224px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/c1b9ac38b4d88317b1ed300762b915082a72b430.png') center / cover no-repeat" }} />
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>AWS</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>$1,212.48</p>
            </div>
          </div>
        </div>
      </div>
      <div data-fu="row" style={{ width: "1154px", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#def5ed", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0a7854" }}>LC</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Marketing</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Liam Chen</p>
            </div>
          </div>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>$6,000</p>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,900</p>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#16a34a" }}>$4,100</p>
        </div>
        <div style={{ width: "190px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>32%</p>
          </div>
        </div>
        <svg data-fu="plot" style={{ width: "150px", height: "55px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="150" height="55" viewBox="0 0 150 55" fill="none" overflow="visible"><defs><linearGradient id="g14_u3fr" gradientUnits="userSpaceOnUse" x1="52.00" y1="0.00" x2="52.00" y2="25.00"><stop offset="0" stopColor="#10b981" stopOpacity="0.16"/><stop offset="1" stopColor="#10b981" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 1 16.5)" d="M0 17.5929 C0.89 17.9129 13.07 23.3229 14.86 23.0029 C16.64 22.6829 27.93 12.6629 29.71 12.1829 C31.5 11.6929 42.79 15.2929 44.57 14.8829 C46.35 14.4829 57.65 5.7429 59.43 5.4129 C61.21 5.0929 72.5 9.8029 74.29 9.4729 C76.07 9.1529 87.36 0.162897 89.14 0.00289663 C90.93 -0.157103 103.11 6.3629 104 6.7629 L104 25.0029 L0 25.0029 L0 17.5929 Z" fill="url(#g14_u3fr)"/><path transform="matrix(1 0 0 1 1 16.5)" d="M0.236842 16.9342 C-0.126957 16.8034 -0.527912 16.9923 -0.658715 17.3561 C-0.789519 17.7199 -0.60064 18.1208 -0.236842 18.2516 L0 17.5929 L0.236842 16.9342 Z M14.86 23.0029 L14.9832 23.692 L14.9839 23.6919 L14.86 23.0029 Z M29.71 12.1829 L29.8923 12.8588 L29.8948 12.8581 L29.71 12.1829 Z M44.57 14.8829 L44.4165 14.1999 L44.4129 14.2008 L44.57 14.8829 Z M59.43 5.4129 L59.3061 4.72393 L59.3024 4.72463 L59.43 5.4129 Z M74.29 9.4729 L74.1661 8.78393 L74.1631 8.7845 L74.29 9.4729 Z M89.14 0.00289663 L89.0777 -0.694324 L89.0773 -0.694292 L89.14 0.00289663 Z M103.713 7.40138 C104.066 7.55986 104.48 7.40248 104.638 7.04985 C104.797 6.69723 104.64 6.2829 104.287 6.12442 L104 6.7629 L103.713 7.40138 Z M0 17.5929 L-0.236842 18.2516 C-0.0383318 18.323 0.855588 18.7063 2.17317 19.263 C3.46946 19.8107 5.13618 20.509 6.83244 21.1878 C8.52652 21.8657 10.26 22.5281 11.6876 23.0019 C12.4003 23.2385 13.0492 23.4323 13.5852 23.5572 C13.853 23.6196 14.1034 23.6674 14.326 23.6936 C14.5381 23.7186 14.7707 23.73 14.9832 23.692 L14.86 23.0029 L14.7368 22.3138 C14.7379 22.3136 14.733 22.3145 14.721 22.3154 C14.7092 22.3162 14.6925 22.3167 14.6704 22.3165 C14.6254 22.316 14.5658 22.3122 14.4898 22.3032 C14.3369 22.2852 14.1412 22.2492 13.9029 22.1937 C13.4267 22.0827 12.8234 21.9038 12.1286 21.6732 C10.7412 21.2127 9.03848 20.5626 7.35256 19.888 C5.66882 19.2143 4.01179 18.5201 2.71808 17.9734 C1.44566 17.4358 0.483332 17.0228 0.236842 16.9342 L0 17.5929 Z M14.86 23.0029 L14.9839 23.6919 C15.1971 23.6535 15.4185 23.5582 15.6153 23.4591 C15.8243 23.354 16.0588 23.2166 16.3106 23.0572 C16.8147 22.738 17.4247 22.3066 18.0981 21.8069 C19.4462 20.8065 21.0896 19.5011 22.7214 18.2002 C24.3585 16.895 25.9838 15.5944 27.3116 14.5891 C27.9758 14.0863 28.5565 13.6643 29.0212 13.3556 C29.2537 13.2011 29.4497 13.08 29.6077 12.9929 C29.7756 12.9002 29.8645 12.8663 29.8923 12.8588 L29.71 12.1829 L29.5277 11.507 C29.333 11.5595 29.1251 11.6601 28.9312 11.7671 C28.7274 11.8796 28.4965 12.0234 28.2465 12.1894 C27.7462 12.5218 27.1389 12.9639 26.4665 13.4729 C25.1212 14.4914 23.479 15.8058 21.8486 17.1056 C20.2129 18.4097 18.5888 19.6993 17.2638 20.6826 C16.6006 21.1748 16.0226 21.5825 15.5616 21.8744 C15.3309 22.0205 15.1386 22.1317 14.9858 22.2087 C14.9097 22.247 14.849 22.274 14.8025 22.2919 C14.7539 22.3106 14.7337 22.3144 14.7361 22.3139 L14.86 23.0029 Z M29.71 12.1829 L29.8948 12.8581 C29.9782 12.8352 30.2309 12.8203 30.7164 12.8712 C31.1699 12.9188 31.7415 13.0132 32.4021 13.1426 C33.7225 13.4014 35.3419 13.7888 36.9798 14.1834 C38.6092 14.576 40.2575 14.9758 41.6092 15.251 C42.2849 15.3886 42.9001 15.4979 43.41 15.5595 C43.8891 15.6173 44.372 15.6468 44.7271 15.565 L44.57 14.8829 L44.4129 14.2008 C44.323 14.2214 44.0637 14.2282 43.5777 14.1695 C43.1225 14.1146 42.5496 14.0138 41.8886 13.8792 C40.5669 13.61 38.9471 13.2173 37.3077 12.8224 C35.6769 12.4295 34.0269 12.0344 32.6713 11.7688 C31.994 11.636 31.376 11.5328 30.8625 11.4789 C30.381 11.4283 29.8893 11.4081 29.5252 11.5077 L29.71 12.1829 Z M44.57 14.8829 L44.7235 15.5659 C45.0653 15.489 45.525 15.2523 45.9958 14.9813 C46.4965 14.6931 47.1044 14.3087 47.7775 13.8655 C49.1243 12.9786 50.7679 11.8322 52.3999 10.6962 C54.0372 9.55644 55.663 8.42702 56.9898 7.56193 C57.6537 7.12907 58.2333 6.76866 58.6964 6.50838 C59.1926 6.2295 59.4665 6.11805 59.5576 6.10117 L59.43 5.4129 L59.3024 4.72463 C58.9485 4.79024 58.4799 5.02411 58.0105 5.28792 C57.508 5.57034 56.8988 5.95 56.2252 6.38917 C54.877 7.26814 53.2328 8.4106 51.6001 9.54713 C49.9621 10.6873 48.3357 11.8216 47.0075 12.6962 C46.3431 13.1338 45.7622 13.5004 45.2974 13.768 C44.8025 14.0529 44.5197 14.1768 44.4165 14.1999 L44.57 14.8829 Z M59.43 5.4129 L59.5539 6.10185 C59.6293 6.08829 59.8787 6.09637 60.3675 6.19514 C60.8214 6.28688 61.3935 6.43697 62.0544 6.63047 C63.3753 7.01724 64.995 7.56075 66.6337 8.11032 C68.264 8.65707 69.9132 9.20987 71.2673 9.60475 C71.944 9.80207 72.561 9.96413 73.0734 10.0665 C73.5512 10.1619 74.0456 10.2298 74.4169 10.1613 L74.29 9.4729 L74.1631 8.7845 C74.0869 8.79854 73.8369 8.79135 73.3477 8.69363 C72.8932 8.60283 72.3206 8.45357 71.6592 8.26073 C70.3375 7.8753 68.7173 7.33247 67.0788 6.78298 C65.4488 6.23629 63.8004 5.68293 62.4478 5.28688 C61.7719 5.08898 61.156 4.92618 60.6448 4.82288 C60.1684 4.72661 59.6757 4.6575 59.3061 4.72394 L59.43 5.4129 Z M74.29 9.4729 L74.4139 10.1619 C74.6144 10.1258 74.8276 10.0417 75.0238 9.95118 C75.2303 9.8559 75.4633 9.73193 75.7144 9.58789 C76.217 9.29961 76.8261 8.91155 77.499 8.46329 C78.8455 7.56634 80.4889 6.40071 82.1188 5.24969 C83.7548 4.09432 85.3775 2.95349 86.701 2.09168 C87.3635 1.66033 87.9394 1.30652 88.3976 1.05792 C88.627 0.933494 88.8168 0.840976 88.9667 0.779095 C89.0411 0.748329 89.0997 0.727652 89.1439 0.714641 C89.1901 0.701016 89.2075 0.699651 89.2027 0.700086 L89.14 0.00289663 L89.0773 -0.694292 C88.859 -0.674664 88.632 -0.597413 88.4322 -0.514894 C88.2203 -0.427351 87.9833 -0.310006 87.7301 -0.172677 C87.2233 0.102242 86.6112 0.479528 85.9371 0.918484 C84.5875 1.7973 82.9427 2.95397 81.3112 4.1061 C79.6736 5.26259 78.0495 6.41445 76.7229 7.29813 C76.0592 7.74018 75.4803 8.10822 75.0179 8.37345 C74.7865 8.50617 74.5926 8.60831 74.4373 8.67995 C74.2717 8.75635 74.1881 8.77999 74.1661 8.78394 L74.29 9.4729 Z M89.14 0.00289663 L89.2023 0.700117 C89.2006 0.700273 89.2198 0.698722 89.267 0.703511 C89.3125 0.708113 89.3727 0.717405 89.4495 0.733378 C89.604 0.765511 89.8011 0.819583 90.0404 0.897027 C90.5187 1.05178 91.1237 1.28608 91.8193 1.58015 C93.2084 2.16739 94.9126 2.973 96.5989 3.80121 C98.2833 4.62843 99.9408 5.47368 101.235 6.13809 C102.509 6.79249 103.468 7.29143 103.713 7.40138 L104 6.7629 L104.287 6.12442 C104.087 6.03437 103.19 5.5683 101.874 4.8927 C100.578 4.22712 98.9117 3.37736 97.2161 2.54458 C95.5224 1.71279 93.7903 0.893408 92.3644 0.290641 C91.6526 -0.01029 91.0053 -0.262232 90.4714 -0.434984 C90.2047 -0.52129 89.9557 -0.591281 89.7347 -0.637272 C89.525 -0.68089 89.2926 -0.713534 89.0777 -0.694324 L89.14 0.00289663 Z" fill="#10b981"/><path transform="matrix(1 0 0 1 102.5 20.765)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#10b981"/><path transform="matrix(1 0 0 1 102.5 20.765)" d="M5 2.5 L3.8 2.5 C3.8 3.21797 3.21797 3.8 2.5 3.8 L2.5 5 L2.5 6.2 C4.54345 6.2 6.2 4.54345 6.2 2.5 L5 2.5 Z M2.5 5 L2.5 3.8 C1.78203 3.8 1.2 3.21797 1.2 2.5 L0 2.5 L-1.2 2.5 C-1.2 4.54345 0.456546 6.2 2.5 6.2 L2.5 5 Z M0 2.5 L1.2 2.5 C1.2 1.78203 1.78203 1.2 2.5 1.2 L2.5 0 L2.5 -1.2 C0.456546 -1.2 -1.2 0.456546 -1.2 2.5 L0 2.5 Z M2.5 0 L2.5 1.2 C3.21797 1.2 3.8 1.78203 3.8 2.5 L5 2.5 L6.2 2.5 C6.2 0.456546 4.54345 -1.2 2.5 -1.2 L2.5 0 Z" fill="#ffffff"/></svg>
        <div style={{ width: "224px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, borderRadius: "4.7px", background: "#ff7a59", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 600, color: "#ffffff" }}>H</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>HubSpot</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>$890.00</p>
            </div>
          </div>
        </div>
      </div>
      <div data-fu="row" style={{ width: "1154px", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#ede8ff", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#513ca4" }}>MP</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Design</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Maya Patel</p>
            </div>
          </div>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>$4,000</p>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,400</p>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#16a34a" }}>$2,600</p>
        </div>
        <div style={{ width: "190px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8c70fc 0%, #7c5cfc 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8c70fc 0%, #7c5cfc 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8c70fc 0%, #7c5cfc 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8c70fc 0%, #7c5cfc 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8c70fc 0%, #7c5cfc 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8c70fc 0%, #7c5cfc 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8c70fc 0%, #7c5cfc 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(124, 92, 252, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(124, 92, 252, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(124, 92, 252, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(124, 92, 252, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(124, 92, 252, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(124, 92, 252, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(124, 92, 252, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(124, 92, 252, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(124, 92, 252, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(124, 92, 252, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(124, 92, 252, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(124, 92, 252, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(124, 92, 252, 0.16)" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>35%</p>
          </div>
        </div>
        <svg data-fu="plot" style={{ width: "150px", height: "55px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="150" height="55" viewBox="0 0 150 55" fill="none" overflow="visible"><defs><linearGradient id="g15_u3g8" gradientUnits="userSpaceOnUse" x1="52.00" y1="0.00" x2="52.00" y2="25.01"><stop offset="0" stopColor="#7c5cfc" stopOpacity="0.16"/><stop offset="1" stopColor="#7c5cfc" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 1 16.5)" d="M0 23.005 C0.89 22.545 13.07 15.565 14.86 15.335 C16.64 15.105 27.93 19.745 29.71 19.175 C31.5 18.595 42.79 6.215 44.57 5.755 C46.35 5.295 57.65 11.855 59.43 11.505 C61.21 11.165 72.5 0.235001 74.29 0.00500056 C76.07 -0.224999 87.36 7.555 89.14 7.675 C90.93 7.785 103.11 2.265 104 1.925 L104 25.005 L0 25.005 L0 23.005 Z" fill="url(#g15_u3g8)"/><path transform="matrix(1 0 0 1 1 16.5)" d="M-0.321406 22.3832 C-0.664845 22.5607 -0.799358 22.983 -0.621851 23.3264 C-0.444343 23.6698 -0.0220327 23.8044 0.321406 23.6269 L0 23.005 L-0.321406 22.3832 Z M14.86 15.335 L14.9492 16.0293 L14.9497 16.0292 L14.86 15.335 Z M29.71 19.175 L29.9235 19.8417 L29.9258 19.8409 L29.71 19.175 Z M59.43 11.505 L59.2987 10.8174 L59.2949 10.8182 L59.43 11.505 Z M74.29 0.00500056 L74.3792 0.699293 L74.3797 0.699229 L74.29 0.00500056 Z M89.14 7.675 L89.0929 8.37343 L89.0971 8.37368 L89.14 7.675 Z M104.25 2.57891 C104.611 2.44094 104.792 2.03634 104.654 1.67519 C104.516 1.31405 104.111 1.13313 103.75 1.27109 L104 1.925 L104.25 2.57891 Z M0 23.005 L0.321406 23.6269 C0.767858 23.3961 4.08098 21.5115 7.42596 19.6992 C9.11345 18.785 10.8223 17.8816 12.2177 17.1936 C12.916 16.8493 13.5284 16.5627 14.0164 16.3566 C14.5327 16.1385 14.8343 16.0441 14.9492 16.0293 L14.86 15.335 L14.7708 14.6407 C14.4382 14.6834 13.9676 14.8574 13.4717 15.0669 C12.9476 15.2883 12.3077 15.5883 11.5986 15.9379 C10.179 16.6378 8.45155 17.5513 6.75904 18.4683 C3.34402 20.3185 0.122142 22.1539 -0.321406 22.3832 L0 23.005 Z M14.86 15.335 L14.9497 16.0292 C15.0382 16.0178 15.2996 16.0365 15.789 16.1417 C16.2463 16.24 16.821 16.3945 17.4831 16.5896 C18.8077 16.9798 20.4277 17.5159 22.069 18.0483 C23.7008 18.5777 25.3526 19.1031 26.7111 19.4601 C27.3896 19.6384 28.0116 19.7793 28.5307 19.8566 C29.0105 19.928 29.5296 19.9678 29.9235 19.8417 L29.71 19.175 L29.4965 18.5083 C29.4972 18.5081 29.4809 18.5132 29.4407 18.5175 C29.4016 18.5217 29.3486 18.5244 29.2796 18.5234 C29.1402 18.5213 28.9599 18.5051 28.737 18.4719 C28.2911 18.4054 27.7251 18.2791 27.067 18.1061 C25.7524 17.7606 24.1367 17.2473 22.501 16.7167 C20.8748 16.1891 19.2273 15.6439 17.8788 15.2467 C17.2043 15.048 16.591 14.8822 16.0833 14.773 C15.6075 14.6707 15.1268 14.5947 14.7703 14.6408 L14.86 15.335 Z M29.71 19.175 L29.9258 19.8409 C30.1352 19.7731 30.3511 19.6443 30.5443 19.5137 C30.7499 19.3747 30.9819 19.1974 31.2323 18.9928 C31.7336 18.5833 32.3416 18.0381 33.0145 17.4097 C34.3611 16.1522 36.0039 14.528 37.6354 12.9183 C39.2719 11.3037 40.8973 9.70363 42.2238 8.47865 C42.8877 7.86555 43.467 7.35555 43.9295 6.98784 C44.1611 6.8037 44.3541 6.66271 44.5075 6.56429 C44.6753 6.4566 44.7464 6.4324 44.7451 6.43274 L44.57 5.755 L44.3949 5.07727 C44.1711 5.1351 43.9454 5.26153 43.7514 5.38601 C43.543 5.51975 43.3092 5.69247 43.0582 5.892 C42.5556 6.29164 41.9468 6.82883 41.274 7.45011 C39.9271 8.69387 38.2843 10.3113 36.6521 11.9217 C35.0149 13.537 33.3882 15.1453 32.059 16.3865 C31.3939 17.0075 30.8123 17.5282 30.3466 17.9086 C30.1135 18.099 29.9176 18.2475 29.7603 18.3538 C29.682 18.4068 29.6185 18.4456 29.569 18.4727 C29.5171 18.5011 29.4939 18.5092 29.4942 18.5091 L29.71 19.175 Z M44.57 5.755 L44.7451 6.43274 C44.7313 6.4363 44.7778 6.4239 44.9236 6.44218 C45.0584 6.45908 45.236 6.49657 45.4585 6.55862 C45.9033 6.68268 46.469 6.88826 47.1284 7.15687 C48.4454 7.69335 50.0626 8.45072 51.702 9.22213 C53.3311 9.98877 54.9826 10.7695 56.3377 11.3355 C57.0147 11.6182 57.635 11.8547 58.1521 12.01 C58.4106 12.0876 58.6567 12.149 58.8797 12.1844 C59.0916 12.218 59.335 12.2371 59.5651 12.1918 L59.43 11.505 L59.2949 10.8182 C59.3025 10.8167 59.249 10.8255 59.099 10.8017 C58.96 10.7796 58.7791 10.7365 58.5548 10.6691 C58.1063 10.5345 57.5378 10.3195 56.8773 10.0436 C55.5574 9.49238 53.9389 8.72748 52.298 7.95537 C50.6674 7.18804 49.0146 6.41353 47.6566 5.86032 C46.9785 5.58408 46.3555 5.35537 45.8346 5.21009 C45.5743 5.13748 45.3249 5.08153 45.0978 5.05305 C44.8815 5.02594 44.6311 5.0162 44.3949 5.07727 L44.57 5.755 Z M59.43 11.505 L59.5613 12.1926 C59.7832 12.1502 60.0097 12.0439 60.206 11.9367 C60.4159 11.8221 60.651 11.6726 60.9028 11.4995 C61.407 11.1527 62.017 10.6842 62.69 10.1423 C64.0373 9.05773 65.6811 7.64392 67.312 6.24507 C68.949 4.84096 70.573 3.45179 71.8986 2.3993 C72.5621 1.87245 73.139 1.43948 73.5982 1.1341 C73.8282 0.981171 74.0176 0.86761 74.1663 0.791583 C74.3299 0.707948 74.391 0.69778 74.3792 0.699293 L74.29 0.00500056 L74.2008 -0.689291 C73.9653 -0.659029 73.7284 -0.556853 73.529 -0.454946 C73.3148 -0.345431 73.0765 -0.200252 72.8229 -0.0316421 C72.3151 0.306073 71.7024 0.767393 71.028 1.30288 C69.6776 2.37509 68.0323 3.78279 66.4005 5.18243 C64.7626 6.58733 63.1383 7.98415 61.8121 9.05176 C61.1485 9.586 60.5705 10.0289 60.1095 10.3459 C59.8787 10.5046 59.687 10.625 59.5351 10.708 C59.4595 10.7493 59.3999 10.7779 59.355 10.7965 C59.3077 10.8163 59.2911 10.8189 59.2987 10.8174 L59.43 11.505 Z M74.29 0.00500056 L74.3797 0.699229 C74.3632 0.701358 74.4122 0.694583 74.5638 0.73176 C74.7026 0.765825 74.8838 0.825565 75.1086 0.914501 C75.5576 1.09219 76.1265 1.3647 76.7866 1.70984 C78.1045 2.39902 79.7231 3.34456 81.3588 4.31136 C82.9865 5.27337 84.6319 6.25694 85.9791 7.00548 C86.6525 7.3797 87.2638 7.70215 87.7694 7.93658 C88.022 8.05373 88.2577 8.15334 88.4675 8.22703 C88.667 8.29705 88.8864 8.35949 89.0929 8.37341 L89.14 7.675 L89.1871 6.97659 C89.1873 6.9766 89.1813 6.97617 89.168 6.9739 C89.155 6.97167 89.1372 6.96802 89.1141 6.96232 C89.0674 6.95074 89.0069 6.93262 88.9314 6.90609 C88.7794 6.85275 88.5883 6.77312 88.3584 6.6665 C87.8988 6.4534 87.3221 6.15015 86.6591 5.78171 C85.3331 5.04494 83.711 4.07538 82.0712 3.10614 C80.4394 2.14169 78.7905 1.17785 77.4353 0.469221 C76.7588 0.115454 76.1398 -0.18305 75.6237 -0.387273 C75.3659 -0.489294 75.1203 -0.573236 74.8973 -0.627926 C74.6871 -0.679503 74.4393 -0.720107 74.2003 -0.689228 L74.29 0.00500056 Z M89.14 7.675 L89.0971 8.37368 C89.4543 8.39563 89.948 8.28597 90.4439 8.14775 C90.9739 8.00002 91.6183 7.78558 92.3292 7.52931 C93.7529 7.01613 95.4835 6.32064 97.1768 5.61488 C98.8719 4.90839 100.538 4.18823 101.834 3.62419 C103.147 3.05252 104.047 2.65632 104.25 2.57891 L104 1.925 L103.75 1.27109 C103.508 1.36368 102.551 1.78499 101.275 2.3405 C99.9811 2.90364 98.3231 3.62037 96.6382 4.32263 C94.9515 5.02561 93.2458 5.71075 91.8545 6.21226 C91.158 6.46332 90.5502 6.66475 90.068 6.79916 C89.5516 6.94309 89.2732 6.98187 89.1829 6.97632 L89.14 7.675 Z" fill="#7c5cfc"/><path transform="matrix(1 0 0 1 102.5 15.917)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#7c5cfc"/><path transform="matrix(1 0 0 1 102.5 15.917)" d="M5 2.5 L3.8 2.5 C3.8 3.21797 3.21797 3.8 2.5 3.8 L2.5 5 L2.5 6.2 C4.54345 6.2 6.2 4.54345 6.2 2.5 L5 2.5 Z M2.5 5 L2.5 3.8 C1.78203 3.8 1.2 3.21797 1.2 2.5 L0 2.5 L-1.2 2.5 C-1.2 4.54345 0.456546 6.2 2.5 6.2 L2.5 5 Z M0 2.5 L1.2 2.5 C1.2 1.78203 1.78203 1.2 2.5 1.2 L2.5 0 L2.5 -1.2 C0.456546 -1.2 -1.2 0.456546 -1.2 2.5 L0 2.5 Z M2.5 0 L2.5 1.2 C3.21797 1.2 3.8 1.78203 3.8 2.5 L5 2.5 L6.2 2.5 C6.2 0.456546 4.54345 -1.2 2.5 -1.2 L2.5 0 Z" fill="#ffffff"/></svg>
        <div style={{ width: "224px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Figma</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>$701.10</p>
            </div>
          </div>
        </div>
      </div>
      <div data-fu="row" style={{ width: "1154px", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#fef1dd", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#9f6707" }}>NK</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Sales</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Noah Kim</p>
            </div>
          </div>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>$2,500</p>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$650</p>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#16a34a" }}>$1,850</p>
        </div>
        <div style={{ width: "190px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #f6aa28 0%, #f59e0b 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #f6aa28 0%, #f59e0b 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #f6aa28 0%, #f59e0b 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #f6aa28 0%, #f59e0b 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #f6aa28 0%, #f59e0b 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(245, 158, 11, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(245, 158, 11, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(245, 158, 11, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(245, 158, 11, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(245, 158, 11, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(245, 158, 11, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(245, 158, 11, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(245, 158, 11, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(245, 158, 11, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(245, 158, 11, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(245, 158, 11, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(245, 158, 11, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(245, 158, 11, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(245, 158, 11, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(245, 158, 11, 0.16)" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>26%</p>
          </div>
        </div>
        <svg data-fu="plot" style={{ width: "150px", height: "55px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="150" height="55" viewBox="0 0 150 55" fill="none" overflow="visible"><defs><linearGradient id="g16_u3gp" gradientUnits="userSpaceOnUse" x1="52.00" y1="0.00" x2="52.00" y2="25.03"><stop offset="0" stopColor="#f59e0b" stopOpacity="0.16"/><stop offset="1" stopColor="#f59e0b" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 1 16.5)" d="M0 19.7354 C0.89 19.2454 13.07 11.3254 14.86 11.5254 C16.64 11.7254 27.93 23.2254 29.71 23.0254 C31.5 22.8254 42.79 8.73545 44.57 8.23545 C46.35 7.74545 57.65 14.1254 59.43 14.8154 C61.21 15.5054 72.5 20.6254 74.29 19.7354 C76.07 18.8554 87.36 0.615446 89.14 0.0254456 C90.93 -0.564554 103.11 9.29545 104 9.88545 L104 25.0254 L0 25.0254 L0 19.7354 Z" fill="url(#g16_u3gp)"/><path transform="matrix(1 0 0 1 1 16.5)" d="M-0.337608 19.1222 C-0.676272 19.3087 -0.799661 19.7344 -0.613206 20.0731 C-0.42675 20.4117 -0.00105651 20.5351 0.337608 20.3486 L0 19.7354 L-0.337608 19.1222 Z M14.86 11.5254 L14.9382 10.8298 L14.9377 10.8298 L14.86 11.5254 Z M29.71 23.0254 L29.6323 22.3298 L29.6318 22.3298 L29.71 23.0254 Z M44.57 8.23545 L44.3842 7.56054 L44.3807 7.56153 L44.57 8.23545 Z M74.29 19.7354 L73.9798 19.1079 L73.9784 19.1086 L74.29 19.7354 Z M89.14 0.0254456 L88.9209 -0.639373 L88.9198 -0.639005 L89.14 0.0254456 Z M103.613 10.4689 C103.935 10.6825 104.37 10.5944 104.583 10.2722 C104.797 9.95 104.709 9.51561 104.387 9.302 L104 9.88545 L103.613 10.4689 Z M0 19.7354 L0.337608 20.3486 C0.582481 20.2138 1.54252 19.6066 2.81626 18.8116 C4.10999 18.0041 5.76718 16.9774 7.45111 15.9729 C9.13729 14.967 10.8402 13.9895 12.2276 13.2778 C12.9227 12.9213 13.525 12.6384 13.9995 12.4524 C14.2371 12.3593 14.43 12.2955 14.5784 12.2582 C14.7409 12.2174 14.796 12.2227 14.7823 12.2211 L14.86 11.5254 L14.9377 10.8298 C14.7002 10.8032 14.4505 10.8469 14.2374 10.9004 C14.0104 10.9574 13.7571 11.0437 13.4886 11.149 C12.9509 11.3597 12.3011 11.6667 11.5886 12.0321 C10.161 12.7645 8.42771 13.7601 6.73389 14.7705 C5.03782 15.7823 3.37126 16.8149 2.07499 17.624 C0.758728 18.4455 -0.137481 19.0121 -0.337608 19.1222 L0 19.7354 Z M14.86 11.5254 L14.7818 12.2211 C14.7584 12.2184 14.8115 12.2234 14.9747 12.3093 C15.1211 12.3863 15.309 12.5029 15.5384 12.6612 C15.9962 12.9773 16.572 13.4272 17.2354 13.9747 C18.561 15.0688 20.1834 16.5087 21.8226 17.951 C23.4539 19.3863 25.1019 20.8241 26.4558 21.8909 C27.1314 22.4232 27.7506 22.8766 28.2681 23.1938 C28.5262 23.3519 28.776 23.4868 29.0066 23.5802 C29.2174 23.6656 29.4992 23.7535 29.7882 23.7211 L29.71 23.0254 L29.6318 22.3298 C29.6983 22.3224 29.6833 22.3439 29.5323 22.2827 C29.4011 22.2295 29.2241 22.1377 28.9996 22.0001 C28.5521 21.7258 27.9833 21.3121 27.3223 20.7912 C26.0031 19.7518 24.3836 18.3395 22.7474 16.8999 C21.119 15.4672 19.474 14.0071 18.1265 12.895 C17.4533 12.3393 16.8412 11.8595 16.3339 11.5092 C16.0807 11.3344 15.8418 11.1835 15.6264 11.0702 C15.4278 10.9657 15.1841 10.8575 14.9382 10.8298 L14.86 11.5254 Z M29.71 23.0254 L29.7877 23.7211 C30.0661 23.69 30.3285 23.5482 30.5254 23.4242 C30.7444 23.2862 30.9854 23.1022 31.2392 22.8894 C31.7481 22.4627 32.3611 21.8755 33.0352 21.1919 C34.3855 19.8226 36.0303 18.0155 37.6626 16.2128 C39.3007 14.4037 40.9262 12.5989 42.2542 11.2136 C42.9187 10.5204 43.4986 9.94304 43.9617 9.52703 C44.1936 9.31862 44.3866 9.15957 44.5394 9.04913 C44.7093 8.92639 44.7738 8.90528 44.7593 8.90936 L44.57 8.23545 L44.3807 7.56153 C44.1437 7.62812 43.9114 7.77567 43.7195 7.91436 C43.5105 8.06535 43.2766 8.26048 43.026 8.48558 C42.524 8.9366 41.9158 9.54358 41.2436 10.2448 C39.8982 11.6483 38.2555 13.4722 36.6249 15.2731 C34.9884 17.0804 33.3639 18.8646 32.0383 20.209 C31.3744 20.8822 30.7978 21.4325 30.3397 21.8166 C30.1099 22.0093 29.9231 22.149 29.7792 22.2396 C29.6133 22.3441 29.5776 22.3359 29.6323 22.3298 L29.71 23.0254 Z M44.57 8.23545 L44.7558 8.91034 C44.7429 8.91389 44.7895 8.90084 44.9338 8.91679 C45.0678 8.93157 45.2445 8.96637 45.466 9.02551 C45.9088 9.14373 46.473 9.3435 47.1304 9.60891 C48.4424 10.1386 50.058 10.902 51.6893 11.7102 C53.3183 12.5173 54.9472 13.361 56.2875 14.0499 C57.6034 14.7263 58.688 15.2786 59.177 15.4681 L59.43 14.8154 L59.683 14.1628 C59.282 14.0073 58.2866 13.5033 56.9275 12.8048 C55.5928 12.1187 53.9517 11.2686 52.3107 10.4557 C50.672 9.64386 49.0176 8.86106 47.6546 8.31073 C46.9745 8.03615 46.3499 7.81247 45.8271 7.67289 C45.5658 7.60312 45.3155 7.55042 45.0875 7.52524 C44.8699 7.50122 44.6196 7.49575 44.3842 7.56055 L44.57 8.23545 Z M59.43 14.8154 L59.177 15.4681 C59.6095 15.6358 60.627 16.0759 61.9793 16.6455 C63.3185 17.2097 64.9606 17.8899 66.6054 18.5214 C68.2465 19.1515 69.9068 19.7395 71.2788 20.1144 C71.9631 20.3014 72.5962 20.4412 73.1298 20.5032 C73.6206 20.5602 74.1779 20.5729 74.6016 20.3622 L74.29 19.7354 L73.9784 19.1086 C73.9832 19.1062 73.9381 19.1275 73.8045 19.1358 C73.6777 19.1436 73.5078 19.1377 73.2914 19.1125 C72.8579 19.0622 72.3015 18.9426 71.6478 18.764 C70.3438 18.4076 68.7348 17.8394 67.1071 17.2145 C65.4832 16.591 63.8572 15.9175 62.5229 15.3554 C61.2017 14.7988 60.1405 14.3401 59.683 14.1628 L59.43 14.8154 Z M74.29 19.7354 L74.6002 20.3629 C74.8237 20.2525 75.0416 20.0557 75.2271 19.8689 C75.4293 19.6655 75.6579 19.406 75.9058 19.1059 C76.4025 18.5047 77.0066 17.7036 77.6776 16.7784 C79.0204 14.9268 80.6602 12.5371 82.2915 10.1688 C83.9268 7.79468 85.5536 5.44205 86.8818 3.6466 C87.5467 2.74779 88.1281 2.00049 88.5929 1.46404 C88.826 1.19504 89.0199 0.990586 89.1731 0.849813 C89.3495 0.687675 89.403 0.675707 89.3602 0.689896 L89.14 0.0254456 L88.9198 -0.639005 C88.6544 -0.551065 88.4112 -0.351393 88.2258 -0.181095 C88.0172 0.010569 87.7843 0.259352 87.5348 0.547283 C87.0345 1.1247 86.428 1.90607 85.7563 2.81398 C84.4114 4.63197 82.7707 7.00496 81.1385 9.37462 C79.5023 11.75 77.8746 14.1222 76.5443 15.9565 C75.8787 16.8743 75.2949 17.6472 74.8265 18.2143 C74.5918 18.4983 74.3936 18.7215 74.234 18.8822 C74.0577 19.0596 73.9788 19.1084 73.9798 19.1079 L74.29 19.7354 Z M89.14 0.0254456 L89.3591 0.690263 C89.2957 0.711168 89.3022 0.686448 89.4464 0.717139 C89.5741 0.744306 89.7518 0.80224 89.983 0.900118 C90.4439 1.09529 91.0371 1.41462 91.7298 1.83329 C93.1109 2.66793 94.8095 3.84925 96.495 5.07852 C98.1775 6.30552 99.8336 7.57045 101.127 8.56737 C102.396 9.5454 103.363 10.303 103.613 10.4689 L104 9.88545 L104.387 9.302 C104.192 9.17288 103.303 8.47675 101.982 7.45852 C100.685 6.45919 99.0175 5.18537 97.32 3.94737 C95.6255 2.71164 93.8879 1.50171 92.4539 0.635104 C91.7392 0.203146 91.0801 -0.155646 90.5289 -0.389071 C90.2539 -0.50549 89.9856 -0.599469 89.7378 -0.652204 C89.5065 -0.701416 89.208 -0.734027 88.9209 -0.639372 L89.14 0.0254456 Z" fill="#f59e0b"/><path transform="matrix(1 0 0 1 102.5 23.857)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#f59e0b"/><path transform="matrix(1 0 0 1 102.5 23.857)" d="M5 2.5 L3.8 2.5 C3.8 3.21797 3.21797 3.8 2.5 3.8 L2.5 5 L2.5 6.2 C4.54345 6.2 6.2 4.54345 6.2 2.5 L5 2.5 Z M2.5 5 L2.5 3.8 C1.78203 3.8 1.2 3.21797 1.2 2.5 L0 2.5 L-1.2 2.5 C-1.2 4.54345 0.456546 6.2 2.5 6.2 L2.5 5 Z M0 2.5 L1.2 2.5 C1.2 1.78203 1.78203 1.2 2.5 1.2 L2.5 0 L2.5 -1.2 C0.456546 -1.2 -1.2 0.456546 -1.2 2.5 L0 2.5 Z M2.5 0 L2.5 1.2 C3.21797 1.2 3.8 1.78203 3.8 2.5 L5 2.5 L6.2 2.5 C6.2 0.456546 4.54345 -1.2 2.5 -1.2 L2.5 0 Z" fill="#ffffff"/></svg>
        <div style={{ width: "224px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, borderRadius: "4.7px", background: "#0a3b78", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 600, color: "#ffffff" }}>D</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Delta</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>$612.00</p>
            </div>
          </div>
        </div>
      </div>
      <div data-fu="row" style={{ width: "1154px", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#ddf2fc", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#096b97" }}>LM</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Operations</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Lucas Martin</p>
            </div>
          </div>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>$1,500</p>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$230</p>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#16a34a" }}>$1,270</p>
        </div>
        <div style={{ width: "190px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>15%</p>
          </div>
        </div>
        <svg data-fu="plot" style={{ width: "150px", height: "55px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="150" height="55" viewBox="0 0 150 55" fill="none" overflow="visible"><defs><linearGradient id="g17_u3h8" gradientUnits="userSpaceOnUse" x1="52.00" y1="0.00" x2="52.00" y2="25.00"><stop offset="0" stopColor="#0ea5e9" stopOpacity="0.16"/><stop offset="1" stopColor="#0ea5e9" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 1 16.5)" d="M0 13.8042 C0.89 14.3542 13.07 23.5542 14.86 23.0042 C16.64 22.4542 27.93 5.43424 29.71 4.60424 C31.5 3.77424 42.79 8.37424 44.57 9.20424 C46.35 10.0342 57.65 18.9542 59.43 18.4042 C61.21 17.8542 72.5 0.284243 74.29 0.00424297 C76.07 -0.275757 87.36 13.3942 89.14 13.8042 C90.93 14.2142 103.11 7.31424 104 6.90424 L104 25.0042 L0 25.0042 L0 13.8042 Z" fill="url(#g17_u3h8)"/><path transform="matrix(1 0 0 1 1 16.5)" d="M0.367987 13.2088 C0.0391181 13.0055 -0.392237 13.1074 -0.595471 13.4363 C-0.798704 13.7651 -0.696857 14.1965 -0.367987 14.3997 L0 13.8042 L0.367987 13.2088 Z M14.86 23.0042 L15.0656 23.6734 L15.0667 23.673 L14.86 23.0042 Z M29.71 4.60424 L29.4155 3.96919 L29.4142 3.96982 L29.71 4.60424 Z M74.29 0.00424297 L74.3982 0.695833 L74.3988 0.69574 L74.29 0.00424297 Z M89.14 13.8042 L88.9829 14.4864 L88.9837 14.4866 L89.14 13.8042 Z M104.293 7.54002 C104.644 7.37827 104.798 6.96249 104.636 6.61136 C104.474 6.26022 104.058 6.10671 103.707 6.26846 L104 6.90424 L104.293 7.54002 Z M0 13.8042 L-0.367987 14.3997 C-0.173249 14.5201 0.715775 15.1694 2.03694 16.1194 C3.33351 17.0518 5.00116 18.2403 6.6987 19.3955 C8.39321 20.5485 10.1307 21.6774 11.5643 22.4858 C12.279 22.8889 12.9371 23.2232 13.4868 23.4404 C13.7611 23.5488 14.0271 23.6356 14.2715 23.6842 C14.5 23.7296 14.7888 23.7584 15.0656 23.6734 L14.86 23.0042 L14.6544 22.3351 C14.7075 22.3188 14.6913 22.3402 14.5443 22.311 C14.4132 22.285 14.2332 22.23 14.0013 22.1384 C13.5388 21.9556 12.9447 21.6571 12.252 21.2664 C10.8706 20.4873 9.17179 19.385 7.4863 18.238 C5.80384 17.0931 4.14774 15.9129 2.85431 14.9828 C1.58548 14.0704 0.618249 13.3634 0.367987 13.2088 L0 13.8042 Z M14.86 23.0042 L15.0667 23.673 C15.3265 23.5928 15.5685 23.4083 15.7561 23.2475 C15.9655 23.0681 16.1991 22.8353 16.4491 22.5661 C16.9503 22.0263 17.5576 21.2964 18.2295 20.4488 C19.5749 18.7516 21.2161 16.5365 22.8482 14.3249 C24.4846 12.1076 26.112 9.89382 27.4419 8.18142 C28.1073 7.32466 28.6906 6.60337 29.1583 6.07421 C29.3926 5.80917 29.5903 5.60104 29.7494 5.45119 C29.8288 5.37642 29.8928 5.32161 29.9423 5.28357 C29.9953 5.24284 30.0148 5.23448 30.0058 5.23866 L29.71 4.60424 L29.4142 3.96982 C29.1939 4.07253 28.9765 4.25593 28.7895 4.43205 C28.5868 4.62297 28.3576 4.86616 28.1094 5.14701 C27.6121 5.70964 27.0074 6.45851 26.3362 7.32269 C24.993 9.05217 23.3529 11.2834 21.7218 13.4936 C20.0864 15.7095 18.4601 17.9044 17.1324 19.5791 C16.4678 20.4174 15.8871 21.1139 15.4232 21.6134 C15.1906 21.8639 14.9974 22.0539 14.845 22.1846 C14.6707 22.334 14.616 22.347 14.6533 22.3354 L14.86 23.0042 Z M29.71 4.60424 L30.0045 5.23929 C30.002 5.24044 30.0147 5.23434 30.0497 5.22694 C30.0841 5.21968 30.1325 5.21273 30.1973 5.20855 C30.3286 5.20009 30.5021 5.20448 30.7203 5.22614 C31.1572 5.26948 31.7162 5.37595 32.3703 5.53605 C33.6754 5.85552 35.2852 6.36994 36.9114 6.94207 C40.1648 8.08666 43.4101 9.43576 44.2742 9.83866 L44.57 9.20424 L44.8658 8.56982 C43.9499 8.14272 40.6602 6.77683 37.3761 5.62142 C35.7335 5.04355 34.0739 4.51172 32.7031 4.17619 C32.0192 4.00879 31.3886 3.88557 30.8585 3.83298 C30.3686 3.78436 29.8261 3.7788 29.4155 3.96919 L29.71 4.60424 Z M44.57 9.20424 L44.2742 9.83866 C44.4407 9.91633 44.769 10.1163 45.2579 10.4426 C45.7327 10.7595 46.3207 11.1694 46.9887 11.6411 C48.3191 12.5804 49.9634 13.7626 51.6014 14.8972 C53.239 16.0315 54.8937 17.1347 56.2576 17.9218 C56.9376 18.3142 57.5653 18.6398 58.0937 18.8509 C58.3575 18.9563 58.6156 19.0409 58.8552 19.0877 C59.0815 19.1319 59.3638 19.1574 59.6367 19.073 L59.43 18.4042 L59.2233 17.7354 C59.2737 17.7199 59.2591 17.7401 59.1234 17.7136 C59.0011 17.6898 58.8322 17.6383 58.6131 17.5508 C58.1759 17.3762 57.6149 17.0887 56.9574 16.7092 C55.6463 15.9526 54.031 14.877 52.3986 13.7463 C50.7666 12.6159 49.1409 11.4469 47.7963 10.4974 C47.1268 10.0247 46.5261 9.60587 46.0352 9.2782 C45.5585 8.96 45.1443 8.69965 44.8658 8.56982 L44.57 9.20424 Z M59.43 18.4042 L59.6367 19.073 C59.9017 18.9911 60.1462 18.7997 60.3326 18.6359 C60.542 18.4519 60.7756 18.2129 61.0253 17.9367 C61.5262 17.3829 62.1332 16.6335 62.8049 15.7647 C64.1495 14.0256 65.791 11.7587 67.4224 9.51461 C69.0588 7.26376 70.685 5.03592 72.0127 3.35371 C72.6777 2.51125 73.2567 1.81983 73.7178 1.33514 C73.9492 1.09181 74.1379 0.914481 74.2832 0.799004 C74.4575 0.660508 74.482 0.682724 74.3982 0.695833 L74.29 0.00424297 L74.1818 -0.687347 C73.8743 -0.639238 73.6008 -0.446943 73.4122 -0.297037 C73.1946 -0.12411 72.9554 0.105291 72.7034 0.370255 C72.1974 0.902168 71.5868 1.63365 70.9138 2.48634 C69.5656 4.19444 67.9225 6.44598 66.2901 8.69138 C64.6527 10.9436 63.0261 13.1898 61.6973 14.9084 C61.0322 15.7686 60.4512 16.4843 59.987 16.9977 C59.7542 17.2551 59.5609 17.4503 59.4085 17.5842 C59.2331 17.7383 59.1808 17.7486 59.2233 17.7354 L59.43 18.4042 Z M74.29 0.00424297 L74.3988 0.69574 C74.2952 0.712036 74.283 0.671827 74.4333 0.74234 C74.5587 0.801155 74.7325 0.906197 74.9568 1.06788 C75.4032 1.38957 75.9716 1.87832 76.6331 2.49623 C77.9523 3.72866 79.5725 5.40939 81.2079 7.12804 C82.836 8.83895 84.4795 10.5878 85.8244 11.9309 C86.4965 12.6022 87.1057 13.1839 87.609 13.6142 C87.8602 13.8289 88.0957 14.0151 88.3068 14.1581 C88.5 14.2891 88.7383 14.43 88.9829 14.4864 L89.14 13.8042 L89.2971 13.1221 C89.3192 13.1272 89.2607 13.1133 89.0921 12.9991 C88.9414 12.897 88.7501 12.7477 88.5187 12.55 C88.057 12.1553 87.4781 11.6039 86.8137 10.9404 C85.4855 9.6138 83.8615 7.88579 82.2221 6.16295 C80.59 4.44785 78.9427 2.73795 77.5888 1.47319 C76.9137 0.842506 76.2942 0.306022 75.7754 -0.0678656 C75.5172 -0.253981 75.2642 -0.41432 75.0278 -0.525187 C74.8163 -0.624357 74.5073 -0.73855 74.1812 -0.687254 L74.29 0.00424297 Z M89.14 13.8042 L88.9837 14.4866 C89.2224 14.5412 89.4771 14.5238 89.6958 14.4911 C89.9273 14.4564 90.1843 14.3937 90.4551 14.3133 C90.9974 14.1524 91.6507 13.9035 92.3647 13.6014 C93.7955 12.9959 95.5312 12.15 97.2257 11.2852 C98.9228 10.4191 100.59 9.52807 101.887 8.82916 C103.207 8.11752 104.097 7.63027 104.293 7.54002 L104 6.90424 L103.707 6.26846 C103.458 6.38321 102.492 6.91221 101.222 7.59683 C99.9287 8.29416 98.2722 9.17935 96.5893 10.0382 C94.9038 10.8985 93.2033 11.7263 91.8191 12.3121 C91.1255 12.6056 90.5267 12.8317 90.0567 12.9712 C89.8215 13.0411 89.6324 13.085 89.4884 13.1065 C89.3316 13.13 89.2813 13.1185 89.2963 13.1219 L89.14 13.8042 Z" fill="#0ea5e9"/><path transform="matrix(1 0 0 1 102.5 20.9)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#0ea5e9"/><path transform="matrix(1 0 0 1 102.5 20.9)" d="M5 2.5 L3.8 2.5 C3.8 3.21797 3.21797 3.8 2.5 3.8 L2.5 5 L2.5 6.2 C4.54345 6.2 6.2 4.54345 6.2 2.5 L5 2.5 Z M2.5 5 L2.5 3.8 C1.78203 3.8 1.2 3.21797 1.2 2.5 L0 2.5 L-1.2 2.5 C-1.2 4.54345 0.456546 6.2 2.5 6.2 L2.5 5 Z M0 2.5 L1.2 2.5 C1.2 1.78203 1.78203 1.2 2.5 1.2 L2.5 0 L2.5 -1.2 C0.456546 -1.2 -1.2 0.456546 -1.2 2.5 L0 2.5 Z M2.5 0 L2.5 1.2 C3.21797 1.2 3.8 1.78203 3.8 2.5 L5 2.5 L6.2 2.5 C6.2 0.456546 4.54345 -1.2 2.5 -1.2 L2.5 0 Z" fill="#ffffff"/></svg>
        <div style={{ width: "224px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={16.8} height={16.8} viewBox="0 0 24 24" style={{ width: "16.8px", height: "16.8px", flexShrink: 0, color: "#1f1f21", display: "block" }}><path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z" fill="currentColor" /></svg>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Amazon</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>$212.40</p>
            </div>
          </div>
        </div>
      </div>
      <div data-fu="row" style={{ width: "1154px", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#fceae8", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#99453d" }}>AJ</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>HR</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Ava Johnson</p>
            </div>
          </div>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>$1,500</p>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$630</p>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#16a34a" }}>$870</p>
        </div>
        <div style={{ width: "190px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #ee7c71 0%, #ec6a5e 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #ee7c71 0%, #ec6a5e 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #ee7c71 0%, #ec6a5e 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #ee7c71 0%, #ec6a5e 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #ee7c71 0%, #ec6a5e 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #ee7c71 0%, #ec6a5e 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #ee7c71 0%, #ec6a5e 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #ee7c71 0%, #ec6a5e 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(236, 106, 94, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(236, 106, 94, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(236, 106, 94, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(236, 106, 94, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(236, 106, 94, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(236, 106, 94, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(236, 106, 94, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(236, 106, 94, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(236, 106, 94, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(236, 106, 94, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(236, 106, 94, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(236, 106, 94, 0.16)" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>42%</p>
          </div>
        </div>
        <svg data-fu="plot" style={{ width: "150px", height: "55px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="150" height="55" viewBox="0 0 150 55" fill="none" overflow="visible"><defs><linearGradient id="g18_u3hq" gradientUnits="userSpaceOnUse" x1="52.00" y1="0.00" x2="52.00" y2="25.00"><stop offset="0" stopColor="#ec6a5e" stopOpacity="0.16"/><stop offset="1" stopColor="#ec6a5e" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 1 16.5)" d="M0 19.7131 C0.89 19.1231 13.07 9.66312 14.86 9.86312 C16.64 10.0531 27.93 23.2031 29.71 23.0031 C31.5 22.8031 42.79 6.97312 44.57 6.57312 C46.35 6.18312 57.65 16.0331 59.43 16.4331 C61.21 16.8231 72.5 14.1331 74.29 13.1431 C76.07 12.1631 87.36 0.203123 89.14 0.0031232 C90.93 -0.196877 103.11 9.27312 104 9.86312 L104 25.0031 L0 25.0031 L0 19.7131 Z" fill="url(#g18_u3hq)"/><path transform="matrix(1 0 0 1 1 16.5)" d="M-0.386776 19.1297 C-0.709002 19.3433 -0.797052 19.7777 -0.583442 20.0999 C-0.369831 20.4221 0.06455 20.5102 0.386776 20.2966 L0 19.7131 L-0.386776 19.1297 Z M14.86 9.86312 L14.7823 10.5588 L14.7857 10.5592 L14.86 9.86312 Z M29.71 23.0031 L29.6323 22.3075 L29.6318 22.3075 L29.71 23.0031 Z M44.57 6.57312 L44.4202 5.88933 L44.4165 5.89016 L44.57 6.57312 Z M59.43 16.4331 L59.2765 17.1161 L59.2802 17.1169 L59.43 16.4331 Z M74.29 13.1431 L73.9524 12.5299 L73.9512 12.5306 L74.29 13.1431 Z M89.14 0.0031232 L89.0623 -0.692548 L89.0618 -0.6925 L89.14 0.0031232 Z M103.613 10.4466 C103.935 10.6602 104.37 10.5721 104.583 10.2499 C104.797 9.92767 104.709 9.49329 104.387 9.27968 L104 9.86312 L103.613 10.4466 Z M0 19.7131 L0.386776 20.2966 C0.631006 20.1347 1.59011 19.4092 2.86437 18.458 C4.15809 17.4922 5.81533 16.2641 7.49931 15.0615 C9.18562 13.8573 10.8885 12.686 12.2755 11.8307 C12.9706 11.402 13.572 11.0617 14.0447 10.8369 C14.2816 10.7243 14.4717 10.6476 14.616 10.6027 C14.7772 10.5525 14.8171 10.5627 14.7823 10.5588 L14.86 9.86312 L14.9377 9.16745 C14.6791 9.13856 14.4141 9.19923 14.1999 9.26593 C13.9686 9.33792 13.7127 9.44455 13.4434 9.57259 C12.9039 9.82916 12.2531 10.1997 11.5407 10.639 C10.1128 11.5196 8.37938 12.7127 6.68569 13.9222 C4.98967 15.1334 3.32316 16.3684 2.02688 17.3361 C0.711143 18.3183 -0.186006 18.9966 -0.386776 19.1297 L0 19.7131 Z M14.86 9.86312 L14.7857 10.5592 C14.7403 10.5543 14.7805 10.5501 14.9449 10.6471 C15.089 10.7321 15.2756 10.8626 15.5049 11.0419 C15.9622 11.3995 16.538 11.9109 17.2015 12.5346 C18.5271 13.7807 20.1499 15.4249 21.7886 17.0729 C23.4198 18.7135 25.0669 20.3581 26.4198 21.5805 C27.0946 22.1903 27.7131 22.7104 28.23 23.0755 C28.4875 23.2574 28.7381 23.4139 28.9707 23.5236 C29.1796 23.6222 29.4761 23.7338 29.7882 23.6987 L29.71 23.0031 L29.6318 22.3075 C29.7214 22.2974 29.7211 22.3297 29.5682 22.2576 C29.439 22.1966 29.2627 22.0909 29.0377 21.932 C28.5896 21.6155 28.02 21.1396 27.3584 20.5417 C26.0381 19.3488 24.4177 17.7315 22.7814 16.0858 C21.1526 14.4476 19.5079 12.7812 18.1604 11.5145 C17.4873 10.8818 16.8751 10.3362 16.3674 9.93908 C16.1141 9.74102 15.8739 9.56968 15.6562 9.44127 C15.4588 9.32485 15.2022 9.19567 14.9343 9.16708 L14.86 9.86312 Z M29.71 23.0031 L29.7877 23.6988 C30.0871 23.6653 30.3602 23.499 30.5538 23.3635 C30.7736 23.2096 31.0147 23.0042 31.2679 22.7671 C31.7761 22.2912 32.3884 21.635 33.0619 20.8706 C34.4113 19.3392 36.0555 17.3173 37.6875 15.3039 C39.3252 13.2836 40.9506 11.2719 42.278 9.73921 C42.9425 8.97198 43.5215 8.3374 43.9831 7.88641 C44.2145 7.66024 44.4051 7.49151 44.5539 7.37797 C44.7254 7.2472 44.7709 7.24544 44.7235 7.25609 L44.57 6.57312 L44.4165 5.89016 C44.1466 5.9508 43.8953 6.1196 43.705 6.26475 C43.492 6.42714 43.2557 6.63971 43.0046 6.88507 C42.5011 7.37712 41.892 8.04645 41.2198 8.82267 C39.8737 10.3768 38.2311 12.4101 36.6 14.4223 C34.9632 16.4415 33.3381 18.4395 32.0115 19.945 C31.3471 20.699 30.7698 21.3155 30.311 21.7452 C30.0807 21.9608 29.8939 22.1164 29.7509 22.2166 C29.5816 22.3351 29.5566 22.3159 29.6323 22.3075 L29.71 23.0031 Z M44.57 6.57312 L44.7198 7.2569 C44.6634 7.26927 44.6787 7.24906 44.8214 7.28913 C44.948 7.32468 45.1208 7.39205 45.3425 7.49895 C45.7849 7.71222 46.3498 8.04736 47.0093 8.47878 C48.3251 9.33939 49.9432 10.5336 51.5788 11.7659 C53.2052 12.9914 54.8519 14.2568 56.1955 15.2348 C56.868 15.7243 57.4764 16.1506 57.978 16.4694 C58.2286 16.6287 58.4609 16.7665 58.6666 16.8734 C58.8616 16.9746 59.0748 17.0708 59.2765 17.1161 L59.43 16.4331 L59.5835 15.7502 C59.5826 15.75 59.5841 15.7503 59.5831 15.7501 C59.582 15.7498 59.5832 15.7501 59.5819 15.7498 C59.5809 15.7495 59.5794 15.7491 59.5775 15.7486 C59.5735 15.7474 59.568 15.7458 59.5609 15.7434 C59.5464 15.7386 59.5271 15.7315 59.5026 15.7214 C59.453 15.7009 59.3898 15.6714 59.312 15.631 C59.1559 15.5499 58.9611 15.4354 58.7289 15.2878 C58.2649 14.9929 57.6845 14.5871 57.0195 14.103 C55.6881 13.1338 54.0648 11.8861 52.4212 10.6478 C50.7868 9.41639 49.1349 8.19623 47.7757 7.30715 C47.0977 6.86373 46.4739 6.4902 45.9506 6.23788 C45.6895 6.11198 45.4352 6.00734 45.1999 5.94126 C44.9806 5.87968 44.6991 5.82823 44.4202 5.88934 L44.57 6.57312 Z M59.43 16.4331 L59.2802 17.1169 C59.6142 17.1901 60.0782 17.1804 60.5613 17.1422 C61.0693 17.102 61.6833 17.022 62.3612 16.9141 C63.7184 16.698 65.3687 16.3639 67.0123 15.988 C68.6567 15.612 70.3042 15.1919 71.657 14.8023 C72.978 14.4219 74.0994 14.0484 74.6288 13.7557 L74.29 13.1431 L73.9512 12.5306 C73.5855 12.7328 72.6245 13.0668 71.2696 13.457 C69.9464 13.8381 68.3246 14.2518 66.7002 14.6232 C65.0751 14.9949 63.4573 15.322 62.141 15.5315 C61.4822 15.6364 60.9081 15.7104 60.451 15.7465 C59.969 15.7846 59.6908 15.7737 59.5798 15.7493 L59.43 16.4331 Z M74.29 13.1431 L74.6276 13.7563 C74.9269 13.5915 75.3532 13.2458 75.8265 12.8327 C76.3194 12.4024 76.9213 11.8466 77.5916 11.2136 C78.9305 9.94917 80.5724 8.34823 82.1998 6.78554 C83.8336 5.21679 85.4565 3.68297 86.7789 2.53055 C87.4413 1.95338 88.0166 1.48221 88.4734 1.15267 C88.7023 0.987526 88.8896 0.866655 89.035 0.787198 C89.198 0.698178 89.2476 0.695437 89.2182 0.698746 L89.14 0.0031232 L89.0618 -0.6925 C88.8099 -0.664191 88.5627 -0.550057 88.3639 -0.441431 C88.1475 -0.323241 87.908 -0.165694 87.6543 0.0172524 C87.1461 0.383884 86.5334 0.88755 85.8592 1.47507 C84.5085 2.65203 82.8639 4.20695 81.2302 5.77571 C79.5901 7.35052 77.9645 8.93583 76.6303 10.1958 C75.9641 10.8249 75.3779 11.3659 74.9058 11.778 C74.414 12.2073 74.0981 12.4497 73.9524 12.5299 L74.29 13.1431 Z M89.14 0.0031232 L89.2177 0.698794 C89.1827 0.702706 89.2226 0.692459 89.3838 0.742708 C89.528 0.787657 89.7182 0.864424 89.955 0.977196 C90.4277 1.20224 91.0291 1.54295 91.7242 1.97204 C93.1112 2.82834 94.8141 4.00084 96.5004 5.20633 C98.1844 6.41015 99.8416 7.63951 101.135 8.60621 C102.41 9.5583 103.369 10.2845 103.613 10.4466 L104 9.86312 L104.387 9.27968 C104.186 9.14671 103.289 8.46794 101.973 7.48472 C100.677 6.51612 99.0106 5.27984 97.3146 4.06742 C95.6209 2.85666 93.8875 1.66228 92.4596 0.780764 C91.7472 0.340952 91.0964 -0.0299802 90.5568 -0.286848 C90.2876 -0.415033 90.0317 -0.521792 89.8004 -0.593878 C89.5861 -0.660666 89.321 -0.721459 89.0623 -0.692548 L89.14 0.0031232 Z" fill="#ec6a5e"/><path transform="matrix(1 0 0 1 102.5 23.857)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#ec6a5e"/><path transform="matrix(1 0 0 1 102.5 23.857)" d="M5 2.5 L3.8 2.5 C3.8 3.21797 3.21797 3.8 2.5 3.8 L2.5 5 L2.5 6.2 C4.54345 6.2 6.2 4.54345 6.2 2.5 L5 2.5 Z M2.5 5 L2.5 3.8 C1.78203 3.8 1.2 3.21797 1.2 2.5 L0 2.5 L-1.2 2.5 C-1.2 4.54345 0.456546 6.2 2.5 6.2 L2.5 5 Z M0 2.5 L1.2 2.5 C1.2 1.78203 1.78203 1.2 2.5 1.2 L2.5 0 L2.5 -1.2 C0.456546 -1.2 -1.2 0.456546 -1.2 2.5 L0 2.5 Z M2.5 0 L2.5 1.2 C3.21797 1.2 3.8 1.78203 3.8 2.5 L5 2.5 L6.2 2.5 C6.2 0.456546 4.54345 -1.2 2.5 -1.2 L2.5 0 Z" fill="#ffffff"/></svg>
        <div style={{ width: "224px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "-0.4px", top: "-0.4px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/2241eb9e90bd7762609a0b334568806d0ddacb36.png') center / cover no-repeat" }} />
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Slack</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>$530.20</p>
            </div>
          </div>
        </div>
      </div>
      <div data-fu="row" style={{ width: "1154px", height: "56px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#e9ecef", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#414b5a" }}>EC</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Finance</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Ethan Cole</p>
            </div>
          </div>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>$2,500</p>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,180</p>
        </div>
        <div style={{ width: "120px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#16a34a" }}>$1,320</p>
        </div>
        <div style={{ width: "190px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #778599 0%, #64748b 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #778599 0%, #64748b 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #778599 0%, #64748b 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #778599 0%, #64748b 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #778599 0%, #64748b 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #778599 0%, #64748b 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #778599 0%, #64748b 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #778599 0%, #64748b 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #778599 0%, #64748b 100%)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(100, 116, 139, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(100, 116, 139, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(100, 116, 139, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(100, 116, 139, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(100, 116, 139, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(100, 116, 139, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(100, 116, 139, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(100, 116, 139, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(100, 116, 139, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(100, 116, 139, 0.16)" }} />
              <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(100, 116, 139, 0.16)" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>47%</p>
          </div>
        </div>
        <svg data-fu="plot" style={{ width: "150px", height: "55px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="150" height="55" viewBox="0 0 150 55" fill="none" overflow="visible"><defs><linearGradient id="g19_u3i7" gradientUnits="userSpaceOnUse" x1="52.00" y1="0.00" x2="52.00" y2="25.02"><stop offset="0" stopColor="#64748b" stopOpacity="0.16"/><stop offset="1" stopColor="#64748b" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 1 16.5)" d="M0 13.8157 C0.89 14.0957 13.07 18.9657 14.86 18.4157 C16.64 17.8657 27.93 5.16571 29.71 4.61571 C31.5 4.06571 42.79 8.11571 44.57 9.21571 C46.35 10.3157 57.65 23.5657 59.43 23.0157 C61.21 22.4657 72.5 0.565713 74.29 0.0157126 C76.07 -0.534287 87.36 13.5357 89.14 13.8157 C90.93 14.0957 103.11 5.16571 104 4.61571 L104 25.0157 L0 25.0157 L0 13.8157 Z" fill="url(#g19_u3i7)"/><path transform="matrix(1 0 0 1 1 16.5)" d="M0.210074 13.148 C-0.158706 13.032 -0.551714 13.2369 -0.667734 13.6056 C-0.783755 13.9744 -0.578853 14.3674 -0.210074 14.4834 L0 13.8157 L0.210074 13.148 Z M14.86 18.4157 L15.0656 19.0848 L15.0667 19.0845 L14.86 18.4157 Z M29.71 4.61571 L29.5044 3.94659 L29.5033 3.94691 L29.71 4.61571 Z M74.29 0.0157126 L74.4956 0.684839 L74.4967 0.684514 L74.29 0.0157126 Z M89.14 13.8157 L89.0312 14.5072 L89.0318 14.5073 L89.14 13.8157 Z M104.368 5.21118 C104.697 5.00795 104.799 4.57659 104.595 4.24773 C104.392 3.91886 103.961 3.81701 103.632 4.02024 L104 4.61571 L104.368 5.21118 Z M0 13.8157 L-0.210074 14.4834 C-0.0121194 14.5457 0.879327 14.8884 2.19908 15.3851 C3.49585 15.8731 5.16357 16.4931 6.86112 17.0876 C8.55606 17.6812 10.2925 18.2536 11.7241 18.6437 C12.4386 18.8385 13.0918 18.9919 13.6333 19.0786 C13.904 19.122 14.1591 19.1507 14.3873 19.1575 C14.6055 19.1639 14.8466 19.1521 15.0656 19.0848 L14.86 18.4157 L14.6544 17.7466 C14.6571 17.7457 14.6411 17.7507 14.5987 17.7546 C14.5576 17.7584 14.5015 17.7602 14.4285 17.7581 C14.2812 17.7537 14.0902 17.734 13.8548 17.6963 C13.3841 17.6209 12.7852 17.4819 12.0922 17.293 C10.7087 16.916 9.00894 16.3565 7.32388 15.7663 C5.64143 15.1771 3.9854 14.5615 2.69217 14.0748 C1.42192 13.5968 0.457119 13.2257 0.210074 13.148 L0 13.8157 Z M14.86 18.4157 L15.0667 19.0845 C15.2825 19.0178 15.5023 18.8859 15.6949 18.7545 C15.9011 18.6138 16.1333 18.4337 16.3835 18.2258 C16.8845 17.8094 17.4921 17.2531 18.1644 16.611 C19.5102 15.3257 21.152 13.6611 22.7833 12.0073 C24.4195 10.3486 26.0452 8.70066 27.3725 7.43286 C28.0368 6.79843 28.6172 6.26803 29.0812 5.88241 C29.3136 5.68933 29.5082 5.53972 29.6638 5.43362 C29.7413 5.38076 29.8034 5.34264 29.8512 5.31658 C29.9016 5.28907 29.9215 5.28301 29.9167 5.28451 L29.71 4.61571 L29.5033 3.94691 C29.2875 4.01361 29.0677 4.14557 28.8751 4.27696 C28.6688 4.41759 28.4367 4.59776 28.1865 4.80565 C27.6855 5.22199 27.0779 5.77831 26.4056 6.42044 C25.0598 7.70577 23.418 9.37036 21.7867 11.0241 C20.1505 12.6829 18.5248 14.3308 17.1975 15.5986 C16.5332 16.233 15.9528 16.7634 15.4888 17.149 C15.2564 17.3421 15.0618 17.4917 14.9062 17.5978 C14.8287 17.6507 14.7666 17.6888 14.7188 17.7148 C14.6684 17.7424 14.6485 17.7484 14.6533 17.7469 L14.86 18.4157 Z M29.71 4.61571 L29.9156 5.28484 C29.9825 5.26429 30.2204 5.24484 30.7029 5.30497 C31.1504 5.36074 31.7175 5.47178 32.3741 5.6286 C33.6851 5.94169 35.299 6.42406 36.9239 6.96155 C38.5468 7.49838 40.1687 8.08622 41.4927 8.60698 C42.8398 9.13683 43.8194 9.57475 44.202 9.81118 L44.57 9.21571 L44.938 8.62024 C44.4306 8.30668 43.3315 7.82584 42.0051 7.30414 C40.6557 6.77333 39.0094 6.17679 37.3636 5.63238 C35.7197 5.08861 34.0642 4.59286 32.6993 4.26689 C32.018 4.10418 31.3954 3.98045 30.876 3.91571 C30.3915 3.85533 29.885 3.82964 29.5044 3.94659 L29.71 4.61571 Z M44.57 9.21571 L44.202 9.81118 C44.3493 9.90218 44.6671 10.174 45.1602 10.6505 C45.6336 11.1079 46.2209 11.7062 46.8884 12.399 C48.203 13.7635 49.8752 15.5443 51.4968 17.2211 C53.1329 18.9128 54.7842 20.569 56.144 21.7707 C56.8213 22.3693 57.4466 22.8734 57.9737 23.2138 C58.2359 23.3831 58.4976 23.5277 58.746 23.6198 C58.9732 23.7041 59.3023 23.7878 59.6367 23.6845 L59.43 23.0157 L59.2233 22.3469 C59.3352 22.3123 59.3674 22.3571 59.2327 22.3071 C59.1191 22.265 58.9538 22.1802 58.7332 22.0377 C58.2946 21.7545 57.7312 21.305 57.0711 20.7217 C55.7558 19.5593 54.1371 17.9374 52.5032 16.2478 C50.8548 14.5433 49.257 12.8398 47.8966 11.4277 C47.2266 10.7322 46.6251 10.1192 46.133 9.64366 C45.6604 9.18708 45.2357 8.80425 44.938 8.62024 L44.57 9.21571 Z M59.43 23.0157 L59.6367 23.6845 C59.8098 23.631 59.9529 23.5344 60.0554 23.4543 C60.1655 23.3682 60.2739 23.2648 60.3785 23.1545 C60.5876 22.934 60.8203 22.6445 61.069 22.3083 C61.5681 21.6334 62.1736 20.7121 62.8447 19.6382 C64.1885 17.4879 65.8287 14.6709 67.4611 11.868 C69.0974 9.05847 70.7259 6.263 72.0567 4.13536 C72.723 3.07025 73.3062 2.18612 73.773 1.55608 C74.0073 1.23986 74.2018 1.00196 74.3549 0.841072 C74.4314 0.760618 74.4878 0.70981 74.5251 0.680718 C74.57 0.6458 74.557 0.665968 74.4956 0.684839 L74.29 0.0157126 L74.0844 -0.653413 C73.9111 -0.600168 73.7677 -0.503926 73.6647 -0.423676 C73.5542 -0.337601 73.4454 -0.234149 73.3405 -0.123856 C73.1307 0.0967481 72.8973 0.386291 72.6481 0.722612 C72.148 1.39765 71.5416 2.31899 70.8698 3.39294 C69.5247 5.54342 67.8838 8.36045 66.2514 11.1634 C64.615 13.973 62.9871 16.7686 61.6575 18.8963 C60.9918 19.9615 60.4093 20.8457 59.9433 21.4759 C59.7094 21.7922 59.5153 22.0301 59.3627 22.1911 C59.2863 22.2716 59.2301 22.3225 59.1929 22.3515 C59.1481 22.3865 59.1614 22.3661 59.2233 22.3469 L59.43 23.0157 Z M74.29 0.0157126 L74.4967 0.684514 C74.373 0.722707 74.3326 0.671315 74.4689 0.726235 C74.582 0.771831 74.7475 0.863009 74.9688 1.01562 C75.4086 1.31876 75.9728 1.79652 76.6336 2.41256 C77.9504 3.64027 79.5688 5.3395 81.2044 7.08334 C82.8317 8.8183 84.4763 10.5978 85.8216 11.9565 C86.494 12.6355 87.1047 13.2229 87.6103 13.653 C87.8625 13.8675 88.1009 14.0535 88.3163 14.1944 C88.5107 14.3215 88.7643 14.4652 89.0312 14.5072 L89.14 13.8157 L89.2488 13.1242 C89.2932 13.1312 89.25 13.1322 89.0826 13.0227 C88.9362 12.927 88.7477 12.7825 88.5174 12.5866 C88.058 12.1958 87.4807 11.6423 86.8165 10.9715 C85.4887 9.63053 83.8658 7.87437 82.2256 6.12559 C80.5937 4.38568 78.9446 2.65303 77.5883 1.38856 C76.9125 0.758495 76.2887 0.225083 75.7634 -0.137045 C75.5023 -0.317072 75.2409 -0.472056 74.9922 -0.572276 C74.7667 -0.663171 74.4295 -0.760032 74.0834 -0.653089 L74.29 0.0157126 Z M89.14 13.8157 L89.0318 14.5073 C89.2896 14.5476 89.556 14.4988 89.7728 14.4409 C90.0058 14.3786 90.2632 14.2827 90.5334 14.166 C91.0747 13.9324 91.7269 13.5896 92.4399 13.1811 C93.869 12.3622 95.6034 11.2441 97.2973 10.1084 C98.9937 8.97095 100.661 7.80842 101.957 6.89732 C103.274 5.97152 104.169 5.33418 104.368 5.21118 L104 4.61571 L103.632 4.02024 C103.386 4.17224 102.425 4.85741 101.152 5.75192 C99.8582 6.66113 98.2013 7.81673 96.5177 8.94555 C94.8316 10.076 93.1297 11.1723 91.7439 11.9663 C91.0494 12.3642 90.4494 12.6774 89.9785 12.8807 C89.7426 12.9825 89.5539 13.0502 89.4114 13.0883 C89.2527 13.1307 89.2141 13.1188 89.2482 13.1241 L89.14 13.8157 Z" fill="#64748b"/><path transform="matrix(1 0 0 1 102.5 18.6)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#64748b"/><path transform="matrix(1 0 0 1 102.5 18.6)" d="M5 2.5 L3.8 2.5 C3.8 3.21797 3.21797 3.8 2.5 3.8 L2.5 5 L2.5 6.2 C4.54345 6.2 6.2 4.54345 6.2 2.5 L5 2.5 Z M2.5 5 L2.5 3.8 C1.78203 3.8 1.2 3.21797 1.2 2.5 L0 2.5 L-1.2 2.5 C-1.2 4.54345 0.456546 6.2 2.5 6.2 L2.5 5 Z M0 2.5 L1.2 2.5 C1.2 1.78203 1.78203 1.2 2.5 1.2 L2.5 0 L2.5 -1.2 C0.456546 -1.2 -1.2 0.456546 -1.2 2.5 L0 2.5 Z M2.5 0 L2.5 1.2 C3.21797 1.2 3.8 1.78203 3.8 2.5 L5 2.5 L6.2 2.5 C6.2 0.456546 4.54345 -1.2 2.5 -1.2 L2.5 0 Z" fill="#ffffff"/></svg>
        <div style={{ width: "224px", height: "55px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, borderRadius: "4.7px", background: "#a3112f", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 600, color: "#ffffff" }}>M</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Marriott</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>$389.00</p>
            </div>
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
