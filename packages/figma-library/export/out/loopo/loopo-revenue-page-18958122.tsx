"use client";
// Revenue page (loopo, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { ArrowDownRight, ArrowUpRight, BuildingBank, Calendar, ChevronDown, ChevronRight, DotsVertical, Link, Loader, Moneybag, MoneybagMove, Refresh, Search, Wallet } from "ingotui-icons/react/stroke-rounded";
import { Bell as BellBulk, Bolt as BoltBulk, BuildingBank as BuildingBankBulk, BuildingStore as BuildingStoreBulk, ChartLine as ChartLineBulk, CreditCard as CreditCardBulk, CreditCardHand as CreditCardHandBulk, File as FileBulk, Filter as FilterBulk, HelpCircle as HelpCircleBulk, LayoutDashboard as LayoutDashboardBulk, License as LicenseBulk, Note as NoteBulk, Outlet as OutletBulk, Refresh as RefreshBulk, Send as SendBulk, Settings as SettingsBulk, ShoppingCart as ShoppingCartBulk, TrendingUp as TrendingUpBulk, User as UserBulk, Users as UsersBulk } from "ingotui-icons/react/bulk";
import { LayoutDashboard as LayoutDashboardSolid, Wallet as WalletSolid } from "ingotui-icons/react/solid";

export function RevenuePage() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1577.72px", height: "1180px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "269.53px", height: "1180px", background: "#f5f5f5", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "21.91px", top: "23.76px", width: "81.08px", height: "24.79px", display: "flex", flexDirection: "row", gap: "24.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.72px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24.79px", height: "24.79px", flexShrink: 0, borderRadius: "5.72px", background: "#fd4b23", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "22.21px", height: "22.21px", background: "linear-gradient(177.6deg, rgba(255, 255, 255, 0) 2%, rgba(255, 255, 255, 0.12) 98.2%)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "-2.86px", top: "2.86px", width: "26.87px", height: "22.79px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="26.87" height="22.79" viewBox="0 0 26.87 22.79" fill="none" overflow="visible"><path transform="matrix(0.5 -0.866 0.866 0.5 0.696 12.902)" d="M0.495677 8.90014 C0.22308 8.44329 0.377026 7.85174 0.837738 7.58573 L12.4326 0.890945 C13.0922 0.510116 13.91 1.01806 13.861 1.7781 L13.6382 5.23389 C13.6177 5.55205 13.4395 5.83891 13.1634 5.99833 L3.26793 11.7119 C2.81648 11.9726 2.23937 11.8224 1.97225 11.3747 L0.495677 8.90014 Z" fill="#ffffff"/><path transform="matrix(0.5 -0.866 0.866 0.5 8.01 14.081)" d="M0.490901 6.5047 C0.220642 6.04804 0.375175 5.45859 0.83472 5.19325 L8.28599 0.890946 C8.94556 0.510117 9.7634 1.01806 9.71439 1.7781 L9.49155 5.2341 C9.47105 5.55214 9.293 5.83892 9.01706 5.99837 L3.25745 9.3266 C2.80481 9.58816 2.22597 9.43651 1.95972 8.98662 L0.490901 6.5047 Z" fill="#ffffff" opacity="0.5"/><path transform="matrix(0.5 -0.866 0.866 0.5 15.324 15.262)" d="M0.476896 4.10681 C0.213519 3.65073 0.369756 3.06749 0.825854 2.80414 L4.13937 0.890946 C4.79894 0.510116 5.61678 1.01806 5.56778 1.7781 L5.34491 5.23457 C5.32442 5.55235 5.14664 5.83894 4.87104 5.99848 L3.22264 6.9527 C2.76652 7.21674 2.1827 7.06069 1.91914 6.6043 L0.476896 4.10681 Z" fill="#ffffff" opacity="0.25"/></svg>
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
                      <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <FileBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "56px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#646871" }}>Reports</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", background: "#ececed", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <WalletSolid size={15.3} strokeWidth={2.26} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#000000", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "61px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#000000" }}>Revenue</p>
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
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#666d80", lineHeight: "1.5", letterSpacing: "0.02em" }}>Revenue</p>
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
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", lineHeight: "31px", fontFamily: "'Geist'", fontSize: "24.1px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Revenue</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "669px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Payments, subscriptions and payouts across online, Harbor Club and the Portland store.</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="btn" style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.96px 10.96px 10.96px 10.96px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <BuildingBank size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.53px" }}>Payouts</p>
            </div>
            <div data-fu="btn" style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "linear-gradient(180deg, #838383 0%, #2d2d2d 100%)", boxShadow: "0px 9.86px 8.77px 0px rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", height: "17.53px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Link size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#ffffff", lineHeight: "17.53px" }}>Create payment link</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "109.56px", width: "1245.74px", height: "147.91px", display: "flex", flexDirection: "row", gap: "16.43px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="card" style={{ width: "299.11px", height: "147.91px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "-2.19px", top: "-2.19px", width: "301.3px", height: "41.91px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Moneybag size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Gross volume</p>
                </div>
                <DotsVertical size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ position: "absolute", left: "4.38px", top: "37.25px", width: "290.34px", height: "106.28px", borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "8.76px", top: "8.76px", width: "276.1px", height: "88.25px", display: "flex", flexDirection: "column", gap: "21.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "28px", fontFamily: "'Geist'", fontSize: "21.91px", fontWeight: 500, color: "#222222" }}>$55,400</p>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.29px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <ArrowUpRight size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#18b170", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "160px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>
                      <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>{"+15.2% "}</span>
                      <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>vs. prior period</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-fu="card" style={{ width: "299.11px", height: "147.91px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "-2.19px", top: "-2.19px", width: "301.3px", height: "41.91px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Wallet size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Net revenue</p>
                </div>
                <DotsVertical size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ position: "absolute", left: "4.38px", top: "37.25px", width: "290.34px", height: "106.28px", borderRadius: "8.77px", background: "#ffffff", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "8.77px", top: "8.76px", width: "276.1px", height: "88.25px", display: "flex", flexDirection: "column", gap: "21.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "28px", fontFamily: "'Geist'", fontSize: "21.91px", fontWeight: 500, color: "#222222" }}>$48,290</p>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.29px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <ArrowUpRight size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#18b170", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "159px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>
                      <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>{"+18.4% "}</span>
                      <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>vs. prior period</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-fu="card" style={{ width: "299.11px", height: "147.91px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "299.11px", height: "41.91px", background: "#ffffff", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Refresh size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>MRR</p>
                </div>
                <DotsVertical size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ position: "absolute", left: "4.38px", top: "37.25px", width: "290.34px", height: "106.28px", borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "8.77px", top: "8.76px", width: "276.1px", height: "88.25px", display: "flex", flexDirection: "column", gap: "21.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "28px", fontFamily: "'Geist'", fontSize: "21.91px", fontWeight: 500, color: "#222222" }}>$16,400</p>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.29px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <ArrowUpRight size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#18b170", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "154px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>
                      <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>{"+6.8% "}</span>
                      <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>vs. prior period</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-fu="card" style={{ width: "299.11px", height: "147.91px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "-2.19px", top: "-2.19px", width: "301.3px", height: "41.91px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <MoneybagMove size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Refunds</p>
                </div>
                <DotsVertical size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ position: "absolute", left: "4.38px", top: "37.25px", width: "290.34px", height: "106.28px", borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "8.77px", top: "8.76px", width: "276.1px", height: "88.25px", display: "flex", flexDirection: "column", gap: "21.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "28px", fontFamily: "'Geist'", fontSize: "21.91px", fontWeight: 500, color: "#222222" }}>$4,830</p>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.29px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <ArrowDownRight size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#18b170", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "147px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>
                      <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>{"-3.1% "}</span>
                      <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>vs. prior period</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "277.2px", width: "852.4px", height: "380.19px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23.01px 23.01px 23.01px 23.01px", gap: "17.53px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "137px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>Monthly revenue</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "188px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6b6b70" }}>Gross volume by channel (USD)</p>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "9.86px", height: "9.86px", flexShrink: 0, borderRadius: "2.74px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#52525b" }}>Online</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "9.86px", height: "9.86px", flexShrink: 0, borderRadius: "2.74px", background: "linear-gradient(180deg, #ff84b6 0%, #ff72ab 100%)", boxShadow: "inset 0 0 0 1px rgba(199, 89, 133, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#52525b" }}>Subscriptions</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "9.86px", height: "9.86px", flexShrink: 0, borderRadius: "2.74px", background: "linear-gradient(180deg, #64a5fe 0%, #4d98fe 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 119, 198, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#52525b" }}>In-store</p>
                </div>
              </div>
            </div>
            <div data-fu="btn" style={{ height: "35.06px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "8.77px 8.77px 8.77px 8.77px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "33px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>2026</p>
              <ChevronDown size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "808.58px", height: "268px", flexShrink: 0, position: "relative" }}>
            <svg style={{ position: "absolute", left: "48.21px", top: "8.77px", width: "760.37px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="760.37" height="1" viewBox="0 0 760.37 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L760.3699951171875 0" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3.2899999618530273 3.2899999618530273" strokeLinecap="butt"/></svg>
            <p style={{ position: "absolute", left: "5.44px", top: "0.27px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>$80K</p>
            <svg style={{ position: "absolute", left: "48.21px", top: "66.46px", width: "760.37px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="760.37" height="1" viewBox="0 0 760.37 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L760.3699951171875 0" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3.2899999618530273 3.2899999618530273" strokeLinecap="butt"/></svg>
            <p style={{ position: "absolute", left: "5.44px", top: "57.96px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>$60K</p>
            <svg style={{ position: "absolute", left: "48.21px", top: "124.14px", width: "760.37px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="760.37" height="1" viewBox="0 0 760.37 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L760.3699951171875 0" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3.2899999618530273 3.2899999618530273" strokeLinecap="butt"/></svg>
            <p style={{ position: "absolute", left: "5.44px", top: "115.64px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>$40K</p>
            <svg style={{ position: "absolute", left: "48.21px", top: "181.83px", width: "760.37px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="760.37" height="1" viewBox="0 0 760.37 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L760.3699951171875 0" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3.2899999618530273 3.2899999618530273" strokeLinecap="butt"/></svg>
            <p style={{ position: "absolute", left: "5.44px", top: "173.33px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>$20K</p>
            <div style={{ position: "absolute", left: "48.21px", top: "239.01px", width: "760.37px", height: "1px", background: "#e2e2e5" }} />
            <p style={{ position: "absolute", left: "30.44px", top: "231.01px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>0</p>
            <svg style={{ position: "absolute", left: "79.89px", top: "8.77px", width: "1px", height: "230.74px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="230.74" viewBox="0 0 1 230.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 1.64814 L0 1.64814 L0.5 1.64814 L0.5 0 L0 0 Z M0 4.94443 L-0.5 4.94443 L-0.5 8.24072 L0 8.24072 L0.5 8.24072 L0.5 4.94443 L0 4.94443 Z M0 11.537 L-0.5 11.537 L-0.5 14.8333 L0 14.8333 L0.5 14.8333 L0.5 11.537 L0 11.537 Z M0 18.1296 L-0.5 18.1296 L-0.5 21.4259 L0 21.4259 L0.5 21.4259 L0.5 18.1296 L0 18.1296 Z M0 24.7221 L-0.5 24.7221 L-0.5 28.0184 L0 28.0184 L0.5 28.0184 L0.5 24.7221 L0 24.7221 Z M0 31.3147 L-0.5 31.3147 L-0.5 34.611 L0 34.611 L0.5 34.611 L0.5 31.3147 L0 31.3147 Z M0 37.9073 L-0.5 37.9073 L-0.5 41.2036 L0 41.2036 L0.5 41.2036 L0.5 37.9073 L0 37.9073 Z M0 44.4999 L-0.5 44.4999 L-0.5 47.7962 L0 47.7962 L0.5 47.7962 L0.5 44.4999 L0 44.4999 Z M0 51.0924 L-0.5 51.0924 L-0.5 54.3887 L0 54.3887 L0.5 54.3887 L0.5 51.0924 L0 51.0924 Z M0 57.685 L-0.5 57.685 L-0.5 60.9813 L0 60.9813 L0.5 60.9813 L0.5 57.685 L0 57.685 Z M0 64.2776 L-0.5 64.2776 L-0.5 67.5739 L0 67.5739 L0.5 67.5739 L0.5 64.2776 L0 64.2776 Z M0 70.8702 L-0.5 70.8702 L-0.5 74.1665 L0 74.1665 L0.5 74.1665 L0.5 70.8702 L0 70.8702 Z M0 77.4627 L-0.5 77.4627 L-0.5 80.759 L0 80.759 L0.5 80.759 L0.5 77.4627 L0 77.4627 Z M0 84.0553 L-0.5 84.0553 L-0.5 87.3516 L0 87.3516 L0.5 87.3516 L0.5 84.0553 L0 84.0553 Z M0 90.6479 L-0.5 90.6479 L-0.5 93.9442 L0 93.9442 L0.5 93.9442 L0.5 90.6479 L0 90.6479 Z M0 97.2405 L-0.5 97.2405 L-0.5 100.537 L0 100.537 L0.5 100.537 L0.5 97.2405 L0 97.2405 Z M0 103.833 L-0.5 103.833 L-0.5 107.129 L0 107.129 L0.5 107.129 L0.5 103.833 L0 103.833 Z M0 110.426 L-0.5 110.426 L-0.5 113.722 L0 113.722 L0.5 113.722 L0.5 110.426 L0 110.426 Z M0 117.018 L-0.5 117.018 L-0.5 120.314 L0 120.314 L0.5 120.314 L0.5 117.018 L0 117.018 Z M0 123.611 L-0.5 123.611 L-0.5 126.907 L0 126.907 L0.5 126.907 L0.5 123.611 L0 123.611 Z M0 130.203 L-0.5 130.203 L-0.5 133.5 L0 133.5 L0.5 133.5 L0.5 130.203 L0 130.203 Z M0 136.796 L-0.5 136.796 L-0.5 140.092 L0 140.092 L0.5 140.092 L0.5 136.796 L0 136.796 Z M0 143.388 L-0.5 143.388 L-0.5 146.685 L0 146.685 L0.5 146.685 L0.5 143.388 L0 143.388 Z M0 149.981 L-0.5 149.981 L-0.5 153.277 L0 153.277 L0.5 153.277 L0.5 149.981 L0 149.981 Z M0 156.574 L-0.5 156.574 L-0.5 159.87 L0 159.87 L0.5 159.87 L0.5 156.574 L0 156.574 Z M0 163.166 L-0.5 163.166 L-0.5 166.462 L0 166.462 L0.5 166.462 L0.5 163.166 L0 163.166 Z M0 169.759 L-0.5 169.759 L-0.5 173.055 L0 173.055 L0.5 173.055 L0.5 169.759 L0 169.759 Z M0 176.351 L-0.5 176.351 L-0.5 179.648 L0 179.648 L0.5 179.648 L0.5 176.351 L0 176.351 Z M0 182.944 L-0.5 182.944 L-0.5 186.24 L0 186.24 L0.5 186.24 L0.5 182.944 L0 182.944 Z M0 189.536 L-0.5 189.536 L-0.5 192.833 L0 192.833 L0.5 192.833 L0.5 189.536 L0 189.536 Z M0 196.129 L-0.5 196.129 L-0.5 199.425 L0 199.425 L0.5 199.425 L0.5 196.129 L0 196.129 Z M0 202.721 L-0.5 202.721 L-0.5 206.018 L0 206.018 L0.5 206.018 L0.5 202.721 L0 202.721 Z M0 209.314 L-0.5 209.314 L-0.5 212.61 L0 212.61 L0.5 212.61 L0.5 209.314 L0 209.314 Z M0 215.907 L-0.5 215.907 L-0.5 219.203 L0 219.203 L0.5 219.203 L0.5 215.907 L0 215.907 Z M0 222.499 L-0.5 222.499 L-0.5 225.795 L0 225.795 L0.5 225.795 L0.5 222.499 L0 222.499 Z M0 229.092 L-0.5 229.092 L-0.5 230.74 L0 230.74 L0.5 230.74 L0.5 229.092 L0 229.092 Z" fill="#ececee"/></svg>
            <div data-fu="bar" style={{ position: "absolute", left: "65.65px", top: "197.34px", width: "28.49px", height: "42.17px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "65.65px", top: "164.81px", width: "28.49px", height: "30.12px", borderRadius: "4.38px", background: "linear-gradient(180deg, #ff84b6 0%, #ff72ab 100%)", boxShadow: "inset 0 0 0 1px rgba(199, 89, 133, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "65.65px", top: "143.93px", width: "28.49px", height: "18.47px", borderRadius: "4.38px", background: "linear-gradient(180deg, #64a5fe 0%, #4d98fe 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 119, 198, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "143.26px", top: "8.77px", width: "1px", height: "230.74px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="230.74" viewBox="0 0 1 230.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 1.64814 L0 1.64814 L0.5 1.64814 L0.5 0 L0 0 Z M0 4.94443 L-0.5 4.94443 L-0.5 8.24072 L0 8.24072 L0.5 8.24072 L0.5 4.94443 L0 4.94443 Z M0 11.537 L-0.5 11.537 L-0.5 14.8333 L0 14.8333 L0.5 14.8333 L0.5 11.537 L0 11.537 Z M0 18.1296 L-0.5 18.1296 L-0.5 21.4259 L0 21.4259 L0.5 21.4259 L0.5 18.1296 L0 18.1296 Z M0 24.7221 L-0.5 24.7221 L-0.5 28.0184 L0 28.0184 L0.5 28.0184 L0.5 24.7221 L0 24.7221 Z M0 31.3147 L-0.5 31.3147 L-0.5 34.611 L0 34.611 L0.5 34.611 L0.5 31.3147 L0 31.3147 Z M0 37.9073 L-0.5 37.9073 L-0.5 41.2036 L0 41.2036 L0.5 41.2036 L0.5 37.9073 L0 37.9073 Z M0 44.4999 L-0.5 44.4999 L-0.5 47.7962 L0 47.7962 L0.5 47.7962 L0.5 44.4999 L0 44.4999 Z M0 51.0924 L-0.5 51.0924 L-0.5 54.3887 L0 54.3887 L0.5 54.3887 L0.5 51.0924 L0 51.0924 Z M0 57.685 L-0.5 57.685 L-0.5 60.9813 L0 60.9813 L0.5 60.9813 L0.5 57.685 L0 57.685 Z M0 64.2776 L-0.5 64.2776 L-0.5 67.5739 L0 67.5739 L0.5 67.5739 L0.5 64.2776 L0 64.2776 Z M0 70.8702 L-0.5 70.8702 L-0.5 74.1665 L0 74.1665 L0.5 74.1665 L0.5 70.8702 L0 70.8702 Z M0 77.4627 L-0.5 77.4627 L-0.5 80.759 L0 80.759 L0.5 80.759 L0.5 77.4627 L0 77.4627 Z M0 84.0553 L-0.5 84.0553 L-0.5 87.3516 L0 87.3516 L0.5 87.3516 L0.5 84.0553 L0 84.0553 Z M0 90.6479 L-0.5 90.6479 L-0.5 93.9442 L0 93.9442 L0.5 93.9442 L0.5 90.6479 L0 90.6479 Z M0 97.2405 L-0.5 97.2405 L-0.5 100.537 L0 100.537 L0.5 100.537 L0.5 97.2405 L0 97.2405 Z M0 103.833 L-0.5 103.833 L-0.5 107.129 L0 107.129 L0.5 107.129 L0.5 103.833 L0 103.833 Z M0 110.426 L-0.5 110.426 L-0.5 113.722 L0 113.722 L0.5 113.722 L0.5 110.426 L0 110.426 Z M0 117.018 L-0.5 117.018 L-0.5 120.314 L0 120.314 L0.5 120.314 L0.5 117.018 L0 117.018 Z M0 123.611 L-0.5 123.611 L-0.5 126.907 L0 126.907 L0.5 126.907 L0.5 123.611 L0 123.611 Z M0 130.203 L-0.5 130.203 L-0.5 133.5 L0 133.5 L0.5 133.5 L0.5 130.203 L0 130.203 Z M0 136.796 L-0.5 136.796 L-0.5 140.092 L0 140.092 L0.5 140.092 L0.5 136.796 L0 136.796 Z M0 143.388 L-0.5 143.388 L-0.5 146.685 L0 146.685 L0.5 146.685 L0.5 143.388 L0 143.388 Z M0 149.981 L-0.5 149.981 L-0.5 153.277 L0 153.277 L0.5 153.277 L0.5 149.981 L0 149.981 Z M0 156.574 L-0.5 156.574 L-0.5 159.87 L0 159.87 L0.5 159.87 L0.5 156.574 L0 156.574 Z M0 163.166 L-0.5 163.166 L-0.5 166.462 L0 166.462 L0.5 166.462 L0.5 163.166 L0 163.166 Z M0 169.759 L-0.5 169.759 L-0.5 173.055 L0 173.055 L0.5 173.055 L0.5 169.759 L0 169.759 Z M0 176.351 L-0.5 176.351 L-0.5 179.648 L0 179.648 L0.5 179.648 L0.5 176.351 L0 176.351 Z M0 182.944 L-0.5 182.944 L-0.5 186.24 L0 186.24 L0.5 186.24 L0.5 182.944 L0 182.944 Z M0 189.536 L-0.5 189.536 L-0.5 192.833 L0 192.833 L0.5 192.833 L0.5 189.536 L0 189.536 Z M0 196.129 L-0.5 196.129 L-0.5 199.425 L0 199.425 L0.5 199.425 L0.5 196.129 L0 196.129 Z M0 202.721 L-0.5 202.721 L-0.5 206.018 L0 206.018 L0.5 206.018 L0.5 202.721 L0 202.721 Z M0 209.314 L-0.5 209.314 L-0.5 212.61 L0 212.61 L0.5 212.61 L0.5 209.314 L0 209.314 Z M0 215.907 L-0.5 215.907 L-0.5 219.203 L0 219.203 L0.5 219.203 L0.5 215.907 L0 215.907 Z M0 222.499 L-0.5 222.499 L-0.5 225.795 L0 225.795 L0.5 225.795 L0.5 222.499 L0 222.499 Z M0 229.092 L-0.5 229.092 L-0.5 230.74 L0 230.74 L0.5 230.74 L0.5 229.092 L0 229.092 Z" fill="#ececee"/></svg>
            <div data-fu="bar" style={{ position: "absolute", left: "129.01px", top: "199.48px", width: "28.49px", height: "40.03px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "129.01px", top: "165.9px", width: "28.49px", height: "31.16px", borderRadius: "4.38px", background: "linear-gradient(180deg, #ff84b6 0%, #ff72ab 100%)", boxShadow: "inset 0 0 0 1px rgba(199, 89, 133, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "129.01px", top: "146.06px", width: "28.49px", height: "17.43px", borderRadius: "4.38px", background: "linear-gradient(180deg, #64a5fe 0%, #4d98fe 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 119, 198, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "206.62px", top: "8.77px", width: "1px", height: "230.74px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="230.74" viewBox="0 0 1 230.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 1.64814 L0 1.64814 L0.5 1.64814 L0.5 0 L0 0 Z M0 4.94443 L-0.5 4.94443 L-0.5 8.24072 L0 8.24072 L0.5 8.24072 L0.5 4.94443 L0 4.94443 Z M0 11.537 L-0.5 11.537 L-0.5 14.8333 L0 14.8333 L0.5 14.8333 L0.5 11.537 L0 11.537 Z M0 18.1296 L-0.5 18.1296 L-0.5 21.4259 L0 21.4259 L0.5 21.4259 L0.5 18.1296 L0 18.1296 Z M0 24.7221 L-0.5 24.7221 L-0.5 28.0184 L0 28.0184 L0.5 28.0184 L0.5 24.7221 L0 24.7221 Z M0 31.3147 L-0.5 31.3147 L-0.5 34.611 L0 34.611 L0.5 34.611 L0.5 31.3147 L0 31.3147 Z M0 37.9073 L-0.5 37.9073 L-0.5 41.2036 L0 41.2036 L0.5 41.2036 L0.5 37.9073 L0 37.9073 Z M0 44.4999 L-0.5 44.4999 L-0.5 47.7962 L0 47.7962 L0.5 47.7962 L0.5 44.4999 L0 44.4999 Z M0 51.0924 L-0.5 51.0924 L-0.5 54.3887 L0 54.3887 L0.5 54.3887 L0.5 51.0924 L0 51.0924 Z M0 57.685 L-0.5 57.685 L-0.5 60.9813 L0 60.9813 L0.5 60.9813 L0.5 57.685 L0 57.685 Z M0 64.2776 L-0.5 64.2776 L-0.5 67.5739 L0 67.5739 L0.5 67.5739 L0.5 64.2776 L0 64.2776 Z M0 70.8702 L-0.5 70.8702 L-0.5 74.1665 L0 74.1665 L0.5 74.1665 L0.5 70.8702 L0 70.8702 Z M0 77.4627 L-0.5 77.4627 L-0.5 80.759 L0 80.759 L0.5 80.759 L0.5 77.4627 L0 77.4627 Z M0 84.0553 L-0.5 84.0553 L-0.5 87.3516 L0 87.3516 L0.5 87.3516 L0.5 84.0553 L0 84.0553 Z M0 90.6479 L-0.5 90.6479 L-0.5 93.9442 L0 93.9442 L0.5 93.9442 L0.5 90.6479 L0 90.6479 Z M0 97.2405 L-0.5 97.2405 L-0.5 100.537 L0 100.537 L0.5 100.537 L0.5 97.2405 L0 97.2405 Z M0 103.833 L-0.5 103.833 L-0.5 107.129 L0 107.129 L0.5 107.129 L0.5 103.833 L0 103.833 Z M0 110.426 L-0.5 110.426 L-0.5 113.722 L0 113.722 L0.5 113.722 L0.5 110.426 L0 110.426 Z M0 117.018 L-0.5 117.018 L-0.5 120.314 L0 120.314 L0.5 120.314 L0.5 117.018 L0 117.018 Z M0 123.611 L-0.5 123.611 L-0.5 126.907 L0 126.907 L0.5 126.907 L0.5 123.611 L0 123.611 Z M0 130.203 L-0.5 130.203 L-0.5 133.5 L0 133.5 L0.5 133.5 L0.5 130.203 L0 130.203 Z M0 136.796 L-0.5 136.796 L-0.5 140.092 L0 140.092 L0.5 140.092 L0.5 136.796 L0 136.796 Z M0 143.388 L-0.5 143.388 L-0.5 146.685 L0 146.685 L0.5 146.685 L0.5 143.388 L0 143.388 Z M0 149.981 L-0.5 149.981 L-0.5 153.277 L0 153.277 L0.5 153.277 L0.5 149.981 L0 149.981 Z M0 156.574 L-0.5 156.574 L-0.5 159.87 L0 159.87 L0.5 159.87 L0.5 156.574 L0 156.574 Z M0 163.166 L-0.5 163.166 L-0.5 166.462 L0 166.462 L0.5 166.462 L0.5 163.166 L0 163.166 Z M0 169.759 L-0.5 169.759 L-0.5 173.055 L0 173.055 L0.5 173.055 L0.5 169.759 L0 169.759 Z M0 176.351 L-0.5 176.351 L-0.5 179.648 L0 179.648 L0.5 179.648 L0.5 176.351 L0 176.351 Z M0 182.944 L-0.5 182.944 L-0.5 186.24 L0 186.24 L0.5 186.24 L0.5 182.944 L0 182.944 Z M0 189.536 L-0.5 189.536 L-0.5 192.833 L0 192.833 L0.5 192.833 L0.5 189.536 L0 189.536 Z M0 196.129 L-0.5 196.129 L-0.5 199.425 L0 199.425 L0.5 199.425 L0.5 196.129 L0 196.129 Z M0 202.721 L-0.5 202.721 L-0.5 206.018 L0 206.018 L0.5 206.018 L0.5 202.721 L0 202.721 Z M0 209.314 L-0.5 209.314 L-0.5 212.61 L0 212.61 L0.5 212.61 L0.5 209.314 L0 209.314 Z M0 215.907 L-0.5 215.907 L-0.5 219.203 L0 219.203 L0.5 219.203 L0.5 215.907 L0 215.907 Z M0 222.499 L-0.5 222.499 L-0.5 225.795 L0 225.795 L0.5 225.795 L0.5 222.499 L0 222.499 Z M0 229.092 L-0.5 229.092 L-0.5 230.74 L0 230.74 L0.5 230.74 L0.5 229.092 L0 229.092 Z" fill="#ececee"/></svg>
            <div data-fu="bar" style={{ position: "absolute", left: "192.38px", top: "192.67px", width: "28.49px", height: "46.84px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "192.38px", top: "157.54px", width: "28.49px", height: "32.72px", borderRadius: "4.38px", background: "linear-gradient(180deg, #ff84b6 0%, #ff72ab 100%)", boxShadow: "inset 0 0 0 1px rgba(199, 89, 133, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "192.38px", top: "134.58px", width: "28.49px", height: "20.55px", borderRadius: "4.38px", background: "linear-gradient(180deg, #64a5fe 0%, #4d98fe 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 119, 198, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "269.98px", top: "8.77px", width: "1px", height: "230.74px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="230.74" viewBox="0 0 1 230.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 1.64814 L0 1.64814 L0.5 1.64814 L0.5 0 L0 0 Z M0 4.94443 L-0.5 4.94443 L-0.5 8.24072 L0 8.24072 L0.5 8.24072 L0.5 4.94443 L0 4.94443 Z M0 11.537 L-0.5 11.537 L-0.5 14.8333 L0 14.8333 L0.5 14.8333 L0.5 11.537 L0 11.537 Z M0 18.1296 L-0.5 18.1296 L-0.5 21.4259 L0 21.4259 L0.5 21.4259 L0.5 18.1296 L0 18.1296 Z M0 24.7221 L-0.5 24.7221 L-0.5 28.0184 L0 28.0184 L0.5 28.0184 L0.5 24.7221 L0 24.7221 Z M0 31.3147 L-0.5 31.3147 L-0.5 34.611 L0 34.611 L0.5 34.611 L0.5 31.3147 L0 31.3147 Z M0 37.9073 L-0.5 37.9073 L-0.5 41.2036 L0 41.2036 L0.5 41.2036 L0.5 37.9073 L0 37.9073 Z M0 44.4999 L-0.5 44.4999 L-0.5 47.7962 L0 47.7962 L0.5 47.7962 L0.5 44.4999 L0 44.4999 Z M0 51.0924 L-0.5 51.0924 L-0.5 54.3887 L0 54.3887 L0.5 54.3887 L0.5 51.0924 L0 51.0924 Z M0 57.685 L-0.5 57.685 L-0.5 60.9813 L0 60.9813 L0.5 60.9813 L0.5 57.685 L0 57.685 Z M0 64.2776 L-0.5 64.2776 L-0.5 67.5739 L0 67.5739 L0.5 67.5739 L0.5 64.2776 L0 64.2776 Z M0 70.8702 L-0.5 70.8702 L-0.5 74.1665 L0 74.1665 L0.5 74.1665 L0.5 70.8702 L0 70.8702 Z M0 77.4627 L-0.5 77.4627 L-0.5 80.759 L0 80.759 L0.5 80.759 L0.5 77.4627 L0 77.4627 Z M0 84.0553 L-0.5 84.0553 L-0.5 87.3516 L0 87.3516 L0.5 87.3516 L0.5 84.0553 L0 84.0553 Z M0 90.6479 L-0.5 90.6479 L-0.5 93.9442 L0 93.9442 L0.5 93.9442 L0.5 90.6479 L0 90.6479 Z M0 97.2405 L-0.5 97.2405 L-0.5 100.537 L0 100.537 L0.5 100.537 L0.5 97.2405 L0 97.2405 Z M0 103.833 L-0.5 103.833 L-0.5 107.129 L0 107.129 L0.5 107.129 L0.5 103.833 L0 103.833 Z M0 110.426 L-0.5 110.426 L-0.5 113.722 L0 113.722 L0.5 113.722 L0.5 110.426 L0 110.426 Z M0 117.018 L-0.5 117.018 L-0.5 120.314 L0 120.314 L0.5 120.314 L0.5 117.018 L0 117.018 Z M0 123.611 L-0.5 123.611 L-0.5 126.907 L0 126.907 L0.5 126.907 L0.5 123.611 L0 123.611 Z M0 130.203 L-0.5 130.203 L-0.5 133.5 L0 133.5 L0.5 133.5 L0.5 130.203 L0 130.203 Z M0 136.796 L-0.5 136.796 L-0.5 140.092 L0 140.092 L0.5 140.092 L0.5 136.796 L0 136.796 Z M0 143.388 L-0.5 143.388 L-0.5 146.685 L0 146.685 L0.5 146.685 L0.5 143.388 L0 143.388 Z M0 149.981 L-0.5 149.981 L-0.5 153.277 L0 153.277 L0.5 153.277 L0.5 149.981 L0 149.981 Z M0 156.574 L-0.5 156.574 L-0.5 159.87 L0 159.87 L0.5 159.87 L0.5 156.574 L0 156.574 Z M0 163.166 L-0.5 163.166 L-0.5 166.462 L0 166.462 L0.5 166.462 L0.5 163.166 L0 163.166 Z M0 169.759 L-0.5 169.759 L-0.5 173.055 L0 173.055 L0.5 173.055 L0.5 169.759 L0 169.759 Z M0 176.351 L-0.5 176.351 L-0.5 179.648 L0 179.648 L0.5 179.648 L0.5 176.351 L0 176.351 Z M0 182.944 L-0.5 182.944 L-0.5 186.24 L0 186.24 L0.5 186.24 L0.5 182.944 L0 182.944 Z M0 189.536 L-0.5 189.536 L-0.5 192.833 L0 192.833 L0.5 192.833 L0.5 189.536 L0 189.536 Z M0 196.129 L-0.5 196.129 L-0.5 199.425 L0 199.425 L0.5 199.425 L0.5 196.129 L0 196.129 Z M0 202.721 L-0.5 202.721 L-0.5 206.018 L0 206.018 L0.5 206.018 L0.5 202.721 L0 202.721 Z M0 209.314 L-0.5 209.314 L-0.5 212.61 L0 212.61 L0.5 212.61 L0.5 209.314 L0 209.314 Z M0 215.907 L-0.5 215.907 L-0.5 219.203 L0 219.203 L0.5 219.203 L0.5 215.907 L0 215.907 Z M0 222.499 L-0.5 222.499 L-0.5 225.795 L0 225.795 L0.5 225.795 L0.5 222.499 L0 222.499 Z M0 229.092 L-0.5 229.092 L-0.5 230.74 L0 230.74 L0.5 230.74 L0.5 229.092 L0 229.092 Z" fill="#ececee"/></svg>
            <div data-fu="bar" style={{ position: "absolute", left: "255.74px", top: "189.47px", width: "28.49px", height: "50.04px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "255.74px", top: "153.1px", width: "28.49px", height: "33.96px", borderRadius: "4.38px", background: "linear-gradient(180deg, #ff84b6 0%, #ff72ab 100%)", boxShadow: "inset 0 0 0 1px rgba(199, 89, 133, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "255.74px", top: "128.52px", width: "28.49px", height: "22.16px", borderRadius: "4.38px", background: "linear-gradient(180deg, #64a5fe 0%, #4d98fe 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 119, 198, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "333.35px", top: "8.77px", width: "1px", height: "230.74px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="230.74" viewBox="0 0 1 230.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 1.64814 L0 1.64814 L0.5 1.64814 L0.5 0 L0 0 Z M0 4.94443 L-0.5 4.94443 L-0.5 8.24072 L0 8.24072 L0.5 8.24072 L0.5 4.94443 L0 4.94443 Z M0 11.537 L-0.5 11.537 L-0.5 14.8333 L0 14.8333 L0.5 14.8333 L0.5 11.537 L0 11.537 Z M0 18.1296 L-0.5 18.1296 L-0.5 21.4259 L0 21.4259 L0.5 21.4259 L0.5 18.1296 L0 18.1296 Z M0 24.7221 L-0.5 24.7221 L-0.5 28.0184 L0 28.0184 L0.5 28.0184 L0.5 24.7221 L0 24.7221 Z M0 31.3147 L-0.5 31.3147 L-0.5 34.611 L0 34.611 L0.5 34.611 L0.5 31.3147 L0 31.3147 Z M0 37.9073 L-0.5 37.9073 L-0.5 41.2036 L0 41.2036 L0.5 41.2036 L0.5 37.9073 L0 37.9073 Z M0 44.4999 L-0.5 44.4999 L-0.5 47.7962 L0 47.7962 L0.5 47.7962 L0.5 44.4999 L0 44.4999 Z M0 51.0924 L-0.5 51.0924 L-0.5 54.3887 L0 54.3887 L0.5 54.3887 L0.5 51.0924 L0 51.0924 Z M0 57.685 L-0.5 57.685 L-0.5 60.9813 L0 60.9813 L0.5 60.9813 L0.5 57.685 L0 57.685 Z M0 64.2776 L-0.5 64.2776 L-0.5 67.5739 L0 67.5739 L0.5 67.5739 L0.5 64.2776 L0 64.2776 Z M0 70.8702 L-0.5 70.8702 L-0.5 74.1665 L0 74.1665 L0.5 74.1665 L0.5 70.8702 L0 70.8702 Z M0 77.4627 L-0.5 77.4627 L-0.5 80.759 L0 80.759 L0.5 80.759 L0.5 77.4627 L0 77.4627 Z M0 84.0553 L-0.5 84.0553 L-0.5 87.3516 L0 87.3516 L0.5 87.3516 L0.5 84.0553 L0 84.0553 Z M0 90.6479 L-0.5 90.6479 L-0.5 93.9442 L0 93.9442 L0.5 93.9442 L0.5 90.6479 L0 90.6479 Z M0 97.2405 L-0.5 97.2405 L-0.5 100.537 L0 100.537 L0.5 100.537 L0.5 97.2405 L0 97.2405 Z M0 103.833 L-0.5 103.833 L-0.5 107.129 L0 107.129 L0.5 107.129 L0.5 103.833 L0 103.833 Z M0 110.426 L-0.5 110.426 L-0.5 113.722 L0 113.722 L0.5 113.722 L0.5 110.426 L0 110.426 Z M0 117.018 L-0.5 117.018 L-0.5 120.314 L0 120.314 L0.5 120.314 L0.5 117.018 L0 117.018 Z M0 123.611 L-0.5 123.611 L-0.5 126.907 L0 126.907 L0.5 126.907 L0.5 123.611 L0 123.611 Z M0 130.203 L-0.5 130.203 L-0.5 133.5 L0 133.5 L0.5 133.5 L0.5 130.203 L0 130.203 Z M0 136.796 L-0.5 136.796 L-0.5 140.092 L0 140.092 L0.5 140.092 L0.5 136.796 L0 136.796 Z M0 143.388 L-0.5 143.388 L-0.5 146.685 L0 146.685 L0.5 146.685 L0.5 143.388 L0 143.388 Z M0 149.981 L-0.5 149.981 L-0.5 153.277 L0 153.277 L0.5 153.277 L0.5 149.981 L0 149.981 Z M0 156.574 L-0.5 156.574 L-0.5 159.87 L0 159.87 L0.5 159.87 L0.5 156.574 L0 156.574 Z M0 163.166 L-0.5 163.166 L-0.5 166.462 L0 166.462 L0.5 166.462 L0.5 163.166 L0 163.166 Z M0 169.759 L-0.5 169.759 L-0.5 173.055 L0 173.055 L0.5 173.055 L0.5 169.759 L0 169.759 Z M0 176.351 L-0.5 176.351 L-0.5 179.648 L0 179.648 L0.5 179.648 L0.5 176.351 L0 176.351 Z M0 182.944 L-0.5 182.944 L-0.5 186.24 L0 186.24 L0.5 186.24 L0.5 182.944 L0 182.944 Z M0 189.536 L-0.5 189.536 L-0.5 192.833 L0 192.833 L0.5 192.833 L0.5 189.536 L0 189.536 Z M0 196.129 L-0.5 196.129 L-0.5 199.425 L0 199.425 L0.5 199.425 L0.5 196.129 L0 196.129 Z M0 202.721 L-0.5 202.721 L-0.5 206.018 L0 206.018 L0.5 206.018 L0.5 202.721 L0 202.721 Z M0 209.314 L-0.5 209.314 L-0.5 212.61 L0 212.61 L0.5 212.61 L0.5 209.314 L0 209.314 Z M0 215.907 L-0.5 215.907 L-0.5 219.203 L0 219.203 L0.5 219.203 L0.5 215.907 L0 215.907 Z M0 222.499 L-0.5 222.499 L-0.5 225.795 L0 225.795 L0.5 225.795 L0.5 222.499 L0 222.499 Z M0 229.092 L-0.5 229.092 L-0.5 230.74 L0 230.74 L0.5 230.74 L0.5 229.092 L0 229.092 Z" fill="#ececee"/></svg>
            <div data-fu="bar" style={{ position: "absolute", left: "319.1px", top: "184.82px", width: "28.49px", height: "54.69px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "319.1px", top: "147.27px", width: "28.49px", height: "35.14px", borderRadius: "4.38px", background: "linear-gradient(180deg, #ff84b6 0%, #ff72ab 100%)", boxShadow: "inset 0 0 0 1px rgba(199, 89, 133, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "319.1px", top: "120.42px", width: "28.49px", height: "24.44px", borderRadius: "4.38px", background: "linear-gradient(180deg, #64a5fe 0%, #4d98fe 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 119, 198, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "396.71px", top: "8.77px", width: "1px", height: "230.74px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="230.74" viewBox="0 0 1 230.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 1.64814 L0 1.64814 L0.5 1.64814 L0.5 0 L0 0 Z M0 4.94443 L-0.5 4.94443 L-0.5 8.24072 L0 8.24072 L0.5 8.24072 L0.5 4.94443 L0 4.94443 Z M0 11.537 L-0.5 11.537 L-0.5 14.8333 L0 14.8333 L0.5 14.8333 L0.5 11.537 L0 11.537 Z M0 18.1296 L-0.5 18.1296 L-0.5 21.4259 L0 21.4259 L0.5 21.4259 L0.5 18.1296 L0 18.1296 Z M0 24.7221 L-0.5 24.7221 L-0.5 28.0184 L0 28.0184 L0.5 28.0184 L0.5 24.7221 L0 24.7221 Z M0 31.3147 L-0.5 31.3147 L-0.5 34.611 L0 34.611 L0.5 34.611 L0.5 31.3147 L0 31.3147 Z M0 37.9073 L-0.5 37.9073 L-0.5 41.2036 L0 41.2036 L0.5 41.2036 L0.5 37.9073 L0 37.9073 Z M0 44.4999 L-0.5 44.4999 L-0.5 47.7962 L0 47.7962 L0.5 47.7962 L0.5 44.4999 L0 44.4999 Z M0 51.0924 L-0.5 51.0924 L-0.5 54.3887 L0 54.3887 L0.5 54.3887 L0.5 51.0924 L0 51.0924 Z M0 57.685 L-0.5 57.685 L-0.5 60.9813 L0 60.9813 L0.5 60.9813 L0.5 57.685 L0 57.685 Z M0 64.2776 L-0.5 64.2776 L-0.5 67.5739 L0 67.5739 L0.5 67.5739 L0.5 64.2776 L0 64.2776 Z M0 70.8702 L-0.5 70.8702 L-0.5 74.1665 L0 74.1665 L0.5 74.1665 L0.5 70.8702 L0 70.8702 Z M0 77.4627 L-0.5 77.4627 L-0.5 80.759 L0 80.759 L0.5 80.759 L0.5 77.4627 L0 77.4627 Z M0 84.0553 L-0.5 84.0553 L-0.5 87.3516 L0 87.3516 L0.5 87.3516 L0.5 84.0553 L0 84.0553 Z M0 90.6479 L-0.5 90.6479 L-0.5 93.9442 L0 93.9442 L0.5 93.9442 L0.5 90.6479 L0 90.6479 Z M0 97.2405 L-0.5 97.2405 L-0.5 100.537 L0 100.537 L0.5 100.537 L0.5 97.2405 L0 97.2405 Z M0 103.833 L-0.5 103.833 L-0.5 107.129 L0 107.129 L0.5 107.129 L0.5 103.833 L0 103.833 Z M0 110.426 L-0.5 110.426 L-0.5 113.722 L0 113.722 L0.5 113.722 L0.5 110.426 L0 110.426 Z M0 117.018 L-0.5 117.018 L-0.5 120.314 L0 120.314 L0.5 120.314 L0.5 117.018 L0 117.018 Z M0 123.611 L-0.5 123.611 L-0.5 126.907 L0 126.907 L0.5 126.907 L0.5 123.611 L0 123.611 Z M0 130.203 L-0.5 130.203 L-0.5 133.5 L0 133.5 L0.5 133.5 L0.5 130.203 L0 130.203 Z M0 136.796 L-0.5 136.796 L-0.5 140.092 L0 140.092 L0.5 140.092 L0.5 136.796 L0 136.796 Z M0 143.388 L-0.5 143.388 L-0.5 146.685 L0 146.685 L0.5 146.685 L0.5 143.388 L0 143.388 Z M0 149.981 L-0.5 149.981 L-0.5 153.277 L0 153.277 L0.5 153.277 L0.5 149.981 L0 149.981 Z M0 156.574 L-0.5 156.574 L-0.5 159.87 L0 159.87 L0.5 159.87 L0.5 156.574 L0 156.574 Z M0 163.166 L-0.5 163.166 L-0.5 166.462 L0 166.462 L0.5 166.462 L0.5 163.166 L0 163.166 Z M0 169.759 L-0.5 169.759 L-0.5 173.055 L0 173.055 L0.5 173.055 L0.5 169.759 L0 169.759 Z M0 176.351 L-0.5 176.351 L-0.5 179.648 L0 179.648 L0.5 179.648 L0.5 176.351 L0 176.351 Z M0 182.944 L-0.5 182.944 L-0.5 186.24 L0 186.24 L0.5 186.24 L0.5 182.944 L0 182.944 Z M0 189.536 L-0.5 189.536 L-0.5 192.833 L0 192.833 L0.5 192.833 L0.5 189.536 L0 189.536 Z M0 196.129 L-0.5 196.129 L-0.5 199.425 L0 199.425 L0.5 199.425 L0.5 196.129 L0 196.129 Z M0 202.721 L-0.5 202.721 L-0.5 206.018 L0 206.018 L0.5 206.018 L0.5 202.721 L0 202.721 Z M0 209.314 L-0.5 209.314 L-0.5 212.61 L0 212.61 L0.5 212.61 L0.5 209.314 L0 209.314 Z M0 215.907 L-0.5 215.907 L-0.5 219.203 L0 219.203 L0.5 219.203 L0.5 215.907 L0 215.907 Z M0 222.499 L-0.5 222.499 L-0.5 225.795 L0 225.795 L0.5 225.795 L0.5 222.499 L0 222.499 Z M0 229.092 L-0.5 229.092 L-0.5 230.74 L0 230.74 L0.5 230.74 L0.5 229.092 L0 229.092 Z" fill="#ececee"/></svg>
            <div data-fu="bar" style={{ position: "absolute", left: "382.47px", top: "189.27px", width: "28.49px", height: "50.24px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "382.47px", top: "150.65px", width: "28.49px", height: "36.21px", borderRadius: "4.38px", background: "linear-gradient(180deg, #ff84b6 0%, #ff72ab 100%)", boxShadow: "inset 0 0 0 1px rgba(199, 89, 133, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "382.47px", top: "122.84px", width: "28.49px", height: "25.39px", borderRadius: "4.38px", background: "linear-gradient(180deg, #64a5fe 0%, #4d98fe 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 119, 198, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "460.08px", top: "8.77px", width: "1px", height: "230.74px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="230.74" viewBox="0 0 1 230.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 1.64814 L0 1.64814 L0.5 1.64814 L0.5 0 L0 0 Z M0 4.94443 L-0.5 4.94443 L-0.5 8.24072 L0 8.24072 L0.5 8.24072 L0.5 4.94443 L0 4.94443 Z M0 11.537 L-0.5 11.537 L-0.5 14.8333 L0 14.8333 L0.5 14.8333 L0.5 11.537 L0 11.537 Z M0 18.1296 L-0.5 18.1296 L-0.5 21.4259 L0 21.4259 L0.5 21.4259 L0.5 18.1296 L0 18.1296 Z M0 24.7221 L-0.5 24.7221 L-0.5 28.0184 L0 28.0184 L0.5 28.0184 L0.5 24.7221 L0 24.7221 Z M0 31.3147 L-0.5 31.3147 L-0.5 34.611 L0 34.611 L0.5 34.611 L0.5 31.3147 L0 31.3147 Z M0 37.9073 L-0.5 37.9073 L-0.5 41.2036 L0 41.2036 L0.5 41.2036 L0.5 37.9073 L0 37.9073 Z M0 44.4999 L-0.5 44.4999 L-0.5 47.7962 L0 47.7962 L0.5 47.7962 L0.5 44.4999 L0 44.4999 Z M0 51.0924 L-0.5 51.0924 L-0.5 54.3887 L0 54.3887 L0.5 54.3887 L0.5 51.0924 L0 51.0924 Z M0 57.685 L-0.5 57.685 L-0.5 60.9813 L0 60.9813 L0.5 60.9813 L0.5 57.685 L0 57.685 Z M0 64.2776 L-0.5 64.2776 L-0.5 67.5739 L0 67.5739 L0.5 67.5739 L0.5 64.2776 L0 64.2776 Z M0 70.8702 L-0.5 70.8702 L-0.5 74.1665 L0 74.1665 L0.5 74.1665 L0.5 70.8702 L0 70.8702 Z M0 77.4627 L-0.5 77.4627 L-0.5 80.759 L0 80.759 L0.5 80.759 L0.5 77.4627 L0 77.4627 Z M0 84.0553 L-0.5 84.0553 L-0.5 87.3516 L0 87.3516 L0.5 87.3516 L0.5 84.0553 L0 84.0553 Z M0 90.6479 L-0.5 90.6479 L-0.5 93.9442 L0 93.9442 L0.5 93.9442 L0.5 90.6479 L0 90.6479 Z M0 97.2405 L-0.5 97.2405 L-0.5 100.537 L0 100.537 L0.5 100.537 L0.5 97.2405 L0 97.2405 Z M0 103.833 L-0.5 103.833 L-0.5 107.129 L0 107.129 L0.5 107.129 L0.5 103.833 L0 103.833 Z M0 110.426 L-0.5 110.426 L-0.5 113.722 L0 113.722 L0.5 113.722 L0.5 110.426 L0 110.426 Z M0 117.018 L-0.5 117.018 L-0.5 120.314 L0 120.314 L0.5 120.314 L0.5 117.018 L0 117.018 Z M0 123.611 L-0.5 123.611 L-0.5 126.907 L0 126.907 L0.5 126.907 L0.5 123.611 L0 123.611 Z M0 130.203 L-0.5 130.203 L-0.5 133.5 L0 133.5 L0.5 133.5 L0.5 130.203 L0 130.203 Z M0 136.796 L-0.5 136.796 L-0.5 140.092 L0 140.092 L0.5 140.092 L0.5 136.796 L0 136.796 Z M0 143.388 L-0.5 143.388 L-0.5 146.685 L0 146.685 L0.5 146.685 L0.5 143.388 L0 143.388 Z M0 149.981 L-0.5 149.981 L-0.5 153.277 L0 153.277 L0.5 153.277 L0.5 149.981 L0 149.981 Z M0 156.574 L-0.5 156.574 L-0.5 159.87 L0 159.87 L0.5 159.87 L0.5 156.574 L0 156.574 Z M0 163.166 L-0.5 163.166 L-0.5 166.462 L0 166.462 L0.5 166.462 L0.5 163.166 L0 163.166 Z M0 169.759 L-0.5 169.759 L-0.5 173.055 L0 173.055 L0.5 173.055 L0.5 169.759 L0 169.759 Z M0 176.351 L-0.5 176.351 L-0.5 179.648 L0 179.648 L0.5 179.648 L0.5 176.351 L0 176.351 Z M0 182.944 L-0.5 182.944 L-0.5 186.24 L0 186.24 L0.5 186.24 L0.5 182.944 L0 182.944 Z M0 189.536 L-0.5 189.536 L-0.5 192.833 L0 192.833 L0.5 192.833 L0.5 189.536 L0 189.536 Z M0 196.129 L-0.5 196.129 L-0.5 199.425 L0 199.425 L0.5 199.425 L0.5 196.129 L0 196.129 Z M0 202.721 L-0.5 202.721 L-0.5 206.018 L0 206.018 L0.5 206.018 L0.5 202.721 L0 202.721 Z M0 209.314 L-0.5 209.314 L-0.5 212.61 L0 212.61 L0.5 212.61 L0.5 209.314 L0 209.314 Z M0 215.907 L-0.5 215.907 L-0.5 219.203 L0 219.203 L0.5 219.203 L0.5 215.907 L0 215.907 Z M0 222.499 L-0.5 222.499 L-0.5 225.795 L0 225.795 L0.5 225.795 L0.5 222.499 L0 222.499 Z M0 229.092 L-0.5 229.092 L-0.5 230.74 L0 230.74 L0.5 230.74 L0.5 229.092 L0 229.092 Z" fill="#ececee"/></svg>
            <div data-fu="bar" style={{ position: "absolute", left: "445.83px", top: "191.11px", width: "28.49px", height: "48.4px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "445.83px", top: "151.6px", width: "28.49px", height: "37.1px", borderRadius: "4.38px", background: "linear-gradient(180deg, #ff84b6 0%, #ff72ab 100%)", boxShadow: "inset 0 0 0 1px rgba(199, 89, 133, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "445.83px", top: "125.12px", width: "28.49px", height: "24.07px", borderRadius: "4.38px", background: "linear-gradient(180deg, #64a5fe 0%, #4d98fe 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 119, 198, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "523.44px", top: "8.77px", width: "1px", height: "230.74px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="230.74" viewBox="0 0 1 230.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 1.64814 L0 1.64814 L0.5 1.64814 L0.5 0 L0 0 Z M0 4.94443 L-0.5 4.94443 L-0.5 8.24072 L0 8.24072 L0.5 8.24072 L0.5 4.94443 L0 4.94443 Z M0 11.537 L-0.5 11.537 L-0.5 14.8333 L0 14.8333 L0.5 14.8333 L0.5 11.537 L0 11.537 Z M0 18.1296 L-0.5 18.1296 L-0.5 21.4259 L0 21.4259 L0.5 21.4259 L0.5 18.1296 L0 18.1296 Z M0 24.7221 L-0.5 24.7221 L-0.5 28.0184 L0 28.0184 L0.5 28.0184 L0.5 24.7221 L0 24.7221 Z M0 31.3147 L-0.5 31.3147 L-0.5 34.611 L0 34.611 L0.5 34.611 L0.5 31.3147 L0 31.3147 Z M0 37.9073 L-0.5 37.9073 L-0.5 41.2036 L0 41.2036 L0.5 41.2036 L0.5 37.9073 L0 37.9073 Z M0 44.4999 L-0.5 44.4999 L-0.5 47.7962 L0 47.7962 L0.5 47.7962 L0.5 44.4999 L0 44.4999 Z M0 51.0924 L-0.5 51.0924 L-0.5 54.3887 L0 54.3887 L0.5 54.3887 L0.5 51.0924 L0 51.0924 Z M0 57.685 L-0.5 57.685 L-0.5 60.9813 L0 60.9813 L0.5 60.9813 L0.5 57.685 L0 57.685 Z M0 64.2776 L-0.5 64.2776 L-0.5 67.5739 L0 67.5739 L0.5 67.5739 L0.5 64.2776 L0 64.2776 Z M0 70.8702 L-0.5 70.8702 L-0.5 74.1665 L0 74.1665 L0.5 74.1665 L0.5 70.8702 L0 70.8702 Z M0 77.4627 L-0.5 77.4627 L-0.5 80.759 L0 80.759 L0.5 80.759 L0.5 77.4627 L0 77.4627 Z M0 84.0553 L-0.5 84.0553 L-0.5 87.3516 L0 87.3516 L0.5 87.3516 L0.5 84.0553 L0 84.0553 Z M0 90.6479 L-0.5 90.6479 L-0.5 93.9442 L0 93.9442 L0.5 93.9442 L0.5 90.6479 L0 90.6479 Z M0 97.2405 L-0.5 97.2405 L-0.5 100.537 L0 100.537 L0.5 100.537 L0.5 97.2405 L0 97.2405 Z M0 103.833 L-0.5 103.833 L-0.5 107.129 L0 107.129 L0.5 107.129 L0.5 103.833 L0 103.833 Z M0 110.426 L-0.5 110.426 L-0.5 113.722 L0 113.722 L0.5 113.722 L0.5 110.426 L0 110.426 Z M0 117.018 L-0.5 117.018 L-0.5 120.314 L0 120.314 L0.5 120.314 L0.5 117.018 L0 117.018 Z M0 123.611 L-0.5 123.611 L-0.5 126.907 L0 126.907 L0.5 126.907 L0.5 123.611 L0 123.611 Z M0 130.203 L-0.5 130.203 L-0.5 133.5 L0 133.5 L0.5 133.5 L0.5 130.203 L0 130.203 Z M0 136.796 L-0.5 136.796 L-0.5 140.092 L0 140.092 L0.5 140.092 L0.5 136.796 L0 136.796 Z M0 143.388 L-0.5 143.388 L-0.5 146.685 L0 146.685 L0.5 146.685 L0.5 143.388 L0 143.388 Z M0 149.981 L-0.5 149.981 L-0.5 153.277 L0 153.277 L0.5 153.277 L0.5 149.981 L0 149.981 Z M0 156.574 L-0.5 156.574 L-0.5 159.87 L0 159.87 L0.5 159.87 L0.5 156.574 L0 156.574 Z M0 163.166 L-0.5 163.166 L-0.5 166.462 L0 166.462 L0.5 166.462 L0.5 163.166 L0 163.166 Z M0 169.759 L-0.5 169.759 L-0.5 173.055 L0 173.055 L0.5 173.055 L0.5 169.759 L0 169.759 Z M0 176.351 L-0.5 176.351 L-0.5 179.648 L0 179.648 L0.5 179.648 L0.5 176.351 L0 176.351 Z M0 182.944 L-0.5 182.944 L-0.5 186.24 L0 186.24 L0.5 186.24 L0.5 182.944 L0 182.944 Z M0 189.536 L-0.5 189.536 L-0.5 192.833 L0 192.833 L0.5 192.833 L0.5 189.536 L0 189.536 Z M0 196.129 L-0.5 196.129 L-0.5 199.425 L0 199.425 L0.5 199.425 L0.5 196.129 L0 196.129 Z M0 202.721 L-0.5 202.721 L-0.5 206.018 L0 206.018 L0.5 206.018 L0.5 202.721 L0 202.721 Z M0 209.314 L-0.5 209.314 L-0.5 212.61 L0 212.61 L0.5 212.61 L0.5 209.314 L0 209.314 Z M0 215.907 L-0.5 215.907 L-0.5 219.203 L0 219.203 L0.5 219.203 L0.5 215.907 L0 215.907 Z M0 222.499 L-0.5 222.499 L-0.5 225.795 L0 225.795 L0.5 225.795 L0.5 222.499 L0 222.499 Z M0 229.092 L-0.5 229.092 L-0.5 230.74 L0 230.74 L0.5 230.74 L0.5 229.092 L0 229.092 Z" fill="#ececee"/></svg>
            <div data-fu="bar" style={{ position: "absolute", left: "509.2px", top: "190.54px", width: "28.49px", height: "48.97px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "509.2px", top: "149.72px", width: "28.49px", height: "38.4px", borderRadius: "4.38px", background: "linear-gradient(180deg, #ff84b6 0%, #ff72ab 100%)", boxShadow: "inset 0 0 0 1px rgba(199, 89, 133, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "509.2px", top: "123.56px", width: "28.49px", height: "23.75px", borderRadius: "4.38px", background: "linear-gradient(180deg, #64a5fe 0%, #4d98fe 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 119, 198, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "586.81px", top: "8.77px", width: "1px", height: "230.74px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="230.74" viewBox="0 0 1 230.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 1.64814 L0 1.64814 L0.5 1.64814 L0.5 0 L0 0 Z M0 4.94443 L-0.5 4.94443 L-0.5 8.24072 L0 8.24072 L0.5 8.24072 L0.5 4.94443 L0 4.94443 Z M0 11.537 L-0.5 11.537 L-0.5 14.8333 L0 14.8333 L0.5 14.8333 L0.5 11.537 L0 11.537 Z M0 18.1296 L-0.5 18.1296 L-0.5 21.4259 L0 21.4259 L0.5 21.4259 L0.5 18.1296 L0 18.1296 Z M0 24.7221 L-0.5 24.7221 L-0.5 28.0184 L0 28.0184 L0.5 28.0184 L0.5 24.7221 L0 24.7221 Z M0 31.3147 L-0.5 31.3147 L-0.5 34.611 L0 34.611 L0.5 34.611 L0.5 31.3147 L0 31.3147 Z M0 37.9073 L-0.5 37.9073 L-0.5 41.2036 L0 41.2036 L0.5 41.2036 L0.5 37.9073 L0 37.9073 Z M0 44.4999 L-0.5 44.4999 L-0.5 47.7962 L0 47.7962 L0.5 47.7962 L0.5 44.4999 L0 44.4999 Z M0 51.0924 L-0.5 51.0924 L-0.5 54.3887 L0 54.3887 L0.5 54.3887 L0.5 51.0924 L0 51.0924 Z M0 57.685 L-0.5 57.685 L-0.5 60.9813 L0 60.9813 L0.5 60.9813 L0.5 57.685 L0 57.685 Z M0 64.2776 L-0.5 64.2776 L-0.5 67.5739 L0 67.5739 L0.5 67.5739 L0.5 64.2776 L0 64.2776 Z M0 70.8702 L-0.5 70.8702 L-0.5 74.1665 L0 74.1665 L0.5 74.1665 L0.5 70.8702 L0 70.8702 Z M0 77.4627 L-0.5 77.4627 L-0.5 80.759 L0 80.759 L0.5 80.759 L0.5 77.4627 L0 77.4627 Z M0 84.0553 L-0.5 84.0553 L-0.5 87.3516 L0 87.3516 L0.5 87.3516 L0.5 84.0553 L0 84.0553 Z M0 90.6479 L-0.5 90.6479 L-0.5 93.9442 L0 93.9442 L0.5 93.9442 L0.5 90.6479 L0 90.6479 Z M0 97.2405 L-0.5 97.2405 L-0.5 100.537 L0 100.537 L0.5 100.537 L0.5 97.2405 L0 97.2405 Z M0 103.833 L-0.5 103.833 L-0.5 107.129 L0 107.129 L0.5 107.129 L0.5 103.833 L0 103.833 Z M0 110.426 L-0.5 110.426 L-0.5 113.722 L0 113.722 L0.5 113.722 L0.5 110.426 L0 110.426 Z M0 117.018 L-0.5 117.018 L-0.5 120.314 L0 120.314 L0.5 120.314 L0.5 117.018 L0 117.018 Z M0 123.611 L-0.5 123.611 L-0.5 126.907 L0 126.907 L0.5 126.907 L0.5 123.611 L0 123.611 Z M0 130.203 L-0.5 130.203 L-0.5 133.5 L0 133.5 L0.5 133.5 L0.5 130.203 L0 130.203 Z M0 136.796 L-0.5 136.796 L-0.5 140.092 L0 140.092 L0.5 140.092 L0.5 136.796 L0 136.796 Z M0 143.388 L-0.5 143.388 L-0.5 146.685 L0 146.685 L0.5 146.685 L0.5 143.388 L0 143.388 Z M0 149.981 L-0.5 149.981 L-0.5 153.277 L0 153.277 L0.5 153.277 L0.5 149.981 L0 149.981 Z M0 156.574 L-0.5 156.574 L-0.5 159.87 L0 159.87 L0.5 159.87 L0.5 156.574 L0 156.574 Z M0 163.166 L-0.5 163.166 L-0.5 166.462 L0 166.462 L0.5 166.462 L0.5 163.166 L0 163.166 Z M0 169.759 L-0.5 169.759 L-0.5 173.055 L0 173.055 L0.5 173.055 L0.5 169.759 L0 169.759 Z M0 176.351 L-0.5 176.351 L-0.5 179.648 L0 179.648 L0.5 179.648 L0.5 176.351 L0 176.351 Z M0 182.944 L-0.5 182.944 L-0.5 186.24 L0 186.24 L0.5 186.24 L0.5 182.944 L0 182.944 Z M0 189.536 L-0.5 189.536 L-0.5 192.833 L0 192.833 L0.5 192.833 L0.5 189.536 L0 189.536 Z M0 196.129 L-0.5 196.129 L-0.5 199.425 L0 199.425 L0.5 199.425 L0.5 196.129 L0 196.129 Z M0 202.721 L-0.5 202.721 L-0.5 206.018 L0 206.018 L0.5 206.018 L0.5 202.721 L0 202.721 Z M0 209.314 L-0.5 209.314 L-0.5 212.61 L0 212.61 L0.5 212.61 L0.5 209.314 L0 209.314 Z M0 215.907 L-0.5 215.907 L-0.5 219.203 L0 219.203 L0.5 219.203 L0.5 215.907 L0 215.907 Z M0 222.499 L-0.5 222.499 L-0.5 225.795 L0 225.795 L0.5 225.795 L0.5 222.499 L0 222.499 Z M0 229.092 L-0.5 229.092 L-0.5 230.74 L0 230.74 L0.5 230.74 L0.5 229.092 L0 229.092 Z" fill="#ececee"/></svg>
            <div data-fu="bar" style={{ position: "absolute", left: "572.56px", top: "188.63px", width: "28.49px", height: "50.88px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "572.56px", top: "146.18px", width: "28.49px", height: "40.05px", borderRadius: "4.38px", background: "linear-gradient(180deg, #ff84b6 0%, #ff72ab 100%)", boxShadow: "inset 0 0 0 1px rgba(199, 89, 133, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "572.56px", top: "118.83px", width: "28.49px", height: "24.93px", borderRadius: "4.38px", background: "linear-gradient(180deg, #64a5fe 0%, #4d98fe 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 119, 198, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "650.17px", top: "8.77px", width: "1px", height: "230.74px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="230.74" viewBox="0 0 1 230.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 1.64814 L0 1.64814 L0.5 1.64814 L0.5 0 L0 0 Z M0 4.94443 L-0.5 4.94443 L-0.5 8.24072 L0 8.24072 L0.5 8.24072 L0.5 4.94443 L0 4.94443 Z M0 11.537 L-0.5 11.537 L-0.5 14.8333 L0 14.8333 L0.5 14.8333 L0.5 11.537 L0 11.537 Z M0 18.1296 L-0.5 18.1296 L-0.5 21.4259 L0 21.4259 L0.5 21.4259 L0.5 18.1296 L0 18.1296 Z M0 24.7221 L-0.5 24.7221 L-0.5 28.0184 L0 28.0184 L0.5 28.0184 L0.5 24.7221 L0 24.7221 Z M0 31.3147 L-0.5 31.3147 L-0.5 34.611 L0 34.611 L0.5 34.611 L0.5 31.3147 L0 31.3147 Z M0 37.9073 L-0.5 37.9073 L-0.5 41.2036 L0 41.2036 L0.5 41.2036 L0.5 37.9073 L0 37.9073 Z M0 44.4999 L-0.5 44.4999 L-0.5 47.7962 L0 47.7962 L0.5 47.7962 L0.5 44.4999 L0 44.4999 Z M0 51.0924 L-0.5 51.0924 L-0.5 54.3887 L0 54.3887 L0.5 54.3887 L0.5 51.0924 L0 51.0924 Z M0 57.685 L-0.5 57.685 L-0.5 60.9813 L0 60.9813 L0.5 60.9813 L0.5 57.685 L0 57.685 Z M0 64.2776 L-0.5 64.2776 L-0.5 67.5739 L0 67.5739 L0.5 67.5739 L0.5 64.2776 L0 64.2776 Z M0 70.8702 L-0.5 70.8702 L-0.5 74.1665 L0 74.1665 L0.5 74.1665 L0.5 70.8702 L0 70.8702 Z M0 77.4627 L-0.5 77.4627 L-0.5 80.759 L0 80.759 L0.5 80.759 L0.5 77.4627 L0 77.4627 Z M0 84.0553 L-0.5 84.0553 L-0.5 87.3516 L0 87.3516 L0.5 87.3516 L0.5 84.0553 L0 84.0553 Z M0 90.6479 L-0.5 90.6479 L-0.5 93.9442 L0 93.9442 L0.5 93.9442 L0.5 90.6479 L0 90.6479 Z M0 97.2405 L-0.5 97.2405 L-0.5 100.537 L0 100.537 L0.5 100.537 L0.5 97.2405 L0 97.2405 Z M0 103.833 L-0.5 103.833 L-0.5 107.129 L0 107.129 L0.5 107.129 L0.5 103.833 L0 103.833 Z M0 110.426 L-0.5 110.426 L-0.5 113.722 L0 113.722 L0.5 113.722 L0.5 110.426 L0 110.426 Z M0 117.018 L-0.5 117.018 L-0.5 120.314 L0 120.314 L0.5 120.314 L0.5 117.018 L0 117.018 Z M0 123.611 L-0.5 123.611 L-0.5 126.907 L0 126.907 L0.5 126.907 L0.5 123.611 L0 123.611 Z M0 130.203 L-0.5 130.203 L-0.5 133.5 L0 133.5 L0.5 133.5 L0.5 130.203 L0 130.203 Z M0 136.796 L-0.5 136.796 L-0.5 140.092 L0 140.092 L0.5 140.092 L0.5 136.796 L0 136.796 Z M0 143.388 L-0.5 143.388 L-0.5 146.685 L0 146.685 L0.5 146.685 L0.5 143.388 L0 143.388 Z M0 149.981 L-0.5 149.981 L-0.5 153.277 L0 153.277 L0.5 153.277 L0.5 149.981 L0 149.981 Z M0 156.574 L-0.5 156.574 L-0.5 159.87 L0 159.87 L0.5 159.87 L0.5 156.574 L0 156.574 Z M0 163.166 L-0.5 163.166 L-0.5 166.462 L0 166.462 L0.5 166.462 L0.5 163.166 L0 163.166 Z M0 169.759 L-0.5 169.759 L-0.5 173.055 L0 173.055 L0.5 173.055 L0.5 169.759 L0 169.759 Z M0 176.351 L-0.5 176.351 L-0.5 179.648 L0 179.648 L0.5 179.648 L0.5 176.351 L0 176.351 Z M0 182.944 L-0.5 182.944 L-0.5 186.24 L0 186.24 L0.5 186.24 L0.5 182.944 L0 182.944 Z M0 189.536 L-0.5 189.536 L-0.5 192.833 L0 192.833 L0.5 192.833 L0.5 189.536 L0 189.536 Z M0 196.129 L-0.5 196.129 L-0.5 199.425 L0 199.425 L0.5 199.425 L0.5 196.129 L0 196.129 Z M0 202.721 L-0.5 202.721 L-0.5 206.018 L0 206.018 L0.5 206.018 L0.5 202.721 L0 202.721 Z M0 209.314 L-0.5 209.314 L-0.5 212.61 L0 212.61 L0.5 212.61 L0.5 209.314 L0 209.314 Z M0 215.907 L-0.5 215.907 L-0.5 219.203 L0 219.203 L0.5 219.203 L0.5 215.907 L0 215.907 Z M0 222.499 L-0.5 222.499 L-0.5 225.795 L0 225.795 L0.5 225.795 L0.5 222.499 L0 222.499 Z M0 229.092 L-0.5 229.092 L-0.5 230.74 L0 230.74 L0.5 230.74 L0.5 229.092 L0 229.092 Z" fill="#ececee"/></svg>
            <div data-fu="bar" style={{ position: "absolute", left: "635.92px", top: "170px", width: "28.49px", height: "69.51px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "635.92px", top: "125.73px", width: "28.49px", height: "41.86px", borderRadius: "4.38px", background: "linear-gradient(180deg, #ff84b6 0%, #ff72ab 100%)", boxShadow: "inset 0 0 0 1px rgba(199, 89, 133, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "635.92px", top: "94.29px", width: "28.49px", height: "29.03px", borderRadius: "4.38px", background: "linear-gradient(180deg, #64a5fe 0%, #4d98fe 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 119, 198, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "713.53px", top: "8.77px", width: "1px", height: "230.74px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="230.74" viewBox="0 0 1 230.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 1.64814 L0 1.64814 L0.5 1.64814 L0.5 0 L0 0 Z M0 4.94443 L-0.5 4.94443 L-0.5 8.24072 L0 8.24072 L0.5 8.24072 L0.5 4.94443 L0 4.94443 Z M0 11.537 L-0.5 11.537 L-0.5 14.8333 L0 14.8333 L0.5 14.8333 L0.5 11.537 L0 11.537 Z M0 18.1296 L-0.5 18.1296 L-0.5 21.4259 L0 21.4259 L0.5 21.4259 L0.5 18.1296 L0 18.1296 Z M0 24.7221 L-0.5 24.7221 L-0.5 28.0184 L0 28.0184 L0.5 28.0184 L0.5 24.7221 L0 24.7221 Z M0 31.3147 L-0.5 31.3147 L-0.5 34.611 L0 34.611 L0.5 34.611 L0.5 31.3147 L0 31.3147 Z M0 37.9073 L-0.5 37.9073 L-0.5 41.2036 L0 41.2036 L0.5 41.2036 L0.5 37.9073 L0 37.9073 Z M0 44.4999 L-0.5 44.4999 L-0.5 47.7962 L0 47.7962 L0.5 47.7962 L0.5 44.4999 L0 44.4999 Z M0 51.0924 L-0.5 51.0924 L-0.5 54.3887 L0 54.3887 L0.5 54.3887 L0.5 51.0924 L0 51.0924 Z M0 57.685 L-0.5 57.685 L-0.5 60.9813 L0 60.9813 L0.5 60.9813 L0.5 57.685 L0 57.685 Z M0 64.2776 L-0.5 64.2776 L-0.5 67.5739 L0 67.5739 L0.5 67.5739 L0.5 64.2776 L0 64.2776 Z M0 70.8702 L-0.5 70.8702 L-0.5 74.1665 L0 74.1665 L0.5 74.1665 L0.5 70.8702 L0 70.8702 Z M0 77.4627 L-0.5 77.4627 L-0.5 80.759 L0 80.759 L0.5 80.759 L0.5 77.4627 L0 77.4627 Z M0 84.0553 L-0.5 84.0553 L-0.5 87.3516 L0 87.3516 L0.5 87.3516 L0.5 84.0553 L0 84.0553 Z M0 90.6479 L-0.5 90.6479 L-0.5 93.9442 L0 93.9442 L0.5 93.9442 L0.5 90.6479 L0 90.6479 Z M0 97.2405 L-0.5 97.2405 L-0.5 100.537 L0 100.537 L0.5 100.537 L0.5 97.2405 L0 97.2405 Z M0 103.833 L-0.5 103.833 L-0.5 107.129 L0 107.129 L0.5 107.129 L0.5 103.833 L0 103.833 Z M0 110.426 L-0.5 110.426 L-0.5 113.722 L0 113.722 L0.5 113.722 L0.5 110.426 L0 110.426 Z M0 117.018 L-0.5 117.018 L-0.5 120.314 L0 120.314 L0.5 120.314 L0.5 117.018 L0 117.018 Z M0 123.611 L-0.5 123.611 L-0.5 126.907 L0 126.907 L0.5 126.907 L0.5 123.611 L0 123.611 Z M0 130.203 L-0.5 130.203 L-0.5 133.5 L0 133.5 L0.5 133.5 L0.5 130.203 L0 130.203 Z M0 136.796 L-0.5 136.796 L-0.5 140.092 L0 140.092 L0.5 140.092 L0.5 136.796 L0 136.796 Z M0 143.388 L-0.5 143.388 L-0.5 146.685 L0 146.685 L0.5 146.685 L0.5 143.388 L0 143.388 Z M0 149.981 L-0.5 149.981 L-0.5 153.277 L0 153.277 L0.5 153.277 L0.5 149.981 L0 149.981 Z M0 156.574 L-0.5 156.574 L-0.5 159.87 L0 159.87 L0.5 159.87 L0.5 156.574 L0 156.574 Z M0 163.166 L-0.5 163.166 L-0.5 166.462 L0 166.462 L0.5 166.462 L0.5 163.166 L0 163.166 Z M0 169.759 L-0.5 169.759 L-0.5 173.055 L0 173.055 L0.5 173.055 L0.5 169.759 L0 169.759 Z M0 176.351 L-0.5 176.351 L-0.5 179.648 L0 179.648 L0.5 179.648 L0.5 176.351 L0 176.351 Z M0 182.944 L-0.5 182.944 L-0.5 186.24 L0 186.24 L0.5 186.24 L0.5 182.944 L0 182.944 Z M0 189.536 L-0.5 189.536 L-0.5 192.833 L0 192.833 L0.5 192.833 L0.5 189.536 L0 189.536 Z M0 196.129 L-0.5 196.129 L-0.5 199.425 L0 199.425 L0.5 199.425 L0.5 196.129 L0 196.129 Z M0 202.721 L-0.5 202.721 L-0.5 206.018 L0 206.018 L0.5 206.018 L0.5 202.721 L0 202.721 Z M0 209.314 L-0.5 209.314 L-0.5 212.61 L0 212.61 L0.5 212.61 L0.5 209.314 L0 209.314 Z M0 215.907 L-0.5 215.907 L-0.5 219.203 L0 219.203 L0.5 219.203 L0.5 215.907 L0 215.907 Z M0 222.499 L-0.5 222.499 L-0.5 225.795 L0 225.795 L0.5 225.795 L0.5 222.499 L0 222.499 Z M0 229.092 L-0.5 229.092 L-0.5 230.74 L0 230.74 L0.5 230.74 L0.5 229.092 L0 229.092 Z" fill="#ececee"/></svg>
            <div data-fu="bar" style={{ position: "absolute", left: "699.29px", top: "156.73px", width: "28.49px", height: "82.78px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "699.29px", top: "110.87px", width: "28.49px", height: "43.45px", borderRadius: "4.38px", background: "linear-gradient(180deg, #ff84b6 0%, #ff72ab 100%)", boxShadow: "inset 0 0 0 1px rgba(199, 89, 133, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "699.29px", top: "75.97px", width: "28.49px", height: "32.49px", borderRadius: "4.38px", background: "linear-gradient(180deg, #64a5fe 0%, #4d98fe 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 119, 198, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "776.9px", top: "8.77px", width: "1px", height: "230.74px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="230.74" viewBox="0 0 1 230.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 1.64814 L0 1.64814 L0.5 1.64814 L0.5 0 L0 0 Z M0 4.94443 L-0.5 4.94443 L-0.5 8.24072 L0 8.24072 L0.5 8.24072 L0.5 4.94443 L0 4.94443 Z M0 11.537 L-0.5 11.537 L-0.5 14.8333 L0 14.8333 L0.5 14.8333 L0.5 11.537 L0 11.537 Z M0 18.1296 L-0.5 18.1296 L-0.5 21.4259 L0 21.4259 L0.5 21.4259 L0.5 18.1296 L0 18.1296 Z M0 24.7221 L-0.5 24.7221 L-0.5 28.0184 L0 28.0184 L0.5 28.0184 L0.5 24.7221 L0 24.7221 Z M0 31.3147 L-0.5 31.3147 L-0.5 34.611 L0 34.611 L0.5 34.611 L0.5 31.3147 L0 31.3147 Z M0 37.9073 L-0.5 37.9073 L-0.5 41.2036 L0 41.2036 L0.5 41.2036 L0.5 37.9073 L0 37.9073 Z M0 44.4999 L-0.5 44.4999 L-0.5 47.7962 L0 47.7962 L0.5 47.7962 L0.5 44.4999 L0 44.4999 Z M0 51.0924 L-0.5 51.0924 L-0.5 54.3887 L0 54.3887 L0.5 54.3887 L0.5 51.0924 L0 51.0924 Z M0 57.685 L-0.5 57.685 L-0.5 60.9813 L0 60.9813 L0.5 60.9813 L0.5 57.685 L0 57.685 Z M0 64.2776 L-0.5 64.2776 L-0.5 67.5739 L0 67.5739 L0.5 67.5739 L0.5 64.2776 L0 64.2776 Z M0 70.8702 L-0.5 70.8702 L-0.5 74.1665 L0 74.1665 L0.5 74.1665 L0.5 70.8702 L0 70.8702 Z M0 77.4627 L-0.5 77.4627 L-0.5 80.759 L0 80.759 L0.5 80.759 L0.5 77.4627 L0 77.4627 Z M0 84.0553 L-0.5 84.0553 L-0.5 87.3516 L0 87.3516 L0.5 87.3516 L0.5 84.0553 L0 84.0553 Z M0 90.6479 L-0.5 90.6479 L-0.5 93.9442 L0 93.9442 L0.5 93.9442 L0.5 90.6479 L0 90.6479 Z M0 97.2405 L-0.5 97.2405 L-0.5 100.537 L0 100.537 L0.5 100.537 L0.5 97.2405 L0 97.2405 Z M0 103.833 L-0.5 103.833 L-0.5 107.129 L0 107.129 L0.5 107.129 L0.5 103.833 L0 103.833 Z M0 110.426 L-0.5 110.426 L-0.5 113.722 L0 113.722 L0.5 113.722 L0.5 110.426 L0 110.426 Z M0 117.018 L-0.5 117.018 L-0.5 120.314 L0 120.314 L0.5 120.314 L0.5 117.018 L0 117.018 Z M0 123.611 L-0.5 123.611 L-0.5 126.907 L0 126.907 L0.5 126.907 L0.5 123.611 L0 123.611 Z M0 130.203 L-0.5 130.203 L-0.5 133.5 L0 133.5 L0.5 133.5 L0.5 130.203 L0 130.203 Z M0 136.796 L-0.5 136.796 L-0.5 140.092 L0 140.092 L0.5 140.092 L0.5 136.796 L0 136.796 Z M0 143.388 L-0.5 143.388 L-0.5 146.685 L0 146.685 L0.5 146.685 L0.5 143.388 L0 143.388 Z M0 149.981 L-0.5 149.981 L-0.5 153.277 L0 153.277 L0.5 153.277 L0.5 149.981 L0 149.981 Z M0 156.574 L-0.5 156.574 L-0.5 159.87 L0 159.87 L0.5 159.87 L0.5 156.574 L0 156.574 Z M0 163.166 L-0.5 163.166 L-0.5 166.462 L0 166.462 L0.5 166.462 L0.5 163.166 L0 163.166 Z M0 169.759 L-0.5 169.759 L-0.5 173.055 L0 173.055 L0.5 173.055 L0.5 169.759 L0 169.759 Z M0 176.351 L-0.5 176.351 L-0.5 179.648 L0 179.648 L0.5 179.648 L0.5 176.351 L0 176.351 Z M0 182.944 L-0.5 182.944 L-0.5 186.24 L0 186.24 L0.5 186.24 L0.5 182.944 L0 182.944 Z M0 189.536 L-0.5 189.536 L-0.5 192.833 L0 192.833 L0.5 192.833 L0.5 189.536 L0 189.536 Z M0 196.129 L-0.5 196.129 L-0.5 199.425 L0 199.425 L0.5 199.425 L0.5 196.129 L0 196.129 Z M0 202.721 L-0.5 202.721 L-0.5 206.018 L0 206.018 L0.5 206.018 L0.5 202.721 L0 202.721 Z M0 209.314 L-0.5 209.314 L-0.5 212.61 L0 212.61 L0.5 212.61 L0.5 209.314 L0 209.314 Z M0 215.907 L-0.5 215.907 L-0.5 219.203 L0 219.203 L0.5 219.203 L0.5 215.907 L0 215.907 Z M0 222.499 L-0.5 222.499 L-0.5 225.795 L0 225.795 L0.5 225.795 L0.5 222.499 L0 222.499 Z M0 229.092 L-0.5 229.092 L-0.5 230.74 L0 230.74 L0.5 230.74 L0.5 229.092 L0 229.092 Z" fill="#ececee"/></svg>
            <div style={{ position: "absolute", left: "762.65px", top: "207.21px", width: "28.49px", height: "32.3px", borderRadius: "4.38px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
              <svg style={{ position: "absolute", left: "-32.3px", top: "0px", width: "119.98px", height: "32.3px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="119.98" height="32.3" viewBox="0 0 119.98 32.3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 32.3 L0.540937 32.8409 L32.8409 0.540937 L32.3 0 L31.7591 -0.540937 L-0.540937 31.7591 L0 32.3 Z M5.48 32.3 L6.02094 32.8409 L38.3209 0.540937 L37.78 0 L37.2391 -0.540937 L4.93906 31.7591 L5.48 32.3 Z M10.96 32.3 L11.5009 32.8409 L43.8009 0.540937 L43.26 0 L42.7191 -0.540937 L10.4191 31.7591 L10.96 32.3 Z M16.44 32.3 L16.9809 32.8409 L49.2809 0.540937 L48.74 0 L48.1991 -0.540937 L15.8991 31.7591 L16.44 32.3 Z M21.92 32.3 L22.4609 32.8409 L54.7609 0.540937 L54.22 0 L53.6791 -0.540937 L21.3791 31.7591 L21.92 32.3 Z M27.4 32.3 L27.9409 32.8409 L60.2409 0.540937 L59.7 0 L59.1591 -0.540937 L26.8591 31.7591 L27.4 32.3 Z M32.88 32.3 L33.4209 32.8409 L65.7209 0.540937 L65.18 0 L64.6391 -0.540937 L32.3391 31.7591 L32.88 32.3 Z M38.36 32.3 L38.9009 32.8409 L71.2009 0.540937 L70.66 0 L70.1191 -0.540937 L37.8191 31.7591 L38.36 32.3 Z M43.84 32.3 L44.3809 32.8409 L76.6809 0.540937 L76.14 0 L75.5991 -0.540937 L43.2991 31.7591 L43.84 32.3 Z M49.32 32.3 L49.8609 32.8409 L82.1609 0.540937 L81.62 0 L81.0791 -0.540937 L48.7791 31.7591 L49.32 32.3 Z M54.8 32.3 L55.3409 32.8409 L87.6409 0.540937 L87.1 0 L86.5591 -0.540937 L54.2591 31.7591 L54.8 32.3 Z M60.28 32.3 L60.8209 32.8409 L93.1209 0.540937 L92.58 0 L92.0391 -0.540937 L59.7391 31.7591 L60.28 32.3 Z M65.76 32.3 L66.3009 32.8409 L98.6009 0.540937 L98.06 0 L97.5191 -0.540937 L65.2191 31.7591 L65.76 32.3 Z M71.24 32.3 L71.7809 32.8409 L104.081 0.540937 L103.54 0 L102.999 -0.540937 L70.6991 31.7591 L71.24 32.3 Z M76.72 32.3 L77.2609 32.8409 L109.561 0.540937 L109.02 0 L108.479 -0.540937 L76.1791 31.7591 L76.72 32.3 Z M82.2 32.3 L82.7409 32.8409 L115.041 0.540937 L114.5 0 L113.959 -0.540937 L81.6591 31.7591 L82.2 32.3 Z M87.68 32.3 L88.2209 32.8409 L120.521 0.540937 L119.98 0 L119.439 -0.540937 L87.1391 31.7591 L87.68 32.3 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
            </div>
            <div style={{ position: "absolute", left: "762.65px", top: "159.9px", width: "28.49px", height: "44.89px", borderRadius: "4.38px", background: "linear-gradient(180deg, #ffdae9 0%, #ffcfe2 100%)", boxShadow: "inset 0 0 0 1px rgba(242, 108, 162, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
              <svg data-fu="plot" style={{ position: "absolute", left: "-44.89px", top: "0px", width: "159.97px", height: "44.89px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="159.97" height="44.89" viewBox="0 0 159.97 44.89" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 44.89 L0.540937 45.4309 L45.4309 0.540937 L44.89 0 L44.3491 -0.540937 L-0.540937 44.3491 L0 44.89 Z M5.48 44.89 L6.02094 45.4309 L50.9109 0.540937 L50.37 0 L49.8291 -0.540937 L4.93906 44.3491 L5.48 44.89 Z M10.96 44.89 L11.5009 45.4309 L56.3909 0.540937 L55.85 0 L55.3091 -0.540937 L10.4191 44.3491 L10.96 44.89 Z M16.44 44.89 L16.9809 45.4309 L61.8709 0.540937 L61.33 0 L60.7891 -0.540937 L15.8991 44.3491 L16.44 44.89 Z M21.92 44.89 L22.4609 45.4309 L67.3509 0.540937 L66.81 0 L66.2691 -0.540937 L21.3791 44.3491 L21.92 44.89 Z M27.4 44.89 L27.9409 45.4309 L72.8309 0.540937 L72.29 0 L71.7491 -0.540937 L26.8591 44.3491 L27.4 44.89 Z M32.88 44.89 L33.4209 45.4309 L78.3109 0.540937 L77.77 0 L77.2291 -0.540937 L32.3391 44.3491 L32.88 44.89 Z M38.36 44.89 L38.9009 45.4309 L83.7909 0.540937 L83.25 0 L82.7091 -0.540937 L37.8191 44.3491 L38.36 44.89 Z M43.84 44.89 L44.3809 45.4309 L89.2709 0.540937 L88.73 0 L88.1891 -0.540937 L43.2991 44.3491 L43.84 44.89 Z M49.32 44.89 L49.8609 45.4309 L94.7509 0.540937 L94.21 0 L93.6691 -0.540937 L48.7791 44.3491 L49.32 44.89 Z M54.8 44.89 L55.3409 45.4309 L100.231 0.540937 L99.69 0 L99.1491 -0.540937 L54.2591 44.3491 L54.8 44.89 Z M60.28 44.89 L60.8209 45.4309 L105.711 0.540937 L105.17 0 L104.629 -0.540937 L59.7391 44.3491 L60.28 44.89 Z M65.76 44.89 L66.3009 45.4309 L111.191 0.540937 L110.65 0 L110.109 -0.540937 L65.2191 44.3491 L65.76 44.89 Z M71.24 44.89 L71.7809 45.4309 L116.671 0.540937 L116.13 0 L115.589 -0.540937 L70.6991 44.3491 L71.24 44.89 Z M76.72 44.89 L77.2609 45.4309 L122.151 0.540937 L121.61 0 L121.069 -0.540937 L76.1791 44.3491 L76.72 44.89 Z M82.2 44.89 L82.7409 45.4309 L127.631 0.540937 L127.09 0 L126.549 -0.540937 L81.6591 44.3491 L82.2 44.89 Z M87.68 44.89 L88.2209 45.4309 L133.111 0.540937 L132.57 0 L132.029 -0.540937 L87.1391 44.3491 L87.68 44.89 Z M93.16 44.89 L93.7009 45.4309 L138.591 0.540937 L138.05 0 L137.509 -0.540937 L92.6191 44.3491 L93.16 44.89 Z M98.64 44.89 L99.1809 45.4309 L144.071 0.540937 L143.53 0 L142.989 -0.540937 L98.0991 44.3491 L98.64 44.89 Z M104.12 44.89 L104.661 45.4309 L149.551 0.540937 L149.01 0 L148.469 -0.540937 L103.579 44.3491 L104.12 44.89 Z M109.6 44.89 L110.141 45.4309 L155.031 0.540937 L154.49 0 L153.949 -0.540937 L109.059 44.3491 L109.6 44.89 Z M115.08 44.89 L115.621 45.4309 L160.511 0.540937 L159.97 0 L159.429 -0.540937 L114.539 44.3491 L115.08 44.89 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
            </div>
            <div style={{ position: "absolute", left: "762.65px", top: "142.89px", width: "28.49px", height: "14.61px", borderRadius: "4.38px", background: "linear-gradient(180deg, #d1e4ff 0%, #c2dcff 100%)", boxShadow: "inset 0 0 0 1px rgba(73, 144, 241, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
              <svg style={{ position: "absolute", left: "-14.61px", top: "0px", width: "69.41px", height: "14.61px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="69.41" height="14.61" viewBox="0 0 69.41 14.61" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 14.61 L0.540937 15.1509 L15.1509 0.540937 L14.61 0 L14.0691 -0.540937 L-0.540937 14.0691 L0 14.61 Z M5.48 14.61 L6.02094 15.1509 L20.6309 0.540937 L20.09 0 L19.5491 -0.540937 L4.93906 14.0691 L5.48 14.61 Z M10.96 14.61 L11.5009 15.1509 L26.1109 0.540937 L25.57 0 L25.0291 -0.540937 L10.4191 14.0691 L10.96 14.61 Z M16.44 14.61 L16.9809 15.1509 L31.5909 0.540937 L31.05 0 L30.5091 -0.540937 L15.8991 14.0691 L16.44 14.61 Z M21.92 14.61 L22.4609 15.1509 L37.0709 0.540937 L36.53 0 L35.9891 -0.540937 L21.3791 14.0691 L21.92 14.61 Z M27.4 14.61 L27.9409 15.1509 L42.5509 0.540937 L42.01 0 L41.4691 -0.540937 L26.8591 14.0691 L27.4 14.61 Z M32.88 14.61 L33.4209 15.1509 L48.0309 0.540937 L47.49 0 L46.9491 -0.540937 L32.3391 14.0691 L32.88 14.61 Z M38.36 14.61 L38.9009 15.1509 L53.5109 0.540937 L52.97 0 L52.4291 -0.540937 L37.8191 14.0691 L38.36 14.61 Z M43.84 14.61 L44.3809 15.1509 L58.9909 0.540937 L58.45 0 L57.9091 -0.540937 L43.2991 14.0691 L43.84 14.61 Z M49.32 14.61 L49.8609 15.1509 L64.4709 0.540937 L63.93 0 L63.3891 -0.540937 L48.7791 14.0691 L49.32 14.61 Z M54.8 14.61 L55.3409 15.1509 L69.9509 0.540937 L69.41 0 L68.8691 -0.540937 L54.2591 14.0691 L54.8 14.61 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
            </div>
            <p style={{ position: "absolute", left: "68.39px", top: "250.47px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>Jan</p>
            <p style={{ position: "absolute", left: "131.76px", top: "250.47px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>Feb</p>
            <p style={{ position: "absolute", left: "194.62px", top: "250.47px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>Mar</p>
            <p style={{ position: "absolute", left: "258.98px", top: "250.47px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>Apr</p>
            <p style={{ position: "absolute", left: "320.35px", top: "250.47px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>May</p>
            <p style={{ position: "absolute", left: "384.71px", top: "250.47px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>Jun</p>
            <p style={{ position: "absolute", left: "450.58px", top: "250.47px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>Jul</p>
            <p style={{ position: "absolute", left: "511.44px", top: "250.47px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>Aug</p>
            <p style={{ position: "absolute", left: "574.81px", top: "250.47px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>Sep</p>
            <p style={{ position: "absolute", left: "639.17px", top: "250.47px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>Oct</p>
            <p style={{ position: "absolute", left: "701.53px", top: "250.47px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>Nov</p>
            <p style={{ position: "absolute", left: "764.9px", top: "250.47px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#8b8b91" }}>Dec</p>
            <div style={{ position: "absolute", left: "756.73px", top: "114.74px", width: "40.34px", height: "21.58px", borderRadius: "5.48px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1.1px #e4e4e7", display: "flex", flexDirection: "row", padding: "3.29px 7.67px 3.29px 7.67px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.5px", fontWeight: 500, color: "#52525b" }}>MTD</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "891.85px", top: "277.2px", width: "373.61px", height: "380.19px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23.01px 14.25px 23.01px 14.25px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>Harbor Club plans</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", lineHeight: "40px", fontFamily: "'Geist'", fontSize: "30.68px", fontWeight: 500, color: "#222222" }}>$16,400</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "136px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6b6b70" }}>MRR · 850 subscribers</p>
              </div>
            </div>
            <div data-fu="btn" style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 1.1px 1.1px 0px rgba(13, 13, 18, 0.08)", display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <DotsVertical size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "347.31px", flexShrink: 0, borderRadius: "10.96px", display: "flex", flexDirection: "column", padding: "4.38px 8.77px 4.38px 8.77px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "329.77px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Starter</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>450 × $12</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#2d2d2d" }}>$5,400</p>
              </div>
              <div style={{ width: "329.77px", height: "28.49px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "2.19px", width: "329.77px", height: "24.1px", borderRadius: "8.77px", background: "#fbfbfb", overflow: "hidden" }}>
                  <svg style={{ position: "absolute", left: "-23.92px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "-12.96px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "-2px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "8.96px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "19.92px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "30.88px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "41.84px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "52.8px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "63.76px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "74.72px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "85.68px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "96.64px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "107.6px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "118.56px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "129.52px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "140.48px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "151.44px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "162.4px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "173.36px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "184.32px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "195.28px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "206.24px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "217.2px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "228.16px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "239.12px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "250.08px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "261.04px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "272px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "282.96px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "293.92px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "304.88px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "315.84px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "326.8px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "108.58px", height: "24.1px", background: "linear-gradient(90deg, #fd4b23 0%, #fd7353 85%, #fea591 100%)" }} />
                </div>
                <div style={{ position: "absolute", left: "103.11px", top: "0px", width: "13.15px", height: "28.49px", borderRadius: "4.38px", background: "#fd4b23", boxShadow: "inset 0 0 0 1.12px #ffffff, -1.1px 0px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              </div>
            </div>
            <div style={{ width: "347.31px", flexShrink: 0, borderRadius: "10.96px", display: "flex", flexDirection: "column", padding: "4.38px 8.77px 4.38px 8.77px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "329.77px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Plus</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>300 × $24</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#2d2d2d" }}>$7,200</p>
              </div>
              <div style={{ width: "329.77px", height: "28.49px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "2.19px", width: "329.77px", height: "24.1px", borderRadius: "8.77px", background: "#fbfbfb", overflow: "hidden" }}>
                  <svg style={{ position: "absolute", left: "-23.92px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "-12.96px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "-2px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "8.96px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "19.92px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "30.88px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "41.84px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "52.8px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "63.76px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "74.72px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "85.68px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "96.64px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "107.6px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "118.56px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "129.52px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "140.48px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "151.44px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "162.4px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "173.36px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "184.32px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "195.28px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "206.24px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "217.2px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "228.16px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "239.12px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "250.08px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "261.04px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "272px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "282.96px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "293.92px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "304.88px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "315.84px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "326.8px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "144.78px", height: "24.1px", background: "linear-gradient(90deg, #ff72ab 0%, #ff91bd 85%, #ffb9d5 100%)" }} />
                </div>
                <div style={{ position: "absolute", left: "139.3px", top: "0px", width: "13.15px", height: "28.49px", borderRadius: "4.38px", background: "#ff72ab", boxShadow: "inset 0 0 0 1.12px #ffffff, -1.1px 0px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              </div>
            </div>
            <div style={{ width: "347.31px", flexShrink: 0, borderRadius: "10.96px", display: "flex", flexDirection: "column", padding: "4.38px 8.77px 4.38px 8.77px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "329.77px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Studio</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>100 × $38</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#2d2d2d" }}>$3,800</p>
              </div>
              <div style={{ width: "329.77px", height: "28.49px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "2.19px", width: "329.77px", height: "24.1px", borderRadius: "8.77px", background: "#fbfbfb", overflow: "hidden" }}>
                  <svg style={{ position: "absolute", left: "-23.92px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "-12.96px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "-2px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "8.96px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "19.92px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "30.88px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "41.84px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "52.8px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "63.76px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "74.72px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "85.68px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "96.64px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "107.6px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "118.56px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "129.52px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "140.48px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "151.44px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "162.4px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "173.36px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "184.32px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "195.28px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "206.24px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "217.2px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "228.16px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "239.12px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "250.08px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "261.04px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "272px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "282.96px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "293.92px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "304.88px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "315.84px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <svg style={{ position: "absolute", left: "326.8px", top: "-6.57px", width: "10.77px", height: "40.21px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.77" height="40.21" viewBox="0 0 10.77 40.21" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 10.775 0)" d="M0 -2.74 L0 0 L41.63 0 L41.63 -2.74 L41.63 -5.48 L0 -5.48 L0 -2.74 Z" fill="#f5f5f5"/></svg>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "76.41px", height: "24.1px", background: "linear-gradient(90deg, #4d98fe 0%, #74affe 85%, #a6ccff 100%)" }} />
                </div>
                <div style={{ position: "absolute", left: "70.94px", top: "0px", width: "13.15px", height: "28.49px", borderRadius: "4.38px", background: "#4d98fe", boxShadow: "inset 0 0 0 1.12px #ffffff, -1.1px 0px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "13.15px", background: "#fafafa", boxShadow: "inset 0 0 0 1.1px #eeeeee", display: "flex", flexDirection: "row", padding: "8.77px 12.06px 8.77px 12.06px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(24, 177, 112, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <BuildingBankBulk size={17.5} strokeWidth={2} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#18b170", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "144px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>
                <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>{"Next payout "}</span>
                <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>$8,960</span>
              </p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Dec 16 → Chase •••• 4821</p>
            </div>
            <ChevronRight size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#999999", display: "block" }} />
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "677.1px", width: "1245.74px", height: "380.19px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23.01px 23.01px 23.01px 23.01px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>Transactions</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "399px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6b6b70" }}>Latest payments across online, Harbor Club and the Portland store</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "10.96px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "3.29px 3.29px 3.29px 3.29px", gap: "2.19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#000000" }}>All</p>
                </div>
                <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Online</p>
                </div>
                <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Subscriptions</p>
                </div>
                <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>In-store</p>
                </div>
              </div>
              <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>View all</p>
              </div>
            </div>
          </div>
          <div style={{ width: "1201.92px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "1201.92px", height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#fafafa", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "150px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Payment</p>
              </div>
              <div style={{ width: "230px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Customer</p>
              </div>
              <div style={{ width: "140px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Amount</p>
              </div>
              <div style={{ width: "200px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Method</p>
              </div>
              <div style={{ width: "170px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Channel</p>
              </div>
              <div style={{ width: "140px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Status</p>
              </div>
              <div style={{ width: "171.92px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Date</p>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "150px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>#TX-48213</p>
              </div>
              <div style={{ width: "230px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.05px", background: "rgba(253, 75, 35, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.64px", fontWeight: 500, color: "#fd4b23" }}>OB</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Olivia Bennett</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>$128.00</p>
              </div>
              <div style={{ width: "200px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CreditCardBulk size={16.4} strokeWidth={1.51} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Visa •• 4242</p>
              </div>
              <div style={{ width: "170px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ShoppingCartBulk size={16.4} strokeWidth={2} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Online</p>
              </div>
              <div style={{ width: "140px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Paid</p>
                </div>
              </div>
              <div style={{ width: "171.92px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 14, 10:24 AM</p>
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "150px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>#TX-48212</p>
              </div>
              <div style={{ width: "230px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.05px", background: "rgba(0, 68, 255, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.64px", fontWeight: 500, color: "#0044ff" }}>MR</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Marcus Reid</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>$24.00</p>
              </div>
              <div style={{ width: "200px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CreditCardBulk size={16.4} strokeWidth={1.51} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "123px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Mastercard •• 8810</p>
              </div>
              <div style={{ width: "170px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <RefreshBulk size={16.4} strokeWidth={1.38} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Subscription</p>
              </div>
              <div style={{ width: "140px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Paid</p>
                </div>
              </div>
              <div style={{ width: "171.92px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 14, 9:02 AM</p>
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "150px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>#TX-48209</p>
              </div>
              <div style={{ width: "230px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.05px", background: "rgba(24, 177, 112, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.64px", fontWeight: 500, color: "#18b170" }}>AK</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Aisha Khan</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>$85.00</p>
              </div>
              <div style={{ width: "200px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CreditCardHandBulk size={16.4} strokeWidth={2} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Visa •• 6612 · tap</p>
              </div>
              <div style={{ width: "170px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <BuildingStoreBulk size={16.4} strokeWidth={2} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>In-store</p>
              </div>
              <div style={{ width: "140px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Paid</p>
                </div>
              </div>
              <div style={{ width: "171.92px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 13, 5:47 PM</p>
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "150px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>#TX-48204</p>
              </div>
              <div style={{ width: "230px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.05px", background: "rgba(255, 114, 171, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.64px", fontWeight: 500, color: "#ff72ab" }}>DP</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Daniel Park</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#999999", textDecoration: "line-through" }}>$64.00</p>
              </div>
              <div style={{ width: "200px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CreditCardBulk size={16.4} strokeWidth={1.51} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Visa •• 1881</p>
              </div>
              <div style={{ width: "170px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ShoppingCartBulk size={16.4} strokeWidth={2} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Online</p>
              </div>
              <div style={{ width: "140px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f4f4f5", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#6c6c6c"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>Refunded</p>
                </div>
              </div>
              <div style={{ width: "171.92px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 13, 2:15 PM</p>
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "150px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>#TX-48198</p>
              </div>
              <div style={{ width: "230px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.05px", background: "rgba(124, 92, 255, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.64px", fontWeight: 500, color: "#7c5cff" }}>SM</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Sofia Moreno</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>$38.00</p>
              </div>
              <div style={{ width: "200px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg width={16.4} height={16.4} viewBox="0 0 24 24" style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#7d818c", display: "block" }}><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="currentColor" /></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Apple Pay</p>
              </div>
              <div style={{ width: "170px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <RefreshBulk size={16.4} strokeWidth={1.38} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Subscription</p>
              </div>
              <div style={{ width: "140px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#fff8eb", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#c27c0e"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#c27c0e" }}>Pending</p>
                </div>
              </div>
              <div style={{ width: "171.92px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 13, 11:40 AM</p>
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "150px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>#TX-48191</p>
              </div>
              <div style={{ width: "230px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.05px", background: "rgba(77, 152, 254, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.64px", fontWeight: 500, color: "#4d98fe" }}>LO</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Liam O'Connor</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>$156.00</p>
              </div>
              <div style={{ width: "200px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CreditCardBulk size={16.4} strokeWidth={1.51} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Amex •• 3005</p>
              </div>
              <div style={{ width: "170px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ShoppingCartBulk size={16.4} strokeWidth={2} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Online</p>
              </div>
              <div style={{ width: "140px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Paid</p>
                </div>
              </div>
              <div style={{ width: "171.92px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 12, 7:18 PM</p>
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div data-fu="row" style={{ width: "1201.92px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "150px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>#TX-48187</p>
              </div>
              <div style={{ width: "230px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.05px", background: "rgba(243, 200, 61, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.64px", fontWeight: 500, color: "#f3c83d" }}>HW</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Hannah Weiss</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#999999" }}>$42.00</p>
              </div>
              <div style={{ width: "200px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CreditCardBulk size={16.4} strokeWidth={1.51} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Mastercard •• 5523</p>
              </div>
              <div style={{ width: "170px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ShoppingCartBulk size={16.4} strokeWidth={2} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Online</p>
              </div>
              <div style={{ width: "140px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#fff1f1", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#e5484d"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#e5484d" }}>Failed</p>
                </div>
              </div>
              <div style={{ width: "171.92px", height: "32.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 12, 3:06 PM</p>
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
