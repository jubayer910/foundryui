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

/** Display order for posts that share a date. */
export const POSTS: Post[] = [uiKits, admin, shadcn, mcp, figma, aiDesign, saas, kpi, charts, tokens];
