import type { Post } from "../types";
import { post as uiKits } from "./best-dashboard-ui-kits";
import { post as admin } from "./admin-dashboard-templates";
import { post as shadcn } from "./shadcn-ui-alternatives";
import { post as mcp } from "./mcp-ui-components";
import { post as figma } from "./figma-to-react";
import { post as aiDesign } from "./ai-generated-dashboard-design";
import { post as saas } from "./saas-dashboard-examples";
import { post as kpi } from "./kpi-card-design";
import { post as charts } from "./dashboard-chart-types";
import { post as tokens } from "./dashboard-design-system-tokens";
import { post as shadcnDash } from "./shadcn-dashboard";
import { post as chartLibs } from "./best-react-chart-libraries";
import { post as tables } from "./react-data-table-design";
import { post as modalDrawer } from "./modal-vs-drawer";
import { post as empty } from "./empty-state-design";
import { post as claudeCode } from "./claude-code-frontend-ui";
import { post as cursorRules } from "./cursor-rules-design-system";
import { post as freeFigma } from "./free-figma-dashboard-ui-kit";
import { post as tailwindComps } from "./tailwind-dashboard-components";
import { post as untitledAlt } from "./untitled-ui-alternatives";

/** Display order for posts that share a date. */
export const POSTS: Post[] = [uiKits, admin, shadcn, mcp, figma, aiDesign, saas, kpi, charts, tokens, shadcnDash, chartLibs, freeFigma, tailwindComps, untitledAlt, tables, modalDrawer, empty, claudeCode, cursorRules];
