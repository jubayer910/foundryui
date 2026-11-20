"use client";
// Highest risk card (spendix, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { ChevronRight } from "ingotui-icons/react/stroke-rounded";

export function HighestRiskCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "394px", height: "290px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "394px", height: "48px", boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "0px 16px 1px 16px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Highest risk</p>
        </div>
        <div data-fu="btn" style={{ height: "28px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>View all</p>
          <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        </div>
      </div>
      <div style={{ position: "absolute", left: "16px", top: "64px", width: "362px", height: "202px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div data-fu="row" style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "21.6px", height: "21.6px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "21.6px", height: "21.6px", background: "url('https://ingotui.com/library-img/c1b9ac38b4d88317b1ed300762b915082a72b430.png') center / cover no-repeat" }} />
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>AWS</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "144px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Unusual amount · 3.4× avg</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e5484d" }}>Risk 92</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$1,212.48</p>
            </div>
            <div style={{ width: "96px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "rgba(229, 72, 77, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "88.32px", height: "4px", opacity: 0.85, borderRadius: "2px", background: "linear-gradient(180deg, #e96368 0%, #e5484d 100%)" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "21.6px", height: "21.6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "hidden" }} xmlns="http://www.w3.org/2000/svg" width="21.6" height="21.6" viewBox="0 0 21.6 21.6" fill="none" overflow="hidden"><path transform="matrix(1 0 0 1 0 4.939)" d="M0 0.590611 L0 8.50119 C0.00717187 10.2899 1.46812 11.7294 3.2497 11.7222 L14.78 11.7222 C15.1078 11.7222 15.3714 11.4585 15.3714 11.1379 L15.3714 3.22775 C15.3643 1.439 13.9037 -0.000858458 12.1217 0.00631342 L0.591469 0.00631342 C0.263672 0.00631342 0 0.269986 0 0.590611 Z M16.1055 3.67663 L20.8659 0.198688 C21.2794 -0.14303 21.6 -0.0578119 21.6 0.562344 L21.6 11.1662 C21.6 11.872 21.2081 11.7863 20.8659 11.5298 L16.1055 8.05906 L16.1055 3.67663 Z" fill="#4a8cff"/><path transform="matrix(1 0 0 1 -197.883 39.271)" d="M8.20801 0.315561 L8.451 1.29769 C7.49513 1.5327 6.58029 1.9109 5.73751 2.41945 L5.21776 1.55208 C6.14652 0.991594 7.15465 0.574714 8.20801 0.315561 Z M13.149 1.29769 C14.1048 1.53286 15.0196 1.91104 15.8625 2.41945 L16.3856 1.55208 C15.4558 0.991288 14.4465 0.574399 13.392 0.315561 L13.149 1.29769 Z M1.55252 5.21733 C0.991557 6.14574 0.574498 7.15379 0.315567 8.20716 L1.2977 8.45016 C1.53276 7.49437 1.91109 6.57965 2.41987 5.73708 L1.55252 5.21733 Z M1.1222 9.33272 L0.1215 9.18084 C-0.0405001 10.2535 -0.0405001 11.3444 0.1215 12.417 L1.1222 12.2652 C0.975384 11.2932 0.975384 10.3047 1.1222 9.33272 Z M15.8625 19.1784 C15.0208 19.6868 14.1071 20.0651 13.1524 20.3006 L13.3954 21.2827 C14.4476 21.0232 15.4546 20.6062 16.3822 20.0458 L15.8625 19.1784 Z M20.4778 12.2652 L21.4785 12.417 C21.6405 11.3444 21.6405 10.2535 21.4785 9.18084 L20.4778 9.33272 C20.6242 10.3022 20.6242 11.2957 20.4778 12.2652 Z M20.3023 13.1477 C20.0669 14.1035 19.6886 15.0183 19.1801 15.8612 L20.0475 16.3844 C20.6083 15.4545 21.0254 14.4452 21.2844 13.3907 L20.3023 13.1477 Z M12.2665 20.4778 C11.2942 20.6242 10.3054 20.6242 9.33315 20.4778 L9.1817 21.4785 C10.2545 21.6405 11.3455 21.6405 12.4183 21.4785 L12.2665 20.4778 Z M18.6785 16.6054 C18.095 17.396 17.396 18.0944 16.605 18.6772 L17.2057 19.4923 C18.0784 18.8506 18.8497 18.0815 19.494 17.2108 L18.6785 16.6054 Z M16.605 2.92064 C17.396 3.5044 18.0949 4.20349 18.6785 4.99458 L19.494 4.38708 C18.8517 3.51694 18.0826 2.74791 17.2125 2.10558 L16.605 2.92064 Z M2.92108 4.99458 C3.50471 4.20338 4.2038 3.50428 4.995 2.92064 L4.38751 2.10558 C3.51717 2.74768 2.7481 3.51674 2.106 4.38708 L2.92108 4.99458 Z M19.1801 5.73708 C19.6885 6.57863 20.0669 7.49218 20.3023 8.44678 L21.2844 8.20378 C21.0247 7.15173 20.6077 6.1449 20.0475 5.21733 L19.1801 5.73708 Z M9.33315 1.12219 C10.3056 0.975796 11.294 0.975796 12.2665 1.12219 L12.4183 0.1215 C11.3455 -0.0405 10.2545 -0.0405 9.1817 0.1215 L9.33315 1.12219 Z M3.44082 19.7606 L1.35001 20.2483 L1.8377 18.1575 L0.852201 17.9263 L0.364511 20.0171 C0.19323 20.747 0.851348 21.4047 1.58119 21.2338 L3.67032 20.7546 L3.44082 19.7606 Z M1.06314 17.0239 L2.04863 17.253 L2.38613 15.8039 C1.89393 14.9772 1.52713 14.0821 1.2977 13.1477 L0.315567 13.3907 C0.535733 14.2855 0.870371 15.1482 1.3112 15.9574 L1.06314 17.0239 Z M4.33856 19.5547 L4.56808 20.5402 L5.63457 20.2922 C6.44378 20.733 7.30645 21.0676 8.20125 21.2878 L8.44426 20.3057 C7.51199 20.0732 6.61919 19.7041 5.79487 19.2105 L4.33856 19.5547 Z M3.12316 6.5572 C1.57952 9.35213 1.67569 12.7647 3.37501 15.468 L2.53126 19.0671 L6.13069 18.2233 C9.28758 20.2116 13.357 19.9863 16.2751 17.6614 C19.1932 15.3364 20.3221 11.4206 19.089 7.89961 C16.5881 0.757265 6.75972 -0.0274197 3.12316 6.5572 Z" fill="#3a76f0"/><path transform="matrix(1 0 0 1 -158.73 39.271)" d="M5.48696 8.70942 C11.5181 6.63042 9.38677 -0.198898 9.99765 0.00444591 C13.946 1.93495 18.3862 6.14695 18.3862 12.4649 C18.3862 17.3089 14.6307 21.591 9.17246 21.591 C4.3306 21.8103 0.227444 18.0653 0.00806927 13.2231 C-0.220165 8.20275 4.46897 4.54129 4.46897 5.44495 C4.51074 5.95964 4.94781 8.70942 5.48696 8.70942 Z" fill="#e73d76" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -124.455 39.332)" d="M10.9004 3.61033 C14.1404 3.8006 16.0376 5.22569 16.2219 6.55586 C16.3118 7.42576 15.7338 8.10203 14.7306 8.10203 C13.265 8.10203 13.1157 6.14875 10.592 6.14875 C9.45421 6.14875 8.49318 6.62209 8.49318 7.64852 C8.49318 9.79333 16.5784 8.54753 16.5784 13.2704 C16.5784 15.9928 14.3994 17.7765 11.1468 17.7765 C8.28604 17.7765 5.41054 16.4796 5.42488 14.2466 C5.42995 13.5729 5.93197 12.9549 6.60107 12.9549 C8.28604 12.9549 8.27043 15.4578 10.9531 15.4578 C12.8343 15.4578 13.4768 14.431 13.4768 13.7155 C13.4768 11.1315 5.34388 12.7161 5.34388 7.85608 C5.34388 5.22569 7.50473 3.41163 10.9004 3.61033 Z M12.6748 20.614 C17.8651 23.7515 23.9422 17.7452 20.6824 12.5001 C21.8995 5.54716 15.8157 -0.402124 8.9429 0.875736 C3.76607 -2.2782 -2.33762 3.70778 0.90871 8.96308 C-0.330759 15.8637 5.7185 21.9404 12.6748 20.614 Z" fill="#178cc8" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -91.061 39.271)" d="M0.428199 21.5996 L4.88531 21.5996 L4.88531 7.19972 L0.428199 7.19972 L0.428199 21.5996 Z M12.0108 14.0408 C12.0108 12.0167 12.9427 10.8101 14.7268 10.8101 C16.3658 10.8101 17.153 11.9677 17.153 14.0408 L17.153 21.6 L21.5899 21.5996 L21.5899 12.4824 C21.5899 8.62523 19.4033 6.76012 16.3502 6.76012 C13.2958 6.76012 12.0108 9.1395 12.0108 9.1395 L12.0108 7.19972 L7.73508 7.19972 L7.73508 21.5996 L12.0108 21.5996 L12.0108 14.0408 Z M2.63587 5.31436 C4.09134 5.31436 5.27133 4.12383 5.27133 2.65655 C5.27133 1.18969 4.09134 0 2.63587 0 C1.17956 0 0 1.18969 0 2.65655 C0 4.12383 1.17956 5.31436 2.63587 5.31436 Z" fill="#10658f" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -234.422 67.269)" d="M13.3627 0.0181377 C13.3636 0.347622 13.4602 5.10933 18.4573 5.40633 C18.4573 6.77953 18.4586 7.77516 18.4586 9.0855 C18.0801 9.10744 15.1692 8.89608 13.3568 7.27987 L13.3513 14.4425 C13.4201 19.4138 9.76203 22.4387 4.97966 21.3941 C-3.26631 18.9274 -0.526232 6.69727 7.75349 8.00634 C7.75349 11.9547 7.75559 8.00508 7.75559 11.9547 C4.33545 11.4514 3.19133 14.2965 4.10004 16.3342 C4.92734 18.1887 8.33313 18.5912 9.52071 15.9743 C9.65528 15.4621 9.72278 14.8783 9.72278 14.2227 L9.72278 0 L13.3627 0.0181377 Z" fill="#000000" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -195.485 67.27)" d="M6.90749 14.2861 C6.34049 17.2599 5.64777 20.1109 3.59577 21.6001 C2.96212 17.1054 4.52559 13.73 5.25163 10.1462 C4.01385 8.06256 5.40057 3.86912 8.01156 4.90271 C11.2241 6.1734 5.22929 12.6496 9.25356 13.4583 C13.4554 14.3025 15.1708 6.16792 12.5657 3.52276 C8.80087 -0.297314 1.60706 3.43543 2.49173 8.90462 C2.70689 10.2415 4.08811 10.647 3.04355 12.4922 C0.634219 11.9582 -0.0846545 10.058 0.00773617 7.52425 C0.156658 3.37764 3.73373 0.474294 7.32136 0.0726694 C11.859 -0.435268 16.1174 1.73823 16.7055 6.00634 C17.3675 10.8242 14.6573 16.0415 9.80578 15.6664 C8.49038 15.5639 7.93856 14.9125 6.90749 14.2861 Z" fill="#d0272c"/><path transform="matrix(1 0 0 1 -159.866 67.27)" d="M1.40864 0 L0 3.75638 L0 18.781 L5.1629 18.781 L5.1629 21.6 L7.98145 21.6 L10.7975 18.781 L15.0221 18.781 L20.6567 13.1486 L20.6567 0 L1.40864 0 Z M3.28556 1.87692 L18.7793 1.87692 L18.7793 12.2078 L15.4921 15.495 L10.3283 15.495 L7.51317 18.3102 L7.51317 15.495 L3.28556 15.495 L3.28556 1.87692 Z M8.45015 11.27 L10.3283 11.27 L10.3283 5.63583 L8.45015 5.63583 L8.45015 11.27 Z M13.6143 11.27 L15.4921 11.27 L15.4921 5.63583 L13.6143 5.63583 L13.6143 11.27 Z" fill="#5a3e85"/><path transform="matrix(1 0 0 1 -124.454 68.77)" d="M10.6011 4.36837 C10.1066 4.37723 9.68899 4.79826 9.69785 5.27878 C9.70671 5.77701 10.1168 6.1664 10.6251 6.1605 C11.1348 6.15417 11.5212 5.76056 11.5165 5.25178 C11.5123 4.7527 11.1044 4.35909 10.6011 4.36837 Z M16.9465 10.1156 C16.5546 10.1126 16.2217 10.4337 16.2057 10.8298 C16.1888 11.253 16.5179 11.601 16.9368 11.6018 C17.3422 11.6031 17.6624 11.2968 17.6772 10.8931 C17.6928 10.4691 17.3637 10.1185 16.9465 10.1156 Z M13.0429 10.8922 C13.0589 10.47 12.7193 10.1156 12.2962 10.1139 C11.8777 10.1122 11.5267 10.4712 11.5414 10.8872 C11.5549 11.285 11.8899 11.6065 12.2911 11.6069 C12.6915 11.6073 13.0273 11.2947 13.0429 10.8922 Z M17.6768 17.8283 C17.0596 17.7637 16.4107 18.1198 15.7652 18.186 C13.798 18.3873 12.0359 17.8388 10.5825 16.4952 C7.81882 13.939 8.21369 10.0194 11.4111 7.92478 C14.2528 6.06305 18.4205 6.68362 20.424 9.26676 C22.1727 11.5208 21.9672 14.5132 19.8326 16.407 C18.8365 17.2908 19.2542 17.5726 19.5132 18.5995 C18.9394 18.3438 18.3033 17.8937 17.6768 17.8283 Z M4.90112 4.36879 C4.39698 4.35361 3.98228 4.7392 3.96752 5.23617 C3.95275 5.73989 4.33793 6.1432 4.84586 6.15628 C5.34916 6.16893 5.77145 5.78334 5.79001 5.2927 C5.80858 4.80375 5.38248 4.38272 4.90112 4.36879 Z M7.94791 13.3838 C7.16449 13.2868 6.45109 13.1801 5.7339 13.1193 C5.48626 13.0987 5.19222 13.1282 4.98213 13.2467 C4.28561 13.6399 3.61778 14.0837 2.82634 14.5782 C2.97147 13.9213 3.06555 13.3463 3.23219 12.7928 C3.35454 12.3865 3.29758 12.16 2.92295 11.895 C-1.93283 8.46689 -0.401 2.16028 5.03106 0.385871 C9.26331 -0.997035 14.5747 1.4355 15.0114 6.10818 C10.9314 6.32123 7.58172 9.06384 7.94791 13.3838 Z" fill="#3caf41"/><path transform="matrix(1 0 0 1 -91.066 71.936)" d="M6.09188 0 C9.45633 0 12.1838 2.74641 12.1838 6.13364 C12.1838 9.5213 9.45633 12.2673 6.09188 12.2673 C2.72743 12.2673 0 9.5213 0 6.13364 C0 2.74641 2.72743 0 6.09188 0 Z M15.8203 0.359438 C17.5028 0.359438 18.8663 2.94427 18.8663 6.13364 C18.8717 6.9023 18.5452 11.9083 15.8207 11.9083 C14.1383 11.9083 12.7744 9.32217 12.7744 6.13364 C12.7744 2.94511 14.1383 0.359438 15.8203 0.359438 Z M20.5289 0.96061 C21.1203 0.96061 21.6 3.2767 21.6 6.13364 C21.6 8.98973 21.1203 11.3067 20.5289 11.3067 C19.937 11.3067 19.4577 8.99058 19.4577 6.13364 C19.4577 3.2767 19.937 0.96061 20.5289 0.96061 Z" fill="#1e1b1e"/><path transform="matrix(1 0 0 1 -59.762 67.27)" d="M7.8899 0.0143423 C6.70275 0.0143423 5.73285 0.984233 5.73285 2.17139 C5.73285 3.35855 6.70275 4.32844 7.8899 4.32844 L10.0474 4.32844 L10.0474 2.17139 C10.0474 0.984233 9.09182 0.0143423 7.8899 0.0143423 Z M0 13.681 C0 14.8681 0.969891 15.838 2.15705 15.838 C3.3442 15.838 4.31409 14.8681 4.31409 13.681 L4.31409 11.5239 L2.15705 11.5239 C0.955547 11.5239 0 12.4938 0 13.681 Z M5.7472 13.681 L5.7472 19.4429 C5.7472 20.6301 6.71751 21.6 7.90467 21.6 C9.09183 21.6 10.0617 20.6301 10.0617 19.4429 L10.0617 13.681 C10.0617 12.4938 9.09183 11.5239 7.90467 11.5239 C6.70275 11.5239 5.7472 12.4938 5.7472 13.681 Z M13.6375 21.6 C14.8247 21.6 15.7946 20.6301 15.7946 19.4429 C15.7946 18.2558 14.8247 17.2859 13.6375 17.2859 L11.4805 17.2859 L11.4805 19.4429 C11.4805 20.6301 12.4504 21.6 13.6375 21.6 Z M19.3852 15.838 C20.5723 15.838 21.5422 14.8681 21.5422 13.681 C21.5422 12.4938 20.5723 11.5239 19.3852 11.5239 L13.6375 11.5239 C12.4504 11.5239 11.4805 12.4938 11.4805 13.681 C11.4805 14.8681 12.4504 15.838 13.6375 15.838 L19.3852 15.838 Z M21.5422 7.91901 C21.5422 6.73186 20.5723 5.76197 19.3852 5.76197 C18.198 5.76197 17.2277 6.73186 17.2277 7.91901 L17.2277 10.0761 L19.3852 10.0761 C20.5723 10.0908 21.5422 9.12051 21.5422 7.91901 Z M15.7946 7.91901 L15.7946 2.15705 C15.7946 0.969891 14.8247 0 13.6375 0 C12.4504 0 11.4805 0.969891 11.4805 2.15705 L11.4805 7.91901 C11.4805 9.10617 12.4504 10.0761 13.6375 10.0761 C14.839 10.0908 15.7946 9.12051 15.7946 7.91901 Z M7.8899 5.76197 L2.15705 5.76197 C0.969891 5.76197 0 6.73186 0 7.91901 C0 9.10617 0.969891 10.0761 2.15705 10.0761 L7.90467 10.0761 C9.09183 10.0761 10.0617 9.10617 10.0617 7.91901 C10.0474 6.73186 9.09182 5.76197 7.8899 5.76197 Z" fill="#e01e5a"/><path transform="matrix(1 0 0 1 -59.958 42.4)" d="M21.5998 0.66132 L18.1839 17.8856 C18.1839 17.8856 17.7059 19.08 16.3922 18.5066 L8.47275 12.4456 C9.53714 11.4883 17.7949 4.06501 18.1556 3.72835 C18.7138 3.20734 18.3678 2.89726 17.7186 3.29129 L5.52174 11.0365 L0.816145 9.45235 C0.816145 9.45235 0.0757547 9.18995 0.00403592 8.61662 C-0.0676828 8.04329 0.84019 7.73279 0.84019 7.73279 L20.0233 0.207382 C20.0233 0.207382 21.5998 -0.485337 21.5998 0.66132 Z" fill="#23b7ec"/></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Zoom</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "154px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Possible duplicate of 02/04</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e5484d" }}>Risk 88</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$450.00</p>
            </div>
            <div style={{ width: "96px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "rgba(229, 72, 77, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "84.48px", height: "4px", opacity: 0.85, borderRadius: "2px", background: "linear-gradient(180deg, #e96368 0%, #e5484d 100%)" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "21.6px", height: "21.6px", flexShrink: 0, borderRadius: "6.05px", background: "#ff7a59", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 600, color: "#ffffff" }}>H</p>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>HubSpot</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>No approved request</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#f59e0b" }}>Risk 74</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$890.00</p>
            </div>
            <div style={{ width: "96px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "rgba(245, 158, 11, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "71.04px", height: "4px", opacity: 0.85, borderRadius: "2px", background: "linear-gradient(180deg, #f7ad30 0%, #f59e0b 100%)" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "21.6px", height: "21.6px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "21.6px", height: "21.6px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Figma</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "129px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Software on travel card</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#f59e0b" }}>Risk 61</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$420.70</p>
            </div>
            <div style={{ width: "96px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "rgba(245, 158, 11, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "58.56px", height: "4px", opacity: 0.85, borderRadius: "2px", background: "linear-gradient(180deg, #f7ad30 0%, #f59e0b 100%)" }} />
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
