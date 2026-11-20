"use client";
// Profile menu (axon, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Check, ChevronRight, Plus, Settings, Sun, User } from "ingotui-icons/react/stroke-rounded";

export function ProfileMenu() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "280px", height: "389px", borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 12px 22px 0px rgba(13, 13, 18, 0.08), 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "column", padding: "5px 5px 5px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 8px 10px 8px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "16px", background: "url('https://ingotui.com/library-img/232efcbc3e38653b836fdc20a462210bf2f00cbb.png') center / cover no-repeat", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#15171c", lineHeight: "20px" }}>Chara Lee</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "114px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>chara@acme.com</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "100px", background: "#eff8ff", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#1b8ce8", lineHeight: "20px" }}>Admin</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "4px 0px 4px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, background: "#ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6px 8px 4px 8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Workspaces</p>
      </div>
      <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "6px 8px 6px 8px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1b8ce8", lineHeight: "16px" }}>AF</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Acme Finance</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "134px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>18 members · Growth</p>
        </div>
        <Check size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
      </div>
      <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 8px 6px 8px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#fef5f0", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ff5601", lineHeight: "16px" }}>AO</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Acme Operations</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>9 members · Starter</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 8px 6px 8px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Plus size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#697386", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Create workspace</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "4px 0px 4px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, background: "#ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      </div>
      <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 8px 6px 8px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <User size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#697386", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Profile</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 8px 6px 8px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Settings size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#697386", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Preferences</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#a6a6a6", lineHeight: "18px" }}>⌘,</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 8px 6px 8px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Sun size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#697386", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Theme</p>
        <ChevronRight size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "4px 0px 4px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, background: "#ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      </div>
      <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 8px 6px 8px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <svg style={{ width: "16px", height: "16px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 2.667 1.333)" d="M9.95833 10.6667 C9.95833 10.3215 9.67851 10.0417 9.33333 10.0417 C8.98816 10.0417 8.70833 10.3215 8.70833 10.6667 L9.33333 10.6667 L9.95833 10.6667 Z M9.32 11.26 L9.94119 11.329 L9.94157 11.3254 L9.32 11.26 Z M7.26 13.32 L7.32543 13.9416 L7.32902 13.9412 L7.26 13.32 Z M0.686667 12.6467 L1.13078 12.2069 L1.12645 12.2026 L0.686667 12.6467 Z M0.686667 0.686667 L1.12647 1.13078 L1.13076 1.12645 L0.686667 0.686667 Z M7.26 0.0133333 L7.32902 -0.607854 L7.32543 -0.608233 L7.26 0.0133333 Z M9.32 2.07333 L9.94158 2.0079 L9.94118 2.00431 L9.32 2.07333 Z M8.70833 2.66667 C8.70833 3.01184 8.98816 3.29167 9.33333 3.29167 C9.67851 3.29167 9.95833 3.01184 9.95833 2.66667 L9.33333 2.66667 L8.70833 2.66667 Z M9.33333 10.6667 L8.70833 10.6667 C8.70833 10.9901 8.70745 11.1089 8.69843 11.1946 L9.32 11.26 L9.94157 11.3254 C9.95922 11.1577 9.95833 10.9566 9.95833 10.6667 L9.33333 10.6667 Z M9.32 11.26 L8.69882 11.191 C8.6111 11.9805 7.98045 12.6111 7.19098 12.6988 L7.26 13.32 L7.32902 13.9412 C8.69955 13.7889 9.7889 12.6995 9.94118 11.329 L9.32 11.26 Z M7.26 13.32 L7.19457 12.6984 C7.10892 12.7074 6.99006 12.7083 6.66667 12.7083 L6.66667 13.3333 L6.66667 13.9583 C6.95661 13.9583 7.15774 13.9592 7.32543 13.9416 L7.26 13.32 Z M6.66667 13.3333 L6.66667 12.7083 L4.66667 12.7083 L4.66667 13.3333 L4.66667 13.9583 L6.66667 13.9583 L6.66667 13.3333 Z M4.66667 13.3333 L4.66667 12.7083 C3.54889 12.7083 2.77379 12.707 2.19039 12.6281 C1.62514 12.5517 1.33506 12.4132 1.13076 12.2069 L0.686667 12.6467 L0.242575 13.0864 C0.718277 13.5668 1.31819 13.7716 2.02295 13.8669 C2.70955 13.9597 3.58445 13.9583 4.66667 13.9583 L4.66667 13.3333 Z M0.686667 12.6467 L1.12645 12.2026 C0.920147 11.9983 0.781606 11.7082 0.705201 11.1429 C0.626342 10.5595 0.625 9.78445 0.625 8.66667 L0 8.66667 L-0.625 8.66667 C-0.625 9.74889 -0.626342 10.6238 -0.533534 11.3104 C-0.438272 12.0151 -0.23348 12.6151 0.246886 13.0908 L0.686667 12.6467 Z M0 8.66667 L0.625 8.66667 L0.625 4.66667 L0 4.66667 L-0.625 4.66667 L-0.625 8.66667 L0 8.66667 Z M0 4.66667 L0.625 4.66667 C0.625 3.54889 0.626342 2.77379 0.705201 2.19039 C0.781606 1.62514 0.920147 1.33506 1.12645 1.13076 L0.686667 0.686667 L0.246886 0.242574 C-0.23348 0.718277 -0.438272 1.31819 -0.533534 2.02295 C-0.626342 2.70955 -0.625 3.58445 -0.625 4.66667 L0 4.66667 Z M0.686667 0.686667 L1.13076 1.12645 C1.33506 0.920147 1.62514 0.781606 2.19039 0.705201 C2.77379 0.626342 3.54889 0.625 4.66667 0.625 L4.66667 0 L4.66667 -0.625 C3.58445 -0.625 2.70955 -0.626342 2.02295 -0.533534 C1.31819 -0.438272 0.718277 -0.23348 0.242575 0.246886 L0.686667 0.686667 Z M4.66667 0 L4.66667 0.625 L6.66667 0.625 L6.66667 0 L6.66667 -0.625 L4.66667 -0.625 L4.66667 0 Z M6.66667 0 L6.66667 0.625 C6.99006 0.625 7.10892 0.625884 7.19457 0.634899 L7.26 0.0133333 L7.32543 -0.608233 C7.15774 -0.625884 6.95661 -0.625 6.66667 -0.625 L6.66667 0 Z M7.26 0.0133333 L7.19098 0.634511 C7.98045 0.72223 8.6111 1.35288 8.69882 2.14235 L9.32 2.07333 L9.94118 2.00431 C9.7889 0.633784 8.69955 -0.455563 7.32902 -0.607844 L7.26 0.0133333 Z M9.32 2.07333 L8.69843 2.13876 C8.70745 2.22441 8.70833 2.34328 8.70833 2.66667 L9.33333 2.66667 L9.95833 2.66667 C9.95833 2.37672 9.95922 2.17559 9.94157 2.00791 L9.32 2.07333 Z" fill="#697386"/><path transform="matrix(1 0 0 1 5.333 4.971)" d="M0.0533333 2.44248 L0.624466 2.69632 C0.627657 2.68914 0.630713 2.6819 0.633631 2.6746 L0.0533333 2.44248 Z M0.0533333 3.61581 L0.633631 3.3837 C0.630713 3.3764 0.627657 3.36916 0.624466 3.36198 L0.0533333 3.61581 Z M0.413333 3.97581 L0.66717 3.40468 C0.659989 3.40149 0.652749 3.39844 0.645452 3.39552 L0.413333 3.97581 Z M4.33333 4.02915 L4.95833 4.02915 C4.95833 3.68397 4.67851 3.40415 4.33333 3.40415 L4.33333 4.02915 Z M4.70667 5.95581 L4.98624 5.39666 L4.97378 5.39077 L4.70667 5.95581 Z M4.74667 5.96915 L4.46716 6.52816 C4.48321 6.53619 4.4996 6.54352 4.51628 6.55013 L4.74667 5.96915 Z M6.52667 4.87581 L6.11085 4.40921 L6.11061 4.40943 L6.52667 4.87581 Z M8 3.00248 L8.62496 3.01001 C8.62502 3.00499 8.62502 2.99997 8.62496 2.99495 L8 3.00248 Z M6.52667 1.12248 L6.11061 1.58887 L6.11085 1.58909 L6.52667 1.12248 Z M4.74667 0.0291476 L4.52501 -0.555226 C4.50531 -0.547754 4.486 -0.539291 4.46716 -0.529869 L4.74667 0.0291476 Z M4.70667 0.0491478 L4.96986 0.616028 C4.97534 0.613486 4.98078 0.610865 4.98618 0.608165 L4.70667 0.0491478 Z M4.33333 2.02915 L4.33333 2.65415 C4.67851 2.65415 4.95833 2.37433 4.95833 2.02915 L4.33333 2.02915 Z M0.413333 2.08248 L0.645452 2.66278 C0.652749 2.65986 0.659989 2.6568 0.66717 2.65361 L0.413333 2.08248 Z M0.0533333 2.44248 L-0.517799 2.18864 C-0.586852 2.34401 -0.607826 2.49641 -0.616745 2.62129 C-0.625369 2.74202 -0.625 2.88464 -0.625 3.02915 L0 3.02915 L0.625 3.02915 C0.625 2.86699 0.625369 2.77628 0.630078 2.71034 C0.634492 2.64855 0.640185 2.66095 0.624466 2.69632 L0.0533333 2.44248 Z M0 3.02915 L-0.625 3.02915 C-0.625 3.17664 -0.62538 3.3197 -0.616716 3.43991 C-0.607598 3.56643 -0.586138 3.71589 -0.517799 3.86965 L0.0533333 3.61581 L0.624466 3.36198 C0.639471 3.39574 0.634265 3.40854 0.63005 3.35005 C0.62538 3.28526 0.625 3.19499 0.625 3.02915 L0 3.02915 Z M0.0533333 3.61581 L-0.526965 3.84793 C-0.396772 4.17341 -0.144267 4.42592 0.181214 4.55611 L0.413333 3.97581 L0.645452 3.39552 C0.641894 3.39409 0.639901 3.3929 0.639023 3.39233 C0.638153 3.39175 0.637838 3.39144 0.637775 3.39137 C0.637712 3.39131 0.637393 3.39099 0.636822 3.39012 C0.636246 3.38925 0.635055 3.38725 0.633631 3.3837 L0.0533333 3.61581 Z M0.413333 3.97581 L0.159497 4.54695 C0.313259 4.61529 0.46272 4.63675 0.589238 4.64586 C0.709445 4.65453 0.852506 4.65415 1 4.65415 L1 4.02915 L1 3.40415 C0.834161 3.40415 0.743889 3.40377 0.679095 3.3991 C0.620613 3.39488 0.633408 3.38968 0.66717 3.40468 L0.413333 3.97581 Z M1 4.02915 L1 4.65415 L4.33333 4.65415 L4.33333 4.02915 L4.33333 3.40415 L1 3.40415 L1 4.02915 Z M4.33333 4.02915 L3.70833 4.02915 C3.70833 4.59305 3.70834 5.08683 3.76452 5.45842 C3.81932 5.82084 3.95928 6.29382 4.43955 6.52086 L4.70667 5.95581 L4.97378 5.39077 C5.08739 5.44447 5.04068 5.53745 5.00048 5.27155 C4.96166 5.0148 4.95833 4.63191 4.95833 4.02915 L4.33333 4.02915 Z M4.70667 5.95581 L4.42716 6.51483 C4.46804 6.53527 4.50418 6.54818 4.53024 6.55632 C4.54305 6.56032 4.55385 6.5633 4.56121 6.56526 C4.56803 6.56707 4.57413 6.56858 4.57507 6.56882 C4.57747 6.56942 4.5747 6.56874 4.57121 6.56781 C4.56719 6.56674 4.55971 6.5647 4.55024 6.56174 C4.53085 6.55568 4.50137 6.54527 4.46716 6.52816 L4.74667 5.96915 L5.02618 5.41013 C4.98529 5.38969 4.94915 5.37679 4.9231 5.36864 C4.91029 5.36464 4.89948 5.36166 4.89213 5.35971 C4.8853 5.35789 4.8792 5.35638 4.87826 5.35614 C4.87587 5.35555 4.87863 5.35623 4.88213 5.35715 C4.88615 5.35822 4.89362 5.36026 4.9031 5.36322 C4.92249 5.36929 4.95196 5.37969 4.98618 5.3968 L4.70667 5.95581 Z M4.74667 5.96915 L4.51628 6.55013 C5.01886 6.74944 5.47366 6.51695 5.78334 6.30835 C6.1083 6.08946 6.49495 5.74166 6.94273 5.3422 L6.52667 4.87581 L6.11061 4.40943 C5.63172 4.83663 5.3217 5.11217 5.085 5.27161 C4.83301 5.44135 4.86114 5.34219 4.97706 5.38816 L4.74667 5.96915 Z M6.52667 4.87581 L6.94249 5.34242 C7.42072 4.91623 7.82586 4.5538 8.10576 4.22249 C8.39522 3.87988 8.61913 3.49304 8.62496 3.01001 L8 3.00248 L7.37505 2.99495 C7.3742 3.06526 7.35145 3.17842 7.15091 3.4158 C6.94081 3.66449 6.61261 3.96206 6.11085 4.40921 L6.52667 4.87581 Z M8 3.00248 L8.62496 2.99495 C8.61915 2.51285 8.39607 2.12474 8.1069 1.78049 C7.82669 1.44691 7.42169 1.08292 6.94249 0.655876 L6.52667 1.12248 L6.11085 1.58909 C6.61165 2.03537 6.93998 2.33472 7.14977 2.58448 C7.35059 2.82355 7.37419 2.93878 7.37505 3.01001 L8 3.00248 Z M6.52667 1.12248 L6.94273 0.656092 C6.49383 0.255634 6.10764 -0.0900698 5.78228 -0.308267 C5.47153 -0.516659 5.02258 -0.743961 4.52501 -0.555226 L4.74667 0.0291476 L4.96833 0.613521 C4.85742 0.655589 4.83514 0.561621 5.08606 0.729896 C5.32236 0.888365 5.63284 1.16266 6.11061 1.58887 L6.52667 1.12248 Z M4.74667 0.0291476 L4.46716 -0.529869 C4.46049 -0.526534 4.45382 -0.5232 4.44715 -0.519867 C4.44049 -0.516533 4.43382 -0.513201 4.42716 -0.509869 L4.70667 0.0491478 L4.98618 0.608165 C4.99285 0.60483 4.99951 0.601495 5.00618 0.598162 C5.01285 0.594828 5.01951 0.591496 5.02618 0.588165 L4.74667 0.0291476 Z M4.70667 0.0491478 L4.44347 -0.517733 C3.95209 -0.28959 3.8145 0.195451 3.76144 0.562141 C3.70673 0.940256 3.70833 1.44703 3.70833 2.02915 L4.33333 2.02915 L4.95833 2.02915 C4.95833 1.40459 4.95994 1.00804 4.99856 0.741155 C5.03883 0.462845 5.08791 0.561219 4.96986 0.616028 L4.70667 0.0491478 Z M4.33333 2.02915 L4.33333 1.40415 L1 1.40415 L1 2.02915 L1 2.65415 L4.33333 2.65415 L4.33333 2.02915 Z M1 2.02915 L1 1.40415 C0.852506 1.40415 0.709445 1.40377 0.589238 1.41243 C0.46272 1.42155 0.313259 1.44301 0.159497 1.51135 L0.413333 2.08248 L0.66717 2.65361 C0.633408 2.66862 0.620613 2.66341 0.679095 2.6592 C0.743889 2.65453 0.834161 2.65415 1 2.65415 L1 2.02915 Z M0.413333 2.08248 L0.181214 1.50218 C-0.144267 1.63238 -0.396772 1.88488 -0.526965 2.21036 L0.0533333 2.44248 L0.633631 2.6746 C0.635055 2.67104 0.636246 2.66905 0.636822 2.66817 C0.637393 2.6673 0.637712 2.66699 0.637775 2.66692 C0.637838 2.66686 0.638153 2.66654 0.639023 2.66597 C0.639901 2.66539 0.641894 2.6642 0.645452 2.66278 L0.413333 2.08248 Z" fill="#929292"/></svg>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Log out</p>
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
