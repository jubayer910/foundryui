"use client";
// Account, Stripe Balance card (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { CreditCard, Dots } from "ingotui-icons/react/stroke-rounded";

export function AccountStripeBalanceCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "339.04px", height: "226.2px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "18.28px", top: "18.28px", width: "165.21px", height: "33.74px", display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "31.07px", height: "31.07px", flexShrink: 0, borderRadius: "6.21px", background: "linear-gradient(180deg, #0ab7bd 0%, #a9fcff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <CreditCard size={14.9} style={{ width: "14.91px", height: "14.91px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Stripe Balance</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Processor · daily payouts</p>
        </div>
      </div>
      <p style={{ position: "absolute", left: "18.28px", top: "71.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Balance</p>
      <div style={{ position: "absolute", left: "18.28px", top: "87.73px", width: "175.07px", height: "29px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020", letterSpacing: "-0.01em" }}>$1,840</p>
        <div style={{ flexShrink: 0, borderRadius: "4.57px", background: "rgba(24, 177, 112, 0.1)", display: "flex", flexDirection: "row", padding: "1.37px 4.57px 1.37px 4.57px", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "5.48px", height: "4.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="4.57" viewBox="0 0 5.48 4.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 4.57 L5.48 4.57 L2.74 0 L0 4.57 Z" fill="#18b170"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.51px", fontWeight: 500, color: "#18b170" }}>+18.2%</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#a6a6a6" }}>30 days</p>
      </div>
      <svg data-fu="plot" style={{ position: "absolute", left: "18.28px", top: "124.29px", width: "302.48px", height: "38.38px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="302.48" height="38.38" viewBox="0 0 302.48 38.38" fill="none" overflow="visible"><defs><linearGradient id="g5_t5ab" gradientUnits="userSpaceOnUse" x1="148.50" y1="0.00" x2="148.50" y2="35.64"><stop offset="0" stopColor="#0ab7bd" stopOpacity="0.16"/><stop offset="1" stopColor="#0ab7bd" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 0.91 2.74)" d="M0 25.14 C0.61 25.3 9.01 27.59 10.24 27.7 C11.47 27.82 19.25 27.19 20.48 27.1 C21.71 27 29.5 25.9 30.72 26.08 C31.95 26.25 39.74 29.67 40.97 30 C42.19 30.33 49.98 31.29 51.21 31.52 C52.44 31.75 60.22 33.94 61.45 33.81 C62.68 33.68 70.46 29.97 71.69 29.44 C72.92 28.9 80.7 25.42 81.93 24.87 C83.16 24.32 90.94 20.3 92.17 20.27 C93.4 20.24 101.18 24.08 102.41 24.34 C103.64 24.61 111.43 24.45 112.66 24.7 C113.88 24.95 121.67 28.35 122.9 28.48 C124.13 28.61 131.91 26.94 133.14 26.81 C134.37 26.67 142.15 26.5 143.38 26.21 C144.61 25.91 152.39 22.25 153.62 21.94 C154.85 21.63 162.63 21.04 163.86 21.04 C165.09 21.03 172.87 22.22 174.1 21.88 C175.33 21.54 183.12 15.57 184.34 15.36 C185.57 15.14 193.36 18.23 194.59 18.31 C195.82 18.39 203.6 16.66 204.83 16.66 C206.06 16.66 213.84 18.34 215.07 18.31 C216.3 18.27 224.08 16.38 225.31 16.09 C226.54 15.79 234.32 13.75 235.55 13.4 C236.78 13.06 244.56 10.71 245.79 10.34 C247.02 9.98 254.81 7.43 256.03 7.32 C257.26 7.21 265.05 8.63 266.28 8.54 C267.5 8.45 275.29 6.04 276.52 5.82 C277.75 5.6 285.53 5.19 286.76 4.84 C287.99 4.49 296.39 0.29 297 0 L297 35.64 L0 35.64 L0 25.14 Z" fill="url(#g5_t5ab)"/><path transform="matrix(1 0 0 1 0.91 2.74)" d="M0.162376 24.5209 C-0.179521 24.4313 -0.529381 24.6357 -0.619059 24.9776 C-0.708737 25.3195 -0.504273 25.6694 -0.162376 25.7591 L0 25.14 L0.162376 24.5209 Z M10.24 27.7 L10.3021 27.063 L10.297 27.0625 L10.24 27.7 Z M20.48 27.1 L20.5267 27.7383 L20.5319 27.7379 L20.48 27.1 Z M30.72 26.08 L30.6266 26.7132 L30.6324 26.714 L30.72 26.08 Z M40.97 30 L41.1371 29.3822 L41.1358 29.3819 L40.97 30 Z M71.69 29.44 L71.9433 30.0278 L71.9473 30.026 L71.69 29.44 Z M102.41 24.34 L102.547 23.7149 L102.542 23.7138 L102.41 24.34 Z M112.66 24.7 L112.788 24.073 L112.787 24.0728 L112.66 24.7 Z M133.14 26.81 L133.207 27.4465 L133.212 27.4459 L133.14 26.81 Z M143.38 26.21 L143.527 26.8329 L143.532 26.8318 L143.38 26.21 Z M163.86 21.04 L163.86 21.68 L163.865 21.68 L163.86 21.04 Z M184.34 15.36 L184.449 15.9907 L184.453 15.99 L184.34 15.36 Z M215.07 18.31 L215.086 18.9498 L215.091 18.9497 L215.07 18.31 Z M225.31 16.09 L225.457 16.7129 L225.462 16.7118 L225.31 16.09 Z M235.55 13.4 L235.379 12.7831 L235.375 12.7844 L235.55 13.4 Z M245.79 10.34 L245.61 9.72575 L245.606 9.72713 L245.79 10.34 Z M256.03 7.32 L255.973 6.68254 L255.973 6.68259 L256.03 7.32 Z M266.28 8.54 L266.327 9.17829 L266.327 9.17827 L266.28 8.54 Z M297.275 0.578006 C297.594 0.426244 297.73 0.0444342 297.578 -0.27479 C297.426 -0.594013 297.044 -0.729768 296.725 -0.578006 L297 0 L297.275 0.578006 Z M0 25.14 L-0.162376 25.7591 C0.122872 25.8339 2.40617 26.4544 4.72634 27.0581 C5.89274 27.3616 7.0817 27.6644 8.0576 27.8984 C9.0085 28.1265 9.81773 28.3048 10.183 28.3375 L10.24 27.7 L10.297 27.0625 C10.0473 27.0402 9.34525 26.891 8.35615 26.6537 C7.39205 26.4225 6.21226 26.1221 5.04866 25.8194 C2.70883 25.2106 0.487128 24.6061 0.162376 24.5209 L0 25.14 Z M10.24 27.7 L10.1779 28.337 C10.5417 28.3725 11.3111 28.3516 12.2162 28.3088 C13.1443 28.2649 14.2757 28.1942 15.4036 28.1173 C17.657 27.9635 19.9194 27.7827 20.5267 27.7383 L20.48 27.1 L20.4333 26.4617 C19.8106 26.5073 17.568 26.6865 15.3164 26.8402 C14.1918 26.917 13.0707 26.987 12.1557 27.0302 C11.2176 27.0746 10.5533 27.0875 10.3021 27.063 L10.24 27.7 Z M20.48 27.1 L20.5319 27.7379 C21.1612 27.6867 23.4516 27.3825 25.6785 27.1206 C26.8036 26.9883 27.9222 26.8655 28.8332 26.787 C29.2891 26.7477 29.6872 26.72 30.0053 26.7076 C30.3383 26.6945 30.5395 26.7003 30.6266 26.7131 L30.72 26.08 L30.8134 25.4469 C30.5955 25.4147 30.2864 25.4155 29.9551 25.4285 C29.6088 25.4421 29.1886 25.4716 28.7233 25.5117 C27.7921 25.592 26.6577 25.7167 25.529 25.8494 C23.2484 26.1175 21.0288 26.4133 20.4281 26.4621 L20.48 27.1 Z M30.72 26.08 L30.6324 26.714 C30.7207 26.7262 30.9254 26.7797 31.2617 26.8912 C31.5826 26.9976 31.9831 27.1428 32.4407 27.3163 C33.3552 27.6629 34.4764 28.1141 35.6038 28.5728 C36.7277 29.0301 37.86 29.4958 38.7844 29.8663 C39.6901 30.2292 40.4506 30.5233 40.8042 30.6181 L40.97 30 L41.1358 29.3819 C40.8744 29.3117 40.1999 29.0545 39.2606 28.6781 C38.34 28.3092 37.2173 27.8474 36.0862 27.3872 C34.9586 26.9284 33.8248 26.4721 32.8943 26.1194 C32.4294 25.9431 32.0099 25.7907 31.6645 25.6762 C31.3346 25.5668 31.0268 25.4763 30.8076 25.446 L30.72 26.08 Z M40.97 30 L40.8029 30.6178 C41.1508 30.7119 41.9076 30.8391 42.8155 30.9771 C43.7414 31.1178 44.8718 31.2765 45.999 31.4315 C48.272 31.7442 50.4976 32.0379 51.0924 32.1491 L51.21 31.52 L51.3276 30.8909 C50.6924 30.7721 48.408 30.4708 46.1735 30.1635 C45.047 30.0085 43.9242 29.8509 43.0079 29.7116 C42.0736 29.5696 41.3992 29.4531 41.1371 29.3822 L40.97 30 Z M51.21 31.52 L51.0924 32.1491 C51.6833 32.2596 53.8871 32.8521 56.1756 33.4211 C57.3038 33.7016 58.4401 33.9728 59.3744 34.1661 C59.8411 34.2626 60.265 34.3413 60.6162 34.3918 C60.9471 34.4394 61.2752 34.472 61.5173 34.4465 L61.45 33.81 L61.3827 33.1735 C61.3173 33.1805 61.1333 33.1731 60.7985 33.1249 C60.4839 33.0796 60.0886 33.0067 59.6337 32.9126 C58.7249 32.7247 57.6087 32.4584 56.4844 32.1789 C54.2679 31.6279 51.9667 31.0104 51.3276 30.8909 L51.21 31.52 Z M61.45 33.81 L61.5173 34.4465 C61.7527 34.4216 62.0727 34.3251 62.4016 34.2116 C62.7498 34.0914 63.1712 33.929 63.6368 33.7398 C64.569 33.3611 65.7035 32.8649 66.8319 32.359 C69.111 31.337 71.3286 30.2926 71.9433 30.0278 L71.69 29.44 L71.4367 28.8522 C70.8214 29.1174 68.534 30.193 66.3082 31.191 C65.184 31.6951 64.066 32.1839 63.1551 32.5539 C62.6991 32.7392 62.3013 32.8921 61.9838 33.0017 C61.647 33.118 61.4548 33.1659 61.3827 33.1735 L61.45 33.81 Z M71.69 29.44 L71.9473 30.026 C73.1799 29.4849 80.9634 26.0033 82.1913 25.4543 L81.93 24.87 L81.6687 24.2858 C80.4366 24.8367 72.6601 28.3151 71.4327 28.854 L71.69 29.44 Z M81.93 24.87 L82.1913 25.4543 C82.8118 25.1768 85.1067 24.014 87.3262 22.9523 C88.4499 22.4148 89.5656 21.8974 90.4733 21.5135 C90.9279 21.3213 91.3219 21.1662 91.6345 21.0593 C91.7908 21.0058 91.9197 20.9668 92.0211 20.9414 C92.0715 20.9288 92.1113 20.9206 92.1415 20.9155 C92.1729 20.9103 92.1862 20.9098 92.1856 20.9098 L92.17 20.27 L92.1544 19.6302 C91.8897 19.6366 91.5469 19.7364 91.2201 19.8482 C90.867 19.969 90.4418 20.1371 89.9748 20.3346 C89.0394 20.7301 87.9026 21.2577 86.7738 21.7977 C84.4883 22.891 82.2782 24.0132 81.6687 24.2858 L81.93 24.87 Z M92.17 20.27 L92.1856 20.9098 C92.1828 20.9099 92.1942 20.9095 92.2242 20.9133 C92.253 20.9169 92.2916 20.9234 92.3411 20.9339 C92.4408 20.9551 92.5684 20.9892 92.7241 21.0372 C93.0354 21.1332 93.4285 21.2754 93.8831 21.4529 C94.7912 21.8074 95.9067 22.288 97.0328 22.7823 C98.1527 23.2739 99.2871 23.7809 100.211 24.1781 C100.674 24.3771 101.092 24.5517 101.435 24.6855 C101.764 24.8138 102.066 24.9213 102.278 24.9662 L102.41 24.34 L102.542 23.7138 C102.447 23.6937 102.237 23.6244 101.9 23.493 C101.577 23.3671 101.175 23.1993 100.717 23.0022 C99.7979 22.6072 98.6798 22.1074 97.5472 21.6102 C96.4208 21.1158 95.2838 20.6257 94.3487 20.2606 C93.8818 20.0782 93.4557 19.9233 93.1013 19.814 C92.775 19.7134 92.4258 19.6236 92.1544 19.6302 L92.17 20.27 Z M102.41 24.34 L102.273 24.9651 C102.652 25.0484 103.44 25.0885 104.339 25.1147 C105.268 25.1418 106.402 25.155 107.528 25.1675 C108.657 25.18 109.779 25.1918 110.696 25.216 C111.64 25.241 112.293 25.2784 112.533 25.3272 L112.66 24.7 L112.787 24.0728 C112.413 23.9966 111.63 23.9603 110.729 23.9365 C109.801 23.9119 108.668 23.9 107.542 23.8875 C106.413 23.875 105.292 23.8619 104.376 23.8353 C103.43 23.8077 102.783 23.7666 102.547 23.7149 L102.41 24.34 Z M112.66 24.7 L112.532 25.327 C112.771 25.3761 113.427 25.6098 114.371 25.9748 C115.288 26.3292 116.41 26.7796 117.539 27.2296 C118.666 27.6781 119.8 28.1259 120.731 28.47 C121.196 28.6419 121.616 28.7902 121.963 28.9004 C122.292 29.0051 122.606 29.0925 122.833 29.1165 L122.9 28.48 L122.967 27.8435 C122.886 27.835 122.688 27.7877 122.351 27.6806 C122.031 27.579 121.632 27.4384 121.175 27.2694 C120.261 26.9316 119.14 26.4894 118.013 26.0404 C116.889 25.5929 115.758 25.1383 114.832 24.7808 C113.935 24.4339 113.159 24.1489 112.788 24.073 L112.66 24.7 Z M122.9 28.48 L122.833 29.1165 C123.059 29.1404 123.375 29.121 123.707 29.0877 C124.055 29.0527 124.477 28.9958 124.942 28.9249 C125.874 28.783 127.009 28.5808 128.137 28.3718 C130.425 27.9476 132.625 27.508 133.207 27.4465 L133.14 26.81 L133.073 26.1735 C132.425 26.242 130.12 26.7024 127.903 27.1132 C126.778 27.3217 125.66 27.5208 124.75 27.6595 C124.294 27.7289 123.896 27.7822 123.579 27.8141 C123.244 27.8477 123.048 27.8521 122.967 27.8435 L122.9 28.48 Z M133.14 26.81 L133.212 27.4459 C133.797 27.3793 136.006 27.3031 138.287 27.2057 C139.414 27.1575 140.546 27.1045 141.475 27.0451 C142.377 26.9874 143.155 26.9205 143.527 26.8329 L143.38 26.21 L143.233 25.5871 C142.99 25.6445 142.334 25.7076 141.393 25.7677 C140.479 25.8262 139.358 25.8787 138.233 25.9268 C136.009 26.0219 133.713 26.1007 133.068 26.1741 L133.14 26.81 Z M143.38 26.21 L143.532 26.8318 C143.902 26.7415 144.675 26.4304 145.575 26.0492 C146.502 25.6569 147.633 25.1597 148.758 24.6645 C149.885 24.1683 151.007 23.6743 151.924 23.2849 C152.866 22.8848 153.529 22.623 153.776 22.5606 L153.62 21.94 L153.464 21.3194 C153.096 21.412 152.325 21.7239 151.424 22.1067 C150.498 22.5001 149.367 22.9979 148.242 23.493 C147.115 23.9891 145.993 24.4824 145.076 24.8705 C144.134 25.2696 143.473 25.5285 143.228 25.5882 L143.38 26.21 Z M153.62 21.94 L153.776 22.5606 C154.031 22.4964 154.698 22.4054 155.634 22.3049 C156.549 22.2068 157.669 22.1045 158.793 22.0116 C161.054 21.8246 163.277 21.68 163.86 21.68 L163.86 21.04 L163.86 20.4 C163.213 20.4 160.931 20.5504 158.687 20.7359 C157.558 20.8293 156.426 20.9326 155.498 21.0322 C154.59 21.1296 153.824 21.2286 153.464 21.3194 L153.62 21.94 Z M163.86 21.04 L163.865 21.68 C164.124 21.6779 164.793 21.7437 165.734 21.8507 C166.637 21.9535 167.793 22.0941 168.908 22.2197 C170.036 22.3468 171.174 22.4647 172.11 22.5293 C172.578 22.5615 173.004 22.5811 173.357 22.5811 C173.691 22.5811 174.025 22.5648 174.271 22.4969 L174.1 21.88 L173.929 21.2631 C173.868 21.2802 173.69 21.3011 173.357 21.3011 C173.045 21.3011 172.652 21.2836 172.198 21.2523 C171.291 21.1897 170.176 21.0745 169.052 20.9478 C167.914 20.8197 166.818 20.6859 165.878 20.5789 C164.976 20.4763 164.211 20.3971 163.855 20.4 L163.86 21.04 Z M174.1 21.88 L174.271 22.4969 C174.518 22.4285 174.844 22.2531 175.168 22.0623 C175.515 21.8577 175.936 21.5886 176.401 21.281 C177.33 20.6655 178.464 19.8758 179.588 19.0973 C180.717 18.3157 181.835 17.5452 182.745 16.9572 C183.201 16.663 183.597 16.4201 183.91 16.2463 C184.067 16.1594 184.196 16.0939 184.298 16.0488 C184.408 15.9997 184.452 15.9902 184.449 15.9907 L184.34 15.36 L184.231 14.7293 C184.076 14.7561 183.916 14.8178 183.777 14.8794 C183.63 14.945 183.465 15.0296 183.29 15.1267 C182.939 15.3209 182.516 15.5816 182.051 15.8818 C181.12 16.483 179.985 17.2656 178.859 18.0452 C177.729 18.828 176.609 19.6076 175.694 20.2137 C175.236 20.5169 174.837 20.7716 174.518 20.9594 C174.176 21.1609 173.99 21.2465 173.929 21.2631 L174.1 21.88 Z M184.34 15.36 L184.453 15.99 C184.449 15.9906 184.488 15.985 184.59 15.9937 C184.686 16.0018 184.81 16.0197 184.963 16.049 C185.27 16.1076 185.66 16.205 186.114 16.3329 C187.02 16.5882 188.134 16.9519 189.262 17.3294 C190.382 17.7045 191.519 18.0946 192.446 18.3935 C192.91 18.5432 193.331 18.6729 193.677 18.7683 C194.006 18.8588 194.321 18.9338 194.548 18.9487 L194.59 18.31 L194.632 17.6713 C194.552 17.6662 194.354 17.6272 194.017 17.5342 C193.697 17.4462 193.297 17.323 192.839 17.1753 C191.921 16.8792 190.803 16.4955 189.668 16.1156 C188.541 15.7381 187.4 15.3655 186.461 15.1009 C185.992 14.9687 185.562 14.8602 185.203 14.7917 C184.874 14.7289 184.511 14.6793 184.227 14.73 L184.34 15.36 Z M194.59 18.31 L194.548 18.9487 C194.768 18.9629 195.077 18.937 195.408 18.8976 C195.755 18.8563 196.175 18.7936 196.639 18.7175 C197.569 18.5652 198.703 18.3551 199.828 18.144 C200.957 17.9323 202.078 17.7196 202.994 17.5595 C203.939 17.3944 204.591 17.3 204.83 17.3 L204.83 16.66 L204.83 16.02 C204.454 16.02 203.672 16.1418 202.774 16.2986 C201.847 16.4604 200.715 16.6752 199.592 16.886 C198.465 17.0974 197.346 17.3048 196.432 17.4544 C195.976 17.5292 195.576 17.5885 195.257 17.6266 C194.922 17.6664 194.72 17.6771 194.632 17.6713 L194.59 18.31 Z M204.83 16.66 L204.83 17.3 C205.07 17.3 205.724 17.392 206.668 17.5529 C207.585 17.709 208.706 17.9171 209.834 18.1256 C210.959 18.3335 212.091 18.5418 213.019 18.6962 C213.916 18.8453 214.703 18.9591 215.086 18.9498 L215.07 18.31 L215.054 17.6702 C214.822 17.6759 214.175 17.5909 213.229 17.4335 C212.314 17.2813 211.194 17.0753 210.066 16.8669 C208.942 16.6591 207.81 16.4491 206.883 16.2911 C205.985 16.138 205.205 16.02 204.83 16.02 L204.83 16.66 Z M215.07 18.31 L215.091 18.9497 C215.464 18.9375 216.242 18.7975 217.143 18.6142 C218.072 18.4254 219.204 18.175 220.332 17.9177 C222.588 17.4033 224.847 16.8566 225.457 16.7129 L225.31 16.09 L225.163 15.4671 C224.543 15.6134 222.297 16.1567 220.048 16.6698 C218.923 16.9262 217.803 17.174 216.888 17.3599 C215.947 17.5512 215.291 17.6625 215.049 17.6703 L215.07 18.31 Z M225.31 16.09 L225.462 16.7118 C226.698 16.4102 234.486 14.3681 235.725 14.0156 L235.55 13.4 L235.375 12.7844 C234.154 13.1319 226.382 15.1698 225.158 15.4682 L225.31 16.09 Z M235.55 13.4 L235.721 14.0169 C236.96 13.6743 244.753 11.3204 245.974 10.9529 L245.79 10.34 L245.606 9.72713 C244.367 10.0996 236.6 12.4457 235.379 12.7831 L235.55 13.4 Z M245.79 10.34 L245.97 10.9542 C246.589 10.7731 248.868 10.0382 251.103 9.34774 C252.228 9.00007 253.349 8.66158 254.262 8.40356 C255.206 8.13702 255.855 7.97834 256.087 7.95741 L256.03 7.32 L255.973 6.68259 C255.595 6.71666 254.813 6.91798 253.914 7.17175 C252.986 7.43405 251.853 7.77618 250.725 8.12476 C248.452 8.8268 246.221 9.5469 245.61 9.72577 L245.79 10.34 Z M256.03 7.32 L256.087 7.95746 C256.179 7.94923 256.385 7.954 256.719 7.98226 C257.04 8.00932 257.44 8.05419 257.897 8.11185 C258.812 8.22715 259.933 8.39052 261.062 8.55575 C262.188 8.72045 263.322 8.88702 264.251 9.00664 C264.715 9.06644 265.135 9.11526 265.479 9.14633 C265.811 9.17618 266.115 9.1938 266.327 9.17829 L266.28 8.54 L266.233 7.90171 C266.138 7.9087 265.929 7.90164 265.594 7.87149 C265.273 7.84255 264.872 7.79606 264.414 7.73711 C263.498 7.61923 262.377 7.45455 261.248 7.28925 C260.122 7.12448 258.988 6.9591 258.058 6.8419 C257.593 6.78331 257.173 6.73599 256.827 6.7068 C256.495 6.67881 256.189 6.66327 255.973 6.68254 L256.03 7.32 Z M266.28 8.54 L266.327 9.17827 C266.705 9.15042 267.487 8.96282 268.384 8.72696 C269.312 8.48312 270.444 8.16498 271.571 7.84432 C272.701 7.52279 273.824 7.19929 274.745 6.94145 C275.681 6.67932 276.363 6.49825 276.633 6.45 L276.52 5.82 L276.407 5.19 C276.062 5.25176 275.309 5.45443 274.4 5.70886 C273.476 5.96759 272.345 6.29346 271.221 6.61318 C270.094 6.93377 268.973 7.24876 268.059 7.48898 C267.115 7.73718 266.465 7.88458 266.233 7.90173 L266.28 8.54 Z M276.52 5.82 L276.633 6.45 C276.903 6.40173 277.583 6.33713 278.518 6.26118 C279.438 6.18646 280.559 6.10401 281.689 6.01685 C282.816 5.92996 283.948 5.83857 284.877 5.74674 C285.778 5.65769 286.56 5.56226 286.935 5.45556 L286.76 4.84 L286.585 4.22444 C286.345 4.29274 285.693 4.37981 284.751 4.47295 C283.837 4.5633 282.717 4.65379 281.591 4.74065 C280.468 4.82724 279.337 4.91042 278.414 4.98538 C277.506 5.05912 276.752 5.12827 276.407 5.19 L276.52 5.82 Z M286.76 4.84 L286.935 5.45556 C287.302 5.35116 288.111 4.99629 289.061 4.55801 C290.037 4.10793 291.226 3.53895 292.392 2.97335 C294.739 1.83508 296.969 0.723554 297.275 0.578006 L297 0 L296.725 -0.578006 C296.421 -0.433554 294.146 0.699921 291.833 1.82165 C290.669 2.38605 289.489 2.95082 288.525 3.39574 C287.535 3.85246 286.833 4.15384 286.585 4.22444 L286.76 4.84 Z" fill="#0ab7bd"/><path transform="matrix(1 0 0 1 295.63 0.46)" d="M4.57 2.285 C4.57 3.54697 3.54697 4.57 2.285 4.57 C1.02303 4.57 0 3.54697 0 2.285 C0 1.02303 1.02303 0 2.285 0 C3.54697 0 4.57 1.02303 4.57 2.285 Z" fill="#0ab7bd"/><path transform="matrix(1 0 0 1 295.63 0.46)" d="M4.57 2.285 L3.47 2.285 C3.47 2.93946 2.93946 3.47 2.285 3.47 L2.285 4.57 L2.285 5.67 C4.15448 5.67 5.67 4.15448 5.67 2.285 L4.57 2.285 Z M2.285 4.57 L2.285 3.47 C1.63054 3.47 1.1 2.93946 1.1 2.285 L0 2.285 L-1.1 2.285 C-1.1 4.15448 0.415516 5.67 2.285 5.67 L2.285 4.57 Z M0 2.285 L1.1 2.285 C1.1 1.63054 1.63054 1.1 2.285 1.1 L2.285 0 L2.285 -1.1 C0.415516 -1.1 -1.1 0.415516 -1.1 2.285 L0 2.285 Z M2.285 0 L2.285 1.1 C2.93946 1.1 3.47 1.63054 3.47 2.285 L4.57 2.285 L5.67 2.285 C5.67 0.415516 4.15448 -1.1 2.285 -1.1 L2.285 0 Z" fill="#ffffff"/></svg>
      <div style={{ position: "absolute", left: "0px", top: "184.16px", width: "339.04px", height: "0.91px", background: "#ededed" }} />
      <div style={{ position: "absolute", left: "18.28px", top: "198.18px", width: "101.88px", height: "14px", display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <svg style={{ width: "6.4px", height: "6.4px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.4" height="6.4" viewBox="0 0 6.4 6.4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.4 3.2 C6.4 4.96731 4.96731 6.4 3.2 6.4 C1.43269 6.4 0 4.96731 0 3.2 C0 1.43269 1.43269 0 3.2 0 C4.96731 0 6.4 1.43269 6.4 3.2 Z" fill="#18b170"/></svg>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Synced 5 min ago</p>
      </div>
      <div style={{ position: "absolute", left: "295.18px", top: "190.56px", width: "29.24px", height: "29.24px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
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
