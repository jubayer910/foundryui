/**
 * Ready-to-paste MCP configs for each AI client, with the API key filled in.
 * Pure functions (no React) so the page, the account keys list and tests share one source.
 *
 * Formats checked 2026-11-15:
 * - Claude Code: `claude mcp add --transport http <name> <url> --header "K: V"` (code.claude.com/docs/en/mcp)
 * - Cursor: cursor://anysphere.cursor-deeplink/mcp/install?name=<name>&config=<base64(JSON)>,
 *   remote config is { url, headers } (cursor.com/docs/context/mcp/install-links)
 * - VS Code: vscode:mcp/install?<encodeURIComponent(JSON)> where JSON is the mcp.json server entry plus `name`;
 *   .vscode/mcp.json uses { servers: { <name>: { type: "http", url, headers } } }
 * - Codex: ~/.codex/config.toml [mcp_servers.<name>] url + http_headers (learn.chatgpt.com/docs/extend/mcp)
 */

export const SERVER_NAME = "ingot-ui";

export type ClientId = "claude" | "cursor" | "vscode" | "codex";

export const CLIENTS: { id: ClientId; name: string; where: string }[] = [
  { id: "claude", name: "Claude Code", where: "Run it in your terminal. It adds Ingot UI for every project on this machine." },
  { id: "cursor", name: "Cursor", where: "Open the link to install it in one click, or paste the JSON into ~/.cursor/mcp.json." },
  { id: "vscode", name: "VS Code", where: "Open the link to install it in one click, or paste the JSON into .vscode/mcp.json." },
  { id: "codex", name: "Codex", where: "Paste it at the end of ~/.codex/config.toml, then restart Codex." },
];

export const clientName = (id: ClientId) => CLIENTS.find((c) => c.id === id)!.name;

/** Which client a stored key was made for, read from its name (keys made by the connect flow are named after the client). */
export function clientFromKeyName(name: string): ClientId | null {
  const n = name.toLowerCase();
  if (n.includes("claude")) return "claude";
  if (n.includes("cursor")) return "cursor";
  if (n.includes("vs code") || n.includes("vscode") || n.includes("copilot")) return "vscode";
  if (n.includes("codex")) return "codex";
  return null;
}

/** The MCP endpoint for a site origin: https://ingotui.com -> https://mcp.ingotui.com/mcp */
export const mcpUrlFor = (siteUrl: string) => siteUrl.replace(/\/$/, "").replace("://", "://mcp.") + "/mcp";

const b64 = (s: string) => (typeof btoa === "function" ? btoa(s) : Buffer.from(s, "utf8").toString("base64"));

export function cursorEntry(url: string, key: string) {
  return { url, headers: { Authorization: "Bearer " + key } };
}
export function vscodeEntry(url: string, key: string) {
  return { type: "http" as const, url, headers: { Authorization: "Bearer " + key } };
}

/** One-click install link, or null for clients that have none. */
export function deepLink(id: ClientId, url: string, key: string): string | null {
  if (id === "cursor") return "cursor://anysphere.cursor-deeplink/mcp/install?name=" + SERVER_NAME + "&config=" + encodeURIComponent(b64(JSON.stringify(cursorEntry(url, key))));
  if (id === "vscode") return "vscode:mcp/install?" + encodeURIComponent(JSON.stringify({ name: SERVER_NAME, ...vscodeEntry(url, key) }));
  return null;
}

/** The text to paste (command, JSON or TOML) with the key in place. */
export function configText(id: ClientId, url: string, key: string): { label: string; code: string } {
  switch (id) {
    case "claude":
      return { label: "Terminal", code: "claude mcp add --scope user --transport http " + SERVER_NAME + " " + url + ' --header "Authorization: Bearer ' + key + '"' };
    case "cursor":
      return { label: "~/.cursor/mcp.json", code: JSON.stringify({ mcpServers: { [SERVER_NAME]: cursorEntry(url, key) } }, null, 2) };
    case "vscode":
      return { label: ".vscode/mcp.json", code: JSON.stringify({ servers: { [SERVER_NAME]: vscodeEntry(url, key) } }, null, 2) };
    case "codex":
      return { label: "~/.codex/config.toml", code: "[mcp_servers." + SERVER_NAME + ']\nurl = "' + url + '"\nhttp_headers = { Authorization = "Bearer ' + key + '" }' };
  }
}

/** First prompt that proves the connection works. */
export const TEST_PROMPT = "List the Ingot UI design systems.";
export const SETUP_PROMPT = "Set this project up with the Ingot UI Loopo system (init_project) and write the rules files it returns.";
