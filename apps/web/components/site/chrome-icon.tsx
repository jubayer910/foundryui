import icons from "./chrome-icons.json";

export type ChromeIconName = keyof typeof icons;

/** Site-chrome icons, taken from the Foundry icon library (stroke rounded, 24 grid). */
export function CIcon({ name, size = 16, className }: { name: ChromeIconName; size?: number; className?: string }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" className={className} dangerouslySetInnerHTML={{ __html: icons[name] }} />;
}
