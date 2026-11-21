import type { ClientId } from "./connect-agent-config";

/**
 * The AI clients' own logos, shown next to their names so people recognise their tool at a glance.
 * Files in public/logos: Claude and Codex marks from the LobeHub AI brand icons, Cursor's cube,
 * and the VS Code mark from Microsoft's brand download (code.visualstudio.com/brand).
 */
const SRC: Record<ClientId, string> = {
  claude: "/logos/claude.svg",
  cursor: "/logos/cursor.svg",
  vscode: "/logos/vscode.svg",
  codex: "/logos/codex.svg",
};

export function ClientLogo({ id, size = 16, onDark = false, className = "" }: { id: ClientId; size?: number; onDark?: boolean; className?: string }) {
  const src = id === "cursor" && onDark ? "/logos/cursor-white.svg" : SRC[id];
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} width={size} height={size} alt="" aria-hidden="true" className={"shrink-0 " + className} style={{ width: size, height: size }} />;
}
