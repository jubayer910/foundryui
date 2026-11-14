import { IlloTile, SCENES } from "@/components/site/illo";

/** Every cover scene, in the order SCENES lists them. */
export const SCENE_KEYS = Object.keys(SCENES);

/** Human label for a scene key ("podium-b" → "Podium b"). */
export const sceneLabel = (k: string) => (k[0].toUpperCase() + k.slice(1)).replace(/-/g, " ");

/**
 * Radio grid of the illustration scenes used for post covers and changelog entries. Works with no JS (plain
 * radios); pass `value` + `onChange` to control it from a client form. `auto` adds a first option with value ""
 * (the post's category picks the scene).
 */
export function ScenePicker({ name, value, defaultValue, onChange, auto, autoLabel = "By category" }: { name: string; value?: string; defaultValue?: string; onChange?: (v: string) => void; auto?: boolean; autoLabel?: string }) {
  const opts = [...(auto ? [""] : []), ...SCENE_KEYS];
  return (
    <fieldset className="min-w-0">
      <legend className="sr-only">Cover illustration</legend>
      <div className="grid max-h-[268px] grid-cols-3 gap-1.5 overflow-y-auto rounded-[8px] p-0.5 sm:grid-cols-4">
        {opts.map((k) => {
          const id = `${name}-${k || "auto"}`;
          const controlled = value !== undefined;
          return (
            <label key={k || "auto"} htmlFor={id} className="group relative cursor-pointer">
              <input
                id={id}
                type="radio"
                name={name}
                value={k}
                className="peer sr-only"
                {...(controlled ? { checked: value === k, onChange: () => onChange?.(k) } : { defaultChecked: (defaultValue ?? "") === k })}
              />
              <span className="block overflow-hidden rounded-[8px] shadow-[0_0_0_1px_var(--color-hair)] peer-checked:shadow-[0_0_0_2px_var(--color-ink)] peer-focus-visible:shadow-[0_0_0_2px_var(--color-ink)] group-hover:opacity-85">
                {k ? (
                  <IlloTile scene={k} label={sceneLabel(k)} className="h-[64px]" />
                ) : (
                  <span className="flex h-[64px] items-center justify-center bg-tile px-2 text-center text-[12px] text-mute">{autoLabel}</span>
                )}
              </span>
              <span className="mt-0.5 block truncate text-center text-[11px] text-faint peer-checked:text-ink">{k ? sceneLabel(k) : "Auto"}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
