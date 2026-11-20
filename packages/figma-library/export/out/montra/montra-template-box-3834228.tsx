"use client";
// Template box (montra, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Exchange } from "ingotui-icons/react/stroke-rounded";

export function TemplateBox() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} data-fu="card" style={{ width: "240.73px", height: "139.44px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "10.97px", top: "10.97px", width: "166.9px", height: "33.83px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "5.12px", background: "linear-gradient(180deg, #0ab7bd 0%, #a9fcff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Exchange size={12.3} style={{ width: "12.28px", height: "12.28px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "134px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "13.71px", fontWeight: 500, color: "#202020" }}>Cash flow statement</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Weekly · direct method</p>
        </div>
      </div>
      <svg data-fu="plot" style={{ position: "absolute", left: "10.97px", top: "79.12px", width: "218.8px", height: "51.18px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="218.8" height="51.18" viewBox="0 0 218.8 51.18" fill="none" overflow="visible"><defs><linearGradient id="g49_thue" gradientUnits="userSpaceOnUse" x1="106.66" y1="0.00" x2="106.66" y2="48.47"><stop offset="0" stopColor="#0ab7bd" stopOpacity="0.16"/><stop offset="1" stopColor="#0ab7bd" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 0.91 2.74)" d="M0 43.0519 C0.98 42.7319 14.44 37.4619 16.41 37.6819 C18.38 37.8919 30.85 46.8619 32.82 46.6419 C34.79 46.4219 47.26 34.5219 49.23 34.0919 C51.2 33.6619 63.67 39.5819 65.64 39.4719 C67.61 39.3619 80.08 32.5119 82.05 32.3019 C84.02 32.0819 96.49 36.6419 98.46 35.8819 C100.42 35.1319 112.9 20.2919 114.86 19.7519 C116.83 19.2119 129.3 27.1419 131.27 26.9219 C133.24 26.7119 145.71 16.4919 147.68 16.1619 C149.65 15.8419 162.12 22.5119 164.09 21.5419 C166.06 20.5719 178.53 0.681922 180.5 0.0319224 C182.47 -0.618078 194.94 8.85192 196.91 10.7919 C198.88 12.7219 212.34 31.0119 213.32 32.3019 L213.32 48.4719 L0 48.4719 L0 43.0519 Z" fill="url(#g49_thue)"/><path transform="matrix(1 0 0 1 0.91 2.74)" d="M-0.198657 42.4435 C-0.53466 42.5532 -0.718103 42.9146 -0.608387 43.2506 C-0.498672 43.5866 -0.137346 43.77 0.198657 43.6603 L0 43.0519 L-0.198657 42.4435 Z M16.41 37.6819 L16.339 38.318 L16.3422 38.3183 L16.41 37.6819 Z M82.05 32.3019 L82.1178 32.9383 L82.121 32.938 L82.05 32.3019 Z M98.46 35.8819 L98.2313 35.2842 L98.2296 35.2848 L98.46 35.8819 Z M114.86 19.7519 L114.691 19.1347 L114.69 19.1349 L114.86 19.7519 Z M131.27 26.9219 L131.202 26.2855 L131.199 26.2859 L131.27 26.9219 Z M147.68 16.1619 L147.577 15.5302 L147.574 15.5307 L147.68 16.1619 Z M196.91 10.7919 L196.461 11.2479 L196.462 11.2491 L196.91 10.7919 Z M212.81 32.6891 C213.024 32.9705 213.426 33.0254 213.707 32.8115 C213.989 32.5977 214.043 32.1962 213.83 31.9148 L213.32 32.3019 L212.81 32.6891 Z M0 43.0519 L0.198657 43.6603 C0.691544 43.4994 4.35912 42.0815 8.04851 40.7673 C9.91218 40.1035 11.7983 39.4595 13.3372 38.996 C14.1075 38.764 14.7816 38.58 15.3178 38.4612 C15.8845 38.3358 16.2122 38.3038 16.339 38.318 L16.41 37.6819 L16.481 37.0459 C16.1153 37.005 15.5915 37.0896 15.0411 37.2115 C14.4604 37.3401 13.752 37.5342 12.9681 37.7704 C11.3986 38.2431 9.48907 38.8954 7.61899 39.5615 C3.84088 40.9073 0.288456 42.2845 -0.198657 42.4435 L0 43.0519 Z M16.41 37.6819 L16.3422 38.3183 C16.3809 38.3224 16.4827 38.3456 16.6669 38.4167 C16.8417 38.4841 17.0583 38.5818 17.3152 38.7094 C17.8287 38.9645 18.4701 39.3225 19.2041 39.7534 C20.6721 40.6152 22.4668 41.7428 24.2774 42.8669 C26.0808 43.9865 27.8995 45.1023 29.3932 45.9249 C30.139 46.3356 30.818 46.6811 31.3817 46.9185 C31.6633 47.0371 31.9285 47.134 32.1669 47.198 C32.3933 47.2587 32.6492 47.305 32.891 47.278 L32.82 46.6419 L32.749 46.0059 C32.753 46.0054 32.7351 46.0076 32.6872 46.0015 C32.6411 45.9955 32.5788 45.9832 32.4985 45.9617 C32.3369 45.9183 32.1302 45.8449 31.8785 45.7389 C31.3755 45.527 30.7416 45.2062 30.0106 44.8036 C28.5505 43.9996 26.7592 42.9011 24.9526 41.7794 C23.1532 40.6623 21.3379 39.5218 19.8521 38.6495 C19.1093 38.2134 18.4379 37.8379 17.8846 37.5631 C17.6082 37.4257 17.3529 37.3094 17.1277 37.2225 C16.9119 37.1392 16.6853 37.0676 16.4778 37.0455 L16.41 37.6819 Z M32.82 46.6419 L32.891 47.278 C33.129 47.2514 33.3751 47.1504 33.592 47.0426 C33.8226 46.9281 34.0814 46.7743 34.3591 46.5935 C34.9153 46.2313 35.5884 45.7337 36.332 45.1531 C37.8207 43.9906 39.6356 42.4605 41.4385 40.9341 C43.247 39.4031 45.0434 37.8758 46.5113 36.7034 C47.2456 36.1169 47.8882 35.627 48.4029 35.2729 C48.6604 35.0956 48.8777 34.9582 49.0529 34.8611 C49.2395 34.7577 49.3373 34.7236 49.3665 34.7172 L49.23 34.0919 L49.0935 33.4666 C48.8764 33.514 48.6459 33.6232 48.4325 33.7415 C48.2077 33.8661 47.9531 34.0286 47.6773 34.2184 C47.1253 34.5982 46.455 35.1102 45.7125 35.7032 C44.2266 36.8899 42.413 38.432 40.6115 39.9572 C38.8044 41.4871 37.0093 43.0002 35.5442 44.1442 C34.8109 44.7168 34.1713 45.1884 33.6607 45.5208 C33.4051 45.6873 33.192 45.8121 33.0226 45.8963 C32.9383 45.9381 32.8713 45.9667 32.8202 45.9848 C32.7668 46.0039 32.7453 46.0063 32.749 46.0059 L32.82 46.6419 Z M49.23 34.0919 L49.3665 34.7172 C49.3941 34.7112 49.4813 34.7025 49.6545 34.7196 C49.8192 34.7358 50.0273 34.7716 50.2789 34.8284 C50.7819 34.9421 51.4153 35.13 52.1455 35.3737 C53.6046 35.8606 55.3949 36.5509 57.2018 37.2579 C59.0009 37.9619 60.8174 38.6827 62.3047 39.2193 C63.0484 39.4876 63.7213 39.714 64.2763 39.8706 C64.8021 40.019 65.309 40.1314 65.6757 40.1109 L65.64 39.4719 L65.6043 38.8329 C65.4785 38.8399 65.1647 38.7914 64.6239 38.6388 C64.1121 38.4943 63.4723 38.2797 62.7391 38.0152 C61.2726 37.4862 59.4791 36.7745 57.6682 36.0659 C55.8651 35.3604 54.0454 34.6583 52.5507 34.1595 C51.8041 33.9104 51.1246 33.7072 50.561 33.5799 C50.2791 33.5162 50.0154 33.469 49.7801 33.4458 C49.5532 33.4234 49.3121 33.4189 49.0935 33.4666 L49.23 34.0919 Z M65.64 39.4719 L65.6757 40.1109 C66.0315 40.0911 66.5272 39.9362 67.0529 39.7408 C67.6052 39.5355 68.2761 39.2516 69.0196 38.9189 C70.5072 38.2531 72.3215 37.3754 74.1245 36.5002 C75.9326 35.6224 77.7293 34.7471 79.1974 34.0777 C79.9316 33.7429 80.5754 33.4634 81.0922 33.2622 C81.6325 33.0519 81.968 32.9543 82.1178 32.9383 L82.05 32.3019 L81.9822 31.6655 C81.6395 31.7021 81.1544 31.8645 80.6279 32.0694 C80.078 32.2834 79.409 32.5744 78.6664 32.913 C77.1807 33.5905 75.3674 34.474 73.5655 35.3487 C71.7585 36.2259 69.9628 37.0945 68.4967 37.7506 C67.7633 38.0788 67.1213 38.3498 66.6069 38.541 C66.0659 38.7421 65.741 38.8253 65.6043 38.8329 L65.64 39.4719 Z M82.05 32.3019 L82.121 32.938 C82.2591 32.9225 82.5809 32.9492 83.1195 33.0523 C83.6325 33.1506 84.2732 33.3036 85.0068 33.4947 C86.4755 33.8772 88.2677 34.3992 90.0814 34.9104 C91.8857 35.419 93.7085 35.916 95.2075 36.238 C95.9561 36.3988 96.6398 36.5194 97.2085 36.5743 C97.7428 36.6259 98.2897 36.6336 98.6904 36.479 L98.46 35.8819 L98.2296 35.2848 C98.1378 35.3203 97.8641 35.3517 97.3316 35.3002 C96.8336 35.2521 96.2045 35.1429 95.4763 34.9865 C94.0215 34.6741 92.2343 34.1874 90.4286 33.6784 C88.6323 33.1721 86.8145 32.6429 85.3294 32.256 C84.5862 32.0624 83.9141 31.9012 83.3603 31.7952 C82.8323 31.694 82.3334 31.6263 81.979 31.6659 L82.05 32.3019 Z M98.46 35.8819 L98.6887 36.4797 C98.8989 36.3992 99.1216 36.2515 99.3302 36.0947 C99.5504 35.9291 99.8012 35.7175 100.075 35.4717 C100.622 34.9796 101.289 34.3251 102.031 33.5693 C103.514 32.0569 105.326 30.1074 107.128 28.1747 C108.935 26.2372 110.732 24.3165 112.199 22.8467 C112.933 22.1112 113.576 21.4975 114.091 21.0541 C114.348 20.8321 114.565 20.6604 114.739 20.5395 C114.826 20.4793 114.896 20.4359 114.951 20.4064 C115.008 20.3753 115.033 20.3682 115.03 20.3689 L114.86 19.7519 L114.69 19.1349 C114.457 19.199 114.22 19.3421 114.009 19.4881 C113.784 19.6443 113.53 19.8475 113.255 20.0844 C112.704 20.559 112.035 21.1991 111.293 21.9424 C109.808 23.4305 107.995 25.3679 106.192 27.3017 C104.384 29.2402 102.586 31.1751 101.117 32.673 C100.382 33.4223 99.737 34.0544 99.2193 34.5196 C98.9602 34.7524 98.74 34.9371 98.5611 35.0716 C98.3706 35.2148 98.2661 35.2709 98.2313 35.2842 L98.46 35.8819 Z M114.86 19.7519 L115.029 20.3692 C115.029 20.3692 115.092 20.3561 115.257 20.3795 C115.412 20.4015 115.613 20.4488 115.861 20.5255 C116.357 20.6788 116.986 20.9311 117.716 21.2591 C119.172 21.914 120.961 22.8388 122.768 23.7841 C124.567 24.7246 126.386 25.6857 127.876 26.3962 C128.621 26.7513 129.299 27.051 129.861 27.256 C130.141 27.3585 130.404 27.4416 130.64 27.4955 C130.864 27.5471 131.111 27.5836 131.341 27.558 L131.27 26.9219 L131.199 26.2859 C131.199 26.2859 131.197 26.2861 131.194 26.2862 C131.19 26.2864 131.185 26.2865 131.179 26.2864 C131.165 26.2862 131.146 26.2852 131.122 26.2827 C131.072 26.2775 131.008 26.2667 130.926 26.2479 C130.761 26.2101 130.552 26.1459 130.3 26.0537 C129.794 25.8692 129.159 25.5897 128.427 25.2408 C126.964 24.5432 125.173 23.5968 123.362 22.6498 C121.559 21.7075 119.738 20.7648 118.241 20.0917 C117.493 19.7556 116.809 19.4786 116.239 19.3025 C115.954 19.2145 115.683 19.147 115.437 19.1122 C115.202 19.0789 114.937 19.0672 114.691 19.1347 L114.86 19.7519 Z M131.27 26.9219 L131.338 27.5583 C131.559 27.5348 131.794 27.4513 132.011 27.3576 C132.239 27.259 132.497 27.1266 132.774 26.9705 C133.329 26.6581 134.002 26.2295 134.745 25.7296 C136.234 24.7291 138.048 23.4143 139.851 22.1047 C141.659 20.7911 143.455 19.4827 144.923 18.4815 C145.657 17.9806 146.299 17.5633 146.813 17.2631 C147.07 17.1129 147.287 16.9967 147.463 16.9151 C147.648 16.8289 147.749 16.7992 147.786 16.7931 L147.68 16.1619 L147.574 15.5307 C147.364 15.5659 147.137 15.6547 146.923 15.7545 C146.698 15.859 146.443 15.9965 146.167 16.1577 C145.615 16.4804 144.944 16.9173 144.201 17.4242 C142.715 18.4386 140.901 19.7603 139.099 21.0691 C137.292 22.3821 135.496 23.6823 134.031 24.6673 C133.298 25.1603 132.658 25.5671 132.146 25.8551 C131.89 25.9992 131.675 26.1083 131.503 26.1826 C131.32 26.2618 131.227 26.2828 131.202 26.2855 L131.27 26.9219 Z M147.68 16.1619 L147.783 16.7936 C147.808 16.7896 147.894 16.7855 148.069 16.8127 C148.235 16.8384 148.444 16.8861 148.697 16.9571 C149.202 17.0991 149.837 17.3215 150.569 17.6017 C152.034 18.1623 153.824 18.9291 155.639 19.6863 C157.442 20.4387 159.269 21.1809 160.773 21.6737 C161.523 21.9197 162.215 22.1107 162.795 22.2074 C163.085 22.2558 163.364 22.2834 163.617 22.2777 C163.864 22.2721 164.133 22.2344 164.373 22.1161 L164.09 21.5419 L163.807 20.9678 C163.807 20.9677 163.792 20.9751 163.753 20.9827 C163.715 20.9902 163.661 20.9964 163.588 20.998 C163.442 21.0013 163.249 20.9854 163.005 20.9448 C162.519 20.8637 161.897 20.6953 161.171 20.4573 C159.721 19.9823 157.938 19.2588 156.131 18.505 C154.336 17.756 152.516 16.9759 151.027 16.4062 C150.282 16.1212 149.604 15.8826 149.043 15.7249 C148.762 15.646 148.5 15.5842 148.265 15.5478 C148.04 15.5129 147.799 15.4943 147.577 15.5302 L147.68 16.1619 Z M164.09 21.5419 L164.373 22.1161 C164.597 22.0056 164.824 21.8049 165.029 21.6012 C165.248 21.3828 165.498 21.1026 165.771 20.7763 C166.317 20.1228 166.983 19.251 167.724 18.242 C169.207 16.2228 171.017 13.6173 172.82 11.0331 C174.626 8.44357 176.425 5.87537 177.894 3.91441 C178.629 2.93296 179.274 2.11441 179.791 1.52508 C180.05 1.22973 180.268 1.00236 180.443 0.843775 C180.638 0.666285 180.716 0.634429 180.701 0.639694 L180.5 0.0319224 L180.299 -0.575849 C180.037 -0.489334 179.787 -0.289628 179.582 -0.103876 C179.357 0.100783 179.103 0.368336 178.829 0.680952 C178.279 1.30756 177.611 2.15714 176.87 3.14693 C175.385 5.12848 173.574 7.71528 171.77 10.3008 C169.963 12.8915 168.163 15.481 166.692 17.4844 C165.956 18.4866 165.309 19.3329 164.789 19.9553 C164.528 20.267 164.306 20.5143 164.126 20.6941 C164.036 20.7838 163.961 20.8515 163.901 20.8998 C163.872 20.9238 163.849 20.9409 163.831 20.9527 C163.813 20.9649 163.806 20.9686 163.807 20.9678 L164.09 21.5419 Z M180.5 0.0319224 L180.701 0.639694 C180.679 0.646677 180.723 0.628454 180.88 0.655215 C181.025 0.680049 181.219 0.734946 181.465 0.827134 C181.954 1.01127 182.579 1.31784 183.306 1.7246 C184.755 2.53595 186.54 3.70533 188.338 4.96486 C191.946 7.49233 195.517 10.3187 196.461 11.2479 L196.91 10.7919 L197.359 10.3359 C196.333 9.32519 192.684 6.44651 189.072 3.91648 C187.26 2.64726 185.435 1.44977 183.931 0.607684 C183.181 0.187728 182.492 -0.154062 181.915 -0.370985 C181.627 -0.479324 181.349 -0.563128 181.095 -0.606551 C180.852 -0.648047 180.567 -0.664082 180.299 -0.575849 L180.5 0.0319224 Z M196.91 10.7919 L196.462 11.2491 C196.915 11.6931 198.094 13.1539 199.661 15.1776 C201.213 17.18 203.108 19.6844 204.974 22.1711 C208.699 27.1342 212.321 32.0451 212.81 32.6891 L213.32 32.3019 L213.83 31.9148 C213.339 31.2688 209.741 26.3897 205.998 21.4028 C204.131 18.9144 202.231 16.4039 200.673 14.3937 C199.133 12.4049 197.89 10.8557 197.358 10.3348 L196.91 10.7919 Z" fill="#0ab7bd"/><path transform="matrix(1 0 0 1 211.95 32.729)" d="M4.57 2.285 C4.57 3.54697 3.54697 4.57 2.285 4.57 C1.02303 4.57 0 3.54697 0 2.285 C0 1.02303 1.02303 0 2.285 0 C3.54697 0 4.57 1.02303 4.57 2.285 Z" fill="#0ab7bd"/><path transform="matrix(1 0 0 1 211.95 32.729)" d="M4.57 2.285 L3.47 2.285 C3.47 2.93946 2.93946 3.47 2.285 3.47 L2.285 4.57 L2.285 5.67 C4.15448 5.67 5.67 4.15448 5.67 2.285 L4.57 2.285 Z M2.285 4.57 L2.285 3.47 C1.63054 3.47 1.1 2.93946 1.1 2.285 L0 2.285 L-1.1 2.285 C-1.1 4.15448 0.415516 5.67 2.285 5.67 L2.285 4.57 Z M0 2.285 L1.1 2.285 C1.1 1.63054 1.63054 1.1 2.285 1.1 L2.285 0 L2.285 -1.1 C0.415516 -1.1 -1.1 0.415516 -1.1 2.285 L0 2.285 Z M2.285 0 L2.285 1.1 C2.93946 1.1 3.47 1.63054 3.47 2.285 L4.57 2.285 L5.67 2.285 C5.67 0.415516 4.15448 -1.1 2.285 -1.1 L2.285 0 Z" fill="#ffffff"/></svg>
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
