"use client";
// Subscribers page (loopo, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, DotsVertical, FileDownload, Loader, Plus, Search, SortDescending, UserPlus } from "ingotui-icons/react/stroke-rounded";
import { Bell as BellBulk, Bolt as BoltBulk, ChartLine as ChartLineBulk, File as FileBulk, Filter as FilterBulk, HelpCircle as HelpCircleBulk, LayoutDashboard as LayoutDashboardBulk, License as LicenseBulk, Note as NoteBulk, Outlet as OutletBulk, Send as SendBulk, Settings as SettingsBulk, TrendingUp as TrendingUpBulk, User as UserBulk, Wallet as WalletBulk } from "ingotui-icons/react/bulk";
import { LayoutDashboard as LayoutDashboardSolid, Users as UsersSolid } from "ingotui-icons/react/solid";

export function SubscribersPage() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1577.72px", height: "1180px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "269.53px", height: "1180px", background: "#f5f5f5", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "21.91px", top: "23.76px", width: "81.08px", height: "24.79px", display: "flex", flexDirection: "row", gap: "24.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.72px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24.79px", height: "24.79px", flexShrink: 0, borderRadius: "5.72px", background: "#fd4b23", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "22.21px", height: "22.21px", background: "linear-gradient(177.6deg, rgba(255, 255, 255, 0) 2%, rgba(255, 255, 255, 0.12) 98.2%)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "-2.86px", top: "2.86px", width: "26.87px", height: "22.79px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="26.87" height="22.79" viewBox="0 0 26.87 22.79" fill="none" overflow="visible"><path transform="matrix(0.5 -0.866 0.866 0.5 0.696 12.902)" d="M0.495677 8.90014 C0.22308 8.44329 0.377026 7.85174 0.837738 7.58573 L12.4326 0.890945 C13.0922 0.510116 13.91 1.01806 13.861 1.7781 L13.6382 5.23389 C13.6177 5.55205 13.4395 5.83891 13.1634 5.99833 L3.26793 11.7119 C2.81648 11.9726 2.23937 11.8224 1.97225 11.3747 L0.495677 8.90014 Z" fill="#ffffff"/><path transform="matrix(0.5 -0.866 0.866 0.5 8.01 14.081)" d="M0.490901 6.5047 C0.220642 6.04804 0.375175 5.45859 0.83472 5.19325 L8.28599 0.890946 C8.94556 0.510117 9.7634 1.01806 9.71439 1.7781 L9.49155 5.2341 C9.47105 5.55214 9.293 5.83892 9.01706 5.99837 L3.25745 9.3266 C2.80481 9.58816 2.22597 9.43651 1.95972 8.98662 L0.490901 6.5047 Z" fill="#ffffff" opacity="0.5"/><path transform="matrix(0.5 -0.866 0.866 0.5 15.324 15.261)" d="M0.476896 4.10681 C0.213519 3.65073 0.369756 3.06749 0.825854 2.80414 L4.13937 0.890946 C4.79894 0.510116 5.61678 1.01806 5.56778 1.7781 L5.34491 5.23457 C5.32442 5.55235 5.14664 5.83894 4.87104 5.99848 L3.22264 6.9527 C2.76652 7.21674 2.1827 7.06069 1.91914 6.6043 L0.476896 4.10681 Z" fill="#ffffff" opacity="0.25"/></svg>
            </div>
            <svg style={{ width: "50.56px", height: "13.55px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="50.56" height="13.55" viewBox="0 0 50.56 13.55" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 12.9988 L0 0 L1.97729 0 L1.97729 12.2665 L0.933719 11.1863 L8.31193 11.1863 L8.31193 12.9988 L0 12.9988 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M13.8204 13.2185 C12.8928 13.2185 12.0811 13.011 11.3854 12.5961 C10.6897 12.1811 10.1527 11.5891 9.7743 10.8202 C9.39593 10.0512 9.20675 9.15411 9.20675 8.12885 C9.20675 7.09138 9.39593 6.19428 9.7743 5.43754 C10.1527 4.6808 10.6897 4.09494 11.3854 3.67995 C12.0811 3.25276 12.8928 3.03916 13.8204 3.03916 C14.748 3.03916 15.5597 3.25276 16.2554 3.67995 C16.9511 4.09494 17.4882 4.6808 17.8665 5.43754 C18.2449 6.19428 18.4341 7.09138 18.4341 8.12885 C18.4341 9.15411 18.2449 10.0512 17.8665 10.8202 C17.4882 11.5891 16.9511 12.1811 16.2554 12.5961 C15.5597 13.011 14.748 13.2185 13.8204 13.2185 Z M13.8204 11.5342 C14.6504 11.5342 15.2912 11.2351 15.7428 10.6371 C16.1944 10.0268 16.4202 9.19073 16.4202 8.12885 C16.4202 7.06697 16.1944 6.237 15.7428 5.63893 C15.2912 5.02866 14.6504 4.72352 13.8204 4.72352 C13.0026 4.72352 12.3619 5.02866 11.8981 5.63893 C11.4465 6.237 11.2206 7.06697 11.2206 8.12885 C11.2206 9.19073 11.4465 10.0268 11.8981 10.6371 C12.3619 11.2351 13.0026 11.5342 13.8204 11.5342 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M24.4049 13.2185 C23.4772 13.2185 22.6656 13.011 21.9699 12.5961 C21.2742 12.1811 20.7371 11.5891 20.3587 10.8202 C19.9804 10.0512 19.7912 9.15411 19.7912 8.12885 C19.7912 7.09138 19.9804 6.19428 20.3587 5.43754 C20.7371 4.6808 21.2742 4.09494 21.9699 3.67995 C22.6656 3.25276 23.4772 3.03916 24.4049 3.03916 C25.3325 3.03916 26.1441 3.25276 26.8398 3.67995 C27.5356 4.09494 28.0726 4.6808 28.451 5.43754 C28.8293 6.19428 29.0185 7.09138 29.0185 8.12885 C29.0185 9.15411 28.8293 10.0512 28.451 10.8202 C28.0726 11.5891 27.5356 12.1811 26.8398 12.5961 C26.1441 13.011 25.3325 13.2185 24.4049 13.2185 Z M24.4049 11.5342 C25.2348 11.5342 25.8756 11.2351 26.3272 10.6371 C26.7788 10.0268 27.0046 9.19073 27.0046 8.12885 C27.0046 7.06697 26.7788 6.237 26.3272 5.63893 C25.8756 5.02866 25.2348 4.72352 24.4049 4.72352 C23.5871 4.72352 22.9463 5.02866 22.4825 5.63893 C22.0309 6.237 21.8051 7.06697 21.8051 8.12885 C21.8051 9.19073 22.0309 10.0268 22.4825 10.6371 C22.9463 11.2351 23.5871 11.5342 24.4049 11.5342 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M30.9798 15.7451 L30.9798 3.25886 L32.8106 3.25886 L32.8655 5.346 L32.6458 5.23615 C32.89 4.51603 33.2927 3.97288 33.8542 3.60672 C34.4156 3.22835 35.0625 3.03916 35.7949 3.03916 C36.7469 3.03916 37.528 3.27717 38.1383 3.75319 C38.7608 4.21699 39.2185 4.83337 39.5114 5.60232 C39.8166 6.37126 39.9691 7.21344 39.9691 8.12885 C39.9691 9.04426 39.8166 9.88644 39.5114 10.6554 C39.2185 11.4243 38.7608 12.0468 38.1383 12.5228 C37.528 12.9866 36.7469 13.2185 35.7949 13.2185 C35.3066 13.2185 34.8489 13.1331 34.4217 12.9622 C33.9945 12.7913 33.6284 12.5533 33.3232 12.2482 C33.0303 11.9309 32.8228 11.5586 32.7008 11.1314 L32.9205 10.9117 L32.9205 15.7451 L30.9798 15.7451 Z M35.447 11.5342 C36.2281 11.5342 36.8384 11.2351 37.2778 10.6371 C37.7294 10.039 37.9552 9.20293 37.9552 8.12885 C37.9552 7.05477 37.7294 6.21869 37.2778 5.62062 C36.8384 5.02255 36.2281 4.72352 35.447 4.72352 C34.9344 4.72352 34.4889 4.85168 34.1105 5.10799 C33.7321 5.3521 33.4392 5.73047 33.2317 6.2431 C33.0242 6.75573 32.9205 7.38432 32.9205 8.12885 C32.9205 8.87338 33.0181 9.50197 33.2134 10.0146 C33.4209 10.5272 33.7138 10.9117 34.0922 11.168 C34.4828 11.4121 34.9344 11.5342 35.447 11.5342 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M45.9492 13.2185 C45.0216 13.2185 44.2099 13.011 43.5142 12.5961 C42.8185 12.1811 42.2814 11.5891 41.9031 10.8202 C41.5247 10.0512 41.3355 9.15411 41.3355 8.12885 C41.3355 7.09138 41.5247 6.19428 41.9031 5.43754 C42.2814 4.6808 42.8185 4.09494 43.5142 3.67995 C44.2099 3.25276 45.0216 3.03916 45.9492 3.03916 C46.8768 3.03916 47.6885 3.25276 48.3842 3.67995 C49.0799 4.09494 49.6169 4.6808 49.9953 5.43754 C50.3737 6.19428 50.5629 7.09138 50.5629 8.12885 C50.5629 9.15411 50.3737 10.0512 49.9953 10.8202 C49.6169 11.5891 49.0799 12.1811 48.3842 12.5961 C47.6885 13.011 46.8768 13.2185 45.9492 13.2185 Z M45.9492 11.5342 C46.7792 11.5342 47.42 11.2351 47.8716 10.6371 C48.3232 10.0268 48.549 9.19073 48.549 8.12885 C48.549 7.06697 48.3232 6.237 47.8716 5.63893 C47.42 5.02866 46.7792 4.72352 45.9492 4.72352 C45.1314 4.72352 44.4906 5.02866 44.0268 5.63893 C43.5752 6.237 43.3494 7.06697 43.3494 8.12885 C43.3494 9.19073 43.5752 10.0268 44.0268 10.6371 C44.4906 11.2351 45.1314 11.5342 45.9492 11.5342 Z" fill="#000000"/></svg>
          </div>
        </div>
        <div style={{ position: "absolute", left: "21.91px", top: "84.36px", width: "232.27px", height: "834.83px", display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "232.27px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "10.96px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Loader size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "81px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#a6a6a6" }}>WORKSPACE</p>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", gap: "10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <LayoutDashboardBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "68px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Overview</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "21.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "178.59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <UserBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "67px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Audience</p>
                  </div>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <SendBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "81px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Campaigns</p>
                  </div>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "77.79px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <NoteBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "58px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Content</p>
                  </div>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "111.75px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <BoltBulk size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "92px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Automations</p>
                  </div>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "178.59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <ChartLineBulk size={15.3} strokeWidth={2.01} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "67px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Analytics</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "232.27px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="232.27" height="1" viewBox="0 0 232.27 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.547818 L0 0 L232.275 0 L232.275 -0.547818 L232.275 -1.09564 L0 -1.09564 L0 -0.547818 Z" fill="#e8e8e8"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "10.96px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "66px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#a6a6a6" }}>AUDIENCE</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", background: "#ececed", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.41px 10.96px 6.41px 10.96px", gap: "-7.67px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ width: "178.59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <UsersSolid size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#000000", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "86px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#000000" }}>Subscribers</p>
                      </div>
                      <div style={{ height: "24.1px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #fd4b23 0%, #ff8e74 100%)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "6.57px 4.38px 6.57px 4.38px", gap: "10.96px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-7.67px" }}>
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "37px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#ffffff" }}>18.4k</p>
                      </div>
                    </div>
                  </div>
                  <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <FilterBulk size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "74px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Segments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <LicenseBulk size={15.3} strokeWidth={2.01} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "96px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Signup forms</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <OutletBulk size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "87px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Integrations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "232.27px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="232.27" height="1" viewBox="0 0 232.27 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.547818 L0 0 L232.275 0 L232.275 -0.547818 L232.275 -1.09564 L0 -1.09564 L0 -0.547818 Z" fill="#e8e8e8"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "10.96px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#a6a6a6" }}>INSIGHTS</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ width: "178.59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <TrendingUpBulk size={15.3} strokeWidth={2.01} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "90px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#646871" }}>Performance</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <FileBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "56px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#646871" }}>Reports</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <WalletBulk size={15.3} strokeWidth={2.01} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "61px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#646871" }}>Revenue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "232.27px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="232.27" height="1" viewBox="0 0 232.27 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.547818 L0 0 L232.275 0 L232.275 -0.547818 L232.275 -1.09564 L0 -1.09564 L0 -0.547818 Z" fill="#e8e8e8"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "10.96px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "63px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#a6a6a6" }}>SETTINGS</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <HelpCircleBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "105px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#646871" }}>Help & support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <SettingsBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "139px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#646871" }}>Workspace settings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "11px", top: "15px", width: "141px", height: "44px", background: "rgba(247, 247, 247, 0.05)", backdropFilter: "blur(3.95px)" }} />
      </div>
      <div style={{ position: "absolute", left: "269.53px", top: "0px", width: "1286.28px", height: "81.36px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "21.91px 0px 21.91px 21.91px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <LayoutDashboardSolid size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "81px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#b3b3b3" }}>Workspace</p>
          </div>
          <ChevronRight size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#686765", display: "block" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#b3b3b3" }}>Audience</p>
            <ChevronRight size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#686765", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "102px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#666d80", lineHeight: "1.5", letterSpacing: "0.02em" }}>Subscribers</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="field" style={{ width: "257.47px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "8.77px 6.57px 8.77px 10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "76.69px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Search size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#686765", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "51px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#686765" }}>Search</p>
            </div>
          </div>
          <div data-fu="btn" style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "7.45px", background: "#ffffff", boxShadow: "inset 0 0 0 0.93px #e8e8e8", overflow: "hidden", position: "relative" }}>
            <BellBulk size={21.9} style={{ position: "absolute", left: "7.67px", top: "7.67px", width: "21.91px", height: "21.91px", color: "#686765", display: "block", flexShrink: 0 }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "269.53px", top: "81.08px", width: "1286.28px", height: "1077.01px", borderRadius: "17.53px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #f5f5f5", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "19.72px", top: "19.72px", width: "1246.84px", height: "58.93px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.93px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", lineHeight: "31px", fontFamily: "'Geist'", fontSize: "24.1px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Subscribers</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "540px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>18,420 people on your lists — find anyone, see their history, act in bulk.</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="btn" style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.96px 10.96px 10.96px 10.96px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <FileDownload size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.53px" }}>Export</p>
            </div>
            <div data-fu="btn" style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "linear-gradient(180deg, #838383 0%, #2d2d2d 100%)", boxShadow: "0px 9.86px 8.77px 0px rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", height: "17.53px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <UserPlus size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#ffffff", lineHeight: "17.53px" }}>Add contacts</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "109.56px", width: "1245.74px", height: "43.83px", display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="field" style={{ width: "328.69px", height: "37.25px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Search size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#686765", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#999999" }}>Search name, email or tag</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.58px 12.06px 6.58px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Status: All</p>
              <ChevronDown size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.58px 12.06px 6.58px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Plan: Any</p>
              <ChevronDown size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.58px 12.06px 6.58px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Country</p>
              <ChevronDown size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.58px 12.06px 6.58px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Tags</p>
              <ChevronDown size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", outline: "1.1px dashed #e8e8e8", outlineOffset: "-1.1px", display: "flex", flexDirection: "row", padding: "6.58px 12.06px 6.58px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Plus size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Add filter</p>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>18,420</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#999999" }}>{" people"}</span>
          </p>
          <div data-fu="btn" style={{ height: "35.06px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "8.77px 8.77px 8.77px 8.77px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <SortDescending size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "107px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Sort: Last activity</p>
            <ChevronDown size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "173.11px", width: "1245.74px", height: "884.18px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23.01px 23.01px 23.01px 23.01px", gap: "17.53px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "1201.92px", height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#fafafa", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Name</p>
              </div>
              <div style={{ width: "132px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Status</p>
              </div>
              <div style={{ width: "160px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Plan</p>
              </div>
              <div style={{ width: "80px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Orders</p>
              </div>
              <div style={{ width: "124px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Lifetime value</p>
              </div>
              <div style={{ width: "150px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Engagement</p>
              </div>
              <div style={{ width: "160px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Last activity</p>
              </div>
              <div style={{ width: "57.92px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>{" "}</p>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(253, 75, 35, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#fd4b23" }}>OB</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Olivia Bennett</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "154px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>olivia.bennett@gmail.com</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Harbor Club Plus</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>12</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$1,284</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>64%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Today, 10:24 AM</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(77, 152, 254, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d98fe" }}>MR</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Marcus Reid</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "156px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>marcus.reid@outlook.com</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Harbor Club Starter</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>5</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$486</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>48%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "122px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Yesterday, 6:12 PM</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(255, 114, 171, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#ff72ab" }}>AK</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Aisha Khan</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "141px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>aisha.khan@icloud.com</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Harbor Club Studio</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>9</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$1,032</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>82%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 12, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(24, 177, 112, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>DP</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Daniel Park</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>dpark@fastmail.com</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>2</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$148</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>36%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 9, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(124, 92, 255, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7c5cff" }}>SM</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Sofia Moreno</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>sofia.moreno@gmail.com</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Harbor Club Plus</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>7</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$812</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>71%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 11, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(0, 68, 255, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#0044ff" }}>LO</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Liam O'Connor</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "154px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>liam.oconnor@yahoo.com</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f4f4f5", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#6c6c6c"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>Unsubscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "6px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>1</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$64</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>8%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Nov 30, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(253, 75, 35, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#fd4b23" }}>HW</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Hannah Weiss</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "154px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>hannah.weiss@proton.me</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Harbor Club Starter</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>4</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$356</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>55%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 13, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(77, 152, 254, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d98fe" }}>NF</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Noah Fischer</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "129px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>noah.fischer@web.de</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#fff1f1", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#e5484d"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#e5484d" }}>Bounced</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>0</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$0</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>0%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Oct 21, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(255, 114, 171, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#ff72ab" }}>GL</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Grace Liu</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>grace.liu@gmail.com</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>3</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$218</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>42%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 10, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(24, 177, 112, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>EB</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Ethan Brooks</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "140px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>ethan.brooks@hey.com</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Harbor Club Plus</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>10</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$1,146</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>60%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 13, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(124, 92, 255, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7c5cff" }}>CM</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Chloe Martin</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "167px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>chloe.martin@outlook.co.uk</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "6px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>1</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$42</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>29%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 6, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "198px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>{"Showing "}</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>1–11</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>{" of 18,420 people"}</span>
            </p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Page 1 of 1,675</p>
              <div data-fu="btn" style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 1.1px 1.1px 0px rgba(13, 13, 18, 0.08)", display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <ChevronLeft size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
              <div data-fu="btn" style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 1.1px 1.1px 0px rgba(13, 13, 18, 0.08)", display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <ChevronRight size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
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
