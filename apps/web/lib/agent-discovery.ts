import "server-only";
import { SITE_URL, systems } from "./catalog";
import { getPriceBook, type PriceBook } from "./plans";
import tools from "./mcp-tools.generated.json";

/**
 * Machine-readable discovery files, so an AI agent that lands on the domain can find and call the MCP server
 * on its own (not just read about it): /.well-known/ai-agent.json, /.well-known/mcp.json,
 * /.well-known/agent-card.json, /openapi.json and /pricing.json.
 * Tools come from the live server's tools/list (lib/mcp-tools.generated.json); prices from the admin settings.
 */

const MCP_URL = SITE_URL.replace("://", "://mcp.") + "/mcp";
const CONTACT = { email: "support@ingotui.com", url: SITE_URL + "/support" };
const DESCRIPTION =
  `Ingot UI: ${systems.length} dashboard design systems with React + Tailwind CSS v4 components checked against their Figma originals, ` +
  "design tokens, charts, icons and full page templates. AI coding agents use the MCP server to search components, fetch their code, " +
  "scaffold whole screens on one design system, build real Figma layers and audit UI code.";
const AUTH = {
  type: "bearer",
  header: "Authorization",
  scheme: "Bearer",
  keyPrefix: "fu_",
  obtain: SITE_URL + "/account",
  docs: SITE_URL + "/mcp",
  note: "initialize and tools/list work without a key; every tool call needs one. Free accounts get a key.",
};
const RATE_LIMIT = { free: { requests: 50, period: "day", scope: "MCP tool calls" }, paid: "unlimited" };

type Tool = { name: string; description?: string; inputSchema?: Record<string, unknown> };
const TOOLS = tools as Tool[];

export async function pricingDoc(pb?: PriceBook) {
  pb ??= await getPriceBook();
  const plans: { id: string; name: string; amount: number; currency: "USD"; interval: "month" | "year" | "once" | "forever"; includes: string }[] = [
    { id: "free", name: "Free", amount: 0, currency: "USD", interval: "forever", includes: "Loopo system, free components, every icon, 50 MCP calls a day" },
  ];
  if (pb.monthly) plans.push({ id: "pro-monthly", name: "Pro", amount: pb.proMonthly, currency: "USD", interval: "month", includes: "All systems, unlimited MCP" });
  plans.push({ id: "pro-yearly", name: "Pro", amount: pb.proYearly, currency: "USD", interval: "year", includes: "All systems, unlimited MCP" });
  if (pb.monthly) plans.push({ id: "team-monthly", name: "Team", amount: pb.teamMonthly, currency: "USD", interval: "month", includes: `Everything in Pro for ${pb.teamSeats} seats` });
  plans.push({ id: "team-yearly", name: "Team", amount: pb.teamYearly, currency: "USD", interval: "year", includes: `Everything in Pro for ${pb.teamSeats} seats` });
  if (pb.lifetime !== null) plans.push({ id: "lifetime", name: "Lifetime", amount: pb.lifetime, currency: "USD", interval: "once", includes: "Every system and every future update, forever" });
  return { currency: "USD", url: SITE_URL + "/pricing", plans };
}

export async function aiAgentDoc() {
  return {
    schema_version: "1.0",
    name: "Ingot UI",
    description: DESCRIPTION,
    url: SITE_URL,
    logo: SITE_URL + "/logo.png",
    documentation: SITE_URL + "/llms.txt",
    capabilities: TOOLS.map((t) => ({ name: t.name, description: t.description ?? "", input_schema: t.inputSchema ?? { type: "object" } })),
    interfaces: {
      mcp: { url: MCP_URL, transport: "streamable-http", discovery: SITE_URL + "/.well-known/mcp.json" },
      openapi: SITE_URL + "/openapi.json",
      a2a_agent_card: SITE_URL + "/.well-known/agent-card.json",
      llms_txt: SITE_URL + "/llms.txt",
    },
    auth: AUTH,
    rateLimit: RATE_LIMIT,
    pricing: await pricingDoc(),
    contact: CONTACT,
  };
}

export function mcpDoc() {
  return {
    name: "ingot-ui",
    title: "Ingot UI",
    description: DESCRIPTION,
    url: MCP_URL,
    transport: "streamable-http",
    servers: [{ name: "ingot-ui", url: MCP_URL, transport: "streamable-http", authentication: AUTH }],
    tools: TOOLS.map((t) => ({ name: t.name, description: t.description ?? "" })),
    setup: SITE_URL + "/mcp",
    contact: CONTACT,
  };
}

export function agentCardDoc() {
  return {
    protocolVersion: "0.3.0",
    name: "Ingot UI",
    description: DESCRIPTION,
    url: MCP_URL,
    preferredTransport: "MCP",
    version: "0.1.0",
    provider: { organization: "Ingot UI", url: SITE_URL },
    documentationUrl: SITE_URL + "/mcp",
    capabilities: { streaming: false, pushNotifications: false },
    securitySchemes: { bearer: { type: "http", scheme: "bearer", description: "API key from " + SITE_URL + "/account" } },
    security: [{ bearer: [] }],
    defaultInputModes: ["application/json", "text/plain"],
    defaultOutputModes: ["application/json", "text/plain"],
    skills: TOOLS.map((t) => ({ id: t.name, name: t.name.replace(/_/g, " "), description: t.description ?? "", tags: ["ui", "design-system", "react", "tailwind"], inputSchema: t.inputSchema ?? { type: "object" } })),
  };
}

/** The public, unauthenticated HTTP endpoints (component registry and docs). Pro code goes through the MCP with a key. */
export function openApiDoc() {
  const item = {
    type: "object",
    properties: {
      name: { type: "string" },
      type: { type: "string", example: "registry:component" },
      title: { type: "string" },
      description: { type: "string" },
      dependencies: { type: "array", items: { type: "string" } },
      registryDependencies: { type: "array", items: { type: "string" } },
      files: { type: "array", items: { type: "object", properties: { path: { type: "string" }, target: { type: "string" }, content: { type: "string" } } } },
    },
    required: ["name", "type", "files"],
  };
  return {
    openapi: "3.1.0",
    info: {
      title: "Ingot UI public API",
      version: "1.0.0",
      description: "Free component registry (shadcn-compatible) and agent docs. Everything else, including Pro code, design tokens per system and Figma layers, is served by the MCP server at " + MCP_URL + ".",
      contact: { name: "Ingot UI support", email: CONTACT.email, url: CONTACT.url },
      license: { name: "Ingot UI licence", url: SITE_URL + "/license" },
    },
    servers: [{ url: SITE_URL }],
    externalDocs: { description: "MCP server setup", url: SITE_URL + "/mcp" },
    paths: {
      "/r/index.json": {
        get: {
          operationId: "listRegistryItems",
          summary: "List the free components in the registry",
          description: "shadcn registry index: every free component with its name, type and description.",
          responses: { "200": { description: "Registry index", content: { "application/json": { schema: { $ref: "#/components/schemas/RegistryIndex" } } } } },
        },
      },
      "/r/{name}.json": {
        get: {
          operationId: "getRegistryItem",
          summary: "Get one free component with its source files",
          parameters: [{ name: "name", in: "path", required: true, schema: { type: "string" }, example: "button" }],
          responses: {
            "200": { description: "Registry item with file contents", content: { "application/json": { schema: { $ref: "#/components/schemas/RegistryItem" } } } },
            "404": { description: "No free component with that name" },
          },
        },
      },
      "/llms.txt": { get: { operationId: "getLlmsTxt", summary: "Site summary for language models", responses: { "200": { description: "Plain text", content: { "text/plain": { schema: { type: "string" } } } } } } },
      "/pricing.json": { get: { operationId: "getPricing", summary: "Current plans and prices", responses: { "200": { description: "Pricing", content: { "application/json": { schema: { $ref: "#/components/schemas/Pricing" } } } } } } },
    },
    components: {
      schemas: {
        RegistryItem: item,
        RegistryIndex: { type: "object", properties: { name: { type: "string" }, homepage: { type: "string" }, items: { type: "array", items: { type: "object", properties: { name: { type: "string" }, type: { type: "string" }, title: { type: "string" }, description: { type: "string" } } } } } },
        Pricing: {
          type: "object",
          properties: {
            currency: { type: "string", example: "USD" },
            url: { type: "string" },
            plans: { type: "array", items: { type: "object", properties: { id: { type: "string" }, name: { type: "string" }, amount: { type: "number" }, currency: { type: "string" }, interval: { type: "string", enum: ["month", "year", "once", "forever"] }, includes: { type: "string" } } } },
          },
        },
      },
      securitySchemes: { mcpBearer: { type: "http", scheme: "bearer", description: "API key for the MCP server (" + MCP_URL + "), from " + SITE_URL + "/account. The endpoints above are public." } },
    },
  };
}

export const json = (data: unknown, maxAge = 300) =>
  new Response(JSON.stringify(data, null, 2), { headers: { "content-type": "application/json; charset=utf-8", "cache-control": `public, max-age=${maxAge}, s-maxage=${maxAge}`, "access-control-allow-origin": "*" } });
