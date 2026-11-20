"use client";
// Framework drawer (abotix, Drawers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Inter, Geist Mono. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { AlertTriangle, File, FileExport, FileTypePdf, FileZip, License, Link, UserPlus, X } from "ingotui-icons/react/stroke-rounded";

export function FrameworkDrawer() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "500px", height: "1056px", borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 20px 44px -12px rgba(13, 13, 18, 0.12), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "20px 20px 17px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "rgba(254, 113, 12, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <License size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#fe710c", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "173px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a", letterSpacing: "0.02em" }}>FRAMEWORK · EU 2024/1689</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>EU AI Act</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(254, 113, 12, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#fe710c"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fe710c", letterSpacing: "-0.01em" }}>71% ready</p>
            </div>
            <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(229, 72, 77, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#e5484d"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e5484d", letterSpacing: "-0.01em" }}>13 gaps</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "165px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#555555" }}>3 high-risk agents in scope</p>
          </div>
        </div>
        <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#353537", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "20px 20px 20px 20px", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "24px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "180px", height: "126.1px", flexShrink: 0, position: "relative" }}>
            <svg style={{ position: "absolute", left: "12.1px", top: "12.1px", width: "155.8px", height: "77.9px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="155.8" height="77.9" viewBox="0 0 155.8 77.9" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-8.1 77.9 C-8.1 82.3735 -4.47351 86 0 86 C4.47351 86 8.1 82.3735 8.1 77.9 L0 77.9 L-8.1 77.9 Z M147.7 77.9 C147.7 82.3735 151.326 86 155.8 86 C160.274 86 163.9 82.3735 163.9 77.9 L155.8 77.9 L147.7 77.9 Z M0 77.9 L8.1 77.9 C8.1 39.3535 39.3535 8.1 77.9 8.1 L77.9 0 L77.9 -8.1 C30.4065 -8.1 -8.1 30.4065 -8.1 77.9 L0 77.9 Z M77.9 0 L77.9 8.1 C116.446 8.1 147.7 39.3535 147.7 77.9 L155.8 77.9 L163.9 77.9 C163.9 30.4065 125.394 -8.1 77.9 -8.1 L77.9 0 Z" fill="#ffebdd"/></svg>
            <svg data-fu="plot" style={{ position: "absolute", left: "12.1px", top: "12.1px", width: "125.65px", height: "77.9px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="125.65" height="77.9" viewBox="0 0 125.65 77.9" fill="none" overflow="visible"><defs><linearGradient id="g29_ukl7" gradientUnits="userSpaceOnUse" x1="0.00" y1="38.95" x2="125.65" y2="38.95"><stop offset="0" stopColor="#fea361"/><stop offset="1" stopColor="#fe710c"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M-8.1 77.9029 C-8.1 82.3764 -4.47351 86.0029 0 86.0029 C4.47351 86.0029 8.1 82.3764 8.1 77.9029 L0 77.9029 L-8.1 77.9029 Z M120.685 22.753 C124.22 25.495 129.308 24.8524 132.05 21.3177 C134.792 17.7831 134.149 12.6949 130.615 9.95288 L125.65 16.3529 L120.685 22.753 Z M0 77.9029 L8.1 77.9029 C8.1 51.2644 23.2703 26.9366 47.1935 15.217 L43.63 7.94293 L40.0665 0.668887 C10.5897 15.1092 -8.1 45.0815 -8.1 77.9029 L0 77.9029 Z M43.63 7.94293 L47.1935 15.217 C71.1165 3.49736 99.6279 6.41787 120.685 22.753 L125.65 16.3529 L130.615 9.95288 C104.672 -10.172 69.5435 -13.7715 40.0665 0.668887 L43.63 7.94293 Z" fill="url(#g29_ukl7)"/></svg>
            <svg style={{ position: "absolute", left: "29.2px", top: "29.2px", width: "121.6px", height: "60.8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="121.6" height="60.8" viewBox="0 0 121.6 60.8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-1 60.8 C-1 61.3523 -0.552285 61.8 0 61.8 C0.552285 61.8 1 61.3523 1 60.8 L0 60.8 L-1 60.8 Z M120.6 60.8 C120.6 61.3523 121.048 61.8 121.6 61.8 C122.152 61.8 122.6 61.3523 122.6 60.8 L121.6 60.8 L120.6 60.8 Z M1.00002 60.7516 C1.00046 60.1993 0.553096 59.7512 0.000811486 59.7508 C-0.551473 59.7504 -0.999543 60.1977 -0.99998 60.75 L1.94864e-05 60.7508 L1.00002 60.7516 Z M-0.711524 54.7907 C-0.764577 55.3404 -0.36194 55.8291 0.187791 55.8821 C0.737521 55.9352 1.22617 55.5325 1.27923 54.9828 L0.283851 54.8867 L-0.711524 54.7907 Z M1.28851 54.8874 C1.34244 54.3377 0.940585 53.8484 0.39094 53.7945 C-0.158705 53.7406 -0.648 54.1424 -0.70193 54.6921 L0.293291 54.7897 L1.28851 54.8874 Z M0.166586 48.7887 C0.0598491 49.3306 0.412596 49.8564 0.954469 49.9631 C1.49634 50.0698 2.02214 49.7171 2.12888 49.1752 L1.14773 48.9819 L0.166586 48.7887 Z M2.1475 49.0811 C2.25511 48.5394 1.90321 48.013 1.36152 47.9054 C0.819816 47.7978 0.293446 48.1497 0.185835 48.6914 L1.16667 48.8862 L2.1475 49.0811 Z M1.63145 42.9022 C1.47175 43.4308 1.77088 43.9889 2.29957 44.1486 C2.82826 44.3083 3.38631 44.0092 3.54601 43.4805 L2.58873 43.1913 L1.63145 42.9022 Z M3.57386 43.3886 C3.73442 42.8601 3.43619 42.3016 2.90776 42.141 C2.37933 41.9805 1.8208 42.2787 1.66024 42.8071 L2.61705 43.0979 L3.57386 43.3886 Z M3.67054 37.1892 C3.4594 37.6995 3.70195 38.2844 4.21229 38.4955 C4.72262 38.7066 5.30749 38.4641 5.51862 37.9537 L4.59458 37.5714 L3.67054 37.1892 Z M5.55543 37.865 C5.76739 37.355 5.52578 36.7697 5.01579 36.5578 C4.5058 36.3458 3.92054 36.5874 3.70858 37.0974 L4.63201 37.4812 L5.55543 37.865 Z M6.26308 31.7054 C6.00272 32.1925 6.18649 32.7984 6.67356 33.0587 C7.16062 33.3191 7.76653 33.1353 8.02689 32.6483 L7.14499 32.1768 L6.26308 31.7054 Z M8.07228 32.5635 C8.33343 32.0769 8.15063 31.4707 7.66399 31.2095 C7.17735 30.9484 6.57115 31.1312 6.31 31.6178 L7.19114 32.0907 L8.07228 32.5635 Z M9.38183 26.5032 C9.07496 26.9624 9.19843 27.5834 9.65761 27.8903 C10.1168 28.1972 10.7378 28.0737 11.0447 27.6145 L10.2132 27.0589 L9.38183 26.5032 Z M11.0982 27.5346 C11.4058 27.0759 11.2833 26.4547 10.8246 26.1471 C10.3659 25.8395 9.74473 25.962 9.43712 26.4206 L10.2676 26.9776 L11.0982 27.5346 Z M12.9946 21.6315 C12.6443 22.0585 12.7065 22.6886 13.1335 23.0389 C13.5605 23.3891 14.1906 23.3269 14.5409 22.8999 L13.7677 22.2657 L12.9946 21.6315 Z M14.602 22.8256 C14.9529 22.3991 14.8917 21.7689 14.4653 21.418 C14.0388 21.067 13.4086 21.1282 13.0577 21.5547 L13.8298 22.1901 L14.602 22.8256 Z M17.0652 17.1356 C16.675 17.5264 16.6755 18.1596 17.0664 18.5498 C17.4572 18.94 18.0904 18.9395 18.4806 18.5486 L17.7729 17.8421 L17.0652 17.1356 Z M18.5487 18.4806 C18.9395 18.0904 18.94 17.4572 18.5498 17.0664 C18.1596 16.6755 17.5264 16.675 17.1356 17.0652 L17.8421 17.7729 L18.5487 18.4806 Z M21.5547 13.0577 C21.1283 13.4086 21.067 14.0388 21.418 14.4653 C21.7689 14.8917 22.3991 14.9529 22.8256 14.602 L22.1901 13.8298 L21.5547 13.0577 Z M22.8999 14.5409 C23.3269 14.1906 23.3892 13.5605 23.0389 13.1335 C22.6886 12.7065 22.0585 12.6443 21.6315 12.9945 L22.2657 13.7677 L22.8999 14.5409 Z M26.4207 9.43712 C25.962 9.74473 25.8395 10.3659 26.1471 10.8246 C26.4547 11.2833 27.0759 11.4058 27.5346 11.0982 L26.9776 10.2676 L26.4207 9.43712 Z M27.6145 11.0447 C28.0737 10.7378 28.1972 10.1168 27.8903 9.6576 C27.5834 9.19842 26.9624 9.07495 26.5033 9.38182 L27.0589 10.2132 L27.6145 11.0447 Z M31.6178 6.30999 C31.1312 6.57114 30.9484 7.17734 31.2095 7.66398 C31.4707 8.15063 32.0769 8.33342 32.5635 8.07227 L32.0907 7.19113 L31.6178 6.30999 Z M32.6483 8.02688 C33.1353 7.76652 33.3191 7.16061 33.0587 6.67355 C32.7984 6.18649 32.1925 6.00271 31.7054 6.26308 L32.1768 7.14498 L32.6483 8.02688 Z M37.0974 3.70858 C36.5874 3.92054 36.3458 4.50579 36.5578 5.01579 C36.7697 5.52578 37.355 5.76738 37.865 5.55542 L37.4812 4.632 L37.0974 3.70858 Z M37.9538 5.51862 C38.4641 5.30748 38.7066 4.72262 38.4955 4.21229 C38.2844 3.70195 37.6995 3.4594 37.1892 3.67053 L37.5715 4.59458 L37.9538 5.51862 Z M42.8072 1.66023 C42.2787 1.82079 41.9805 2.37933 42.1411 2.90776 C42.3016 3.43619 42.8602 3.73441 43.3886 3.57385 L43.0979 2.61704 L42.8072 1.66023 Z M43.4805 3.54601 C44.0092 3.38631 44.3083 2.82826 44.1486 2.29957 C43.9889 1.77087 43.4309 1.47175 42.9022 1.63145 L43.1913 2.58873 L43.4805 3.54601 Z M48.6914 0.185833 C48.1497 0.293444 47.7978 0.819814 47.9054 1.36151 C48.013 1.90321 48.5394 2.25511 49.0811 2.1475 L48.8862 1.16667 L48.6914 0.185833 Z M49.1752 2.12888 C49.7171 2.02214 50.0698 1.49634 49.9631 0.954468 C49.8564 0.412595 49.3306 0.0598478 48.7887 0.166584 L48.982 1.14773 L49.1752 2.12888 Z M54.6921 -0.701931 C54.1424 -0.648001 53.7406 -0.158706 53.7945 0.390939 C53.8484 0.940584 54.3377 1.34244 54.8874 1.28851 L54.7897 0.29329 L54.6921 -0.701931 Z M54.9828 1.27923 C55.5325 1.22617 55.9352 0.73752 55.8821 0.18779 C55.8291 -0.361941 55.3404 -0.764578 54.7907 -0.711525 L54.8867 0.28385 L54.9828 1.27923 Z M60.75 -0.99998 C60.1977 -0.999543 59.7504 -0.551473 59.7508 0.000811372 C59.7512 0.553096 60.1993 1.00046 60.7516 1.00002 L60.7508 1.94811e-05 L60.75 -0.99998 Z M60.8484 1.00002 C61.4007 1.00046 61.8488 0.553096 61.8492 0.000811486 C61.8496 -0.551473 61.4023 -0.999543 60.85 -0.99998 L60.8492 1.94864e-05 L60.8484 1.00002 Z M66.8093 -0.711524 C66.2596 -0.764577 65.771 -0.36194 65.7179 0.187791 C65.6648 0.737521 66.0675 1.22617 66.6172 1.27923 L66.7133 0.283851 L66.8093 -0.711524 Z M66.7126 1.28851 C67.2623 1.34244 67.7516 0.940585 67.8055 0.39094 C67.8594 -0.158705 67.4576 -0.648 66.9079 -0.70193 L66.8103 0.293291 L66.7126 1.28851 Z M72.8113 0.166586 C72.2694 0.0598491 71.7436 0.412596 71.6369 0.954469 C71.5302 1.49634 71.8829 2.02214 72.4248 2.12888 L72.618 1.14773 L72.8113 0.166586 Z M72.5189 2.1475 C73.0606 2.25511 73.587 1.90321 73.6946 1.36152 C73.8022 0.819816 73.4503 0.293446 72.9086 0.185835 L72.7138 1.16667 L72.5189 2.1475 Z M78.6978 1.63145 C78.1692 1.47175 77.6111 1.77088 77.4514 2.29957 C77.2917 2.82826 77.5908 3.38631 78.1195 3.54601 L78.4087 2.58873 L78.6978 1.63145 Z M78.2114 3.57386 C78.7399 3.73442 79.2984 3.43619 79.459 2.90776 C79.6195 2.37933 79.3213 1.8208 78.7929 1.66024 L78.5021 2.61705 L78.2114 3.57386 Z M84.4108 3.67054 C83.9005 3.4594 83.3156 3.70195 83.1045 4.21229 C82.8934 4.72262 83.1359 5.30749 83.6463 5.51862 L84.0285 4.59458 L84.4108 3.67054 Z M83.735 5.55543 C84.245 5.76739 84.8303 5.52578 85.0422 5.01579 C85.2542 4.5058 85.0126 3.92054 84.5026 3.70858 L84.1188 4.63201 L83.735 5.55543 Z M89.8946 6.26308 C89.4075 6.00272 88.8016 6.18649 88.5413 6.67356 C88.2809 7.16062 88.4647 7.76653 88.9517 8.02689 L89.4232 7.14499 L89.8946 6.26308 Z M89.0365 8.07228 C89.5231 8.33343 90.1293 8.15063 90.3905 7.66399 C90.6516 7.17735 90.4688 6.57115 89.9822 6.31 L89.5093 7.19114 L89.0365 8.07228 Z M95.0968 9.38183 C94.6376 9.07496 94.0166 9.19843 93.7097 9.65761 C93.4028 10.1168 93.5263 10.7378 93.9855 11.0447 L94.5411 10.2132 L95.0968 9.38183 Z M94.0654 11.0982 C94.5241 11.4058 95.1453 11.2833 95.4529 10.8246 C95.7605 10.3659 95.638 9.74473 95.1794 9.43712 L94.6224 10.2676 L94.0654 11.0982 Z M99.9685 12.9946 C99.5415 12.6443 98.9114 12.7065 98.5611 13.1335 C98.2109 13.5605 98.2731 14.1906 98.7001 14.5409 L99.3343 13.7677 L99.9685 12.9946 Z M98.7744 14.602 C99.2009 14.9529 99.8311 14.8917 100.182 14.4653 C100.533 14.0388 100.472 13.4086 100.045 13.0577 L99.4099 13.8298 L98.7744 14.602 Z M104.464 17.0652 C104.074 16.675 103.44 16.6755 103.05 17.0664 C102.66 17.4572 102.661 18.0904 103.051 18.4806 L103.758 17.7729 L104.464 17.0652 Z M103.119 18.5487 C103.51 18.9395 104.143 18.94 104.534 18.5498 C104.924 18.1596 104.925 17.5264 104.535 17.1356 L103.827 17.8421 L103.119 18.5487 Z M108.542 21.5547 C108.191 21.1283 107.561 21.067 107.135 21.418 C106.708 21.7689 106.647 22.3991 106.998 22.8256 L107.77 22.1901 L108.542 21.5547 Z M107.059 22.8999 C107.409 23.3269 108.039 23.3892 108.466 23.0389 C108.894 22.6886 108.956 22.0585 108.605 21.6315 L107.832 22.2657 L107.059 22.8999 Z M112.163 26.4207 C111.855 25.962 111.234 25.8395 110.775 26.1471 C110.317 26.4547 110.194 27.0759 110.502 27.5346 L111.332 26.9776 L112.163 26.4207 Z M110.555 27.6145 C110.862 28.0737 111.483 28.1972 111.942 27.8903 C112.402 27.5834 112.525 26.9624 112.218 26.5033 L111.387 27.0589 L110.555 27.6145 Z M115.29 31.6178 C115.029 31.1312 114.423 30.9484 113.936 31.2095 C113.449 31.4707 113.267 32.0769 113.528 32.5635 L114.409 32.0907 L115.29 31.6178 Z M113.573 32.6483 C113.833 33.1353 114.439 33.3191 114.926 33.0587 C115.414 32.7984 115.597 32.1925 115.337 31.7054 L114.455 32.1768 L113.573 32.6483 Z M117.891 37.0974 C117.679 36.5874 117.094 36.3458 116.584 36.5578 C116.074 36.7697 115.833 37.355 116.045 37.865 L116.968 37.4812 L117.891 37.0974 Z M116.081 37.9538 C116.293 38.4641 116.877 38.7066 117.388 38.4955 C117.898 38.2844 118.141 37.6995 117.929 37.1892 L117.005 37.5715 L116.081 37.9538 Z M119.94 42.8072 C119.779 42.2787 119.221 41.9805 118.692 42.1411 C118.164 42.3016 117.866 42.8602 118.026 43.3886 L118.983 43.0979 L119.94 42.8072 Z M118.054 43.4805 C118.214 44.0092 118.772 44.3083 119.3 44.1486 C119.829 43.9889 120.128 43.4309 119.969 42.9022 L119.011 43.1913 L118.054 43.4805 Z M121.414 48.6914 C121.307 48.1497 120.78 47.7978 120.238 47.9054 C119.697 48.013 119.345 48.5394 119.452 49.0811 L120.433 48.8862 L121.414 48.6914 Z M119.471 49.1752 C119.578 49.7171 120.104 50.0698 120.646 49.9631 C121.187 49.8564 121.54 49.3306 121.433 48.7887 L120.452 48.982 L119.471 49.1752 Z M122.302 54.6921 C122.248 54.1424 121.759 53.7406 121.209 53.7945 C120.659 53.8484 120.258 54.3377 120.311 54.8874 L121.307 54.7897 L122.302 54.6921 Z M120.321 54.9828 C120.374 55.5325 120.862 55.9352 121.412 55.8821 C121.962 55.8291 122.365 55.3404 122.312 54.7907 L121.316 54.8867 L120.321 54.9828 Z M122.6 60.75 C122.6 60.1977 122.151 59.7504 121.599 59.7508 C121.047 59.7512 120.6 60.1993 120.6 60.7516 L121.6 60.7508 L122.6 60.75 Z M0 60.8 L1 60.8 C1 60.7839 1.00001 60.7677 1.00002 60.7516 L1.94864e-05 60.7508 L-0.99998 60.75 C-0.999993 60.7667 -1 60.7833 -1 60.8 L0 60.8 Z M0.283851 54.8867 L1.27923 54.9828 C1.2823 54.951 1.28539 54.9192 1.28851 54.8874 L0.293291 54.7897 L-0.70193 54.6921 C-0.705154 54.7249 -0.708352 54.7578 -0.711524 54.7907 L0.283851 54.8867 Z M1.14773 48.9819 L2.12888 49.1752 C2.13506 49.1438 2.14127 49.1124 2.1475 49.0811 L1.16667 48.8862 L0.185835 48.6914 C0.179393 48.7238 0.172977 48.7562 0.166586 48.7887 L1.14773 48.9819 Z M2.58873 43.1913 L3.54601 43.4805 C3.55527 43.4498 3.56455 43.4192 3.57386 43.3886 L2.61705 43.0979 L1.66024 42.8071 C1.65062 42.8388 1.64102 42.8705 1.63145 42.9022 L2.58873 43.1913 Z M4.59458 37.5714 L5.51862 37.9537 C5.53087 37.9241 5.54314 37.8946 5.55543 37.865 L4.63201 37.4812 L3.70858 37.0974 C3.69588 37.128 3.6832 37.1586 3.67054 37.1892 L4.59458 37.5714 Z M7.14499 32.1768 L8.02689 32.6483 C8.042 32.62 8.05713 32.5917 8.07228 32.5635 L7.19114 32.0907 L6.31 31.6178 C6.29434 31.647 6.2787 31.6762 6.26308 31.7054 L7.14499 32.1768 Z M10.2132 27.0589 L11.0447 27.6145 C11.0625 27.5879 11.0803 27.5612 11.0982 27.5346 L10.2676 26.9776 L9.43712 26.4206 C9.41867 26.4482 9.40024 26.4757 9.38183 26.5032 L10.2132 27.0589 Z M13.7677 22.2657 L14.5409 22.8999 C14.5612 22.8751 14.5816 22.8503 14.602 22.8256 L13.8298 22.1901 L13.0577 21.5547 C13.0366 21.5803 13.0156 21.6059 12.9946 21.6315 L13.7677 22.2657 Z M17.7729 17.8421 L18.4806 18.5486 C18.5033 18.5259 18.5259 18.5033 18.5487 18.4806 L17.8421 17.7729 L17.1356 17.0652 C17.1121 17.0887 17.0887 17.1121 17.0652 17.1356 L17.7729 17.8421 Z M22.1901 13.8298 L22.8256 14.602 C22.8503 14.5816 22.8751 14.5612 22.8999 14.5409 L22.2657 13.7677 L21.6315 12.9945 C21.6059 13.0156 21.5803 13.0366 21.5547 13.0577 L22.1901 13.8298 Z M26.9776 10.2676 L27.5346 11.0982 C27.5612 11.0803 27.5879 11.0625 27.6145 11.0447 L27.0589 10.2132 L26.5033 9.38182 C26.4757 9.40023 26.4482 9.41866 26.4207 9.43712 L26.9776 10.2676 Z M32.0907 7.19113 L32.5635 8.07227 C32.5918 8.05712 32.62 8.04199 32.6483 8.02688 L32.1768 7.14498 L31.7054 6.26308 C31.6762 6.27869 31.647 6.29433 31.6178 6.30999 L32.0907 7.19113 Z M37.4812 4.632 L37.865 5.55542 C37.8946 5.54313 37.9242 5.53086 37.9538 5.51862 L37.5715 4.59458 L37.1892 3.67053 C37.1586 3.68319 37.128 3.69587 37.0974 3.70858 L37.4812 4.632 Z M43.0979 2.61704 L43.3886 3.57385 C43.4192 3.56455 43.4498 3.55527 43.4805 3.54601 L43.1913 2.58873 L42.9022 1.63145 C42.8705 1.64102 42.8388 1.65061 42.8072 1.66023 L43.0979 2.61704 Z M48.8862 1.16667 L49.0811 2.1475 C49.1124 2.14127 49.1438 2.13506 49.1752 2.12888 L48.982 1.14773 L48.7887 0.166584 C48.7562 0.172975 48.7238 0.179392 48.6914 0.185833 L48.8862 1.16667 Z M54.7897 0.29329 L54.8874 1.28851 C54.9192 1.28539 54.951 1.2823 54.9828 1.27923 L54.8867 0.28385 L54.7907 -0.711525 C54.7578 -0.708353 54.7249 -0.705155 54.6921 -0.701931 L54.7897 0.29329 Z M60.7508 1.94811e-05 L60.7516 1.00002 C60.7677 1.00001 60.7839 1 60.8 1 L60.8 0 L60.8 -1 C60.7833 -1 60.7667 -0.999993 60.75 -0.99998 L60.7508 1.94811e-05 Z M60.8 0 L60.8 1 C60.8161 1 60.8323 1.00001 60.8484 1.00002 L60.8492 1.94864e-05 L60.85 -0.99998 C60.8333 -0.999993 60.8167 -1 60.8 -1 L60.8 0 Z M66.7133 0.283851 L66.6172 1.27923 C66.649 1.2823 66.6808 1.28539 66.7126 1.28851 L66.8103 0.293291 L66.9079 -0.70193 C66.8751 -0.705154 66.8422 -0.708352 66.8093 -0.711524 L66.7133 0.283851 Z M72.618 1.14773 L72.4248 2.12888 C72.4562 2.13506 72.4876 2.14127 72.5189 2.1475 L72.7138 1.16667 L72.9086 0.185835 C72.8762 0.179393 72.8438 0.172977 72.8113 0.166586 L72.618 1.14773 Z M78.4087 2.58873 L78.1195 3.54601 C78.1502 3.55527 78.1808 3.56455 78.2114 3.57386 L78.5021 2.61705 L78.7929 1.66024 C78.7612 1.65062 78.7295 1.64102 78.6978 1.63145 L78.4087 2.58873 Z M84.0285 4.59458 L83.6463 5.51862 C83.6759 5.53087 83.7054 5.54314 83.735 5.55543 L84.1188 4.63201 L84.5026 3.70858 C84.472 3.69588 84.4414 3.6832 84.4108 3.67054 L84.0285 4.59458 Z M89.4232 7.14499 L88.9517 8.02689 C88.98 8.042 89.0083 8.05713 89.0365 8.07228 L89.5093 7.19114 L89.9822 6.31 C89.953 6.29434 89.9238 6.2787 89.8946 6.26308 L89.4232 7.14499 Z M94.5411 10.2132 L93.9855 11.0447 C94.0121 11.0625 94.0388 11.0803 94.0654 11.0982 L94.6224 10.2676 L95.1794 9.43712 C95.1518 9.41867 95.1243 9.40024 95.0968 9.38183 L94.5411 10.2132 Z M99.3343 13.7677 L98.7001 14.5409 C98.7249 14.5612 98.7497 14.5816 98.7744 14.602 L99.4099 13.8298 L100.045 13.0577 C100.02 13.0366 99.9941 13.0156 99.9685 12.9946 L99.3343 13.7677 Z M103.758 17.7729 L103.051 18.4806 C103.074 18.5033 103.097 18.5259 103.119 18.5487 L103.827 17.8421 L104.535 17.1356 C104.511 17.1121 104.488 17.0887 104.464 17.0652 L103.758 17.7729 Z M107.77 22.1901 L106.998 22.8256 C107.018 22.8503 107.039 22.8751 107.059 22.8999 L107.832 22.2657 L108.605 21.6315 C108.584 21.6059 108.563 21.5803 108.542 21.5547 L107.77 22.1901 Z M111.332 26.9776 L110.502 27.5346 C110.52 27.5612 110.538 27.5879 110.555 27.6145 L111.387 27.0589 L112.218 26.5033 C112.2 26.4757 112.181 26.4482 112.163 26.4207 L111.332 26.9776 Z M114.409 32.0907 L113.528 32.5635 C113.543 32.5918 113.558 32.62 113.573 32.6483 L114.455 32.1768 L115.337 31.7054 C115.321 31.6762 115.306 31.647 115.29 31.6178 L114.409 32.0907 Z M116.968 37.4812 L116.045 37.865 C116.057 37.8946 116.069 37.9242 116.081 37.9538 L117.005 37.5715 L117.929 37.1892 C117.917 37.1586 117.904 37.128 117.891 37.0974 L116.968 37.4812 Z M118.983 43.0979 L118.026 43.3886 C118.035 43.4192 118.045 43.4498 118.054 43.4805 L119.011 43.1913 L119.969 42.9022 C119.959 42.8705 119.949 42.8388 119.94 42.8072 L118.983 43.0979 Z M120.433 48.8862 L119.452 49.0811 C119.459 49.1124 119.465 49.1438 119.471 49.1752 L120.452 48.982 L121.433 48.7887 C121.427 48.7562 121.421 48.7238 121.414 48.6914 L120.433 48.8862 Z M121.307 54.7897 L120.311 54.8874 C120.315 54.9192 120.318 54.951 120.321 54.9828 L121.316 54.8867 L122.312 54.7907 C122.308 54.7578 122.305 54.7249 122.302 54.6921 L121.307 54.7897 Z M121.6 60.7508 L120.6 60.7516 C120.6 60.7677 120.6 60.7839 120.6 60.8 L121.6 60.8 L122.6 60.8 C122.6 60.7833 122.6 60.7667 122.6 60.75 L121.6 60.7508 Z" fill="#feb179"/></svg>
            <svg style={{ position: "absolute", left: "130.46px", top: "21.16px", width: "14.58px", height: "14.58px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14.58" height="14.58" viewBox="0 0 14.58 14.58" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14.58 7.29 C14.58 11.3162 11.3162 14.58 7.29 14.58 C3.26384 14.58 0 11.3162 0 7.29 C0 3.26384 3.26384 0 7.29 0 C11.3162 0 14.58 3.26384 14.58 7.29 Z" fill="#ffffff"/><path transform="matrix(1 0 0 1 0 0)" d="M14.58 7.29 L12.08 7.29 C12.08 9.93544 9.93544 12.08 7.29 12.08 L7.29 14.58 L7.29 17.08 C12.6969 17.08 17.08 12.6969 17.08 7.29 L14.58 7.29 Z M7.29 14.58 L7.29 12.08 C4.64456 12.08 2.5 9.93544 2.5 7.29 L0 7.29 L-2.5 7.29 C-2.5 12.6969 1.88313 17.08 7.29 17.08 L7.29 14.58 Z M0 7.29 L2.5 7.29 C2.5 4.64456 4.64456 2.5 7.29 2.5 L7.29 0 L7.29 -2.5 C1.88313 -2.5 -2.5 1.88313 -2.5 7.29 L0 7.29 Z M7.29 0 L7.29 2.5 C9.93544 2.5 12.08 4.64456 12.08 7.29 L14.58 7.29 L17.08 7.29 C17.08 1.88313 12.6969 -2.5 7.29 -2.5 L7.29 0 Z" fill="#fe710c"/></svg>
            <div style={{ position: "absolute", left: "68.5px", top: "57px", width: "43px", height: "31px", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "31px", fontFamily: "'Geist'", fontSize: "24px", fontWeight: 500, color: "#1f1f22" }}>71%</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div data-fu="row" style={{ width: "220px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#484ff5", boxShadow: "inset 0 0 0 1px rgba(214, 214, 214, 0.4), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em" }}>Passing</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>32</p>
            </div>
            <div data-fu="row" style={{ width: "220px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#9ea3ff", boxShadow: "inset 0 0 0 1px rgba(214, 214, 214, 0.4), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em" }}>Needs evidence</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>8</p>
            </div>
            <div data-fu="row" style={{ width: "220px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#e5484d", boxShadow: "inset 0 0 0 1px rgba(214, 214, 214, 0.4), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em" }}>Failing</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>5</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "10px", height: "9px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none" overflow="visible"><path transform="matrix(-1 0 0 -1 10 9)" d="M5 0 L9.33013 6.75 L0.669873 6.75 L5 0 Z" fill="#e5484d"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858" }}>−4 pts</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858" }}>since 1 Oct</p>
            </div>
          </div>
        </div>
        <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a", lineHeight: "1.3300000429153442" }}>ARTICLES</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div data-fu="row" style={{ width: "460px", height: "42px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "0px 8px 1px 8px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 500, color: "#8a8a8a" }}>Art. 9</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>Risk management</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(254, 113, 12, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(254, 113, 12, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(254, 113, 12, 0.16)" }} />
            </div>
            <p style={{ width: "48px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#555555" }}>6 of 8</p>
            <div style={{ width: "72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(254, 113, 12, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#fe710c"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fe710c", letterSpacing: "-0.01em" }}>Partial</p>
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ width: "460px", height: "42px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "0px 8px 1px 8px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 500, color: "#8a8a8a" }}>Art. 10</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>Data governance</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #46bd86 0%, #2db475 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #46bd86 0%, #2db475 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #46bd86 0%, #2db475 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #46bd86 0%, #2db475 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #46bd86 0%, #2db475 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #46bd86 0%, #2db475 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #46bd86 0%, #2db475 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #46bd86 0%, #2db475 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #46bd86 0%, #2db475 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #46bd86 0%, #2db475 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #46bd86 0%, #2db475 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #46bd86 0%, #2db475 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #46bd86 0%, #2db475 100%)" }} />
            </div>
            <p style={{ width: "48px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#555555" }}>5 of 5</p>
            <div style={{ width: "72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(45, 180, 117, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#2db475"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2db475", letterSpacing: "-0.01em" }}>Passing</p>
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ width: "460px", height: "42px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "0px 8px 1px 8px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 500, color: "#8a8a8a" }}>Art. 12</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "105px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>Record-keeping</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(254, 113, 12, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(254, 113, 12, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(254, 113, 12, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(254, 113, 12, 0.16)" }} />
            </div>
            <p style={{ width: "48px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#555555" }}>4 of 6</p>
            <div style={{ width: "72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(254, 113, 12, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#fe710c"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fe710c", letterSpacing: "-0.01em" }}>Partial</p>
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ width: "460px", height: "42px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "0px 8px 1px 8px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 500, color: "#8a8a8a" }}>Art. 13</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>Transparency</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(254, 113, 12, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(254, 113, 12, 0.16)" }} />
            </div>
            <p style={{ width: "48px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#555555" }}>6 of 7</p>
            <div style={{ width: "72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(254, 113, 12, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#fe710c"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fe710c", letterSpacing: "-0.01em" }}>Partial</p>
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ width: "460px", height: "42px", flexShrink: 0, borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px #e8e8eb", display: "flex", flexDirection: "row", padding: "0px 8px 0px 8px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 500, color: "#8a8a8a" }}>Art. 14</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>Human oversight</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e85e62 0%, #e5484d 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e85e62 0%, #e5484d 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e85e62 0%, #e5484d 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(229, 72, 77, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(229, 72, 77, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(229, 72, 77, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(229, 72, 77, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(229, 72, 77, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(229, 72, 77, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(229, 72, 77, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(229, 72, 77, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(229, 72, 77, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(229, 72, 77, 0.16)" }} />
            </div>
            <p style={{ width: "48px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#555555" }}>1 of 4</p>
            <div style={{ width: "72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(229, 72, 77, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#e5484d"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e5484d", letterSpacing: "-0.01em" }}>Failing</p>
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ width: "460px", height: "42px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ececec", display: "flex", flexDirection: "row", padding: "0px 8px 0px 8px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 500, color: "#8a8a8a" }}>Art. 15</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "151px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>Accuracy & robustness</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #fe8229 0%, #fe710c 100%)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(254, 113, 12, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(254, 113, 12, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(254, 113, 12, 0.16)" }} />
              <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(254, 113, 12, 0.16)" }} />
            </div>
            <p style={{ width: "48px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#555555" }}>10 of 15</p>
            <div style={{ width: "72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(254, 113, 12, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#fe710c"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fe710c", letterSpacing: "-0.01em" }}>Partial</p>
              </div>
            </div>
          </div>
        </div>
        <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a", lineHeight: "1.3300000429153442" }}>BIGGEST GAP</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "column", padding: "15px 15px 15px 15px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <AlertTriangle size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#e5484d", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "213px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#2d2d2d" }}>Art. 14 · no human approval step</p>
          </div>
          <p style={{ width: "430px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#555555", lineHeight: "1.4500000476837158" }}>Claims Triage, Finance Ops and HR Helpdesk agents can complete actions without a reviewer. Enforcing TL-05 plus one approval policy closes 2 of the 3 open controls.</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a", lineHeight: "1.3300000429153442" }}>RECENT EVIDENCE</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div data-fu="row" style={{ width: "460px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <FileTypePdf size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "218px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#2d2d2d" }}>Model card · Support Copilot.pdf</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "149px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555" }}>Art. 13 · Hana Sato · 28 Oct</p>
            </div>
            <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(45, 180, 117, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2db475", letterSpacing: "-0.01em" }}>Accepted</p>
            </div>
          </div>
          <div data-fu="row" style={{ width: "460px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <File size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "160px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#2d2d2d" }}>Risk register export.csv</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "164px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555" }}>Art. 9 · Omar Haddad · 24 Oct</p>
            </div>
            <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(45, 180, 117, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2db475", letterSpacing: "-0.01em" }}>Accepted</p>
            </div>
          </div>
          <div data-fu="row" style={{ width: "460px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <FileZip size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "162px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#2d2d2d" }}>Agent audit logs Oct.zip</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "174px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555" }}>Art. 12 · auto-collected · 30 Oct</p>
            </div>
            <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(45, 180, 117, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2db475", letterSpacing: "-0.01em" }}>Accepted</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0 }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "15px 20px 14px 20px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "32px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Link size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#353537", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#353537" }}>Copy link</p>
        </div>
        <div data-fu="btn" style={{ height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "1px 9px 1px 9px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <UserPlus size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#353537", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", lineHeight: "17px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>Assign owners</p>
        </div>
        <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "11px", background: "#347bf9", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ height: "32px", flexShrink: 0, borderRadius: "10px", background: "linear-gradient(90deg, #0f61f3 28%, #5895ff 100%)", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <FileExport size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "136px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.149999976158142" }}>Generate gap report</p>
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
