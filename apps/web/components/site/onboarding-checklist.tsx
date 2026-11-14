import Link from "next/link";
import { getSystem, systems } from "@/lib/catalog";
import { getOnboarding, SEGMENTS } from "@/app/api/feedback/store";
import { CIcon, type ChromeIconName } from "./chrome-icon";
import { Icon } from "@/registry/components/icons";
import { FeedbackAsk, LibrarySync, SegmentSurvey } from "./feedback-ask";

type Step = { key: "system" | "agent" | "build"; icon: ChromeIconName; title: string; todo: string; done: string; href: string; cta: string };

/**
 * Founder onboarding on /account: three steps with real completion state from D1, then the
 * one-question segment survey and, for active users only, the feedback ask.
 * Activation = first copy or first MCP call; every step links to the place where it happens.
 */
export async function OnboardingChecklist({ user }: { user: { id: string; name: string; plan: string } }) {
  const s = await getOnboarding(user).catch(() => null);
  if (!s) return null; // tables missing (migration not applied yet): render nothing rather than break /account
  const sys = s.system ? getSystem(s.system) : undefined;

  const steps: Step[] = [
    {
      key: "system",
      icon: "grid",
      title: "Pick your system",
      todo: "Choose the look your product will use. The library opens in it, and your agent builds with it.",
      done: sys ? "You’re building with " + sys.name + "." : "Saved items are in your account.",
      href: "/welcome?next=/account",
      cta: "Pick a system",
    },
    {
      key: "agent",
      icon: "plug",
      title: "Connect your agent",
      todo: "Add Ingot UI to Claude Code, Cursor or VS Code with an API key, then let your agent make one call.",
      done: "Your agent has called Ingot UI.",
      href: "/mcp",
      cta: "Connect agent",
    },
    {
      key: "build",
      icon: "dashboard",
      title: "Build your first screen",
      todo: "Copy a component, install one with the CLI, or ask your agent to scaffold a screen.",
      done: "Your first component is in your project.",
      href: sys ? "/systems/" + sys.slug : "/",
      cta: sys ? "Open " + sys.name : "Browse components",
    },
  ];
  const doneCount = steps.filter((x) => s.steps[x.key]).length;
  const all = doneCount === steps.length;

  return (
    <>
      {!s.steps.system && <LibrarySync systems={systems.map((x) => x.slug)} />}
      <details open={!all} className="card group mt-5">
        <summary className="flex cursor-pointer list-none items-center gap-3 p-4 [&::-webkit-details-marker]:hidden">
          <span className="min-w-0 flex-1">
            <h2 className="text-[13px] font-medium">{all ? "You’re set up" : "Get your first screen built"}</h2>
            <span className="block text-[13px] text-mute">
              {all ? "System picked, agent connected, first component in your project." : doneCount + " of 3 done. Three steps to a real screen."}
            </span>
          </span>
          <span className="hidden h-1.5 w-24 overflow-hidden rounded-full bg-chip sm:block" aria-hidden="true">
            <span className="block h-full rounded-full bg-ink" style={{ width: (doneCount / 3) * 100 + "%" }} />
          </span>
          <Icon name="chevron-down" size={16} className="shrink-0 text-mute transition-transform group-open:rotate-180 motion-reduce:transition-none" />
          <span className="sr-only">{all ? "Show steps" : "Hide steps"}</span>
        </summary>
        <ol className="divide-y divide-hair border-t border-hair">
          {steps.map((x, i) => {
            const ok = s.steps[x.key];
            return (
              <li key={x.key} className="flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-3">
                <span className={"grid size-8 shrink-0 place-items-center rounded-[8px] " + (ok ? "bg-ink text-white" : "bg-tile")}>
                  {ok ? <Icon name="check" size={16} /> : <CIcon name={x.icon} size={16} />}
                </span>
                <span className="min-w-0 flex-1 basis-[200px]">
                  <span className="block text-[13px] font-medium">
                    <span className="sr-only">{"Step " + (i + 1) + (ok ? ", done: " : ": ")}</span>
                    {x.title}
                  </span>
                  <span className="block text-[13px] text-mute">{ok ? x.done : x.todo}</span>
                </span>
                {ok ? (
                  <span className="pill !bg-tile text-mute">Done</span>
                ) : (
                  <Link href={x.href} className={i === steps.findIndex((y) => !s.steps[y.key]) ? "btn-ink" : "btn-line"}>
                    {x.cta}
                    <Icon name="chevron-right" size={14} />
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </details>
      {s.showSurvey && <SegmentSurvey options={SEGMENTS.map((o) => ({ id: o.id, label: o.label }))} />}
      {s.showFeedback && <FeedbackAsk defaultName={user.name} />}
    </>
  );
}
