"use client";
// Reports page (loopo, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { ChevronRight, Download, Loader, Plus, Search, Stack2 } from "ingotui-icons/react/stroke-rounded";
import { Bell as BellBulk, Bolt as BoltBulk, Briefcase as BriefcaseBulk, ChartLine as ChartLineBulk, CirclePercentage as CirclePercentageBulk, FileTypeCsv as FileTypeCsvBulk, FileTypePdf as FileTypePdfBulk, Filter as FilterBulk, HelpCircle as HelpCircleBulk, LayoutDashboard as LayoutDashboardBulk, License as LicenseBulk, Megaphone as MegaphoneBulk, Note as NoteBulk, Outlet as OutletBulk, Package as PackageBulk, ReceiptDollar as ReceiptDollarBulk, Send as SendBulk, Settings as SettingsBulk, TrendingUp as TrendingUpBulk, User as UserBulk, UserLove as UserLoveBulk, Users as UsersBulk, Wallet as WalletBulk } from "ingotui-icons/react/bulk";
import { File as FileSolid, LayoutDashboard as LayoutDashboardSolid } from "ingotui-icons/react/solid";

export function ReportsPage() {
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
                    <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "6.41px 10.96px 6.41px 10.96px", gap: "-7.67px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ width: "178.59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <UsersBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "86px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Subscribers</p>
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
                      <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", background: "#ececed", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <FileSolid size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#000000", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "56px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#000000" }}>Reports</p>
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
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#b3b3b3" }}>Insights</p>
            <ChevronRight size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#686765", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "67px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#666d80", lineHeight: "1.5", letterSpacing: "0.02em" }}>Reports</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "257.47px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "8.77px 6.57px 8.77px 10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
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
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", lineHeight: "31px", fontFamily: "'Geist'", fontSize: "24.1px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Reports</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "567px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Scheduled and on-demand reports for the team, accountant and partners.</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="btn" style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.96px 10.96px 10.96px 10.96px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Stack2 size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.53px" }}>Templates</p>
            </div>
            <div data-fu="btn" style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "linear-gradient(180deg, #838383 0%, #2d2d2d 100%)", boxShadow: "0px 9.86px 8.77px 0px rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", height: "17.53px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Plus size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#ffffff", lineHeight: "17.53px" }}>New report</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "109.56px", width: "299.1px", height: "147.91px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "10.96px 5.48px 5.48px 5.48px", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 6.57px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ReceiptDollarBulk size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "162px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Monthly P&L snapshot</p>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "8.77px 8.77px 8.77px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "272.8px", height: "44px", flexShrink: 0, position: "relative" }}>
              <div data-fu="bar" style={{ position: "absolute", left: "4.79px", top: "33.14px", width: "13.15px", height: "10.86px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
                <svg style={{ position: "absolute", left: "-10.86px", top: "0px", width: "43.74px", height: "10.86px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="43.74" height="10.86" viewBox="0 0 43.74 10.86" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 10.86 L0.540937 11.4009 L11.4009 0.540937 L10.86 0 L10.3191 -0.540937 L-0.540937 10.3191 L0 10.86 Z M5.48 10.86 L6.02094 11.4009 L16.8809 0.540937 L16.34 0 L15.7991 -0.540937 L4.93906 10.3191 L5.48 10.86 Z M10.96 10.86 L11.5009 11.4009 L22.3609 0.540937 L21.82 0 L21.2791 -0.540937 L10.4191 10.3191 L10.96 10.86 Z M16.44 10.86 L16.9809 11.4009 L27.8409 0.540937 L27.3 0 L26.7591 -0.540937 L15.8991 10.3191 L16.44 10.86 Z M21.92 10.86 L22.4609 11.4009 L33.3209 0.540937 L32.78 0 L32.2391 -0.540937 L21.3791 10.3191 L21.92 10.86 Z M27.4 10.86 L27.9409 11.4009 L38.8009 0.540937 L38.26 0 L37.7191 -0.540937 L26.8591 10.3191 L27.4 10.86 Z M32.88 10.86 L33.4209 11.4009 L44.2809 0.540937 L43.74 0 L43.1991 -0.540937 L32.3391 10.3191 L32.88 10.86 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
              </div>
              <div data-fu="bar" style={{ position: "absolute", left: "4.79px", top: "2.71px", width: "13.15px", height: "28.46px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "27.52px", top: "38.29px", width: "13.15px", height: "5.71px", borderRadius: "2.86px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "27.52px", top: "14.79px", width: "13.15px", height: "21.53px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "50.26px", top: "38.94px", width: "13.15px", height: "5.06px", borderRadius: "2.53px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "50.26px", top: "16.1px", width: "13.15px", height: "20.87px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "72.99px", top: "37.26px", width: "13.15px", height: "6.74px", borderRadius: "3.37px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
                <svg style={{ position: "absolute", left: "-6.74px", top: "0px", width: "28.66px", height: "6.74px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="28.66" height="6.74" viewBox="0 0 28.66 6.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 6.74 L0.540937 7.28094 L7.28094 0.540937 L6.74 0 L6.19906 -0.540937 L-0.540937 6.19906 L0 6.74 Z M5.48 6.74 L6.02094 7.28094 L12.7609 0.540937 L12.22 0 L11.6791 -0.540937 L4.93906 6.19906 L5.48 6.74 Z M10.96 6.74 L11.5009 7.28094 L18.2409 0.540937 L17.7 0 L17.1591 -0.540937 L10.4191 6.19906 L10.96 6.74 Z M16.44 6.74 L16.9809 7.28094 L23.7209 0.540937 L23.18 0 L22.6391 -0.540937 L15.8991 6.19906 L16.44 6.74 Z M21.92 6.74 L22.4609 7.28094 L29.2009 0.540937 L28.66 0 L28.1191 -0.540937 L21.3791 6.19906 L21.92 6.74 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
              </div>
              <div data-fu="bar" style={{ position: "absolute", left: "72.99px", top: "12.73px", width: "13.15px", height: "22.56px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "95.73px", top: "36.6px", width: "13.15px", height: "7.4px", borderRadius: "3.7px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
                <svg style={{ position: "absolute", left: "-7.4px", top: "0px", width: "34.8px", height: "7.4px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="34.8" height="7.4" viewBox="0 0 34.8 7.4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 7.4 L0.540937 7.94094 L7.94094 0.540937 L7.4 0 L6.85906 -0.540937 L-0.540937 6.85906 L0 7.4 Z M5.48 7.4 L6.02094 7.94094 L13.4209 0.540937 L12.88 0 L12.3391 -0.540937 L4.93906 6.85906 L5.48 7.4 Z M10.96 7.4 L11.5009 7.94094 L18.9009 0.540937 L18.36 0 L17.8191 -0.540937 L10.4191 6.85906 L10.96 7.4 Z M16.44 7.4 L16.9809 7.94094 L24.3809 0.540937 L23.84 0 L23.2991 -0.540937 L15.8991 6.85906 L16.44 7.4 Z M21.92 7.4 L22.4609 7.94094 L29.8609 0.540937 L29.32 0 L28.7791 -0.540937 L21.3791 6.85906 L21.92 7.4 Z M27.4 7.4 L27.9409 7.94094 L35.3409 0.540937 L34.8 0 L34.2591 -0.540937 L26.8591 6.85906 L27.4 7.4 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
              </div>
              <div data-fu="bar" style={{ position: "absolute", left: "95.73px", top: "11.33px", width: "13.15px", height: "23.31px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "118.46px", top: "35.95px", width: "13.15px", height: "8.05px", borderRadius: "4.03px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
                <svg style={{ position: "absolute", left: "-8.05px", top: "0px", width: "35.45px", height: "8.05px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="35.45" height="8.05" viewBox="0 0 35.45 8.05" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 8.05 L0.540937 8.59094 L8.59094 0.540937 L8.05 0 L7.50906 -0.540937 L-0.540937 7.50906 L0 8.05 Z M5.48 8.05 L6.02094 8.59094 L14.0709 0.540937 L13.53 0 L12.9891 -0.540937 L4.93906 7.50906 L5.48 8.05 Z M10.96 8.05 L11.5009 8.59094 L19.5509 0.540937 L19.01 0 L18.4691 -0.540937 L10.4191 7.50906 L10.96 8.05 Z M16.44 8.05 L16.9809 8.59094 L25.0309 0.540937 L24.49 0 L23.9491 -0.540937 L15.8991 7.50906 L16.44 8.05 Z M21.92 8.05 L22.4609 8.59094 L30.5109 0.540937 L29.97 0 L29.4291 -0.540937 L21.3791 7.50906 L21.92 8.05 Z M27.4 8.05 L27.9409 8.59094 L35.9909 0.540937 L35.45 0 L34.9091 -0.540937 L26.8591 7.50906 L27.4 8.05 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
              </div>
              <div data-fu="bar" style={{ position: "absolute", left: "118.46px", top: "10.11px", width: "13.15px", height: "23.87px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "141.19px", top: "36.51px", width: "13.15px", height: "7.49px", borderRadius: "3.74px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
                <svg style={{ position: "absolute", left: "-7.49px", top: "0px", width: "34.89px", height: "7.49px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="34.89" height="7.49" viewBox="0 0 34.89 7.49" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 7.49 L0.540937 8.03094 L8.03094 0.540937 L7.49 0 L6.94906 -0.540937 L-0.540937 6.94906 L0 7.49 Z M5.48 7.49 L6.02094 8.03094 L13.5109 0.540937 L12.97 0 L12.4291 -0.540937 L4.93906 6.94906 L5.48 7.49 Z M10.96 7.49 L11.5009 8.03094 L18.9909 0.540937 L18.45 0 L17.9091 -0.540937 L10.4191 6.94906 L10.96 7.49 Z M16.44 7.49 L16.9809 8.03094 L24.4709 0.540937 L23.93 0 L23.3891 -0.540937 L15.8991 6.94906 L16.44 7.49 Z M21.92 7.49 L22.4609 8.03094 L29.9509 0.540937 L29.41 0 L28.8691 -0.540937 L21.3791 6.94906 L21.92 7.49 Z M27.4 7.49 L27.9409 8.03094 L35.4309 0.540937 L34.89 0 L34.3491 -0.540937 L26.8591 6.94906 L27.4 7.49 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
              </div>
              <div data-fu="bar" style={{ position: "absolute", left: "141.19px", top: "11.14px", width: "13.15px", height: "23.4px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "163.93px", top: "35.48px", width: "13.15px", height: "8.52px", borderRadius: "4.26px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
                <svg style={{ position: "absolute", left: "-8.52px", top: "0px", width: "35.92px", height: "8.52px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="35.92" height="8.52" viewBox="0 0 35.92 8.52" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 8.52 L0.540937 9.06094 L9.06094 0.540937 L8.52 0 L7.97906 -0.540937 L-0.540937 7.97906 L0 8.52 Z M5.48 8.52 L6.02094 9.06094 L14.5409 0.540937 L14 0 L13.4591 -0.540937 L4.93906 7.97906 L5.48 8.52 Z M10.96 8.52 L11.5009 9.06094 L20.0209 0.540937 L19.48 0 L18.9391 -0.540937 L10.4191 7.97906 L10.96 8.52 Z M16.44 8.52 L16.9809 9.06094 L25.5009 0.540937 L24.96 0 L24.4191 -0.540937 L15.8991 7.97906 L16.44 8.52 Z M21.92 8.52 L22.4609 9.06094 L30.9809 0.540937 L30.44 0 L29.8991 -0.540937 L21.3791 7.97906 L21.92 8.52 Z M27.4 8.52 L27.9409 9.06094 L36.4609 0.540937 L35.92 0 L35.3791 -0.540937 L26.8591 7.97906 L27.4 8.52 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
              </div>
              <div data-fu="bar" style={{ position: "absolute", left: "163.93px", top: "8.8px", width: "13.15px", height: "24.71px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "186.66px", top: "35.11px", width: "13.15px", height: "8.89px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
                <svg style={{ position: "absolute", left: "-8.89px", top: "0px", width: "36.29px", height: "8.89px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="36.29" height="8.89" viewBox="0 0 36.29 8.89" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 8.89 L0.540937 9.43094 L9.43094 0.540937 L8.89 0 L8.34906 -0.540937 L-0.540937 8.34906 L0 8.89 Z M5.48 8.89 L6.02094 9.43094 L14.9109 0.540937 L14.37 0 L13.8291 -0.540937 L4.93906 8.34906 L5.48 8.89 Z M10.96 8.89 L11.5009 9.43094 L20.3909 0.540937 L19.85 0 L19.3091 -0.540937 L10.4191 8.34906 L10.96 8.89 Z M16.44 8.89 L16.9809 9.43094 L25.8709 0.540937 L25.33 0 L24.7891 -0.540937 L15.8991 8.34906 L16.44 8.89 Z M21.92 8.89 L22.4609 9.43094 L31.3509 0.540937 L30.81 0 L30.2691 -0.540937 L21.3791 8.34906 L21.92 8.89 Z M27.4 8.89 L27.9409 9.43094 L36.8309 0.540937 L36.29 0 L35.7491 -0.540937 L26.8591 8.34906 L27.4 8.89 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
              </div>
              <div data-fu="bar" style={{ position: "absolute", left: "186.66px", top: "8.05px", width: "13.15px", height: "25.09px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "209.39px", top: "34.45px", width: "13.15px", height: "9.55px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
                <svg style={{ position: "absolute", left: "-9.55px", top: "0px", width: "36.95px", height: "9.55px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="36.95" height="9.55" viewBox="0 0 36.95 9.55" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 9.55 L0.540937 10.0909 L10.0909 0.540937 L9.55 0 L9.00906 -0.540937 L-0.540937 9.00906 L0 9.55 Z M5.48 9.55 L6.02094 10.0909 L15.5709 0.540937 L15.03 0 L14.4891 -0.540937 L4.93906 9.00906 L5.48 9.55 Z M10.96 9.55 L11.5009 10.0909 L21.0509 0.540937 L20.51 0 L19.9691 -0.540937 L10.4191 9.00906 L10.96 9.55 Z M16.44 9.55 L16.9809 10.0909 L26.5309 0.540937 L25.99 0 L25.4491 -0.540937 L15.8991 9.00906 L16.44 9.55 Z M21.92 9.55 L22.4609 10.0909 L32.0109 0.540937 L31.47 0 L30.9291 -0.540937 L21.3791 9.00906 L21.92 9.55 Z M27.4 9.55 L27.9409 10.0909 L37.4909 0.540937 L36.95 0 L36.4091 -0.540937 L26.8591 9.00906 L27.4 9.55 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
              </div>
              <div data-fu="bar" style={{ position: "absolute", left: "209.39px", top: "6.37px", width: "13.15px", height: "26.12px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "232.13px", top: "33.48px", width: "13.15px", height: "10.52px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
                <svg style={{ position: "absolute", left: "-10.52px", top: "0px", width: "43.4px", height: "10.52px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="43.4" height="10.52" viewBox="0 0 43.4 10.52" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 10.52 L0.540937 11.0609 L11.0609 0.540937 L10.52 0 L9.97906 -0.540937 L-0.540937 9.97906 L0 10.52 Z M5.48 10.52 L6.02094 11.0609 L16.5409 0.540937 L16 0 L15.4591 -0.540937 L4.93906 9.97906 L5.48 10.52 Z M10.96 10.52 L11.5009 11.0609 L22.0209 0.540937 L21.48 0 L20.9391 -0.540937 L10.4191 9.97906 L10.96 10.52 Z M16.44 10.52 L16.9809 11.0609 L27.5009 0.540937 L26.96 0 L26.4191 -0.540937 L15.8991 9.97906 L16.44 10.52 Z M21.92 10.52 L22.4609 11.0609 L32.9809 0.540937 L32.44 0 L31.8991 -0.540937 L21.3791 9.97906 L21.92 10.52 Z M27.4 10.52 L27.9409 11.0609 L38.4609 0.540937 L37.92 0 L37.3791 -0.540937 L26.8591 9.97906 L27.4 10.52 Z M32.88 10.52 L33.4209 11.0609 L43.9409 0.540937 L43.4 0 L42.8591 -0.540937 L32.3391 9.97906 L32.88 10.52 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
              </div>
              <div data-fu="bar" style={{ position: "absolute", left: "232.13px", top: "2.94px", width: "13.15px", height: "28.57px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "254.86px", top: "32.48px", width: "13.15px", height: "11.51px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
                <svg style={{ position: "absolute", left: "-11.51px", top: "0px", width: "44.39px", height: "11.51px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="44.39" height="11.51" viewBox="0 0 44.39 11.51" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 11.51 L0.540937 12.0509 L12.0509 0.540937 L11.51 0 L10.9691 -0.540937 L-0.540937 10.9691 L0 11.51 Z M5.48 11.51 L6.02094 12.0509 L17.5309 0.540937 L16.99 0 L16.4491 -0.540937 L4.93906 10.9691 L5.48 11.51 Z M10.96 11.51 L11.5009 12.0509 L23.0109 0.540937 L22.47 0 L21.9291 -0.540937 L10.4191 10.9691 L10.96 11.51 Z M16.44 11.51 L16.9809 12.0509 L28.4909 0.540937 L27.95 0 L27.4091 -0.540937 L15.8991 10.9691 L16.44 11.51 Z M21.92 11.51 L22.4609 12.0509 L33.9709 0.540937 L33.43 0 L32.8891 -0.540937 L21.3791 10.9691 L21.92 11.51 Z M27.4 11.51 L27.9409 12.0509 L39.4509 0.540937 L38.91 0 L38.3691 -0.540937 L26.8591 10.9691 L27.4 11.51 Z M32.88 11.51 L33.4209 12.0509 L44.9309 0.540937 L44.39 0 L43.8491 -0.540937 L32.3391 10.9691 L32.88 11.51 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
              </div>
              <div data-fu="bar" style={{ position: "absolute", left: "254.86px", top: "0.23px", width: "13.15px", height: "30.28px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            </div>
            <div style={{ width: "272.8px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "162px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#222222" }}>Revenue, costs and margin</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Monthly · PDF</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>Use</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "335.22px", top: "109.56px", width: "299.1px", height: "147.91px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "10.96px 5.48px 5.48px 5.48px", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 6.57px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ChartLineBulk size={17.5} strokeWidth={2} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "169px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Campaign performance</p>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "8.77px 8.77px 8.77px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <svg data-fu="plot" style={{ width: "272.8px", height: "44px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="272.8" height="44" viewBox="0 0 272.8 44" fill="none" overflow="visible"><defs><linearGradient id="g24_xbew" gradientUnits="userSpaceOnUse" x1="133.12" y1="0.00" x2="133.12" y2="40.73"><stop offset="0" stopColor="#0044ff" stopOpacity="0.16"/><stop offset="1" stopColor="#0044ff" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 1.1 3.29)" d="M0 38.2396 C0.64 38.1896 9.37 37.5296 10.65 37.5496 C11.93 37.5696 20.02 38.5996 21.3 38.5396 C22.58 38.4796 30.67 36.6496 31.95 36.5596 C33.23 36.4696 41.32 37.0496 42.6 37.0196 C43.87 36.9796 51.97 35.9696 53.25 35.9496 C54.52 35.9396 62.62 36.8396 63.9 36.7896 C65.17 36.7296 73.27 35.1096 74.54 35.0396 C75.82 34.9696 83.92 35.5796 85.19 35.6496 C86.47 35.7196 94.56 36.2496 95.84 36.1796 C97.12 36.1096 105.21 34.4896 106.49 34.4296 C107.77 34.3696 115.86 35.1496 117.14 35.1096 C118.42 35.0796 126.51 33.8696 127.79 33.8196 C129.07 33.7696 137.16 34.3096 138.44 34.2796 C139.72 34.2396 147.81 33.2296 149.09 33.2096 C150.37 33.1896 158.46 34.0396 159.74 33.9696 C161.02 33.9096 169.11 32.2096 170.39 32.1496 C171.67 32.0796 179.76 32.9696 181.04 32.9096 C182.31 32.8396 190.41 31.2496 191.69 31.0796 C192.96 30.9096 201.06 30.1596 202.33 30.0096 C203.61 29.8696 211.71 30.4396 212.98 28.6396 C214.26 26.8396 222.36 0.699627 223.63 0.019627 C224.91 -0.660373 233 16.5496 234.28 17.3796 C235.56 18.2096 243.65 13.3696 244.93 13.8796 C246.21 14.3796 254.3 24.8996 255.58 25.7496 C256.86 26.5996 265.59 27.8996 266.23 28.0296 L266.23 40.7296 L0 40.7296 L0 38.2396 Z" fill="url(#g24_xbew)"/><path transform="matrix(1 0 0 1 1.1 3.29)" d="M-0.0595841 37.477 C-0.480798 37.5099 -0.795583 37.878 -0.762676 38.2992 C-0.729769 38.7204 -0.36163 39.0352 0.0595841 39.0023 L0 38.2396 L-0.0595841 37.477 Z M42.6 37.0196 L42.6179 37.7844 L42.6241 37.7842 L42.6 37.0196 Z M53.25 35.9496 L53.244 35.1846 L53.238 35.1847 L53.25 35.9496 Z M63.9 36.7896 L63.9299 37.5541 L63.9361 37.5538 L63.9 36.7896 Z M74.54 35.0396 L74.4982 34.2758 L74.4979 34.2758 L74.54 35.0396 Z M85.19 35.6496 L85.1479 36.4135 L85.1482 36.4135 L85.19 35.6496 Z M117.14 35.1096 L117.122 34.3448 L117.116 34.345 L117.14 35.1096 Z M138.44 34.2796 L138.458 35.0444 L138.464 35.0443 L138.44 34.2796 Z M159.74 33.9696 L159.704 33.2054 L159.698 33.2058 L159.74 33.9696 Z M170.39 32.1496 L170.426 32.9138 L170.432 32.9135 L170.39 32.1496 Z M181.04 32.9096 L181.076 33.6738 L181.082 33.6735 L181.04 32.9096 Z M191.69 31.0796 L191.791 31.838 L191.792 31.8379 L191.69 31.0796 Z M202.33 30.0096 L202.247 29.2491 L202.24 29.2499 L202.33 30.0096 Z M212.98 28.6396 L212.357 28.1963 L212.355 28.1986 L212.98 28.6396 Z M223.63 0.019627 L223.271 -0.65596 L223.269 -0.654784 L223.63 0.019627 Z M244.93 13.8796 L244.647 14.5903 L244.652 14.5922 L244.93 13.8796 Z M266.078 28.7793 C266.492 28.8634 266.896 28.596 266.98 28.1819 C267.064 27.7679 266.796 27.364 266.382 27.2799 L266.23 28.0296 L266.078 28.7793 Z M0 38.2396 L0.0595841 39.0023 C0.377434 38.9775 2.71779 38.8001 5.13816 38.6315 C7.58437 38.4611 10.0402 38.3052 10.638 38.3145 L10.65 37.5496 L10.662 36.7847 C9.97976 36.7741 7.43063 36.9381 5.03184 37.1052 C2.60721 37.2741 0.262566 37.4518 -0.0595841 37.477 L0 38.2396 Z M10.65 37.5496 L10.638 38.3145 C11.2315 38.3238 13.5139 38.5788 15.893 38.8352 C17.0641 38.9615 18.2407 39.0858 19.2056 39.1748 C20.1434 39.2614 20.9504 39.3219 21.3358 39.3038 L21.3 38.5396 L21.2642 37.7755 C21.0096 37.7874 20.3254 37.7416 19.3462 37.6513 C18.3943 37.5635 17.2284 37.4403 16.057 37.314 C13.7511 37.0655 11.3485 36.7954 10.662 36.7847 L10.65 37.5496 Z M21.3 38.5396 L21.3358 39.3038 C21.7221 39.2857 22.5296 39.1465 23.4663 38.9692 C24.4307 38.7867 25.6071 38.5485 26.7774 38.3105 C27.9505 38.0721 29.1172 37.8339 30.071 37.6496 C31.0488 37.4608 31.7408 37.3412 32.0037 37.3227 L31.95 36.5596 L31.8963 35.7965 C31.5192 35.823 30.72 35.966 29.7808 36.1474 C28.8178 36.3335 27.642 36.5735 26.4726 36.8112 C25.3004 37.0495 24.1343 37.2857 23.1818 37.4659 C22.2016 37.6515 21.5179 37.7636 21.2642 37.7755 L21.3 38.5396 Z M31.95 36.5596 L32.0037 37.3227 C32.2705 37.304 32.9659 37.3201 33.9412 37.362 C34.8943 37.4031 36.0612 37.4659 37.2326 37.531 C39.5441 37.6592 41.938 37.8004 42.6179 37.7844 L42.6 37.0196 L42.5821 36.2548 C41.982 36.2689 39.6909 36.135 37.3174 36.0033 C36.1463 35.9383 34.9707 35.8749 34.007 35.8335 C33.0653 35.7929 32.2695 35.7703 31.8963 35.7965 L31.95 36.5596 Z M42.6 37.0196 L42.6241 37.7842 C43.2989 37.763 45.6905 37.4943 48.0056 37.2375 C50.3809 36.974 52.6696 36.7238 53.262 36.7145 L53.25 35.9496 L53.238 35.1847 C52.5504 35.1955 50.1491 35.4603 47.8369 35.7168 C45.4645 35.98 43.1711 36.2363 42.5759 36.255 L42.6 37.0196 Z M53.25 35.9496 L53.256 36.7146 C53.8403 36.71 56.1194 36.9254 58.5006 37.1464 C59.6719 37.2551 60.8486 37.363 61.8132 37.4406 C62.7543 37.5163 63.5536 37.5687 63.9299 37.554 L63.9 36.7896 L63.8701 36.0252 C63.6064 36.0355 62.9132 35.9942 61.9359 35.9155 C60.9821 35.8388 59.8144 35.7317 58.6419 35.6229 C56.3356 35.4089 53.9297 35.1793 53.244 35.1847 L53.25 35.9496 Z M63.9 36.7896 L63.9361 37.5538 C64.3103 37.5361 65.1079 37.4133 66.0468 37.2551 C67.0096 37.0928 68.1852 36.8817 69.3554 36.6713 C70.528 36.4604 71.6951 36.2503 72.6484 36.0884 C73.6243 35.9226 74.3182 35.818 74.5821 35.8035 L74.54 35.0396 L74.4979 34.2758 C74.1268 34.2962 73.332 34.4204 72.3922 34.58 C71.4299 34.7434 70.2545 34.9551 69.0846 35.1655 C67.9123 35.3763 66.7454 35.5858 65.7926 35.7464 C64.8159 35.9109 64.1247 36.0132 63.8639 36.0255 L63.9 36.7896 Z M74.54 35.0396 L74.5818 35.8035 C75.1626 35.7717 77.4422 35.9009 79.8191 36.0555 C82.1487 36.2071 84.5093 36.3783 85.1479 36.4135 L85.19 35.6496 L85.2321 34.8858 C84.6007 34.851 82.2763 34.6822 79.9184 34.5287 C77.6078 34.3784 75.1974 34.2375 74.4982 34.2758 L74.54 35.0396 Z M85.19 35.6496 L85.1482 36.4135 C85.7978 36.449 88.1089 36.5973 90.4718 36.7309 C92.784 36.8617 95.1869 36.9815 95.8818 36.9435 L95.84 36.1796 L95.7982 35.4158 C95.2131 35.4478 92.9309 35.3376 90.5582 35.2033 C88.2361 35.072 85.8622 34.9202 85.2318 34.8858 L85.19 35.6496 Z M95.84 36.1796 L95.8818 36.9435 C96.2554 36.923 97.0515 36.7989 97.9921 36.6393 C98.955 36.4759 100.131 36.2642 101.3 36.0538 C102.473 35.843 103.64 35.6335 104.593 35.4729 C105.57 35.3084 106.263 35.2061 106.526 35.1938 L106.49 34.4296 L106.454 33.6655 C106.077 33.6831 105.279 33.8059 104.339 33.9642 C103.375 34.1264 102.2 34.3375 101.03 34.548 C99.857 34.7588 98.69 34.969 97.7361 35.1309 C96.7597 35.2966 96.0645 35.4012 95.7982 35.4158 L95.84 36.1796 Z M106.49 34.4296 L106.526 35.1938 C106.792 35.1813 107.487 35.2143 108.463 35.2795 C109.417 35.3432 110.583 35.4335 111.756 35.5248 C112.925 35.616 114.101 35.7081 115.063 35.775 C116.005 35.8404 116.796 35.8857 117.164 35.8743 L117.14 35.1096 L117.116 34.345 C116.844 34.3535 116.143 34.3163 115.169 34.2487 C114.215 34.1824 113.047 34.0908 111.874 33.9994 C110.704 33.9083 109.528 33.8173 108.565 33.7529 C107.624 33.69 106.828 33.648 106.454 33.6655 L106.49 34.4296 Z M117.14 35.1096 L117.158 35.8744 C117.853 35.8581 120.26 35.538 122.566 35.2304 C124.942 34.9134 127.227 34.6072 127.82 34.584 L127.79 33.8196 L127.76 33.0552 C127.073 33.0821 124.673 33.4058 122.364 33.7138 C119.985 34.0312 117.707 34.3311 117.122 34.3448 L117.14 35.1096 Z M127.79 33.8196 L127.82 34.584 C128.414 34.5609 130.701 34.6794 133.074 34.806 C135.389 34.9296 137.779 35.0603 138.458 35.0444 L138.44 34.2796 L138.422 33.5148 C137.821 33.5289 135.526 33.4047 133.156 33.2782 C130.844 33.1549 128.446 33.0284 127.76 33.0552 L127.79 33.8196 Z M138.44 34.2796 L138.464 35.0443 C139.144 35.023 141.536 34.7543 143.849 34.4975 C146.224 34.2339 148.51 33.9838 149.102 33.9745 L149.09 33.2096 L149.078 32.4447 C148.39 32.4555 145.991 32.7203 143.681 32.9768 C141.309 33.24 139.016 33.4963 138.416 33.515 L138.44 34.2796 Z M149.09 33.2096 L149.102 33.9745 C149.691 33.9653 151.969 34.166 154.35 34.3706 C155.52 34.4711 156.696 34.5706 157.661 34.6406 C158.6 34.7087 159.402 34.7543 159.782 34.7335 L159.74 33.9696 L159.698 33.2058 C159.438 33.22 158.749 33.1855 157.771 33.1146 C156.819 33.0455 155.652 32.9469 154.48 32.8462 C152.176 32.6482 149.769 32.4339 149.078 32.4447 L149.09 33.2096 Z M159.74 33.9696 L159.776 34.7338 C160.156 34.716 160.958 34.587 161.897 34.4218 C162.86 34.2521 164.036 34.0312 165.206 33.8115 C166.379 33.5912 167.545 33.3721 168.499 33.2043 C169.477 33.032 170.166 32.926 170.426 32.9138 L170.39 32.1496 L170.354 31.3855 C169.974 31.4033 169.172 31.5322 168.233 31.6975 C167.27 31.8671 166.094 32.088 164.924 32.3078 C163.751 32.528 162.585 32.7471 161.631 32.915 C160.653 33.0872 159.964 33.1933 159.704 33.2055 L159.74 33.9696 Z M170.39 32.1496 L170.432 32.9135 C170.69 32.8993 171.378 32.9359 172.356 33.0101 C173.309 33.0823 174.475 33.1847 175.648 33.2879 C176.818 33.3909 177.994 33.4948 178.957 33.5691 C179.896 33.6415 180.697 33.6915 181.076 33.6738 L181.04 32.9096 L181.004 32.1455 C180.743 32.1577 180.053 32.119 179.075 32.0436 C178.121 31.9701 176.955 31.8671 175.782 31.7638 C174.612 31.6608 173.436 31.5576 172.472 31.4845 C171.534 31.4133 170.73 31.3649 170.348 31.3858 L170.39 32.1496 Z M181.04 32.9096 L181.082 33.6735 C181.452 33.6531 182.246 33.5312 183.187 33.3724 C184.15 33.2099 185.326 32.9985 186.499 32.7847 C188.865 32.3531 191.175 31.9197 191.791 31.838 L191.69 31.0796 L191.589 30.3213 C190.925 30.4095 188.545 30.8561 186.224 31.2795 C185.052 31.4932 183.885 31.7031 182.933 31.8637 C181.958 32.0281 181.263 32.1312 180.998 32.1458 L181.04 32.9096 Z M191.69 31.0796 L191.792 31.8379 C192.409 31.7553 194.73 31.5271 197.084 31.2985 C199.418 31.0719 201.774 30.8456 202.42 30.7693 L202.33 30.0096 L202.24 29.2499 C201.616 29.3237 199.287 29.5474 196.936 29.7757 C194.605 30.0021 192.241 30.234 191.589 30.3214 L191.69 31.0796 Z M202.33 30.0096 L202.413 30.7701 C202.676 30.7414 203.352 30.7488 204.351 30.7546 C205.311 30.7602 206.499 30.7623 207.691 30.7114 C208.878 30.6608 210.098 30.5568 211.118 30.3419 C211.628 30.2345 212.112 30.0944 212.527 29.9061 C212.933 29.7217 213.336 29.4624 213.605 29.0807 L212.98 28.6396 L212.355 28.1986 C212.307 28.2669 212.179 28.3835 211.894 28.513 C211.617 28.6386 211.251 28.7503 210.802 28.8448 C209.906 29.0337 208.784 29.1334 207.626 29.1828 C206.474 29.232 205.318 29.2303 204.36 29.2246 C203.44 29.2192 202.624 29.2079 202.247 29.2492 L202.33 30.0096 Z M212.98 28.6396 L213.603 29.083 C213.732 28.9017 213.866 28.6303 213.995 28.3414 C214.132 28.0348 214.29 27.6485 214.466 27.1989 C214.817 26.2989 215.246 25.1182 215.727 23.7589 C216.688 21.0398 217.862 17.5761 219.033 14.1574 C220.205 10.7339 221.373 7.3556 222.327 4.79205 C222.805 3.50868 223.224 2.44175 223.56 1.67953 C223.729 1.29659 223.87 1.00644 223.981 0.809371 C224.037 0.710032 224.077 0.649784 224.101 0.618354 C224.141 0.566354 224.104 0.633369 223.991 0.694038 L223.63 0.019627 L223.269 -0.654784 C223.076 -0.551615 222.947 -0.392374 222.882 -0.305459 C222.8 -0.197976 222.722 -0.0726233 222.649 0.0572856 C222.501 0.31871 222.337 0.661652 222.16 1.06207 C221.805 1.86657 221.374 2.96745 220.893 4.25846 C219.931 6.84366 218.757 10.2403 217.585 13.6618 C216.412 17.0882 215.242 20.5394 214.284 23.2491 C213.805 24.6041 213.382 25.7663 213.04 26.643 C212.869 27.0818 212.721 27.4423 212.598 27.7167 C212.468 28.0088 212.388 28.1525 212.357 28.1963 L212.98 28.6396 Z M223.63 0.019627 L223.989 0.695211 C223.658 0.870987 223.419 0.659097 223.514 0.724689 C223.56 0.755909 223.661 0.845061 223.82 1.03186 C224.129 1.39494 224.531 1.97587 225.006 2.7345 C225.95 4.24236 227.111 6.33608 228.282 8.49795 C229.448 10.6487 230.627 12.8694 231.588 14.5938 C232.069 15.4565 232.503 16.2089 232.86 16.7757 C233.039 17.0584 233.205 17.306 233.354 17.5023 C233.482 17.6719 233.659 17.8888 233.864 18.0215 L234.28 17.3796 L234.696 16.7378 C234.741 16.7667 234.705 16.7518 234.573 16.5785 C234.462 16.4319 234.322 16.2253 234.154 15.9593 C233.82 15.4287 233.402 14.7057 232.924 13.8489 C231.968 12.1342 230.804 9.93926 229.628 7.7688 C228.457 5.60942 227.275 3.47627 226.302 1.92257 C225.819 1.15042 225.369 0.491888 224.985 0.0407105 C224.798 -0.179615 224.593 -0.391293 224.379 -0.537872 C224.215 -0.650077 223.762 -0.916733 223.271 -0.655956 L223.63 0.019627 Z M234.28 17.3796 L233.864 18.0215 C234.088 18.1671 234.334 18.2181 234.536 18.2341 C234.743 18.2505 234.959 18.2343 235.166 18.2032 C235.58 18.1411 236.057 18.005 236.552 17.8347 C237.548 17.4929 238.75 16.9676 239.916 16.4485 C241.099 15.9221 242.246 15.402 243.181 15.042 C243.649 14.8618 244.037 14.7322 244.334 14.6621 C244.482 14.6271 244.587 14.6117 244.656 14.6078 C244.735 14.6034 244.715 14.6174 244.647 14.5903 L244.93 13.8796 L245.213 13.169 C244.985 13.0781 244.751 13.0701 244.571 13.0802 C244.38 13.0908 244.179 13.1263 243.981 13.1732 C243.585 13.2669 243.121 13.4253 242.631 13.6142 C241.649 13.9922 240.454 14.5347 239.294 15.0507 C238.118 15.5742 236.977 16.0713 236.056 16.3876 C235.593 16.5465 235.218 16.6483 234.939 16.6901 C234.8 16.7109 234.709 16.713 234.657 16.7089 C234.6 16.7044 234.632 16.6959 234.696 16.7378 L234.28 17.3796 Z M244.93 13.8796 L244.652 14.5922 C244.616 14.5783 244.647 14.585 244.766 14.6815 C244.87 14.7654 245.005 14.8864 245.169 15.0464 C245.497 15.3656 245.909 15.8059 246.384 16.3362 C247.333 17.3951 248.496 18.7741 249.668 20.1744 C250.836 21.5697 252.013 22.9868 252.976 24.1057 C253.458 24.6651 253.892 25.1572 254.249 25.5387 C254.583 25.8963 254.91 26.2227 255.157 26.3869 L255.58 25.7496 L256.003 25.1123 C255.93 25.064 255.724 24.8758 255.366 24.4934 C255.031 24.135 254.613 23.6618 254.136 23.1076 C253.182 21.9993 252.016 20.5958 250.842 19.1924 C249.671 17.7939 248.492 16.396 247.524 15.3153 C247.04 14.7757 246.601 14.3055 246.236 13.9503 C246.054 13.7731 245.882 13.616 245.727 13.4905 C245.587 13.3775 245.404 13.2434 245.208 13.1671 L244.93 13.8796 Z M255.58 25.7496 L255.157 26.3869 C255.412 26.5562 255.777 26.6956 256.144 26.8142 C256.532 26.9397 257.001 27.0659 257.515 27.1898 C258.543 27.4381 259.79 27.6872 261.006 27.9119 C262.224 28.1369 263.421 28.3391 264.351 28.4928 C265.3 28.6497 265.936 28.7505 266.078 28.7793 L266.23 28.0296 L266.382 27.2799 C266.204 27.2437 265.508 27.1333 264.601 26.9833 C263.674 26.8302 262.488 26.6298 261.284 26.4074 C260.078 26.1845 258.862 25.9412 257.874 25.7025 C257.379 25.5831 256.951 25.4672 256.614 25.3584 C256.256 25.2427 256.068 25.1555 256.003 25.1123 L255.58 25.7496 Z" fill="#0044ff"/><path transform="matrix(1 0 0 1 264.59 28.564)" d="M5.48 2.74 C5.48 4.25326 4.25326 5.48 2.74 5.48 C1.22674 5.48 0 4.25326 0 2.74 C0 1.22674 1.22674 0 2.74 0 C4.25326 0 5.48 1.22674 5.48 2.74 Z" fill="#0044ff"/><path transform="matrix(1 0 0 1 264.59 28.564)" d="M5.48 2.74 L4.17 2.74 C4.17 3.52977 3.52977 4.17 2.74 4.17 L2.74 5.48 L2.74 6.79 C4.97675 6.79 6.79 4.97675 6.79 2.74 L5.48 2.74 Z M2.74 5.48 L2.74 4.17 C1.95023 4.17 1.31 3.52977 1.31 2.74 L0 2.74 L-1.31 2.74 C-1.31 4.97675 0.503247 6.79 2.74 6.79 L2.74 5.48 Z M0 2.74 L1.31 2.74 C1.31 1.95023 1.95023 1.31 2.74 1.31 L2.74 0 L2.74 -1.31 C0.503247 -1.31 -1.31 0.503247 -1.31 2.74 L0 2.74 Z M2.74 0 L2.74 1.31 C3.52977 1.31 4.17 1.95023 4.17 2.74 L5.48 2.74 L6.79 2.74 C6.79 0.503247 4.97675 -1.31 2.74 -1.31 L2.74 0 Z" fill="#ffffff"/></svg>
            <div style={{ width: "272.8px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "157px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#222222" }}>Opens, clicks and revenue</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Weekly · PDF</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>Use</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "650.72px", top: "109.56px", width: "299.1px", height: "147.91px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "10.96px 5.48px 5.48px 5.48px", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 6.57px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <UserLoveBulk size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "141px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Subscription health</p>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "8.77px 8.77px 8.77px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "272.8px", height: "44px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "3.29px", width: "272.8px", height: "13.15px", display: "flex", flexDirection: "row", gap: "3.29px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "140.94px", height: "13.15px", flexShrink: 0, borderRadius: "6.57px", background: "linear-gradient(180deg, #36bb83 0%, #18b170 100%)", boxShadow: "inset 0 0 0 1px rgba(19, 138, 87, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <div style={{ width: "93.96px", height: "13.15px", flexShrink: 0, borderRadius: "6.57px", background: "linear-gradient(180deg, #83d5b2 0%, #70cfa6 100%)", boxShadow: "inset 0 0 0 1px rgba(87, 161, 129, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <div style={{ width: "31.32px", height: "13.15px", flexShrink: 0, borderRadius: "6.57px", background: "linear-gradient(180deg, #c3ebda 0%, #b0e4ce 100%)", boxShadow: "inset 0 0 0 1px rgba(23, 168, 106, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden", position: "relative" }}>
                  <svg style={{ position: "absolute", left: "-13.15px", top: "0px", width: "67.95px", height: "13.15px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="67.95" height="13.15" viewBox="0 0 67.95 13.15" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 13.15 L0.540937 13.6909 L13.6909 0.540937 L13.15 0 L12.6091 -0.540937 L-0.540937 12.6091 L0 13.15 Z M5.48 13.15 L6.02094 13.6909 L19.1709 0.540937 L18.63 0 L18.0891 -0.540937 L4.93906 12.6091 L5.48 13.15 Z M10.96 13.15 L11.5009 13.6909 L24.6509 0.540937 L24.11 0 L23.5691 -0.540937 L10.4191 12.6091 L10.96 13.15 Z M16.44 13.15 L16.9809 13.6909 L30.1309 0.540937 L29.59 0 L29.0491 -0.540937 L15.8991 12.6091 L16.44 13.15 Z M21.92 13.15 L22.4609 13.6909 L35.6109 0.540937 L35.07 0 L34.5291 -0.540937 L21.3791 12.6091 L21.92 13.15 Z M27.4 13.15 L27.9409 13.6909 L41.0909 0.540937 L40.55 0 L40.0091 -0.540937 L26.8591 12.6091 L27.4 13.15 Z M32.88 13.15 L33.4209 13.6909 L46.5709 0.540937 L46.03 0 L45.4891 -0.540937 L32.3391 12.6091 L32.88 13.15 Z M38.36 13.15 L38.9009 13.6909 L52.0509 0.540937 L51.51 0 L50.9691 -0.540937 L37.8191 12.6091 L38.36 13.15 Z M43.84 13.15 L44.3809 13.6909 L57.5309 0.540937 L56.99 0 L56.4491 -0.540937 L43.2991 12.6091 L43.84 13.15 Z M49.32 13.15 L49.8609 13.6909 L63.0109 0.540937 L62.47 0 L61.9291 -0.540937 L48.7791 12.6091 L49.32 13.15 Z M54.8 13.15 L55.3409 13.6909 L68.4909 0.540937 L67.95 0 L67.4091 -0.540937 L54.2591 12.6091 L54.8 13.15 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "27px", width: "267.59px", height: "17px", display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "9.86px", height: "9.86px", flexShrink: 0, borderRadius: "2.74px", background: "linear-gradient(180deg, #36bb83 0%, #18b170 100%)", boxShadow: "inset 0 0 0 1px rgba(19, 138, 87, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#52525b" }}>Starter 450</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "9.86px", height: "9.86px", flexShrink: 0, borderRadius: "2.74px", background: "linear-gradient(180deg, #83d5b2 0%, #70cfa6 100%)", boxShadow: "inset 0 0 0 1px rgba(87, 161, 129, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#52525b" }}>Plus 300</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "9.86px", height: "9.86px", flexShrink: 0, borderRadius: "2.74px", background: "linear-gradient(180deg, #c3ebda 0%, #b0e4ce 100%)", boxShadow: "inset 0 0 0 1px rgba(23, 168, 106, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#52525b" }}>Studio 100</p>
                </div>
              </div>
            </div>
            <div style={{ width: "272.8px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "150px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#222222" }}>MRR, churn and plan mix</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Monthly · CSV</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>Use</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "966.22px", top: "109.56px", width: "299.1px", height: "147.91px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "10.96px 5.48px 5.48px 5.48px", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 6.57px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CirclePercentageBulk size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "138px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Sales tax summary</p>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "8.77px 8.77px 8.77px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "272.8px", height: "44px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "272.8px", height: "17px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Q4 collected so far</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#222222" }}>$2,140</p>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "23.18px", width: "272.8px", height: "20.82px" }}>
                <div style={{ position: "absolute", left: "4.47px", top: "0px", width: "12.05px", height: "20.82px", borderRadius: "6.03px", background: "#f6f6f4" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "4.47px", top: "14.76px", width: "12.05px", height: "6.06px", borderRadius: "3.03px", background: "linear-gradient(180deg, #f5cf56 0%, #f3c83d 100%)", boxShadow: "inset 0 0 0 1px rgba(190, 156, 48, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <div style={{ position: "absolute", left: "25.45px", top: "0px", width: "12.05px", height: "20.82px", borderRadius: "6.03px", background: "#f6f6f4" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "25.45px", top: "10.85px", width: "12.05px", height: "9.97px", borderRadius: "4.98px", background: "linear-gradient(180deg, #f5cf56 0%, #f3c83d 100%)", boxShadow: "inset 0 0 0 1px rgba(190, 156, 48, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <div style={{ position: "absolute", left: "46.44px", top: "0px", width: "12.05px", height: "20.82px", borderRadius: "6.03px", background: "#f6f6f4" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "46.44px", top: "10.03px", width: "12.05px", height: "10.79px", borderRadius: "5.39px", background: "linear-gradient(180deg, #f5cf56 0%, #f3c83d 100%)", boxShadow: "inset 0 0 0 1px rgba(190, 156, 48, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <div style={{ position: "absolute", left: "67.42px", top: "0px", width: "12.05px", height: "20.82px", borderRadius: "6.03px", background: "#f6f6f4" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "67.42px", top: "11.42px", width: "12.05px", height: "9.4px", borderRadius: "4.7px", background: "linear-gradient(180deg, #f5cf56 0%, #f3c83d 100%)", boxShadow: "inset 0 0 0 1px rgba(190, 156, 48, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <div style={{ position: "absolute", left: "88.41px", top: "0px", width: "12.05px", height: "20.82px", borderRadius: "6.03px", background: "#f6f6f4" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "88.41px", top: "9.34px", width: "12.05px", height: "11.48px", borderRadius: "5.74px", background: "linear-gradient(180deg, #f5cf56 0%, #f3c83d 100%)", boxShadow: "inset 0 0 0 1px rgba(190, 156, 48, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <div style={{ position: "absolute", left: "109.39px", top: "0px", width: "12.05px", height: "20.82px", borderRadius: "6.03px", background: "#f6f6f4" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "109.39px", top: "10.35px", width: "12.05px", height: "10.47px", borderRadius: "5.24px", background: "linear-gradient(180deg, #f5cf56 0%, #f3c83d 100%)", boxShadow: "inset 0 0 0 1px rgba(190, 156, 48, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <div style={{ position: "absolute", left: "130.38px", top: "0px", width: "12.05px", height: "20.82px", borderRadius: "6.03px", background: "#f6f6f4" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "130.38px", top: "9.65px", width: "12.05px", height: "11.17px", borderRadius: "5.58px", background: "linear-gradient(180deg, #f5cf56 0%, #f3c83d 100%)", boxShadow: "inset 0 0 0 1px rgba(190, 156, 48, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <div style={{ position: "absolute", left: "151.36px", top: "0px", width: "12.05px", height: "20.82px", borderRadius: "6.03px", background: "#f6f6f4" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "151.36px", top: "1.14px", width: "12.05px", height: "19.68px", borderRadius: "6.03px", background: "linear-gradient(180deg, #f5cf56 0%, #f3c83d 100%)", boxShadow: "inset 0 0 0 1px rgba(190, 156, 48, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <div style={{ position: "absolute", left: "172.34px", top: "0px", width: "12.05px", height: "20.82px", borderRadius: "6.03px", background: "#f6f6f4" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "172.34px", top: "3.91px", width: "12.05px", height: "16.91px", borderRadius: "6.03px", background: "linear-gradient(180deg, #f5cf56 0%, #f3c83d 100%)", boxShadow: "inset 0 0 0 1px rgba(190, 156, 48, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <div style={{ position: "absolute", left: "193.33px", top: "0px", width: "12.05px", height: "20.82px", borderRadius: "6.03px", background: "#f6f6f4" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "193.33px", top: "7.32px", width: "12.05px", height: "13.5px", borderRadius: "6.03px", background: "linear-gradient(180deg, #f5cf56 0%, #f3c83d 100%)", boxShadow: "inset 0 0 0 1px rgba(190, 156, 48, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <div style={{ position: "absolute", left: "214.31px", top: "0px", width: "12.05px", height: "20.82px", borderRadius: "6.03px", background: "#f6f6f4" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "214.31px", top: "5.24px", width: "12.05px", height: "15.58px", borderRadius: "6.03px", background: "linear-gradient(180deg, #f5cf56 0%, #f3c83d 100%)", boxShadow: "inset 0 0 0 1px rgba(190, 156, 48, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <div style={{ position: "absolute", left: "235.3px", top: "0px", width: "12.05px", height: "20.82px", borderRadius: "6.03px", background: "#f6f6f4" }} />
                <div style={{ position: "absolute", left: "256.28px", top: "0px", width: "12.05px", height: "20.82px", borderRadius: "6.03px", background: "#f6f6f4" }} />
              </div>
            </div>
            <div style={{ width: "272.8px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "150px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#222222" }}>Tax by state and channel</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Quarterly · CSV</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>Use</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "277.2px", width: "1245.74px", height: "780.09px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23.01px 23.01px 23.01px 23.01px", gap: "17.53px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>All reports</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "348px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6b6b70" }}>7 reports · 5 on a schedule · next send Fri, Dec 18, 4:00 PM</p>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "10.96px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "3.29px 3.29px 3.29px 3.29px", gap: "2.19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#000000" }}>All</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>7</p>
              </div>
              <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Scheduled</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>5</p>
              </div>
              <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>On demand</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>2</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "262.95px", height: "37.25px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Search size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#686765", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#999999" }}>Search reports</p>
              </div>
              <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>All owners</p>
                <svg style={{ width: "13.15px", height: "13.15px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13.15" height="13.15" viewBox="0 0 13.15 13.15" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 3.287 4.931)" d="M0.542312 -0.542312 C0.242801 -0.841823 -0.242801 -0.841823 -0.542312 -0.542312 C-0.841823 -0.242801 -0.841823 0.242801 -0.542312 0.542312 L0 0 L0.542312 -0.542312 Z M3.28691 3.28691 L2.7446 3.82922 C3.04411 4.12873 3.52971 4.12873 3.82922 3.82922 L3.28691 3.28691 Z M7.11613 0.542312 C7.41564 0.242801 7.41564 -0.242801 7.11613 -0.542312 C6.81662 -0.841823 6.33101 -0.841823 6.0315 -0.542312 L6.57382 0 L7.11613 0.542312 Z M0 0 L-0.542312 0.542312 L2.7446 3.82922 L3.28691 3.28691 L3.82922 2.7446 L0.542312 -0.542312 L0 0 Z M3.28691 3.28691 L3.82922 3.82922 L7.11613 0.542312 L6.57382 0 L6.0315 -0.542312 L2.7446 2.7446 L3.28691 3.28691 Z" fill="#6b6b70"/></svg>
              </div>
            </div>
          </div>
          <div style={{ width: "1201.92px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "1201.92px", height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#fafafa", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "300px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Report</p>
              </div>
              <div style={{ width: "190px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Schedule</p>
              </div>
              <div style={{ width: "150px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Recipients</p>
              </div>
              <div style={{ width: "90px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Format</p>
              </div>
              <div style={{ width: "150px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Last sent</p>
              </div>
              <div style={{ width: "140px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Next send</p>
              </div>
              <div style={{ width: "140px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Status</p>
              </div>
              <div style={{ width: "41.92px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, height: "17px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "67.93px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "300px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <ReceiptDollarBulk size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "165px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>November P&L snapshot</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "227px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Monthly P&L snapshot · Marcus Webb</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "190px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "145px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Monthly · 1st, 8:00 AM</p>
              </div>
              <div style={{ width: "150px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(0, 68, 255, 0.14), rgba(0, 68, 255, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#0044ff" }}>MW</p>
                    </div>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(24, 177, 112, 0.14), rgba(24, 177, 112, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-4.38px" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#18b170" }}>DR</p>
                    </div>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>2</p>
                </div>
              </div>
              <div style={{ width: "90px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 6.57px", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <FileTypePdfBulk size={15.3} strokeWidth={2.01} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>PDF</p>
                </div>
              </div>
              <div style={{ width: "150px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 1, 8:00 AM</p>
              </div>
              <div style={{ width: "140px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Jan 1, 8:00 AM</p>
              </div>
              <div style={{ width: "140px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Delivered</p>
                </div>
              </div>
              <div style={{ width: "41.92px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "7.67px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Download size={16.4} strokeWidth={1.51} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "67.93px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "300px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(0, 68, 255, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <ChartLineBulk size={17.5} strokeWidth={2} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#0044ff", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "163px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Weekly campaign digest</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "214px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Campaign performance · Priya Shah</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "190px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "150px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Weekly · Mon, 9:00 AM</p>
              </div>
              <div style={{ width: "150px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(255, 114, 171, 0.14), rgba(255, 114, 171, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#d6457f" }}>PS</p>
                    </div>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(243, 200, 61, 0.22), rgba(243, 200, 61, 0.22)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-4.38px" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#c27c0e" }}>LO</p>
                    </div>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(253, 75, 35, 0.14), rgba(253, 75, 35, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-4.38px" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#fd4b23" }}>JE</p>
                    </div>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>3</p>
                </div>
              </div>
              <div style={{ width: "90px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 6.57px", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <FileTypePdfBulk size={15.3} strokeWidth={2.01} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>PDF</p>
                </div>
              </div>
              <div style={{ width: "150px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Today, 9:00 AM</p>
              </div>
              <div style={{ width: "140px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 21, 9:00 AM</p>
              </div>
              <div style={{ width: "140px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Delivered</p>
                </div>
              </div>
              <div style={{ width: "41.92px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "7.67px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Download size={16.4} strokeWidth={1.51} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "67.93px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "300px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(24, 177, 112, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <UserLoveBulk size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#18b170", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "122px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Harbor Club churn</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "197px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Subscription health · Jordan Ellis</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "190px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "145px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Monthly · 1st, 8:00 AM</p>
              </div>
              <div style={{ width: "150px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(253, 75, 35, 0.14), rgba(253, 75, 35, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#fd4b23" }}>JE</p>
                    </div>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(0, 68, 255, 0.14), rgba(0, 68, 255, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-4.38px" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#0044ff" }}>MW</p>
                    </div>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>2</p>
                </div>
              </div>
              <div style={{ width: "90px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 6.57px", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <FileTypeCsvBulk size={15.3} strokeWidth={2.01} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>CSV</p>
                </div>
              </div>
              <div style={{ width: "150px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 1, 8:00 AM</p>
              </div>
              <div style={{ width: "140px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Jan 1, 8:00 AM</p>
              </div>
              <div style={{ width: "140px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Delivered</p>
                </div>
              </div>
              <div style={{ width: "41.92px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "7.67px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Download size={16.4} strokeWidth={1.51} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "67.93px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "300px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(0, 68, 255, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <MegaphoneBulk size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#0044ff", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Black Friday recap</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "214px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Campaign performance · Priya Shah</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "190px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>On demand</p>
              </div>
              <div style={{ width: "150px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(255, 114, 171, 0.14), rgba(255, 114, 171, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#d6457f" }}>PS</p>
                    </div>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(253, 75, 35, 0.14), rgba(253, 75, 35, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-4.38px" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#fd4b23" }}>JE</p>
                    </div>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(243, 200, 61, 0.22), rgba(243, 200, 61, 0.22)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-4.38px" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#c27c0e" }}>LO</p>
                    </div>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>4</p>
                </div>
              </div>
              <div style={{ width: "90px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 6.57px", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <FileTypePdfBulk size={15.3} strokeWidth={2.01} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>PDF</p>
                </div>
              </div>
              <div style={{ width: "150px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 2, 10:15 AM</p>
              </div>
              <div style={{ width: "140px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
              </div>
              <div style={{ width: "140px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Delivered</p>
                </div>
              </div>
              <div style={{ width: "41.92px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "7.67px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Download size={16.4} strokeWidth={1.51} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "67.93px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "300px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(243, 200, 61, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <CirclePercentageBulk size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#f3c83d", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Sales tax Q4</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "207px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Sales tax summary · Marcus Webb</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "190px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "171px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Quarterly · Jan 2, 8:00 AM</p>
              </div>
              <div style={{ width: "150px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(0, 68, 255, 0.14), rgba(0, 68, 255, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#0044ff" }}>MW</p>
                    </div>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(24, 177, 112, 0.14), rgba(24, 177, 112, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-4.38px" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#18b170" }}>DR</p>
                    </div>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>2</p>
                </div>
              </div>
              <div style={{ width: "90px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 6.57px", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <FileTypeCsvBulk size={15.3} strokeWidth={2.01} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>CSV</p>
                </div>
              </div>
              <div style={{ width: "150px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Oct 2, 8:00 AM</p>
              </div>
              <div style={{ width: "140px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Jan 2, 8:00 AM</p>
              </div>
              <div style={{ width: "140px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#edf2ff", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#2f66ff"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#2f66ff" }}>Scheduled</p>
                </div>
              </div>
              <div style={{ width: "41.92px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "7.67px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Download size={16.4} strokeWidth={1.51} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "67.93px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "300px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(77, 152, 254, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <PackageBulk size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#4d98fe", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Inventory sell-through</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "122px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Custom · Theo Grant</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "190px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "137px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Weekly · Fri, 4:00 PM</p>
              </div>
              <div style={{ width: "150px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(24, 177, 112, 0.14), rgba(24, 177, 112, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#18b170" }}>TG</p>
                    </div>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(253, 75, 35, 0.14), rgba(253, 75, 35, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-4.38px" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#fd4b23" }}>JE</p>
                    </div>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>2</p>
                </div>
              </div>
              <div style={{ width: "90px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 6.57px", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <FileTypeCsvBulk size={15.3} strokeWidth={2.01} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>CSV</p>
                </div>
              </div>
              <div style={{ width: "150px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 11, 4:00 PM</p>
              </div>
              <div style={{ width: "140px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 18, 4:00 PM</p>
              </div>
              <div style={{ width: "140px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#fff8eb", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#c27c0e"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#c27c0e" }}>1 bounced</p>
                </div>
              </div>
              <div style={{ width: "41.92px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "7.67px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Download size={16.4} strokeWidth={1.51} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "67.93px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "300px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(125, 129, 140, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <BriefcaseBulk size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "105px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Investor update</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Custom · Jordan Ellis</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "190px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>On demand</p>
              </div>
              <div style={{ width: "150px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(253, 75, 35, 0.14), rgba(253, 75, 35, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#fd4b23" }}>JE</p>
                    </div>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(77, 152, 254, 0.14), rgba(77, 152, 254, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-4.38px" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#4d98fe" }}>AK</p>
                    </div>
                    <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(255, 114, 171, 0.14), rgba(255, 114, 171, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-4.38px" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#d6457f" }}>RB</p>
                    </div>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>3</p>
                </div>
              </div>
              <div style={{ width: "90px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 6.57px", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <FileTypePdfBulk size={15.3} strokeWidth={2.01} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>PDF</p>
                </div>
              </div>
              <div style={{ width: "150px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "102px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Nov 5, 9:00 AM</p>
              </div>
              <div style={{ width: "140px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
              </div>
              <div style={{ width: "140px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f4f4f5", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#6c6c6c"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>Draft</p>
                </div>
              </div>
              <div style={{ width: "41.92px", height: "67.93px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "7.67px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Download size={16.4} strokeWidth={1.51} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 1.1px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "14.25px 13.15px 0px 13.15px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "375px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>31 deliveries</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>{" in the last 30 days · 30 delivered · "}</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#c27c0e" }}>1 bounced</span>
            </p>
            <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>Delivery log</p>
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
