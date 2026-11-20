"use client";
// Account, Chase Business Checking card (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { BuildingBank, Dots } from "ingotui-icons/react/stroke-rounded";

export function AccountChaseBusinessCheckingCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "339.04px", height: "226.2px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "18.28px", top: "18.28px", width: "196.21px", height: "33.74px", display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "31.07px", height: "31.07px", flexShrink: 0, borderRadius: "6.21px", background: "linear-gradient(180deg, #1db9e2 0%, #a1ebff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <BuildingBank size={14.9} style={{ width: "14.91px", height: "14.91px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "156px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Chase Business Checking</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Checking •••• 7703</p>
        </div>
      </div>
      <p style={{ position: "absolute", left: "18.28px", top: "71.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Balance</p>
      <div style={{ position: "absolute", left: "18.28px", top: "87.73px", width: "172.07px", height: "29px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020", letterSpacing: "-0.01em" }}>$7,460</p>
        <div style={{ flexShrink: 0, borderRadius: "4.57px", background: "rgba(24, 177, 112, 0.1)", display: "flex", flexDirection: "row", padding: "1.37px 4.57px 1.37px 4.57px", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "5.48px", height: "4.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="4.57" viewBox="0 0 5.48 4.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 4.57 L5.48 4.57 L2.74 0 L0 4.57 Z" fill="#18b170"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.51px", fontWeight: 500, color: "#18b170" }}>+3.4%</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#a6a6a6" }}>30 days</p>
      </div>
      <svg data-fu="plot" style={{ position: "absolute", left: "18.28px", top: "124.29px", width: "302.48px", height: "38.38px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="302.48" height="38.38" viewBox="0 0 302.48 38.38" fill="none" overflow="visible"><defs><linearGradient id="g3_t57x" gradientUnits="userSpaceOnUse" x1="148.50" y1="0.00" x2="148.50" y2="35.64"><stop offset="0" stopColor="#1db9e2" stopOpacity="0.16"/><stop offset="1" stopColor="#1db9e2" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 0.91 2.74)" d="M0 16.2518 C0.61 16.5818 9.01 21.2918 10.24 21.6718 C11.47 22.0518 19.25 22.6018 20.48 22.5818 C21.71 22.5618 29.5 21.2418 30.72 21.3218 C31.95 21.3918 39.74 23.3618 40.97 23.8318 C42.19 24.2918 49.98 28.5118 51.21 29.1118 C52.44 29.7118 60.22 33.6518 61.45 33.8118 C62.68 33.9718 70.46 31.9818 71.69 31.7218 C72.92 31.4618 80.7 29.6718 81.93 29.5018 C83.16 29.3318 90.94 29.2118 92.17 28.8918 C93.4 28.5718 101.18 24.8218 102.41 24.1518 C103.64 23.4918 111.43 17.9318 112.66 17.8118 C113.88 17.6918 121.67 22.1318 122.9 22.1318 C124.13 22.1218 131.91 17.8118 133.14 17.7218 C134.37 17.6218 142.15 20.1618 143.38 20.5318 C144.61 20.9118 152.39 23.7318 153.62 23.9418 C154.85 24.1618 162.63 23.9018 163.86 24.1118 C165.09 24.3318 172.87 28.5218 174.1 27.6018 C175.33 26.6818 183.12 9.91177 184.34 8.71177 C185.57 7.51177 193.36 7.77177 194.59 7.59177 C195.82 7.41177 203.6 6.03177 204.83 5.65177 C206.06 5.27177 213.84 1.57177 215.07 1.23177 C216.3 0.891772 224.08 0.0417724 225.31 0.00177243 C226.54 -0.0382276 234.32 0.611772 235.55 0.641772 C236.78 0.671772 244.56 0.241772 245.79 0.491772 C247.02 0.731772 254.81 4.20177 256.03 4.71177 C257.26 5.22177 265.05 8.41177 266.28 8.98177 C267.5 9.55177 275.29 13.9918 276.52 14.2218 C277.75 14.4418 285.53 12.5518 286.76 12.7118 C287.99 12.8718 296.39 16.5818 297 16.8318 L297 35.6418 L0 35.6418 L0 16.2518 Z" fill="url(#g3_t57x)"/><path transform="matrix(1 0 0 1 0.91 2.74)" d="M0.304524 15.6889 C-0.0063615 15.5207 -0.394724 15.6364 -0.562908 15.9472 C-0.731092 16.2581 -0.615409 16.6465 -0.304524 16.8147 L0 16.2518 L0.304524 15.6889 Z M30.72 21.3218 L30.6781 21.9604 L30.6836 21.9607 L30.72 21.3218 Z M40.97 23.8318 L40.7416 24.4296 L40.7442 24.4306 L40.97 23.8318 Z M102.41 24.1518 L102.107 23.5878 L102.104 23.5897 L102.41 24.1518 Z M112.66 17.8118 L112.722 18.4487 L112.723 18.4487 L112.66 17.8118 Z M122.9 22.1318 L122.9 22.7718 L122.905 22.7718 L122.9 22.1318 Z M133.14 17.7218 L133.187 18.3601 L133.192 18.3597 L133.14 17.7218 Z M143.38 20.5318 L143.569 19.9203 L143.564 19.9189 L143.38 20.5318 Z M153.62 23.9418 L153.733 23.3118 L153.728 23.3109 L153.62 23.9418 Z M163.86 24.1118 L163.973 23.4818 L163.968 23.4809 L163.86 24.1118 Z M184.34 8.71177 L183.893 8.25367 L183.891 8.2555 L184.34 8.71177 Z M245.79 0.491772 L245.663 1.11897 L245.667 1.11993 L245.79 0.491772 Z M256.03 4.71177 L255.783 5.30226 L255.785 5.30297 L256.03 4.71177 Z M266.28 8.98177 L266.551 8.40193 L266.549 8.40109 L266.28 8.98177 Z M276.52 14.2218 L276.402 14.8509 L276.407 14.8518 L276.52 14.2218 Z M296.757 17.424 C297.084 17.558 297.458 17.4015 297.592 17.0745 C297.726 16.7474 297.57 16.3736 297.243 16.2396 L297 16.8318 L296.757 17.424 Z M0 16.2518 L-0.304524 16.8147 C0.0227141 16.9917 2.21679 18.22 4.5819 19.5053 C5.74829 20.1392 6.93741 20.7765 7.91357 21.2798 C8.8608 21.7682 9.67627 22.1675 10.0511 22.2833 L10.24 21.6718 L10.4289 21.0603 C10.1887 20.9861 9.49295 20.6541 8.50018 20.1422 C7.53634 19.6452 6.35671 19.0131 5.1931 18.3807 C2.89821 17.1335 0.587286 15.8418 0.304524 15.6889 L0 16.2518 Z M10.24 21.6718 L10.0511 22.2833 C10.4278 22.3996 11.2108 22.5104 12.1137 22.613 C13.0447 22.7188 14.1784 22.8231 15.3083 22.9147 C17.5521 23.0965 19.838 23.2323 20.4904 23.2217 L20.48 22.5818 L20.4696 21.9419 C19.892 21.9512 17.6729 21.8221 15.4117 21.6389 C14.2891 21.5479 13.1703 21.4448 12.2582 21.3412 C11.3179 21.2344 10.6672 21.1339 10.4289 21.0603 L10.24 21.6718 Z M20.48 22.5818 L20.4904 23.2217 C20.8452 23.2159 21.6078 23.1224 22.5135 22.9994 C23.4388 22.8737 24.5703 22.7087 25.6944 22.5478 C26.8215 22.3865 27.9422 22.2293 28.8561 22.1173 C29.8011 22.0016 30.4471 21.9452 30.6781 21.9604 L30.72 21.3218 L30.7619 20.6831 C30.3829 20.6583 29.5977 20.7369 28.7005 20.8468 C27.7722 20.9605 26.6397 21.1195 25.5131 21.2807 C24.3834 21.4424 23.2605 21.6061 22.3412 21.731 C21.4022 21.8586 20.7298 21.9376 20.4696 21.9419 L20.48 22.5818 Z M30.72 21.3218 L30.6836 21.9607 C30.9293 21.9747 31.5912 22.097 32.5307 22.3026 C33.4454 22.5028 34.5668 22.7688 35.6908 23.0479 C37.9615 23.6118 40.1716 24.2118 40.7416 24.4296 L40.97 23.8318 L41.1984 23.2339 C40.5384 22.9817 38.2385 22.3617 35.9993 21.8056 C34.8682 21.5248 33.7346 21.2558 32.8043 21.0522 C31.8988 20.854 31.1257 20.7038 30.7564 20.6828 L30.72 21.3218 Z M40.97 23.8318 L40.7442 24.4306 C41.0081 24.5301 41.6869 24.8603 42.621 25.3366 C43.5381 25.8043 44.6615 26.392 45.7879 26.9855 C48.0284 28.166 50.3025 29.3812 50.9294 29.687 L51.21 29.1118 L51.4906 28.5366 C50.8875 28.2424 48.6516 27.0476 46.3846 25.8531 C45.2572 25.2591 44.1275 24.668 43.2025 24.1963 C42.2944 23.7333 41.5419 23.3634 41.1958 23.2329 L40.97 23.8318 Z M51.21 29.1118 L50.9294 29.687 C51.5289 29.9794 53.8021 31.1245 56.0533 32.2039 C57.1819 32.745 58.3164 33.2752 59.2486 33.6811 C59.7142 33.8838 60.1355 34.0582 60.4835 34.1881 C60.8122 34.3107 61.1319 34.4158 61.3674 34.4464 L61.45 33.8118 L61.5326 33.1771 C61.4606 33.1678 61.2681 33.1147 60.9311 32.9889 C60.6134 32.8703 60.2155 32.706 59.7596 32.5075 C58.8486 32.1109 57.7306 31.5885 56.6067 31.0497 C54.3529 29.969 52.1211 28.8441 51.4906 28.5366 L51.21 29.1118 Z M61.45 33.8118 L61.3674 34.4464 C61.6089 34.4778 61.9369 34.4535 62.2683 34.4141 C62.6198 34.3723 63.0439 34.3041 63.5108 34.2189 C64.4457 34.0483 65.5823 33.8041 66.7113 33.5485 C68.9991 33.0305 71.2045 32.4785 71.8224 32.3479 L71.69 31.7218 L71.5576 31.0956 C70.9455 31.225 68.6459 31.7981 66.4287 32.3001 C65.3052 32.5544 64.1893 32.794 63.2811 32.9597 C62.8264 33.0426 62.4313 33.1057 62.1171 33.1431 C61.7828 33.1828 61.5986 33.1857 61.5326 33.1771 L61.45 33.8118 Z M71.69 31.7218 L71.8224 32.3479 C72.4415 32.2171 74.7046 31.7022 76.949 31.2027 C79.2204 30.6973 81.4362 30.2161 82.0176 30.1357 L81.93 29.5018 L81.8424 28.8678 C81.1938 28.9574 78.9046 29.4563 76.671 29.9533 C74.4104 30.4564 72.1685 30.9665 71.5576 31.0956 L71.69 31.7218 Z M81.93 29.5018 L82.0176 30.1357 C82.5917 30.0564 84.7872 29.9852 87.0759 29.8925 C88.2026 29.8469 89.3353 29.7963 90.2649 29.7369 C91.1643 29.6794 91.9512 29.61 92.3311 29.5112 L92.17 28.8918 L92.0089 28.2724 C91.7738 28.3335 91.127 28.3992 90.1832 28.4595 C89.2697 28.5179 88.1499 28.5679 87.0241 28.6135 C84.8078 28.7033 82.4983 28.7771 81.8424 28.8678 L81.93 29.5018 Z M92.17 28.8918 L92.3311 29.5112 C92.7002 29.4151 93.4711 29.0948 94.3745 28.6958 C95.3028 28.2858 96.4342 27.7637 97.5628 27.232 C99.8125 26.1721 102.082 25.0592 102.716 24.7138 L102.41 24.1518 L102.104 23.5897 C101.508 23.9143 99.2725 25.0115 97.0172 26.0741 C95.8932 26.6036 94.7722 27.1209 93.8574 27.5249 C92.9177 27.94 92.2548 28.2084 92.0089 28.2724 L92.17 28.8918 Z M102.41 24.1518 L102.713 24.7157 C103.055 24.5322 103.805 24.0378 104.713 23.4318 C105.639 22.8135 106.762 22.056 107.887 21.3135 C109.013 20.5708 110.131 19.8508 111.04 19.3103 C111.495 19.0397 111.889 18.8195 112.201 18.6652 C112.357 18.588 112.484 18.5314 112.583 18.4938 C112.691 18.4526 112.731 18.4479 112.722 18.4487 L112.66 17.8118 L112.598 17.1748 C112.436 17.1906 112.27 17.2435 112.128 17.2972 C111.977 17.3546 111.81 17.4304 111.633 17.5179 C111.279 17.6933 110.853 17.9323 110.385 18.2101 C109.449 18.7665 108.312 19.5002 107.183 20.245 C106.053 20.99 104.921 21.7538 104.002 22.3673 C103.065 22.9932 102.38 23.4414 102.107 23.5878 L102.41 24.1518 Z M112.66 17.8118 L112.723 18.4487 C112.703 18.4506 112.73 18.4458 112.832 18.467 C112.924 18.4863 113.046 18.5199 113.199 18.5705 C113.504 18.6717 113.893 18.8266 114.347 19.0233 C115.253 19.4162 116.367 19.9537 117.497 20.5024 C118.619 21.0477 119.757 21.6044 120.69 22.0237 C121.157 22.2333 121.583 22.4136 121.938 22.5427 C122.261 22.6603 122.618 22.7718 122.9 22.7718 L122.9 22.1318 L122.9 21.4918 C122.904 21.4918 122.864 21.4904 122.757 21.4625 C122.658 21.4369 122.531 21.3964 122.376 21.3398 C122.064 21.2265 121.671 21.0609 121.215 20.8561 C120.304 20.4467 119.187 19.9008 118.056 19.3511 C116.932 18.8048 115.792 18.2548 114.856 17.849 C114.389 17.6463 113.96 17.4741 113.601 17.3554 C113.422 17.296 113.25 17.2466 113.093 17.214 C112.946 17.1833 112.77 17.1579 112.597 17.1748 L112.66 17.8118 Z M122.9 22.1318 L122.905 22.7718 C123.182 22.7695 123.534 22.6617 123.858 22.5458 C124.212 22.4192 124.638 22.2425 125.104 22.0366 C126.038 21.6244 127.175 21.0768 128.299 20.5329 C129.429 19.9861 130.546 19.4431 131.458 19.0305 C131.914 18.8241 132.31 18.6546 132.625 18.535 C132.782 18.4751 132.912 18.4304 133.015 18.4003 C133.067 18.3853 133.108 18.375 133.139 18.3684 C133.154 18.3651 133.166 18.363 133.175 18.3616 C133.183 18.3603 133.187 18.36 133.187 18.3601 L133.14 17.7218 L133.093 17.0835 C132.834 17.1025 132.495 17.2149 132.17 17.3384 C131.819 17.4718 131.396 17.6538 130.93 17.8643 C129.999 18.2854 128.864 18.8374 127.741 19.3807 C126.613 19.9267 125.497 20.4641 124.587 20.8657 C124.132 21.0666 123.739 21.2291 123.427 21.3404 C123.271 21.3962 123.144 21.4362 123.045 21.4618 C122.937 21.4894 122.894 21.4918 122.895 21.4918 L122.9 22.1318 Z M133.14 17.7218 L133.192 18.3597 C133.252 18.3548 133.433 18.3672 133.768 18.4283 C134.082 18.4854 134.477 18.5742 134.931 18.6876 C135.839 18.914 136.955 19.2306 138.078 19.5641 C140.358 20.241 142.532 20.945 143.196 21.1446 L143.38 20.5318 L143.564 19.9189 C142.998 19.7486 140.667 18.9976 138.442 18.337 C137.313 18.0017 136.176 17.6789 135.241 17.4456 C134.774 17.3292 134.349 17.2331 133.997 17.169 C133.667 17.1088 133.335 17.0638 133.088 17.0839 L133.14 17.7218 Z M143.38 20.5318 L143.191 21.1433 C143.793 21.3291 146.021 22.1206 148.291 22.9054 C149.418 23.2951 150.549 23.6807 151.476 23.9824 C152.38 24.2765 153.148 24.5105 153.512 24.5726 L153.62 23.9418 L153.728 23.3109 C153.477 23.2681 152.811 23.0708 151.872 22.7652 C150.956 22.4672 149.835 22.0847 148.709 21.6957 C146.474 20.9229 144.197 20.1144 143.569 19.9203 L143.38 20.5318 Z M153.62 23.9418 L153.507 24.5718 C153.879 24.6383 154.659 24.662 155.559 24.6716 C156.487 24.6815 157.618 24.6761 158.743 24.6705 C159.871 24.6649 160.992 24.659 161.908 24.6675 C162.85 24.6763 163.507 24.7008 163.752 24.7426 L163.86 24.1118 L163.968 23.4809 C163.598 23.4178 162.821 23.396 161.92 23.3876 C160.993 23.3789 159.861 23.3849 158.737 23.3905 C157.609 23.3962 156.488 23.4014 155.573 23.3917 C154.63 23.3816 153.975 23.3552 153.733 23.3118 L153.62 23.9418 Z M163.86 24.1118 L163.747 24.7418 C163.826 24.7559 164.024 24.8196 164.364 24.9564 C164.685 25.0857 165.086 25.2599 165.546 25.4642 C166.458 25.8694 167.597 26.3906 168.729 26.873 C169.86 27.3549 171.015 27.8121 171.976 28.0903 C172.454 28.2288 172.911 28.3309 173.306 28.3629 C173.664 28.3919 174.129 28.379 174.483 28.1143 L174.1 27.6018 L173.717 27.0893 C173.763 27.0546 173.717 27.112 173.409 27.0871 C173.138 27.0651 172.775 26.9891 172.332 26.8608 C171.45 26.6052 170.353 26.1737 169.231 25.6955 C168.11 25.218 166.997 24.7079 166.066 24.2944 C165.604 24.0893 165.186 23.9072 164.841 23.7688 C164.516 23.638 164.201 23.5226 163.973 23.4818 L163.86 24.1118 Z M174.1 27.6018 L174.483 28.1143 C174.647 27.9919 174.799 27.7987 174.924 27.6249 C175.063 27.4321 175.22 27.1884 175.39 26.9072 C175.732 26.3436 176.148 25.5966 176.611 24.7332 C177.538 23.005 178.669 20.778 179.795 18.5505 C180.923 16.3192 182.047 14.0874 182.965 12.3376 C183.424 11.4623 183.829 10.7142 184.154 10.1503 C184.317 9.86802 184.457 9.63778 184.572 9.46342 C184.695 9.27702 184.765 9.19142 184.789 9.16805 L184.34 8.71177 L183.891 8.2555 C183.762 8.38212 183.629 8.56816 183.503 8.75971 C183.369 8.96329 183.215 9.21729 183.046 9.51019 C182.707 10.0967 182.293 10.8628 181.832 11.7428 C180.908 13.5036 179.778 15.7468 178.653 17.973 C177.525 20.203 176.401 22.4161 175.483 24.1284 C175.024 24.9853 174.62 25.7088 174.296 26.2432 C174.133 26.5109 173.996 26.723 173.885 26.8775 C173.76 27.051 173.707 27.0966 173.717 27.0893 L174.1 27.6018 Z M184.34 8.71177 L184.787 9.16987 C184.833 9.12481 184.975 9.03457 185.281 8.93526 C185.57 8.84137 185.944 8.75871 186.388 8.68784 C187.276 8.54628 188.375 8.46195 189.495 8.40855 C190.613 8.35528 191.731 8.33355 192.656 8.31381 C193.551 8.29471 194.325 8.27744 194.683 8.22503 L194.59 7.59177 L194.497 6.95852 C194.24 6.99611 193.579 7.01383 192.629 7.03411 C191.709 7.05374 190.572 7.07577 189.435 7.13 C188.3 7.18409 187.144 7.27101 186.187 7.42383 C185.708 7.50015 185.262 7.59545 184.886 7.71774 C184.525 7.8346 184.154 7.99873 183.893 8.25367 L184.34 8.71177 Z M194.59 7.59177 L194.683 8.22503 C195.311 8.13306 197.575 7.74092 199.826 7.32618 C202.055 6.91551 204.358 6.46747 205.019 6.26326 L204.83 5.65177 L204.641 5.04029 C204.072 5.21607 201.87 5.64804 199.594 6.06737 C197.34 6.48263 195.099 6.87049 194.497 6.95852 L194.59 7.59177 Z M204.83 5.65177 L205.019 6.26326 C205.37 6.15473 206.127 5.83343 207.034 5.43442 C207.959 5.02737 209.088 4.51713 210.213 4.01027 C211.34 3.50248 212.462 2.99798 213.379 2.59933 C214.319 2.19095 214.987 1.91877 215.241 1.84864 L215.07 1.23177 L214.899 0.614906 C214.538 0.714778 213.773 1.0326 212.869 1.42546 C211.943 1.82806 210.813 2.33607 209.687 2.84328 C208.559 3.35141 207.436 3.85868 206.518 4.26288 C205.582 4.67512 204.905 4.95881 204.641 5.04029 L204.83 5.65177 Z M215.07 1.23177 L215.241 1.84864 C215.499 1.77724 216.169 1.66563 217.104 1.53568 C218.019 1.40848 219.14 1.26973 220.263 1.14005 C222.525 0.878985 224.748 0.660387 225.331 0.641434 L225.31 0.00177243 L225.289 -0.637889 C224.642 -0.616842 222.36 -0.39044 220.117 -0.131506 C218.988 -0.00118875 217.856 0.138816 216.928 0.26787 C216.019 0.394161 215.256 0.516302 214.899 0.614906 L215.07 1.23177 Z M225.31 0.00177243 L225.331 0.641434 C225.902 0.622845 228.105 0.770739 230.384 0.933889 C232.619 1.09389 234.899 1.26609 235.534 1.28158 L235.55 0.641772 L235.566 0.00196274 C234.971 -0.0125484 232.746 -0.180346 230.476 -0.342844 C228.25 -0.502194 225.948 -0.6593 225.289 -0.637889 L225.31 0.00177243 Z M235.55 0.641772 L235.534 1.28158 C236.173 1.29717 238.467 1.19551 240.691 1.12394 C241.816 1.08773 242.935 1.05859 243.847 1.05395 C244.793 1.04914 245.434 1.07253 245.663 1.11895 L245.79 0.491772 L245.917 -0.135404 C245.531 -0.213984 244.738 -0.230598 243.841 -0.226032 C242.91 -0.221298 241.777 -0.191686 240.649 -0.155396 C238.368 -0.0819658 236.157 0.0163769 235.566 0.00196274 L235.55 0.641772 Z M245.79 0.491772 L245.667 1.11993 C245.903 1.16583 246.556 1.39941 247.501 1.77533 C248.416 2.13946 249.537 2.60924 250.663 3.08921 C252.896 4.04195 255.176 5.04848 255.783 5.30225 L256.03 4.71177 L256.277 4.12129 C255.664 3.86507 253.439 2.88159 251.165 1.91183 C250.036 1.43056 248.904 0.955964 247.974 0.586031 C247.074 0.227883 246.292 -0.0622835 245.913 -0.136382 L245.79 0.491772 Z M256.03 4.71177 L255.785 5.30297 C257.033 5.82028 264.797 8.99978 266.011 9.56245 L266.28 8.98177 L266.549 8.40109 C265.303 7.82376 257.487 4.62327 256.275 4.12058 L256.03 4.71177 Z M266.28 8.98177 L266.009 9.56161 C266.598 9.83669 268.812 11.068 271.094 12.2931 C272.222 12.8989 273.356 13.4972 274.288 13.9595 C274.754 14.1904 275.175 14.3903 275.522 14.5411 C275.85 14.6835 276.168 14.8071 276.402 14.8509 L276.52 14.2218 L276.638 13.5927 C276.564 13.5789 276.37 13.5135 276.032 13.3668 C275.713 13.2285 275.314 13.0394 274.857 12.8128 C273.944 12.3601 272.824 11.7697 271.699 11.1654 C269.473 9.97051 267.182 8.69685 266.551 8.40194 L266.28 8.98177 Z M276.52 14.2218 L276.407 14.8518 C276.655 14.8961 276.99 14.881 277.321 14.8509 C277.673 14.8187 278.098 14.7613 278.565 14.6885 C279.498 14.5429 280.634 14.3303 281.759 14.1182 C282.888 13.905 284.006 13.6924 284.918 13.5427 C285.374 13.4678 285.77 13.4101 286.086 13.376 C286.421 13.3398 286.608 13.3374 286.677 13.3464 L286.76 12.7118 L286.843 12.0771 C286.605 12.0462 286.279 12.0678 285.949 12.1034 C285.599 12.1412 285.176 12.2032 284.71 12.2796 C283.779 12.4324 282.644 12.6485 281.521 12.8604 C280.393 13.0733 279.277 13.2819 278.367 13.4238 C277.912 13.4948 277.518 13.5476 277.205 13.5761 C276.87 13.6066 276.692 13.6024 276.633 13.5918 L276.52 14.2218 Z M286.76 12.7118 L286.677 13.3464 C286.76 13.3572 286.97 13.412 287.324 13.5311 C287.66 13.6441 288.082 13.7994 288.563 13.985 C289.524 14.3558 290.702 14.8395 291.865 15.3281 C294.166 16.295 296.458 17.3013 296.757 17.424 L297 16.8318 L297.243 16.2396 C296.932 16.1123 294.719 15.1386 292.36 14.148 C291.193 13.6578 290.002 13.1684 289.023 12.7908 C288.535 12.6021 288.093 12.4394 287.732 12.3179 C287.389 12.2024 287.067 12.1063 286.843 12.0771 L286.76 12.7118 Z" fill="#1db9e2"/><path transform="matrix(1 0 0 1 295.63 17.29)" d="M4.57 2.285 C4.57 3.54697 3.54697 4.57 2.285 4.57 C1.02303 4.57 0 3.54697 0 2.285 C0 1.02303 1.02303 0 2.285 0 C3.54697 0 4.57 1.02303 4.57 2.285 Z" fill="#1db9e2"/><path transform="matrix(1 0 0 1 295.63 17.29)" d="M4.57 2.285 L3.47 2.285 C3.47 2.93946 2.93946 3.47 2.285 3.47 L2.285 4.57 L2.285 5.67 C4.15448 5.67 5.67 4.15448 5.67 2.285 L4.57 2.285 Z M2.285 4.57 L2.285 3.47 C1.63054 3.47 1.1 2.93946 1.1 2.285 L0 2.285 L-1.1 2.285 C-1.1 4.15448 0.415516 5.67 2.285 5.67 L2.285 4.57 Z M0 2.285 L1.1 2.285 C1.1 1.63054 1.63054 1.1 2.285 1.1 L2.285 0 L2.285 -1.1 C0.415516 -1.1 -1.1 0.415516 -1.1 2.285 L0 2.285 Z M2.285 0 L2.285 1.1 C2.93946 1.1 3.47 1.63054 3.47 2.285 L4.57 2.285 L5.67 2.285 C5.67 0.415516 4.15448 -1.1 2.285 -1.1 L2.285 0 Z" fill="#ffffff"/></svg>
      <div style={{ position: "absolute", left: "0px", top: "184.16px", width: "339.04px", height: "0.91px", background: "#ededed" }} />
      <div style={{ position: "absolute", left: "18.28px", top: "198.18px", width: "101.88px", height: "14px", display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <svg style={{ width: "6.4px", height: "6.4px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.4" height="6.4" viewBox="0 0 6.4 6.4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.4 3.2 C6.4 4.96731 4.96731 6.4 3.2 6.4 C1.43269 6.4 0 4.96731 0 3.2 C0 1.43269 1.43269 0 3.2 0 C4.96731 0 6.4 1.43269 6.4 3.2 Z" fill="#18b170"/></svg>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Synced 2 min ago</p>
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
