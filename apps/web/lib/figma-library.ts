/** Components on each system file's "Foundry Library" page after harvest + QA (2026-11-10). Source: Design Library Platform/STATUS.md. */
export const FIGMA_LIBRARY: Record<string, Record<string, number>> = {
  loopo: { Templates: 15, Navigation: 14, Headers: 38, "KPI and stats": 6, Charts: 32, "Tables and lists": 35, "Cards and panels": 73, Forms: 33, Editors: 13, Modals: 36, Drawers: 6, Menus: 19, Popovers: 9, Feedback: 3, Atoms: 8 },
  auton: { Templates: 8, Navigation: 10, Headers: 7, "KPI and stats": 15, Charts: 58, "Tables and lists": 24, "Cards and panels": 53, Forms: 9, Modals: 58, Drawers: 27, Menus: 2, Popovers: 3, Feedback: 5 },
  mailpulse: { Templates: 14, Navigation: 14, Headers: 23, "KPI and stats": 9, Charts: 22, "Tables and lists": 44, "Cards and panels": 91, Forms: 16, Editors: 7, Modals: 26, Drawers: 6, Menus: 17, Popovers: 10, Feedback: 3 },
  axon: { Templates: 16, Navigation: 15, Headers: 7, "KPI and stats": 9, Charts: 42, "Tables and lists": 81, "Cards and panels": 31, Forms: 6, Editors: 3, Modals: 56, Drawers: 20, Popovers: 3, Feedback: 3 },
  veriq: { Templates: 13, Navigation: 19, Headers: 7, "KPI and stats": 11, Charts: 51, "Tables and lists": 20, "Cards and panels": 61, Forms: 4, Editors: 5, Modals: 29, Drawers: 21, Menus: 9, Popovers: 5 },
  vantage: { Templates: 16, Navigation: 4, Headers: 14, "KPI and stats": 17, Charts: 43, "Tables and lists": 31, "Cards and panels": 171, Forms: 8, Editors: 3, Modals: 36, Drawers: 20, Menus: 4, Popovers: 12, Feedback: 5 },
};

export const figmaCount = (slug: string) => Object.values(FIGMA_LIBRARY[slug] ?? {}).reduce((a, b) => a + b, 0);
export const FIGMA_TOTAL = Object.keys(FIGMA_LIBRARY).reduce((a, s) => a + figmaCount(s), 0);
