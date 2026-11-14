import { figmaQA } from "@/lib/library";
import { Icon } from "@/registry/components/icons";

/**
 * The measured pixel-QA score of a generated component against its Figma original.
 * Server-rendered; the explainer is a native <details> (keyboard and screen-reader friendly, no JS).
 * Renders nothing when the component has no measured score.
 */
export function QaBadge({ slug, className = "" }: { slug: string; className?: string }) {
  const qa = figmaQA(slug);
  if (!qa) return null;
  return (
    <details className={"group " + className}>
      <summary className="flex cursor-pointer list-none items-start gap-2 rounded-[8px] bg-tile px-3 py-2 text-[13px] hover:bg-chip [&::-webkit-details-marker]:hidden">
        <Icon name="check" size={15} className="mt-0.5 shrink-0" />
        <span className="flex min-w-0 flex-col">
          <span className="font-medium tabular-nums">{qa.score}% match with Figma</span>
          <span className="text-[12px] text-mute underline underline-offset-2 group-open:no-underline">How it’s measured</span>
        </span>
      </summary>
      <div className="mt-2 flex flex-col gap-2 px-1 text-[12px] leading-snug text-mute">
        <p>
          We render this component’s React code in headless Chrome and compare the screenshot with the Figma export, pixel by pixel. {qa.score}% is the perceptual score: both images are halved and lightly blurred so 1px anti-aliasing shifts don’t count, then we measure the share of drawn pixels that match.
        </p>
        <p>
          Strict pixel match at full size: <span className="font-medium tabular-nums text-ink">{qa.strict}%</span>. Code scoring under 99% is published only after a by-eye review.
        </p>
      </div>
    </details>
  );
}
