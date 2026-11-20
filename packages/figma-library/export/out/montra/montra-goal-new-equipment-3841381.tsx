"use client";
// Goal New equipment (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { DeviceLaptop, Dots } from "ingotui-icons/react/stroke-rounded";

export function GoalNewEquipment() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} data-fu="card" style={{ width: "251.7px", height: "240px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "16.45px", top: "16.45px", width: "218.8px", height: "32.83px", display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #8e83fd 0%, #d9d4ff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <DeviceLaptop size={13.2} strokeWidth={1.49} style={{ width: "13.16px", height: "13.16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#202020" }}>New equipment</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Target Feb 2027</p>
        </div>
        <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
        </div>
      </div>
      <div style={{ position: "absolute", left: "16.45px", top: "69.46px", width: "95.04px", height: "95.04px" }}>
        <svg style={{ position: "absolute", left: "5.02px", top: "5.03px", width: "84.99px", height: "84.99px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="84.99" height="84.99" viewBox="0 0 84.99 84.99" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M42.51 84.99 L42.5079 79.965 L42.5079 79.965 L42.51 84.99 Z M84.99 42.49 L79.965 42.49 C79.965 63.1859 63.2032 79.9562 42.5079 79.965 L42.51 84.99 L42.5122 90.015 C68.7568 90.0039 90.015 68.7341 90.015 42.49 L84.99 42.49 Z M42.51 84.99 L42.5079 79.965 C21.8229 79.9739 5.04265 63.212 5.02501 42.5258 L1.5775e-05 42.53 L-5.02498 42.5343 C-5.00262 68.7681 16.2771 90.0262 42.5122 90.015 L42.51 84.99 Z M1.5775e-05 42.53 L5.02501 42.5258 C5.00738 21.8402 21.7607 5.05148 42.4464 5.02503 L42.44 3.54961e-05 L42.4336 -5.02496 C16.1993 -4.99141 -5.04735 16.2998 -5.02498 42.5343 L1.5775e-05 42.53 Z M42.44 3.54961e-05 L42.4464 5.02503 C63.1325 4.99858 79.9297 21.7435 79.965 42.4286 L84.99 42.42 L90.015 42.4115 C89.9703 16.1766 68.6675 -5.05851 42.4336 -5.02496 L42.44 3.54961e-05 Z" fill="#efeeff"/></svg>
        <svg style={{ position: "absolute", left: "38.68px", top: "5.03px", width: "51.33px", height: "84.99px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="51.33" height="84.99" viewBox="0 0 51.33 84.99" fill="none" overflow="visible"><defs><linearGradient id="g18_tc2e" gradientUnits="userSpaceOnUse" x1="25.66" y1="0.00" x2="25.66" y2="84.99"><stop offset="0" stopColor="#b6aefe"/><stop offset="1" stopColor="#8e83fd"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M8.84 -5.025 C6.06477 -5.025 3.815 -2.77523 3.815 0 C3.815 2.77523 6.06477 5.025 8.84 5.025 L8.84 0 L8.84 -5.025 Z M47.03 23.87 L42.5129 26.0714 L42.5135 26.0726 L47.03 23.87 Z M42.32 68.66 L46.2798 71.7536 L46.281 71.7521 L42.32 68.66 Z M1.04549 79.145 C-1.66901 78.5676 -4.33763 80.3 -4.91504 83.0145 C-5.49244 85.729 -3.75999 88.3976 -1.04549 88.975 L0 84.06 L1.04549 79.145 Z M8.84 0 L8.84 5.025 C23.1595 5.025 36.2353 13.1901 42.5129 26.0714 L47.03 23.87 L51.5471 21.6686 C43.5847 5.32989 27.0005 -5.025 8.84 -5.025 L8.84 0 Z M47.03 23.87 L42.5135 26.0726 C48.7908 38.9446 47.1786 54.27 38.359 65.5679 L42.32 68.66 L46.281 71.7521 C57.4614 57.43 59.5092 37.9954 51.5465 21.6674 L47.03 23.87 Z M42.32 68.66 L38.3602 65.5664 C29.5431 76.8523 15.0559 82.1252 1.04549 79.145 L0 84.06 L-1.04549 88.975 C16.7241 92.7548 35.0969 86.0677 46.2798 71.7536 L42.32 68.66 Z" fill="url(#g18_tc2e)"/></svg>
        <svg style={{ position: "absolute", left: "16.45px", top: "16.45px", width: "62.14px", height: "62.14px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="62.14" height="62.14" viewBox="0 0 62.14 62.14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M31.07 -0.73 C30.6669 -0.73 30.34 -0.403168 30.34 0 C30.34 0.403168 30.6669 0.73 31.07 0.73 L31.07 0 L31.07 -0.73 Z M62.14 31.06 L61.41 31.0604 L61.41 31.0604 L62.14 31.06 Z M31.1 62.14 L31.1004 62.87 L31.1004 62.87 L31.1 62.14 Z M2.15867e-05 31.11 L-0.729978 31.1109 L2.15867e-05 31.11 Z M31.0213 0.729999 C31.4245 0.729294 31.7507 0.401891 31.75 -0.00127622 C31.7493 -0.404443 31.4219 -0.730704 31.0187 -0.729999 L31.02 0 L31.0213 0.729999 Z M30.965 -0.72986 C30.5618 -0.728489 30.2361 -0.400546 30.2375 0.00261919 C30.2389 0.405785 30.5668 0.731503 30.97 0.730131 L30.9675 0.000135306 L30.965 -0.72986 Z M26.3249 1.09936 C26.7232 1.03678 26.9953 0.663178 26.9327 0.264897 C26.8701 -0.133385 26.4965 -0.405525 26.0983 -0.342945 L26.2116 0.378207 L26.3249 1.09936 Z M25.9923 -0.326108 C25.5942 -0.262182 25.3233 0.112338 25.3873 0.510405 C25.4512 0.908473 25.8257 1.17935 26.2238 1.11542 L26.108 0.394657 L25.9923 -0.326108 Z M21.6954 2.20673 C22.0789 2.08225 22.2888 1.67047 22.1644 1.287 C22.0399 0.903532 21.6281 0.69358 21.2446 0.81806 L21.47 1.51239 L21.6954 2.20673 Z M21.1428 0.851304 C20.7598 0.977085 20.5512 1.38957 20.677 1.77261 C20.8028 2.15566 21.2153 2.36421 21.5983 2.23843 L21.3706 1.54487 L21.1428 0.851304 Z M17.2986 4.02929 C17.6577 3.84601 17.8003 3.40633 17.617 3.04723 C17.4337 2.68812 16.994 2.54559 16.6349 2.72887 L16.9668 3.37908 L17.2986 4.02929 Z M16.5397 2.77766 C16.1812 2.96214 16.0402 3.40231 16.2247 3.76079 C16.4092 4.11927 16.8493 4.26032 17.2078 4.07583 L16.8738 3.42674 L16.5397 2.77766 Z M13.2418 6.51948 C13.5679 6.2823 13.6399 5.82573 13.4027 5.49972 C13.1655 5.1737 12.7089 5.10169 12.3829 5.33888 L12.8124 5.92918 L13.2418 6.51948 Z M12.2966 5.40191 C11.9714 5.64019 11.9009 6.097 12.1392 6.42222 C12.3774 6.74744 12.8342 6.81792 13.1595 6.57964 L12.728 5.99078 L12.2966 5.40191 Z M9.62249 9.61235 C9.90763 9.32733 9.90773 8.86512 9.6227 8.57998 C9.33768 8.29484 8.87547 8.29474 8.59033 8.57977 L9.10641 9.09606 L9.62249 9.61235 Z M8.51483 8.65549 C8.23064 8.94146 8.23209 9.40367 8.51807 9.68786 C8.80404 9.97204 9.26625 9.97059 9.55044 9.68462 L9.03263 9.17005 L8.51483 8.65549 Z M6.5281 13.2305 C6.76542 12.9046 6.69361 12.448 6.36769 12.2106 C6.04178 11.9733 5.58518 12.0451 5.34785 12.371 L5.93798 12.8007 L6.5281 13.2305 Z M5.28507 12.4576 C5.04884 12.7843 5.12218 13.2406 5.44889 13.4769 C5.7756 13.7131 6.23195 13.6397 6.46818 13.313 L5.87663 12.8853 L5.28507 12.4576 Z M4.03607 17.2861 C4.21952 16.9271 4.0772 16.4873 3.71819 16.3039 C3.35917 16.1204 2.91942 16.2628 2.73597 16.6218 L3.38602 16.9539 L4.03607 17.2861 Z M2.68746 16.7171 C2.50522 17.0767 2.64903 17.516 3.00866 17.6983 C3.36829 17.8805 3.80756 17.7367 3.9898 17.3771 L3.33863 17.0471 L2.68746 16.7171 Z M2.21134 21.6819 C2.33602 21.2985 2.12628 20.8866 1.74288 20.7619 C1.35947 20.6372 0.947588 20.847 0.822908 21.2304 L1.51712 21.4561 L2.21134 21.6819 Z M0.789957 21.3323 C0.666578 21.7161 0.877712 22.1273 1.26154 22.2507 C1.64536 22.3741 2.05653 22.1629 2.17991 21.7791 L1.48493 21.5557 L0.789957 21.3323 Z M1.10159 26.3106 C1.16438 25.9123 0.892428 25.5386 0.494178 25.4758 C0.0959292 25.413 -0.277812 25.685 -0.340596 26.0832 L0.380498 26.1969 L1.10159 26.3106 Z M-0.357128 26.1892 C-0.418565 26.5877 -0.145354 26.9605 0.253105 27.0219 C0.651564 27.0834 1.02438 26.8102 1.08582 26.4117 L0.364347 26.3005 L-0.357128 26.1892 Z M0.730004 31.0578 C0.730201 30.6546 0.403529 30.3277 0.00036085 30.3275 C-0.402807 30.3273 -0.729799 30.6539 -0.729996 31.0571 L3.79636e-06 31.0575 L0.730004 31.0578 Z M-0.729871 31.1646 C-0.728733 31.5678 -0.40098 31.8937 0.00218655 31.8925 C0.405353 31.8914 0.731261 31.5636 0.730123 31.1605 L0.000126353 31.1625 L-0.729871 31.1646 Z M1.09698 35.8056 C1.03458 35.4073 0.661098 35.135 0.262789 35.1974 C-0.13552 35.2598 -0.407825 35.6333 -0.345421 36.0316 L0.375781 35.9186 L1.09698 35.8056 Z M-0.328631 36.1376 C-0.264879 36.5357 0.109521 36.8068 0.507617 36.743 C0.905713 36.6793 1.17675 36.3049 1.113 35.9068 L0.392185 36.0222 L-0.328631 36.1376 Z M2.20254 40.4355 C2.07819 40.0519 1.66649 39.8419 1.28298 39.9662 C0.899466 40.0906 0.689375 40.5023 0.813726 40.8858 L1.50813 40.6606 L2.20254 40.4355 Z M0.846935 40.9876 C0.972588 41.3707 1.385 41.5794 1.76809 41.4537 C2.15118 41.3281 2.35987 40.9157 2.23422 40.5326 L1.54058 40.7601 L0.846935 40.9876 Z M4.02377 44.8327 C3.84058 44.4736 3.40094 44.3309 3.04179 44.5141 C2.68264 44.6973 2.53999 45.1369 2.72317 45.4961 L3.37347 45.1644 L4.02377 44.8327 Z M2.77193 45.5913 C2.95632 45.9498 3.39645 46.091 3.75498 45.9066 C4.11351 45.7222 4.25467 45.2821 4.07028 44.9236 L3.42111 45.2574 L2.77193 45.5913 Z M6.51294 48.8901 C6.27583 48.564 5.81928 48.4919 5.49321 48.729 C5.16714 48.9661 5.09502 49.4227 5.33214 49.7487 L5.92254 49.3194 L6.51294 48.8901 Z M5.39515 49.8351 C5.63336 50.1604 6.09015 50.231 6.41542 49.9928 C6.7407 49.7546 6.81128 49.2978 6.57308 48.9725 L5.98412 49.4038 L5.39515 49.8351 Z M9.605 52.5101 C9.32004 52.2249 8.85783 52.2247 8.57263 52.5097 C8.28742 52.7947 8.28723 53.2569 8.57219 53.5421 L9.0886 53.0261 L9.605 52.5101 Z M8.64789 53.6176 C8.93381 53.9018 9.39602 53.9005 9.68027 53.6146 C9.96452 53.3287 9.96317 52.8664 9.67725 52.5822 L9.16257 53.0999 L8.64789 53.6176 Z M13.2224 55.6053 C12.8966 55.3679 12.44 55.4396 12.2026 55.7655 C11.9652 56.0914 12.0369 56.548 12.3627 56.7854 L12.7926 56.1954 L13.2224 55.6053 Z M12.4492 56.8482 C12.7759 57.0845 13.2323 57.0112 13.4686 56.6846 C13.7049 56.3579 13.6316 55.9016 13.305 55.6653 L12.8771 56.2567 L12.4492 56.8482 Z M17.2775 58.0984 C16.9185 57.9148 16.4787 58.057 16.2952 58.416 C16.1116 58.775 16.2538 59.2147 16.6128 59.3983 L16.9451 58.7483 L17.2775 58.0984 Z M16.7081 59.4468 C17.0677 59.6292 17.507 59.4855 17.6893 59.1259 C17.8717 58.7663 17.728 58.327 17.3684 58.1447 L17.0383 58.7957 L16.7081 59.4468 Z M21.6728 59.9244 C21.2894 59.7996 20.8775 60.0092 20.7526 60.3926 C20.6278 60.7759 20.8374 61.1879 21.2208 61.3127 L21.4468 60.6186 L21.6728 59.9244 Z M21.3227 61.3457 C21.7065 61.4692 22.1177 61.2582 22.2412 60.8744 C22.3647 60.4906 22.1537 60.0794 21.77 59.9559 L21.5463 60.6508 L21.3227 61.3457 Z M26.3011 61.036 C25.9029 60.973 25.529 61.2448 25.4661 61.643 C25.4031 62.0412 25.6749 62.4151 26.0731 62.4781 L26.1871 61.757 L26.3011 61.036 Z M26.1791 62.4946 C26.5776 62.5563 26.9505 62.2832 27.0121 61.8848 C27.0737 61.4864 26.8007 61.1134 26.4022 61.0518 L26.2907 61.7732 L26.1791 62.4946 Z M31.0483 61.41 C30.6451 61.4096 30.3179 61.736 30.3175 62.1392 C30.3171 62.5424 30.6435 62.8696 31.0467 62.87 L31.0475 62.14 L31.0483 61.41 Z M31.1542 62.8699 C31.5574 62.869 31.8835 62.5415 31.8826 62.1383 C31.8816 61.7351 31.5541 61.409 31.1509 61.4099 L31.1526 62.1399 L31.1542 62.8699 Z M35.7957 61.0457 C35.3973 61.1079 35.1248 61.4812 35.187 61.8796 C35.2492 62.2779 35.6226 62.5504 36.0209 62.4882 L35.9083 61.7669 L35.7957 61.0457 Z M36.1269 62.4715 C36.525 62.4079 36.7962 62.0337 36.7327 61.6355 C36.6692 61.2374 36.2949 60.9662 35.8968 61.0297 L36.0118 61.7506 L36.1269 62.4715 Z M40.4255 59.9426 C40.0419 60.0668 39.8316 60.4784 39.9557 60.862 C40.0799 61.2455 40.4915 61.4558 40.8751 61.3317 L40.6503 60.6372 L40.4255 59.9426 Z M40.9769 61.2985 C41.3601 61.1731 41.569 60.7608 41.4435 60.3776 C41.318 59.9945 40.9057 59.7856 40.5226 59.911 L40.7497 60.6048 L40.9769 61.2985 Z M44.8231 58.1239 C44.4639 58.3069 44.321 58.7464 44.504 59.1057 C44.687 59.4649 45.1266 59.6078 45.4858 59.4248 L45.1545 58.7743 L44.8231 58.1239 Z M45.581 59.3761 C45.9397 59.1919 46.0811 58.7519 45.8969 58.3932 C45.7127 58.0346 45.2726 57.8932 44.914 58.0774 L45.2475 58.7268 L45.581 59.3761 Z M48.8813 55.6371 C48.5551 55.8741 48.4828 56.3306 48.7197 56.6568 C48.9566 56.983 49.4131 57.0554 49.7393 56.8184 L49.3103 56.2278 L48.8813 55.6371 Z M49.8257 56.7555 C50.1511 56.5174 50.222 56.0607 49.9839 55.7353 C49.7459 55.4099 49.2892 55.339 48.9638 55.5771 L49.3947 56.1663 L49.8257 56.7555 Z M52.5027 52.5475 C52.2173 52.8323 52.2168 53.2945 52.5016 53.5798 C52.7864 53.8652 53.2486 53.8657 53.534 53.5809 L53.0183 53.0642 L52.5027 52.5475 Z M53.6096 53.5052 C53.894 53.2195 53.8929 52.7573 53.6071 52.4728 C53.3214 52.1884 52.8592 52.1895 52.5748 52.4753 L53.0922 52.9902 L53.6096 53.5052 Z M55.5996 48.9323 C55.362 49.258 55.4334 49.7146 55.7592 49.9522 C56.0849 50.1898 56.5415 50.1184 56.7791 49.7926 L56.1893 49.3624 L55.5996 48.9323 Z M56.842 49.7062 C57.0785 49.3797 57.0055 48.9232 56.679 48.6867 C56.3524 48.4503 55.896 48.5232 55.6595 48.8498 L56.2508 49.278 L56.842 49.7062 Z M58.0945 44.8791 C57.9108 45.238 58.0528 45.6779 58.4116 45.8616 C58.7705 46.0453 59.2104 45.9034 59.3941 45.5445 L58.7443 45.2118 L58.0945 44.8791 Z M59.4427 45.4492 C59.6252 45.0897 59.4818 44.6503 59.1223 44.4678 C58.7628 44.2853 58.3234 44.4287 58.1409 44.7882 L58.7918 45.1187 L59.4427 45.4492 Z M59.9225 40.4853 C59.7975 40.8686 60.0069 41.2807 60.3902 41.4057 C60.7736 41.5306 61.1856 41.3212 61.3106 40.9379 L60.6165 40.7116 L59.9225 40.4853 Z M61.3436 40.836 C61.4673 40.4523 61.2564 40.041 60.8727 39.9173 C60.489 39.7936 60.0777 40.0044 59.954 40.3882 L60.6488 40.6121 L61.3436 40.836 Z M61.0354 35.8581 C60.9724 36.2563 61.2441 36.6302 61.6423 36.6933 C62.0405 36.7564 62.4144 36.4847 62.4775 36.0865 L61.7565 35.9723 L61.0354 35.8581 Z M62.4941 35.9804 C62.5558 35.582 62.2828 35.209 61.8844 35.1473 C61.486 35.0856 61.113 35.3586 61.0513 35.757 L61.7727 35.8687 L62.4941 35.9804 Z M61.41 31.1118 C61.4096 31.5149 61.7361 31.8421 62.1392 31.8425 C62.5424 31.843 62.8696 31.5165 62.87 31.1133 L62.14 31.1125 L61.41 31.1118 Z M62.8699 31.0058 C62.869 30.6027 62.5415 30.2766 62.1383 30.2775 C61.7351 30.2784 61.409 30.6059 61.41 31.0091 L62.1399 31.0075 L62.8699 31.0058 Z M61.0462 26.3635 C61.1083 26.7619 61.4816 27.0345 61.88 26.9724 C62.2783 26.9103 62.5509 26.537 62.4888 26.1387 L61.7675 26.2511 L61.0462 26.3635 Z M62.4721 26.0327 C62.4087 25.6345 62.0345 25.3632 61.6363 25.4266 C61.2382 25.4901 60.9669 25.8643 61.0303 26.2624 L61.7512 26.1475 L62.4721 26.0327 Z M59.9446 21.7327 C60.0686 22.1163 60.4801 22.3268 60.8637 22.2028 C61.2474 22.0788 61.4578 21.6673 61.3338 21.2836 L60.6392 21.5082 L59.9446 21.7327 Z M61.3007 21.1818 C61.1754 20.7986 60.7632 20.5895 60.38 20.7148 C59.9968 20.8401 59.7877 21.2523 59.913 21.6355 L60.6069 21.4086 L61.3007 21.1818 Z M58.1277 17.3335 C58.3105 17.6928 58.75 17.8359 59.1094 17.6531 C59.4687 17.4703 59.6118 17.0308 59.429 16.6715 L58.7784 17.0025 L58.1277 17.3335 Z M59.3803 16.5762 C59.1963 16.2175 58.7563 16.0759 58.3976 16.2599 C58.0389 16.4439 57.8973 16.8839 58.0813 17.2426 L58.7308 16.9094 L59.3803 16.5762 Z M55.6429 13.2734 C55.8797 13.5997 56.3361 13.6723 56.6625 13.4356 C56.9888 13.1989 57.0614 12.7424 56.8247 12.416 L56.2338 12.8447 L55.6429 13.2734 Z M56.7618 12.3296 C56.5239 12.0041 56.0672 11.933 55.7417 12.1708 C55.4161 12.4087 55.345 12.8654 55.5829 13.1909 L56.1723 12.7603 L56.7618 12.3296 Z M52.5549 9.64985 C52.8396 9.93537 53.3018 9.9361 53.5873 9.65146 C53.8728 9.36682 53.8736 8.90461 53.5889 8.61908 L53.0719 9.13447 L52.5549 9.64985 Z M53.5133 8.54348 C53.2277 8.25891 52.7655 8.25973 52.4809 8.54532 C52.1964 8.83091 52.1972 9.29312 52.4828 9.5777 L52.998 9.06059 L53.5133 8.54348 Z M48.941 6.55056 C49.2666 6.78833 49.7233 6.71713 49.9611 6.39153 C50.1988 6.06594 50.1276 5.60924 49.8021 5.37148 L49.3715 5.96102 L48.941 6.55056 Z M49.7156 5.30858 C49.3892 5.0719 48.9328 5.14463 48.6961 5.47102 C48.4594 5.79741 48.5322 6.25387 48.8585 6.49054 L49.2871 5.89956 L49.7156 5.30858 Z M44.8887 4.05315 C45.2475 4.23707 45.6875 4.09533 45.8714 3.73656 C46.0553 3.37778 45.9135 2.93785 45.5548 2.75392 L45.2218 3.40354 L44.8887 4.05315 Z M45.4595 2.70529 C45.1001 2.52258 44.6607 2.66581 44.478 3.0252 C44.2952 3.38459 44.4385 3.82405 44.7979 4.00676 L45.1287 3.35602 L45.4595 2.70529 Z M40.4954 2.22275 C40.8786 2.34792 41.2908 2.13871 41.4159 1.75546 C41.5411 1.37221 41.3319 0.960064 40.9486 0.834897 L40.722 1.52883 L40.4954 2.22275 Z M40.8468 0.801818 C40.4631 0.677953 40.0516 0.888565 39.9278 1.27223 C39.8039 1.6559 40.0145 2.06734 40.3982 2.19121 L40.6225 1.49651 L40.8468 0.801818 Z M35.8681 1.10727 C36.2663 1.17054 36.6404 0.899048 36.7036 0.500875 C36.7669 0.102703 36.4954 -0.271369 36.0972 -0.334637 L35.9827 0.386319 L35.8681 1.10727 Z M35.9912 -0.351297 C35.5928 -0.413218 35.2197 -0.14046 35.1578 0.257925 C35.0958 0.656309 35.3686 1.02946 35.767 1.09138 L35.8791 0.370042 L35.9912 -0.351297 Z M31.1213 0.730043 C31.5245 0.73071 31.8519 0.404419 31.8526 0.00125204 C31.8532 -0.401915 31.5269 -0.729288 31.1238 -0.729956 L31.1226 4.34862e-05 L31.1213 0.730043 Z M31.02 0 L31.0187 -0.729999 C31.0008 -0.729968 30.9829 -0.729921 30.965 -0.72986 L30.9675 0.000135306 L30.97 0.730131 C30.9871 0.730073 31.0042 0.730029 31.0213 0.729999 L31.02 0 Z M26.2116 0.378207 L26.0983 -0.342945 C26.0629 -0.337391 26.0276 -0.331778 25.9923 -0.326108 L26.108 0.394657 L26.2238 1.11542 C26.2575 1.11001 26.2912 1.10466 26.3249 1.09936 L26.2116 0.378207 Z M21.47 1.51239 L21.2446 0.81806 C21.2107 0.829086 21.1767 0.840167 21.1428 0.851304 L21.3706 1.54487 L21.5983 2.23843 C21.6306 2.22781 21.663 2.21724 21.6954 2.20673 L21.47 1.51239 Z M16.9668 3.37908 L16.6349 2.72887 C16.6031 2.74508 16.5714 2.76134 16.5397 2.77766 L16.8738 3.42674 L17.2078 4.07583 C17.238 4.06027 17.2683 4.04475 17.2986 4.02929 L16.9668 3.37908 Z M12.8124 5.92918 L12.3829 5.33888 C12.3541 5.35984 12.3253 5.38085 12.2966 5.40191 L12.728 5.99078 L13.1595 6.57964 C13.1869 6.55954 13.2143 6.53949 13.2418 6.51948 L12.8124 5.92918 Z M9.10641 9.09606 L8.59033 8.57977 C8.56512 8.60496 8.53995 8.6302 8.51483 8.65549 L9.03263 9.17005 L9.55044 9.68462 C9.57442 9.66049 9.59843 9.6364 9.62249 9.61235 L9.10641 9.09606 Z M5.93798 12.8007 L5.34785 12.371 C5.32688 12.3998 5.30595 12.4287 5.28507 12.4576 L5.87663 12.8853 L6.46818 13.313 C6.48811 13.2855 6.50808 13.258 6.5281 13.2305 L5.93798 12.8007 Z M3.38602 16.9539 L2.73597 16.6218 C2.71975 16.6535 2.70358 16.6853 2.68746 16.7171 L3.33863 17.0471 L3.9898 17.3771 C4.00517 17.3467 4.0206 17.3164 4.03607 17.2861 L3.38602 16.9539 Z M1.51712 21.4561 L0.822908 21.2304 C0.811869 21.2643 0.800885 21.2983 0.789957 21.3323 L1.48493 21.5557 L2.17991 21.7791 C2.19033 21.7467 2.20081 21.7143 2.21134 21.6819 L1.51712 21.4561 Z M0.380498 26.1969 L-0.340596 26.0832 C-0.346165 26.1185 -0.351676 26.1539 -0.357128 26.1892 L0.364347 26.3005 L1.08582 26.4117 C1.09102 26.378 1.09628 26.3443 1.10159 26.3106 L0.380498 26.1969 Z M3.79636e-06 31.0575 L-0.729996 31.0571 C-0.730005 31.075 -0.729999 31.0929 -0.729978 31.1109 L2.15867e-05 31.11 L0.730021 31.1091 C0.730001 31.092 0.729995 31.0749 0.730004 31.0578 L3.79636e-06 31.0575 Z M2.15867e-05 31.11 L-0.729978 31.1109 C-0.729957 31.1288 -0.729921 31.1467 -0.729871 31.1646 L0.000126353 31.1625 L0.730123 31.1605 C0.730075 31.1434 0.730041 31.1263 0.730021 31.1091 L2.15867e-05 31.11 Z M0.375781 35.9186 L-0.345421 36.0316 C-0.339882 36.067 -0.334286 36.1023 -0.328631 36.1376 L0.392185 36.0222 L1.113 35.9068 C1.10761 35.8731 1.10227 35.8394 1.09698 35.8056 L0.375781 35.9186 Z M1.50813 40.6606 L0.813726 40.8858 C0.82474 40.9197 0.83581 40.9537 0.846935 40.9876 L1.54058 40.7601 L2.23422 40.5326 C2.22361 40.5002 2.21305 40.4678 2.20254 40.4355 L1.50813 40.6606 Z M3.37347 45.1644 L2.72317 45.4961 C2.73937 45.5279 2.75562 45.5596 2.77193 45.5913 L3.42111 45.2574 L4.07028 44.9236 C4.05473 44.8933 4.03922 44.863 4.02377 44.8327 L3.37347 45.1644 Z M5.92254 49.3194 L5.33214 49.7487 C5.35309 49.7776 5.3741 49.8064 5.39515 49.8351 L5.98412 49.4038 L6.57308 48.9725 C6.55299 48.9451 6.53294 48.9176 6.51294 48.8901 L5.92254 49.3194 Z M9.0886 53.0261 L8.57219 53.5421 C8.59738 53.5673 8.62262 53.5925 8.64789 53.6176 L9.16257 53.0999 L9.67725 52.5822 C9.65313 52.5582 9.62904 52.5342 9.605 52.5101 L9.0886 53.0261 Z M12.7926 56.1954 L12.3627 56.7854 C12.3915 56.8064 12.4204 56.8273 12.4492 56.8482 L12.8771 56.2567 L13.305 55.6653 C13.2774 55.6453 13.2499 55.6254 13.2224 55.6053 L12.7926 56.1954 Z M16.9451 58.7483 L16.6128 59.3983 C16.6445 59.4145 16.6763 59.4307 16.7081 59.4468 L17.0383 58.7957 L17.3684 58.1447 C17.3381 58.1293 17.3078 58.1138 17.2775 58.0984 L16.9451 58.7483 Z M21.4468 60.6186 L21.2208 61.3127 C21.2547 61.3238 21.2887 61.3348 21.3227 61.3457 L21.5463 60.6508 L21.77 59.9559 C21.7375 59.9455 21.7051 59.935 21.6728 59.9244 L21.4468 60.6186 Z M26.1871 61.757 L26.0731 62.4781 C26.1084 62.4837 26.1438 62.4892 26.1791 62.4946 L26.2907 61.7732 L26.4022 61.0518 C26.3685 61.0466 26.3348 61.0413 26.3011 61.036 L26.1871 61.757 Z M31.0475 62.14 L31.0467 62.87 C31.0646 62.87 31.0825 62.87 31.1004 62.87 L31.1 62.14 L31.0996 61.41 C31.0825 61.41 31.0654 61.41 31.0483 61.41 L31.0475 62.14 Z M31.1 62.14 L31.1004 62.87 C31.1184 62.87 31.1363 62.87 31.1542 62.8699 L31.1526 62.1399 L31.1509 61.4099 C31.1338 61.41 31.1167 61.41 31.0996 61.41 L31.1 62.14 Z M35.9083 61.7669 L36.0209 62.4882 C36.0562 62.4827 36.0916 62.4771 36.1269 62.4715 L36.0118 61.7506 L35.8968 61.0297 C35.8631 61.0351 35.8294 61.0404 35.7957 61.0457 L35.9083 61.7669 Z M40.6503 60.6372 L40.8751 61.3317 C40.909 61.3207 40.943 61.3096 40.9769 61.2985 L40.7497 60.6048 L40.5226 59.911 C40.4902 59.9216 40.4579 59.9322 40.4255 59.9426 L40.6503 60.6372 Z M45.1545 58.7743 L45.4858 59.4248 C45.5176 59.4086 45.5493 59.3924 45.581 59.3761 L45.2475 58.7268 L44.914 58.0774 C44.8837 58.093 44.8534 58.1084 44.8231 58.1239 L45.1545 58.7743 Z M49.3103 56.2278 L49.7393 56.8184 C49.7682 56.7975 49.797 56.7765 49.8257 56.7555 L49.3947 56.1663 L48.9638 55.5771 C48.9363 55.5971 48.9088 55.6172 48.8813 55.6371 L49.3103 56.2278 Z M53.0183 53.0642 L53.534 53.5809 C53.5592 53.5557 53.5844 53.5305 53.6096 53.5052 L53.0922 52.9902 L52.5748 52.4753 C52.5508 52.4994 52.5267 52.5234 52.5027 52.5475 L53.0183 53.0642 Z M56.1893 49.3624 L56.7791 49.7926 C56.8001 49.7639 56.8211 49.735 56.842 49.7062 L56.2508 49.278 L55.6595 48.8498 C55.6396 48.8773 55.6196 48.9048 55.5996 48.9323 L56.1893 49.3624 Z M58.7443 45.2118 L59.3941 45.5445 C59.4104 45.5128 59.4266 45.481 59.4427 45.4492 L58.7918 45.1187 L58.1409 44.7882 C58.1255 44.8186 58.11 44.8489 58.0945 44.8791 L58.7443 45.2118 Z M60.6165 40.7116 L61.3106 40.9379 C61.3216 40.904 61.3326 40.87 61.3436 40.836 L60.6488 40.6121 L59.954 40.3882 C59.9435 40.4206 59.933 40.453 59.9225 40.4853 L60.6165 40.7116 Z M61.7565 35.9723 L62.4775 36.0865 C62.4831 36.0511 62.4886 36.0158 62.4941 35.9804 L61.7727 35.8687 L61.0513 35.757 C61.0461 35.7907 61.0408 35.8244 61.0354 35.8581 L61.7565 35.9723 Z M62.14 31.1125 L62.87 31.1133 C62.87 31.0954 62.87 31.0775 62.87 31.0596 L62.14 31.06 L61.41 31.0604 C61.41 31.0775 61.41 31.0946 61.41 31.1118 L62.14 31.1125 Z M62.14 31.06 L62.87 31.0596 C62.87 31.0417 62.87 31.0237 62.8699 31.0058 L62.1399 31.0075 L61.41 31.0091 C61.41 31.0262 61.41 31.0433 61.41 31.0604 L62.14 31.06 Z M61.7675 26.2511 L62.4888 26.1387 C62.4833 26.1033 62.4777 26.068 62.4721 26.0327 L61.7512 26.1475 L61.0303 26.2624 C61.0357 26.2961 61.041 26.3298 61.0462 26.3635 L61.7675 26.2511 Z M60.6392 21.5082 L61.3338 21.2836 C61.3229 21.2497 61.3118 21.2157 61.3007 21.1818 L60.6069 21.4086 L59.913 21.6355 C59.9236 21.6679 59.9341 21.7003 59.9446 21.7327 L60.6392 21.5082 Z M58.7784 17.0025 L59.429 16.6715 C59.4128 16.6397 59.3966 16.608 59.3803 16.5762 L58.7308 16.9094 L58.0813 17.2426 C58.0968 17.2729 58.1123 17.3032 58.1277 17.3335 L58.7784 17.0025 Z M56.2338 12.8447 L56.8247 12.416 C56.8037 12.3872 56.7828 12.3584 56.7618 12.3296 L56.1723 12.7603 L55.5829 13.1909 C55.6029 13.2184 55.6229 13.2459 55.6429 13.2734 L56.2338 12.8447 Z M53.0719 9.13447 L53.5889 8.61908 C53.5638 8.59384 53.5386 8.56864 53.5133 8.54348 L52.998 9.06059 L52.4828 9.5777 C52.5069 9.60171 52.5309 9.62576 52.5549 9.64985 L53.0719 9.13447 Z M49.3715 5.96102 L49.8021 5.37148 C49.7733 5.35046 49.7445 5.3295 49.7156 5.30858 L49.2871 5.89956 L48.8585 6.49054 C48.8861 6.5105 48.9136 6.53051 48.941 6.55056 L49.3715 5.96102 Z M45.2218 3.40354 L45.5548 2.75392 C45.5231 2.73766 45.4913 2.72145 45.4595 2.70529 L45.1287 3.35602 L44.7979 4.00676 C44.8282 4.02217 44.8585 4.03764 44.8887 4.05315 L45.2218 3.40354 Z M40.722 1.52883 L40.9486 0.834897 C40.9147 0.823815 40.8807 0.812789 40.8468 0.801818 L40.6225 1.49651 L40.3982 2.19121 C40.4306 2.20167 40.463 2.21218 40.4954 2.22275 L40.722 1.52883 Z M35.9827 0.386319 L36.0972 -0.334637 C36.0619 -0.340248 36.0266 -0.345802 35.9912 -0.351297 L35.8791 0.370042 L35.767 1.09138 C35.8007 1.09662 35.8344 1.10192 35.8681 1.10727 L35.9827 0.386319 Z M31.1226 4.34862e-05 L31.1238 -0.729956 C31.1059 -0.729985 31.0879 -0.73 31.07 -0.73 L31.07 0 L31.07 0.73 C31.0871 0.73 31.1042 0.730014 31.1213 0.730043 L31.1226 4.34862e-05 Z" fill="#c7c1fe"/></svg>
        <div style={{ position: "absolute", left: "30.02px", top: "30.07px", width: "35px", height: "34.91px", display: "flex", flexDirection: "column", gap: "0.91px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.45px", fontWeight: 500, color: "#202020" }}>53%</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#6b6b6b" }}>saved</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "129.77px", top: "71.11px", width: "45px", height: "110.49px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Saved</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#202020" }}>$4,800</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Target</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#202020" }}>$9,000</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Monthly</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#00a77d" }}>+$700</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "16.45px", top: "200.25px", width: "218.8px", height: "23.3px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#00a77d"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d" }}>On track</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>$4,200 to go</p>
      </div>
      <div style={{ position: "absolute", left: "16.45px", top: "189.28px", width: "218.8px", height: "0.91px", background: "#ededed" }} />
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
