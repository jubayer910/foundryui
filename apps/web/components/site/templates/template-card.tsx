import Link from "next/link";
import { BrowserFrame } from "@/components/showcase/browser-frame";
import { ScreenPreview } from "@/components/showcase/screen-preview";
import { CIcon } from "@/components/site/chrome-icon";
import { Icon } from "@/registry/components/icons";
import type { Template } from "./data";
import { TemplateCopy } from "./template-copy";
import { FigmaCopy } from "./figma-copy";
import { figmaPath } from "@/lib/code-paths";

const address = (title: string) => "app.yourproduct.com/" + title.toLowerCase().replace(/&/g, "").trim().replace(/\s+/g, "-");

/** Fixed preview box: every screen is scaled to the card width and cropped at the bottom, so all cards line up. */
const PREVIEW = "relative aspect-[16/11] overflow-hidden bg-tile";

/** A template: the whole card links to its detail page (stretched link), and coded templates can be copied right here. Coded screens render live; the others show the Figma export. */
export function TemplateCard({ t, eager = false }: { t: Template; eager?: boolean }) {
  const coded = t.screen.kind === "code";
  const label = coded
    ? `${t.systemName} ${t.title} dashboard template, rendered live from its React code`
    : `${t.systemName} ${t.title} dashboard template, preview from the Figma screen`;
  return (
    <div className="card group relative flex h-full flex-col p-2 transition-[background-color,box-shadow] duration-200 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ink/30 hover:bg-tile hover:shadow-[inset_0_0_0_1px_var(--color-hair-2)]">
      <BrowserFrame address={address(t.title)}>
        <div role="img" aria-label={label} className={PREVIEW}>
          <ScreenPreview screen={t.screen} eager={eager} />
        </div>
      </BrowserFrame>
      <div className="flex flex-1 flex-col px-2 pb-2 pt-3.5">
        <div className="flex items-start gap-3">
          <div className="min-w-0">
            <h2 className="truncate text-[15px] font-medium leading-tight tracking-[-0.01em]">
              <Link href={"/components/" + t.slug} className="focus-visible:outline-none after:absolute after:inset-0 after:rounded-[inherit] after:content-['']">
                {t.title}
              </Link>
            </h2>
            <p className="mt-1 flex items-center gap-1.5 text-[12.5px] text-mute">
              <span aria-hidden="true" className="size-2.5 shrink-0 rounded-[3px]" style={{ background: t.accent }} />
              {t.systemName}
            </p>
          </div>
          <ul className="ml-auto flex shrink-0 items-center gap-1" aria-label="Tags">
            <li className={"rounded-[4px] px-1.5 py-px text-[11px] " + (coded ? "bg-ink text-white" : "bg-chip text-ink")}>{coded ? "Code" : "Figma"}</li>
            {coded && <li className="rounded-[4px] bg-chip px-1.5 py-px text-[11px] text-ink">Figma</li>}
          </ul>
        </div>
        <p className="mt-2 text-[13px] leading-snug text-ink-2">{t.blurb}</p>
        <p className="mt-auto flex items-center gap-1.5 pt-3 text-[12px] text-mute">
          {coded && t.screen.qa ? (
            <>
              <Icon name="code" size={13} />
              <span className="min-w-0">
                React code, <span className="tabular-nums text-ink">{t.screen.qa.perceptual}%</span> Figma match
              </span>
            </>
          ) : (
            <>
              <Icon name="image" size={13} />
              <span>Figma screen. Code coming soon</span>
            </>
          )}
          {coded ? (
            <span className="ml-auto flex items-center gap-1.5">
              {figmaPath(t.slug) && <FigmaCopy slug={t.slug} label={t.systemName + " " + t.title} />}
              <TemplateCopy slug={t.slug} label={t.systemName + " " + t.title} />
            </span>
          ) : (
            <span className="ml-auto inline-flex items-center gap-1 text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 max-lg:opacity-100">
              Open <CIcon name="arrow" size={14} />
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

/** Last tile: not a link, says plainly that more are coming. */
export function MoreSoonCard() {
  return (
    <div className="card flex h-full flex-col p-2">
      <BrowserFrame address="app.yourproduct.com/next">
        <div className={PREVIEW + " flex flex-col items-center justify-center gap-3 px-6 text-center"}>
          <span className="grid size-10 place-items-center rounded-[10px] bg-white text-ink shadow-[inset_0_0_0_1px_var(--color-hair-2)]">
            <CIcon name="template" size={20} />
          </span>
          <p className="text-[15px] font-medium tracking-[-0.01em]">More templates soon</p>
          <p className="max-w-[320px] text-[13px] leading-snug text-mute">
            We are adding more full screens from the six systems. New ones show up here and in the changelog.
          </p>
        </div>
      </BrowserFrame>
      <div className="px-2 pb-2 pt-3.5">
        <Link href="/changelog" className="inline-flex items-center gap-1 text-[13px] font-medium underline-offset-2 hover:underline">
          See the changelog <CIcon name="arrow" size={14} />
        </Link>
      </div>
    </div>
  );
}
