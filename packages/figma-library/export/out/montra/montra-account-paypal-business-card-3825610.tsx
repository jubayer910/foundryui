"use client";
// Account, PayPal Business card (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Dots, Wallet } from "ingotui-icons/react/stroke-rounded";

export function AccountPayPalBusinessCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "339.04px", height: "226.2px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "18.28px", top: "18.28px", width: "159.21px", height: "33.74px", display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "31.07px", height: "31.07px", flexShrink: 0, borderRadius: "6.21px", background: "linear-gradient(180deg, #fd872f 0%, #ffd3b0 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Wallet size={14.9} style={{ width: "14.91px", height: "14.91px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>PayPal Business</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Wallet · client payments</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "216.51px", top: "22.17px", width: "104.25px", height: "23.3px", borderRadius: "999px", background: "#fff4eb", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#e8711a"/></svg>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#e8711a" }}>Action needed</p>
      </div>
      <p style={{ position: "absolute", left: "18.28px", top: "71.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Balance</p>
      <div style={{ position: "absolute", left: "18.28px", top: "87.73px", width: "155.07px", height: "29px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020", letterSpacing: "-0.01em" }}>$960</p>
        <div style={{ flexShrink: 0, borderRadius: "4.57px", background: "rgba(244, 83, 99, 0.1)", display: "flex", flexDirection: "row", padding: "1.37px 4.57px 1.37px 4.57px", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "5.48px", height: "4.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="4.57" viewBox="0 0 5.48 4.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L5.48 0 L2.74 4.57 L0 0 Z" fill="#f45363"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.51px", fontWeight: 500, color: "#f45363" }}>-2.1%</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#a6a6a6" }}>30 days</p>
      </div>
      <svg data-fu="plot" style={{ position: "absolute", left: "18.28px", top: "124.29px", width: "302.48px", height: "38.38px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="302.48" height="38.38" viewBox="0 0 302.48 38.38" fill="none" overflow="visible"><defs><linearGradient id="g7_t5cc" gradientUnits="userSpaceOnUse" x1="148.50" y1="0.00" x2="148.50" y2="35.72"><stop offset="0" stopColor="#fd872f" stopOpacity="0.16"/><stop offset="1" stopColor="#fd872f" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 0.91 2.74)" d="M0 1.90061 C0.61 2.29061 9.01 7.72061 10.24 8.45061 C11.47 9.17061 19.25 14.1006 20.48 13.9506 C21.71 13.7906 29.5 6.37061 30.72 5.84061 C31.95 5.31061 39.74 5.05061 40.97 5.09061 C42.19 5.13061 49.98 6.83061 51.21 6.53061 C52.44 6.23061 60.22 0.430613 61.45 0.0806132 C62.68 -0.269387 70.46 0.630613 71.69 0.680613 C72.92 0.730613 80.7 0.470613 81.93 0.880613 C83.16 1.29061 90.94 7.09061 92.17 7.55061 C93.4 8.00061 101.18 8.58061 102.41 8.41061 C103.64 8.25061 111.43 5.25061 112.66 4.81061 C113.88 4.37061 121.67 1.05061 122.9 1.14061 C124.13 1.23061 131.91 5.89061 133.14 6.38061 C134.37 6.87061 142.15 8.98061 143.38 9.28061 C144.61 9.58061 152.39 11.7306 153.62 11.4106 C154.85 11.0806 162.63 4.35061 163.86 3.88061 C165.09 3.41061 172.87 2.31061 174.1 3.58061 C175.33 4.84061 183.12 23.3806 184.34 25.0106 C185.57 26.6406 193.36 30.4006 194.59 30.7306 C195.82 31.0606 203.6 30.9006 204.83 30.4806 C206.06 30.0506 213.84 24.5206 215.07 23.6706 C216.3 22.8206 224.08 17.0506 225.31 16.3306 C226.54 15.6106 234.32 12.0606 235.55 11.6206 C236.78 11.1806 244.56 8.94061 245.79 9.07061 C247.02 9.20061 254.81 13.6506 256.03 13.7906 C257.26 13.9206 265.05 11.8806 266.28 11.3306 C267.5 10.7806 275.29 4.92061 276.52 4.59061 C277.75 4.25061 285.53 3.97061 286.76 5.72061 C287.99 7.48061 296.39 32.2006 297 33.8906 L297 35.7206 L0 35.7206 L0 1.90061 Z" fill="url(#g7_t5cc)"/><path transform="matrix(1 0 0 1 0.91 2.74)" d="M0.344743 1.3614 C0.0469437 1.171 -0.348818 1.25807 -0.539214 1.55587 C-0.729611 1.85367 -0.642543 2.24943 -0.344743 2.43983 L0 1.90061 L0.344743 1.3614 Z M10.24 8.45061 L9.91335 9.00099 L9.91669 9.00294 L10.24 8.45061 Z M20.48 13.9506 L20.5575 14.5859 L20.5626 14.5853 L20.48 13.9506 Z M30.72 5.84061 L30.4667 5.25285 L30.465 5.25361 L30.72 5.84061 Z M40.97 5.09061 L40.991 4.45096 L40.9908 4.45095 L40.97 5.09061 Z M92.17 7.55061 L91.9458 8.15008 L91.9501 8.15165 L92.17 7.55061 Z M102.41 8.41061 L102.327 7.77594 L102.322 7.77664 L102.41 8.41061 Z M112.66 4.81061 L112.876 5.41322 L112.877 5.41266 L112.66 4.81061 Z M153.62 11.4106 L153.781 12.03 L153.786 12.0288 L153.62 11.4106 Z M174.1 3.58061 L173.64 4.02587 L173.642 4.02768 L174.1 3.58061 Z M184.34 25.0106 L183.828 25.3941 L183.829 25.3961 L184.34 25.0106 Z M204.83 30.4806 L205.037 31.0863 L205.041 31.0848 L204.83 30.4806 Z M256.03 13.7906 L255.957 14.4265 L255.963 14.4271 L256.03 13.7906 Z M266.28 11.3306 L266.541 11.9149 L266.543 11.9141 L266.28 11.3306 Z M276.52 4.59061 L276.686 5.20877 L276.69 5.20748 L276.52 4.59061 Z M286.76 5.72061 L287.285 5.354 L287.284 5.35259 L286.76 5.72061 Z M296.398 34.1079 C296.518 34.4404 296.885 34.6126 297.217 34.4926 C297.55 34.3726 297.722 34.0058 297.602 33.6733 L297 33.8906 L296.398 34.1079 Z M0 1.90061 L-0.344743 2.43983 C0.249765 2.81992 8.67129 8.26382 9.91336 9.00098 L10.24 8.45061 L10.5666 7.90024 C9.34871 7.17741 0.970235 1.7613 0.344743 1.3614 L0 1.90061 Z M10.24 8.45061 L9.91669 9.00294 C10.2179 9.17928 10.9227 9.615 11.8531 10.1815 C12.7762 10.7435 13.9071 11.4254 15.0394 12.0808 C16.1695 12.7349 17.3107 13.3682 18.2521 13.8303 C18.7216 14.0608 19.154 14.2549 19.5173 14.3879 C19.6987 14.4543 19.8742 14.5097 20.0355 14.5459 C20.1864 14.5798 20.3729 14.6084 20.5575 14.5859 L20.48 13.9506 L20.4025 13.3153 C20.4334 13.3116 20.4149 13.3192 20.3161 13.297 C20.2277 13.2772 20.1087 13.2413 19.9573 13.1859 C19.6549 13.0752 19.2681 12.9031 18.8161 12.6812 C17.9143 12.2386 16.803 11.6226 15.6806 10.973 C14.5604 10.3246 13.4388 9.64836 12.5188 9.08818 C11.6061 8.53248 10.8771 8.08195 10.5633 7.89828 L10.24 8.45061 Z M20.48 13.9506 L20.5626 14.5853 C20.7505 14.5608 20.9322 14.4815 21.0734 14.4099 C21.228 14.3317 21.3976 14.2293 21.575 14.1125 C21.9304 13.8786 22.3568 13.5607 22.8233 13.1932 C23.7581 12.4571 24.895 11.4895 26.0214 10.5193 C27.153 9.54457 28.2728 8.56831 29.1896 7.79922 C29.6477 7.41491 30.0482 7.08826 30.3689 6.84315 C30.7108 6.58173 30.9057 6.45771 30.975 6.42761 L30.72 5.84061 L30.465 5.25361 C30.2293 5.35602 29.9139 5.57981 29.5915 5.82624 C29.2478 6.08898 28.8299 6.43022 28.367 6.81856 C27.4416 7.5948 26.3082 8.5829 25.1861 9.54945 C24.0587 10.5205 22.9413 11.471 22.0314 12.1877 C21.5755 12.5467 21.182 12.8388 20.8713 13.0433 C20.7155 13.1458 20.5904 13.2198 20.4951 13.268 C20.3866 13.323 20.3632 13.3204 20.3974 13.316 L20.48 13.9506 Z M30.72 5.84061 L30.9733 6.42837 C31.0517 6.39458 31.2424 6.3424 31.5725 6.28517 C31.8864 6.23074 32.2812 6.17899 32.7353 6.13061 C33.6426 6.03394 34.7582 5.95371 35.8808 5.89086 C38.1349 5.76466 40.3651 5.71128 40.9492 5.73028 L40.97 5.09061 L40.9908 4.45095 C40.3449 4.42995 38.0651 4.48657 35.8092 4.61286 C34.6768 4.67626 33.5374 4.75791 32.5997 4.85781 C32.1313 4.90771 31.7061 4.96291 31.3538 5.02398 C31.0176 5.08226 30.6958 5.15415 30.4667 5.25286 L30.72 5.84061 Z M40.97 5.09061 L40.949 5.73027 C41.1979 5.73843 41.8586 5.84101 42.802 6.0052 C43.2606 6.08503 43.7708 6.17651 44.309 6.27289 C44.8465 6.36916 45.4113 6.4702 45.9764 6.56862 C47.1047 6.76512 48.2439 6.95288 49.1816 7.07264 C49.6498 7.13245 50.0772 7.17655 50.4326 7.19559 C50.7652 7.21342 51.1068 7.21456 51.3617 7.15239 L51.21 6.53061 L51.0583 5.90884 C51.0057 5.92167 50.8348 5.93531 50.5011 5.91743 C50.1904 5.90077 49.7978 5.86096 49.3437 5.80296 C48.4367 5.6871 47.3215 5.50361 46.1961 5.3076 C45.6343 5.20978 45.0724 5.10925 44.5346 5.01294 C43.9976 4.91675 43.4839 4.82464 43.0215 4.74415 C42.1226 4.58771 41.3521 4.4628 40.991 4.45096 L40.97 5.09061 Z M51.21 6.53061 L51.3617 7.15239 C51.6141 7.09082 51.9437 6.92179 52.2674 6.73895 C52.6157 6.54227 53.0369 6.2823 53.5016 5.98408 C54.4317 5.38722 55.5653 4.61809 56.6898 3.85365 C57.8185 3.08638 58.938 2.32384 59.8523 1.73086 C60.3097 1.43424 60.7089 1.18454 61.0279 0.999838 C61.3688 0.802518 61.5593 0.71493 61.6252 0.696177 L61.45 0.0806132 L61.2748 -0.534951 C61.0332 -0.466204 60.7115 -0.295979 60.3867 -0.107948 C60.0401 0.0926979 59.62 0.355892 59.1558 0.656929 C58.2271 1.25926 57.094 2.0311 55.9702 2.79508 C54.8422 3.56188 53.7233 4.32088 52.8103 4.90683 C52.3534 5.20002 51.9554 5.44513 51.638 5.62442 C51.4791 5.71413 51.3465 5.78393 51.2406 5.83402 C51.1879 5.85895 51.1453 5.87734 51.112 5.89029 C51.0955 5.89668 51.0827 5.90125 51.0731 5.9044 C51.0683 5.90595 51.0647 5.90705 51.0621 5.9078 C51.0596 5.90855 51.0583 5.90885 51.0583 5.90884 L51.21 6.53061 Z M61.45 0.0806132 L61.6252 0.696177 C61.6937 0.676671 61.8775 0.6524 62.2096 0.643632 C62.5227 0.635364 62.9169 0.641481 63.371 0.65919 C64.2782 0.694569 65.3933 0.774879 66.5169 0.868407 C68.7325 1.05283 71.0329 1.29443 71.664 1.32009 L71.69 0.680613 L71.716 0.0411414 C71.1171 0.016796 68.9125 -0.216608 66.6231 -0.407181 C65.4942 -0.501153 64.3568 -0.583342 63.4209 -0.619838 C62.9534 -0.638067 62.5284 -0.645231 62.1758 -0.635922 C61.8422 -0.627111 61.5138 -0.602945 61.2748 -0.534951 L61.45 0.0806132 Z M71.69 0.680613 L71.664 1.32009 C72.2963 1.34579 74.5944 1.29299 76.8121 1.28561 C77.936 1.28187 79.052 1.28941 79.9604 1.32299 C80.4151 1.33979 80.8106 1.36288 81.1256 1.39338 C81.4572 1.42547 81.649 1.46158 81.7276 1.48777 L81.93 0.880613 L82.1324 0.273456 C81.9035 0.197149 81.5832 0.151689 81.249 0.119334 C80.8983 0.0853803 80.4746 0.0611201 80.0077 0.0438625 C79.073 0.00931567 77.9365 0.00185876 76.8079 0.00561678 C74.5206 0.0132325 72.3137 0.065437 71.716 0.0411414 L71.69 0.680613 Z M81.93 0.880613 L81.7276 1.48777 C81.8058 1.51385 82.0053 1.61301 82.3446 1.81557 C82.6653 2.00704 83.0657 2.26294 83.5233 2.56514 C84.4379 3.16919 85.5583 3.94286 86.6858 4.72314 C87.8101 5.50114 88.9417 6.28581 89.8689 6.90441 C90.3323 7.21362 90.7501 7.48492 91.0936 7.69485 C91.421 7.89494 91.7265 8.06804 91.9458 8.15006 L92.17 7.55061 L92.3942 6.95116 C92.306 6.91819 92.0993 6.80942 91.761 6.60266 C91.4388 6.40576 91.0373 6.14526 90.5793 5.83963 C89.6633 5.22854 88.5424 4.45134 87.4142 3.67059 C86.2892 2.89212 85.1571 2.11016 84.2286 1.49703 C83.7647 1.19063 83.3458 0.92255 83.0008 0.716554 C82.6743 0.52165 82.3616 0.349878 82.1324 0.273456 L81.93 0.880613 Z M92.17 7.55061 L91.9501 8.15165 C92.3398 8.29424 93.1359 8.4214 94.0367 8.53381 C94.9705 8.65035 96.1068 8.7606 97.239 8.85108 C98.3716 8.94158 99.5064 9.0128 100.438 9.05071 C101.343 9.08754 102.122 9.0965 102.498 9.04459 L102.41 8.41061 L102.322 7.77664 C102.083 7.80973 101.428 7.80994 100.49 7.77177 C99.5786 7.73468 98.4609 7.66464 97.341 7.57515 C96.2207 7.48563 95.1045 7.37713 94.1952 7.26366 C93.2529 7.14608 92.6152 7.03199 92.3899 6.94957 L92.17 7.55061 Z M102.41 8.41061 L102.493 9.04527 C102.702 9.01798 103.003 8.93953 103.334 8.84192 C103.678 8.74045 104.097 8.60556 104.562 8.44903 C105.492 8.13574 106.626 7.72976 107.755 7.31665 C110.032 6.48361 112.257 5.63458 112.876 5.41322 L112.66 4.81061 L112.444 4.20801 C111.833 4.42664 109.548 5.29762 107.315 6.11457 C106.189 6.52647 105.068 6.92798 104.153 7.23595 C103.696 7.39004 103.294 7.51921 102.972 7.61415 C102.637 7.71295 102.425 7.76325 102.327 7.77596 L102.41 8.41061 Z M112.66 4.81061 L112.877 5.41266 C113.49 5.19152 115.791 4.23276 118.008 3.37359 C119.132 2.93786 120.247 2.52213 121.154 2.22175 C121.608 2.07133 122.001 1.95289 122.312 1.87542 C122.467 1.83668 122.595 1.81007 122.694 1.79452 C122.744 1.7868 122.783 1.78242 122.812 1.78033 C122.842 1.77815 122.854 1.77899 122.853 1.77891 L122.9 1.14061 L122.947 0.50232 C122.679 0.482706 122.331 0.551529 122.002 0.633422 C121.647 0.722009 121.22 0.851613 120.751 1.00666 C119.814 1.31722 118.675 1.74212 117.545 2.18014 C115.254 3.06846 113.05 3.9897 112.443 4.20857 L112.66 4.81061 Z M122.9 1.14061 L122.853 1.77891 C122.85 1.7787 122.862 1.7795 122.893 1.78647 C122.923 1.79315 122.962 1.80374 123.012 1.81953 C123.114 1.8513 123.243 1.89892 123.399 1.96335 C123.712 2.09212 124.106 2.276 124.562 2.50175 C125.47 2.95261 126.587 3.5534 127.712 4.17154 C128.853 4.79843 129.943 5.40966 130.885 5.92849 C131.788 6.42546 132.549 6.83411 132.903 6.97517 L133.14 6.38061 L133.377 5.78606 C133.116 5.68211 132.443 5.32452 131.503 4.80711 C130.602 4.31156 129.44 3.6603 128.328 3.04969 C127.201 2.43033 126.065 1.81861 125.13 1.3551 C124.664 1.12366 124.239 0.924883 123.886 0.779677 C123.562 0.64606 123.216 0.522053 122.947 0.50232 L122.9 1.14061 Z M133.14 6.38061 L132.903 6.97517 C133.559 7.23655 135.857 7.8981 138.089 8.51848 C140.34 9.14449 142.602 9.74963 143.228 9.90239 L143.38 9.28061 L143.532 8.65884 C142.928 8.5116 140.685 7.91174 138.431 7.28525 C136.158 6.65313 133.951 6.01468 133.377 5.78606 L133.14 6.38061 Z M143.38 9.28061 L143.228 9.90239 C143.789 10.0392 146.125 10.6718 148.352 11.2008 C149.483 11.4693 150.623 11.7209 151.564 11.8854 C152.033 11.9676 152.463 12.0299 152.822 12.0609 C153.155 12.0896 153.51 12.1005 153.781 12.03 L153.62 11.4106 L153.459 10.7912 C153.46 10.791 153.448 10.794 153.419 10.797 C153.392 10.7999 153.355 10.8021 153.307 10.8028 C153.21 10.8041 153.086 10.7989 152.932 10.7856 C152.626 10.7592 152.236 10.7037 151.784 10.6246 C150.882 10.4666 149.77 10.2219 148.648 9.95544 C146.37 9.41438 144.201 8.82203 143.532 8.65884 L143.38 9.28061 Z M153.62 11.4106 L153.786 12.0288 C154.053 11.9571 154.391 11.7566 154.712 11.5481 C155.061 11.3209 155.483 11.02 155.948 10.6747 C156.878 9.9832 158.012 9.09027 159.137 8.19998 C160.266 7.30646 161.386 6.41576 162.302 5.71812 C162.76 5.36922 163.16 5.07354 163.481 4.85236 C163.822 4.61685 164.018 4.50556 164.088 4.47845 L163.86 3.88061 L163.632 3.28277 C163.395 3.37316 163.078 3.575 162.754 3.79879 C162.409 4.03691 161.99 4.3467 161.526 4.69999 C160.599 5.40672 159.466 6.30727 158.343 7.19624 C157.215 8.08846 156.097 8.96927 155.184 9.6472 C154.728 9.9865 154.33 10.2692 154.014 10.4751 C153.855 10.5782 153.724 10.6576 153.62 10.7139 C153.568 10.7419 153.527 10.762 153.496 10.7758 C153.463 10.7902 153.451 10.7934 153.454 10.7925 L153.62 11.4106 Z M163.86 3.88061 L164.088 4.47845 C164.326 4.3878 164.98 4.23917 165.908 4.08862 C166.814 3.94189 167.922 3.80223 169.03 3.71619 C170.141 3.62985 171.231 3.59913 172.107 3.66387 C172.546 3.69631 172.911 3.75138 173.189 3.82715 C173.484 3.90736 173.606 3.99093 173.64 4.02586 L174.1 3.58061 L174.56 3.13536 C174.286 2.8528 173.896 2.69293 173.525 2.59204 C173.138 2.48672 172.684 2.42305 172.201 2.38735 C171.234 2.31585 170.072 2.35137 168.93 2.44004 C167.785 2.529 166.641 2.67308 165.704 2.82511 C164.789 2.9733 164.009 3.13843 163.632 3.28277 L163.86 3.88061 Z M174.1 3.58061 L173.642 4.02768 C173.642 4.02767 173.644 4.02955 173.648 4.0338 C173.651 4.038 173.656 4.0439 173.662 4.05175 C173.675 4.06767 173.691 4.08918 173.711 4.11724 C173.751 4.17379 173.8 4.24869 173.857 4.34357 C173.973 4.53345 174.114 4.78542 174.277 5.09522 C174.604 5.71403 175.009 6.53847 175.469 7.50611 C176.388 9.44023 177.513 11.9211 178.64 14.42 C179.766 16.9159 180.895 19.43 181.818 21.4209 C182.279 22.4162 182.691 23.2856 183.028 23.9593 C183.353 24.6113 183.634 25.1352 183.828 25.3941 L184.34 25.0106 L184.852 24.6271 C184.741 24.4785 184.512 24.0665 184.173 23.3876 C183.845 22.7305 183.439 21.8743 182.979 20.8825 C182.06 18.8994 180.935 16.3941 179.807 13.8937 C178.681 11.3964 177.551 8.90412 176.625 6.95668 C176.163 5.98354 175.748 5.14009 175.409 4.49745 C175.24 4.17653 175.085 3.89938 174.951 3.67846 C174.825 3.4717 174.691 3.26936 174.558 3.13355 L174.1 3.58061 Z M184.34 25.0106 L183.829 25.3961 C184.034 25.6678 184.343 25.946 184.69 26.2158 C185.045 26.492 185.473 26.7858 185.944 27.0856 C186.887 27.6855 188.031 28.3277 189.167 28.9247 C190.305 29.5223 191.442 30.0791 192.375 30.5083 C193.286 30.9274 194.054 31.2496 194.424 31.3488 L194.59 30.7306 L194.756 30.1125 C194.511 30.0467 193.844 29.7751 192.91 29.3454 C191.998 28.9258 190.88 28.3789 189.763 27.7916 C188.644 27.2035 187.533 26.5795 186.631 26.0056 C186.18 25.7185 185.788 25.4486 185.476 25.2059 C185.157 24.9568 184.953 24.7609 184.851 24.6251 L184.34 25.0106 Z M194.59 30.7306 L194.424 31.3488 C194.64 31.4066 194.948 31.4433 195.282 31.4698 C195.63 31.4974 196.052 31.517 196.519 31.5296 C197.453 31.5548 198.591 31.5525 199.725 31.5267 C200.858 31.5009 201.996 31.4515 202.932 31.3815 C203.399 31.3465 203.822 31.3061 204.171 31.26 C204.506 31.2158 204.818 31.1611 205.037 31.0863 L204.83 30.4806 L204.623 29.875 C204.535 29.9051 204.334 29.9474 204.004 29.991 C203.687 30.0327 203.29 30.0711 202.836 30.1051 C201.929 30.1729 200.814 30.2216 199.695 30.247 C198.577 30.2725 197.462 30.2746 196.553 30.2501 C196.099 30.2378 195.701 30.219 195.383 30.1938 C195.052 30.1676 194.848 30.1371 194.756 30.1125 L194.59 30.7306 Z M204.83 30.4806 L205.041 31.0848 C205.261 31.008 205.567 30.8437 205.895 30.6523 C206.239 30.4517 206.658 30.1915 207.122 29.8931 C208.051 29.2958 209.184 28.5336 210.312 27.7612 C212.56 26.2214 214.834 24.6118 215.434 24.1971 L215.07 23.6706 L214.706 23.1441 C214.076 23.5794 211.845 25.1599 209.588 26.7051 C208.464 27.4751 207.344 28.2291 206.43 28.8163 C205.973 29.1101 205.572 29.3591 205.25 29.5465 C204.913 29.7431 204.707 29.8458 204.619 29.8765 L204.83 30.4806 Z M215.07 23.6706 L215.434 24.1971 C216.057 23.7663 218.324 22.1011 220.567 20.4694 C222.839 18.8159 225.054 17.222 225.633 16.8829 L225.31 16.3306 L224.987 15.7783 C224.336 16.1592 222.046 17.8104 219.813 19.4343 C217.551 21.0801 215.313 22.725 214.706 23.1441 L215.07 23.6706 Z M225.31 16.3306 L225.633 16.8829 C226.214 16.5433 228.429 15.4919 230.697 14.4524 C232.962 13.4142 235.183 12.4316 235.766 12.2232 L235.55 11.6206 L235.334 11.018 C234.687 11.2497 232.403 12.262 230.163 13.2888 C227.926 14.3143 225.636 15.3979 224.987 15.7783 L225.31 16.3306 Z M235.55 11.6206 L235.766 12.2232 C236.353 12.0131 238.583 11.349 240.834 10.7504 C241.956 10.4522 243.072 10.1735 243.979 9.97797 C244.433 9.88008 244.828 9.80463 245.142 9.7578 C245.476 9.70791 245.659 9.70033 245.723 9.70707 L245.79 9.07061 L245.857 8.43416 C245.614 8.4084 245.284 8.44238 244.953 8.49182 C244.601 8.54433 244.177 8.62599 243.709 8.72669 C242.773 8.92835 241.636 9.21281 240.506 9.51334 C238.253 10.1122 235.977 10.7881 235.334 11.018 L235.55 11.6206 Z M245.79 9.07061 L245.723 9.70707 C245.723 9.70707 245.724 9.70719 245.726 9.70756 C245.729 9.70792 245.732 9.70848 245.737 9.70932 C245.746 9.71101 245.758 9.7136 245.774 9.71743 C245.807 9.7252 245.848 9.73684 245.9 9.75335 C246.004 9.78654 246.136 9.83478 246.294 9.89852 C246.609 10.026 247.006 10.2048 247.463 10.4215 C248.376 10.8546 249.494 11.423 250.624 11.9973 C251.748 12.5691 252.883 13.1468 253.813 13.5901 C254.278 13.8116 254.7 14.0035 255.049 14.1456 C255.373 14.2778 255.705 14.3975 255.957 14.4264 L256.03 13.7906 L256.103 13.1548 C256.05 13.1487 255.872 13.0987 255.532 12.9602 C255.216 12.8317 254.82 12.652 254.364 12.4346 C253.452 12 252.333 11.4308 251.204 10.8564 C250.079 10.2845 248.944 9.70726 248.012 9.26506 C247.546 9.0441 247.123 8.85285 246.773 8.71149 C246.447 8.5801 246.112 8.46111 245.857 8.43416 L245.79 9.07061 Z M256.03 13.7906 L255.963 14.4271 C256.201 14.4522 256.525 14.4235 256.858 14.3792 C257.209 14.3323 257.633 14.2585 258.101 14.1664 C259.038 13.982 260.177 13.7193 261.31 13.4366 C262.444 13.1537 263.579 12.8492 264.51 12.5801 C265.423 12.3164 266.185 12.074 266.541 11.9149 L266.28 11.3306 L266.019 10.7464 C265.76 10.8623 265.087 11.081 264.155 11.3505 C263.241 11.6146 262.121 11.915 261 12.1946 C259.878 12.4745 258.762 12.7317 257.854 12.9105 C257.399 13 257.003 13.0684 256.689 13.1104 C256.355 13.1549 256.167 13.1615 256.097 13.1542 L256.03 13.7906 Z M266.28 11.3306 L266.543 11.9141 C266.745 11.823 267.038 11.6458 267.366 11.435 C267.706 11.2163 268.121 10.9368 268.584 10.6196 C269.508 9.98566 270.64 9.18772 271.763 8.40271 C272.89 7.61506 274.01 6.83946 274.923 6.24093 C275.381 5.94137 275.779 5.69056 276.098 5.50625 C276.439 5.30854 276.626 5.22489 276.686 5.20875 L276.52 4.59061 L276.354 3.97247 C276.107 4.03884 275.781 4.21049 275.456 4.39857 C275.108 4.60004 274.687 4.86548 274.222 5.1703 C273.291 5.78052 272.156 6.56617 271.03 7.35352 C269.899 8.14351 268.778 8.93432 267.86 9.56411 C267.401 9.87881 266.998 10.1499 266.674 10.3583 C266.337 10.5745 266.12 10.7007 266.017 10.7472 L266.28 11.3306 Z M276.52 4.59061 L276.69 5.20748 C276.921 5.14379 277.571 5.06385 278.498 5.01682 C279.401 4.97105 280.506 4.95911 281.61 5.01115 C282.718 5.0634 283.801 5.17918 284.669 5.38129 C285.103 5.48238 285.465 5.60078 285.741 5.73306 C286.025 5.86875 286.171 5.99625 286.236 6.08863 L286.76 5.72061 L287.284 5.35259 C287.041 5.00747 286.675 4.76091 286.293 4.57829 C285.904 4.39225 285.446 4.24806 284.959 4.13462 C283.984 3.90767 282.815 3.78657 281.67 3.73257 C280.521 3.67837 279.374 3.6908 278.434 3.73847 C277.518 3.78488 276.734 3.86744 276.349 3.97375 L276.52 4.59061 Z M286.76 5.72061 L286.235 6.08723 C286.277 6.14628 286.361 6.2995 286.491 6.57813 C286.614 6.84407 286.764 7.19092 286.936 7.61045 C287.281 8.44883 287.71 9.55808 288.194 10.8514 C289.162 13.4369 290.344 16.7401 291.509 20.0446 C293.833 26.639 296.093 33.2638 296.398 34.1079 L297 33.8906 L297.602 33.6733 C297.297 32.8274 295.052 26.2472 292.716 19.6191 C291.551 16.3124 290.365 13 289.393 10.4027 C288.907 9.10455 288.472 7.9806 288.12 7.12363 C287.944 6.69549 287.786 6.32912 287.651 6.03877 C287.522 5.7611 287.397 5.51495 287.285 5.354 L286.76 5.72061 Z" fill="#fd872f"/><path transform="matrix(1 0 0 1 295.63 34.27)" d="M4.57 2.285 C4.57 3.54697 3.54697 4.57 2.285 4.57 C1.02303 4.57 0 3.54697 0 2.285 C0 1.02303 1.02303 0 2.285 0 C3.54697 0 4.57 1.02303 4.57 2.285 Z" fill="#fd872f"/><path transform="matrix(1 0 0 1 295.63 34.27)" d="M4.57 2.285 L3.47 2.285 C3.47 2.93946 2.93946 3.47 2.285 3.47 L2.285 4.57 L2.285 5.67 C4.15448 5.67 5.67 4.15448 5.67 2.285 L4.57 2.285 Z M2.285 4.57 L2.285 3.47 C1.63054 3.47 1.1 2.93946 1.1 2.285 L0 2.285 L-1.1 2.285 C-1.1 4.15448 0.415516 5.67 2.285 5.67 L2.285 4.57 Z M0 2.285 L1.1 2.285 C1.1 1.63054 1.63054 1.1 2.285 1.1 L2.285 0 L2.285 -1.1 C0.415516 -1.1 -1.1 0.415516 -1.1 2.285 L0 2.285 Z M2.285 0 L2.285 1.1 C2.93946 1.1 3.47 1.63054 3.47 2.285 L4.57 2.285 L5.67 2.285 C5.67 0.415516 4.15448 -1.1 2.285 -1.1 L2.285 0 Z" fill="#ffffff"/></svg>
      <div style={{ position: "absolute", left: "0px", top: "184.16px", width: "339.04px", height: "0.91px", background: "#ededed" }} />
      <div style={{ position: "absolute", left: "18.28px", top: "198.18px", width: "134.88px", height: "14px", display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <svg style={{ width: "6.4px", height: "6.4px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.4" height="6.4" viewBox="0 0 6.4 6.4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.4 3.2 C6.4 4.96731 4.96731 6.4 3.2 6.4 C1.43269 6.4 0 4.96731 0 3.2 C0 1.43269 1.43269 0 3.2 0 C4.96731 0 6.4 1.43269 6.4 3.2 Z" fill="#fd872f"/></svg>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "123px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#fd872f" }}>Sync paused · reconnect</p>
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
