import { Frame } from "./iso";
import { CATEGORY_SCENE, POST_SCENE, SCENES, VIEWBOX } from "./scenes";

export { POST_SCENE, SCENES };

/** An animated isometric illustration. `scene` is a key of SCENES. */
export function Illo({ scene, label, className }: { scene: string; label: string; className?: string }) {
  const key = SCENES[scene] ? scene : "stack";
  return (
    <div className={className}>
      <Frame label={label} vb={VIEWBOX[key]}>
        {SCENES[key]()}
      </Frame>
    </div>
  );
}

export const sceneForPost = (slug: string, category: string) => POST_SCENE[slug] ?? CATEGORY_SCENE[category] ?? "stack";

/** Cover tile for a guide: soft tile background with the scene centred. */
export function PostCover({ slug, category, title, size = "card" }: { slug: string; category: string; title: string; size?: "small" | "card" | "lead" | "hero" }) {
  const h = size === "lead" ? "h-[220px] sm:h-[260px]" : size === "hero" ? "h-[220px] sm:h-[300px]" : size === "small" ? "h-[132px]" : "h-[170px]";
  return (
    <div className={`illo-tile ${h}`}>
      <Illo scene={sceneForPost(slug, category)} label={"Illustration for " + title} className="h-full w-full" />
    </div>
  );
}

/** A scene on its dotted tile. Size it with className (height). `dark` for ink surfaces. */
export function IlloTile({ scene, label, className = "h-[160px]", dark }: { scene: string; label: string; className?: string; dark?: boolean }) {
  return (
    <div className={`illo-tile ${dark ? "illo-dark" : ""} ${className}`}>
      <Illo scene={scene} label={label} className="h-full w-full" />
    </div>
  );
}
