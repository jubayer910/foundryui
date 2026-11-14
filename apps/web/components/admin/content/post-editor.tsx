"use client";
import { useActionState, useEffect, useMemo, useRef, useState } from "react";
import { savePost, type PostFormState } from "@/app/admin/(panel)/posts/actions";
import { anchor } from "@/lib/blog/markdown";
import { input, textarea } from "@/components/admin/ui";
import { CIco, type ContentIconName } from "./icons";
import { PostPreview } from "./post-preview";
import { ScenePicker } from "./scene-picker";

export type EditorPost = {
  id: string | null;
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  category: string;
  keyword: string;
  body: string;
  faq: { q: string; a: string }[];
  related: string[];
  systems: string[];
  coverScene: string;
  status: "draft" | "published";
  /** "YYYY-MM-DD" or "" */
  date: string;
};

type Props = {
  post: EditorPost;
  categories: readonly string[];
  systems: { slug: string; name: string }[];
  components: { slug: string; name: string }[];
  codeSlugs: string[];
};

const STARTER = `Start with the answer in one or two sentences. This first paragraph is shown large under the cover.

## First section

Write in short paragraphs. Use **bold**, \`code\` and [links](/components/kpi-card).

- A list item
- Another item

> One sentence the reader should remember.
`;

/** Wrap the selection, or insert a line prefix, in the markdown textarea. */
type Tool = { icon: ContentIconName; label: string; keys?: string; run: (sel: string) => { text: string; select?: [number, number]; line?: boolean } };
const TOOLS: Tool[] = [
  { icon: "h-2", label: "Section heading", run: (s) => ({ text: "## " + (s || "Heading"), line: true }) },
  { icon: "h-3", label: "Sub-heading", run: (s) => ({ text: "### " + (s || "Sub-heading"), line: true }) },
  { icon: "bold", label: "Bold", keys: "⌘B", run: (s) => ({ text: `**${s || "bold text"}**`, select: [2, 2 + (s || "bold text").length] }) },
  { icon: "link", label: "Link", keys: "⌘K", run: (s) => ({ text: `[${s || "link text"}](/)`, select: [(s || "link text").length + 3, (s || "link text").length + 4] }) },
  { icon: "code", label: "Inline code", run: (s) => ({ text: "`" + (s || "code") + "`", select: [1, 1 + (s || "code").length] }) },
  { icon: "list", label: "Bulleted list", run: (s) => ({ text: (s || "Item").split("\n").map((l) => "- " + l).join("\n"), line: true }) },
  { icon: "list-numbers", label: "Numbered list", run: (s) => ({ text: (s || "Step").split("\n").map((l, i) => `${i + 1}. ${l}`).join("\n"), line: true }) },
  { icon: "quote", label: "Key takeaway", run: (s) => ({ text: "> " + (s || "The one thing to remember."), line: true }) },
  { icon: "file-text", label: "Code block", run: (s) => ({ text: "```Label\n" + (s || "npx ingotui add kpi-card") + "\n```", line: true }) },
  { icon: "table", label: "Table", run: () => ({ text: "| Option | Best for | Price |\n| --- | --- | --- |\n| One | Founders | Free |\n| Two | Teams | $7 |\n\nTable: What the table shows", line: true }) },
];

function Counter({ n, max, ideal }: { n: number; max: number; ideal: string }) {
  return (
    <span className={"tabular-nums " + (n > max ? "text-[#9b1c1c]" : "text-faint")}>
      {n} / {max}, {ideal}
    </span>
  );
}

export function PostEditor({ post, categories, systems, components, codeSlugs }: Props) {
  const [state, action, pending] = useActionState<PostFormState, FormData>(savePost, {});
  const [title, setTitle] = useState(post.title);
  const [slug, setSlug] = useState(post.slug);
  const [slugTouched, setSlugTouched] = useState(!!post.id);
  const [description, setDescription] = useState(post.description);
  const [metaTitle, setMetaTitle] = useState(post.metaTitle);
  const [category, setCategory] = useState(post.category);
  const [scene, setScene] = useState(post.coverScene);
  const [body, setBody] = useState(post.id ? post.body : post.body || STARTER);
  const [faq, setFaq] = useState(post.faq);
  const [related, setRelated] = useState(post.related);
  const [relInput, setRelInput] = useState("");
  const [view, setView] = useState<"write" | "preview">("write");
  const ta = useRef<HTMLTextAreaElement>(null);
  const saveBtn = useRef<HTMLButtonElement>(null);

  const liveSlug = slugTouched ? slug : anchor(title).slice(0, 80);
  const codeSet = useMemo(() => new Set(codeSlugs), [codeSlugs]);
  const compNames = useMemo(() => new Map(components.map((c) => [c.slug, c.name])), [components]);
  const slugClash = codeSet.has(liveSlug);

  // Unsaved-changes guard. The snapshot resets after every successful save.
  const snap = JSON.stringify([title, liveSlug, description, metaTitle, category, scene, body, faq, related]);
  const [saved, setSaved] = useState(post.id ? snap : "");
  const [seenAt, setSeenAt] = useState(state.at);
  if (state.at !== seenAt) {
    // A save just finished: what is on screen is now what is stored.
    setSeenAt(state.at);
    if (state.ok) setSaved(snap);
  }
  const dirty = snap !== saved;
  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  function apply(t: Tool) {
    const el = ta.current;
    if (!el) return;
    const [a, b] = [el.selectionStart, el.selectionEnd];
    const sel = body.slice(a, b);
    const r = t.run(sel);
    const before = body.slice(0, a);
    const after = body.slice(b);
    let text = r.text;
    if (r.line) {
      // Block constructs go on their own paragraph.
      if (before && !before.endsWith("\n\n")) text = (before.endsWith("\n") ? "\n" : "\n\n") + text;
      if (after && !after.startsWith("\n\n")) text = text + (after.startsWith("\n") ? "\n" : "\n\n");
    }
    const lead = text.indexOf(r.text);
    setBody(before + text + after);
    requestAnimationFrame(() => {
      el.focus();
      const s = a + lead + (r.select ? r.select[0] : r.text.length);
      const e = a + lead + (r.select ? r.select[1] : r.text.length);
      el.setSelectionRange(s, e);
    });
  }

  function onKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (!(e.metaKey || e.ctrlKey)) return;
    const k = e.key.toLowerCase();
    const run = k === "b" ? () => apply(TOOLS[2]) : k === "k" ? () => apply(TOOLS[3]) : k === "s" ? () => saveBtn.current?.click() : null;
    if (!run) return;
    e.preventDefault();
    run();
  }

  function addRelated(raw: string) {
    const s = raw.trim().toLowerCase();
    if (!s || related.includes(s) || related.length >= 8) return setRelInput("");
    setRelated([...related, s]);
    setRelInput("");
  }

  const err = (f: string) => (state.err && state.field === f ? state.err : null);
  const ring = (f: string) => (state.err && state.field === f ? " !shadow-[inset_0_0_0_1px_#c0392b]" : "");
  const live = post.status === "published";

  return (
    <form action={action} className="mt-5" onSubmit={() => setSlug(liveSlug)}>
      {post.id && <input type="hidden" name="id" value={post.id} />}
      <input type="hidden" name="related" value={related.join(",")} />

      <div className="mb-3 flex gap-1.5 xl:hidden" role="tablist" aria-label="Editor view">
        {(["write", "preview"] as const).map((v) => (
          <button key={v} type="button" role="tab" aria-selected={view === v} data-on={view === v} onClick={() => setView(v)} className="pill">
            <CIco name={v === "write" ? "pencil" : "eye"} size={14} />
            {v === "write" ? "Write" : "Preview"}
          </button>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className={"flex min-w-0 flex-col gap-4 " + (view === "preview" ? "max-xl:hidden" : "")}>
          <section className="card flex flex-col gap-3 p-4" aria-label="Post details">
            <label className="flex flex-col gap-1">
              <span className="text-[12px] text-mute">Title</span>
              <input name="title" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="KPI card design: 9 rules that make numbers readable" className={input + " !h-10 !text-[15px] font-medium" + ring("title")} />
              {err("title") && <span className="text-[12px] text-[#9b1c1c]">{err("title")}</span>}
            </label>
            <div className="grid gap-3 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <label className="flex flex-col gap-1">
                <span className="text-[12px] text-mute">Slug {!slugTouched && <span className="text-faint">(from the title)</span>}</span>
                <span className={"flex h-8 items-center rounded-[6px] bg-white text-[13px] shadow-[inset_0_0_0_1px_var(--color-hair-2)] focus-within:shadow-[inset_0_0_0_1px_var(--color-ink)]" + ring("slug")}>
                  <span className="pl-2.5 text-faint">/blog/</span>
                  <input
                    name="slug"
                    value={liveSlug}
                    onChange={(e) => {
                      setSlugTouched(true);
                      setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"));
                    }}
                    className="h-full min-w-0 flex-1 bg-transparent pr-2.5 font-fu-mono text-[12px] outline-none"
                    spellCheck={false}
                  />
                </span>
                {slugClash ? (
                  <span className="text-[12px] text-[#9b1c1c]">A post in the code already uses this slug. Pick another.</span>
                ) : err("slug") ? (
                  <span className="text-[12px] text-[#9b1c1c]">{err("slug")}</span>
                ) : live && liveSlug !== post.slug ? (
                  <span className="text-[12px] text-[#8a5a00]">Changing a live slug breaks links to the old address.</span>
                ) : null}
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-[12px] text-mute">Category</span>
                <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} className={input + ring("category")}>
                  {categories.map((c) => <option key={c}>{c}</option>)}
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-1">
              <span className="flex text-[12px] text-mute">
                Description
                <span className="ml-auto"><Counter n={description.length} max={300} ideal="ideal 120 to 158" /></span>
              </span>
              <textarea name="description" rows={2} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="One or two sentences for Google and the blog card." className={textarea + ring("description")} />
              {err("description") && <span className="text-[12px] text-[#9b1c1c]">{err("description")}</span>}
            </label>
            <div className="grid gap-3 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,0.8fr)]">
              <label className="flex flex-col gap-1">
                <span className="flex text-[12px] text-mute">
                  Meta title
                  <span className="ml-auto"><Counter n={metaTitle.length} max={90} ideal="ideal under 60" /></span>
                </span>
                <input name="metaTitle" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} placeholder="Empty: the title" className={input + ring("metaTitle")} />
                {err("metaTitle") && <span className="text-[12px] text-[#9b1c1c]">{err("metaTitle")}</span>}
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-[12px] text-mute">Primary keyword</span>
                <input name="keyword" defaultValue={post.keyword} placeholder="kpi card design" className={input} />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-[12px] text-mute">Publish date</span>
                <input name="date" type="date" defaultValue={post.date} className={input + ring("date")} />
              </label>
            </div>
            <p className="text-[12px] text-faint">Publish date: empty uses the day you publish. Later edits show as &quot;Updated&quot; on the post.</p>
          </section>

          <section className="card flex flex-col p-0" aria-label="Body">
            <div className="flex flex-wrap items-center gap-0.5 border-b border-hair px-2 py-1.5" role="toolbar" aria-label="Formatting">
              {TOOLS.map((t) => (
                <button key={t.label} type="button" onClick={() => apply(t)} title={t.label + (t.keys ? ` (${t.keys})` : "")} aria-label={t.label} className="flex size-8 items-center justify-center rounded-[6px] text-ink-2 hover:bg-tile hover:text-ink">
                  <CIco name={t.icon} size={17} />
                </button>
              ))}
              <span className="ml-auto flex items-center gap-1.5 pr-1 text-[12px] text-faint">
                <CIco name="markdown" size={16} />
                Markdown
              </span>
            </div>
            <textarea
              ref={ta}
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              onKeyDown={onKey}
              rows={26}
              spellCheck
              aria-label="Post body in markdown"
              className={"min-h-[420px] w-full resize-y rounded-b-[8px] bg-white px-4 py-3 font-fu-mono text-[12.5px] leading-[1.7] outline-none" + (err("body") ? " shadow-[inset_0_0_0_1px_#c0392b]" : "")}
            />
            <p className="border-t border-hair px-4 py-2 text-[12px] leading-relaxed text-faint">
              {err("body") ? <span className="text-[#9b1c1c]">{err("body")} </span> : null}
              ## section, ### sub-heading, - list, 1. steps, &gt; key takeaway, ``` code ```, | tables |. Inline: **bold**, `code`, [text](/link), {"{components}"} live numbers. HTML is shown as text.
            </p>
          </section>

          <section className="card flex flex-col gap-2 p-4" aria-label="Cover">
            <p className="text-[13px] font-medium">Cover illustration</p>
            <ScenePicker name="coverScene" value={scene} onChange={setScene} auto autoLabel={`By category (${category})`} />
            {err("coverScene") && <span className="text-[12px] text-[#9b1c1c]">{err("coverScene")}</span>}
          </section>

          <section className="card flex flex-col gap-3 p-4" aria-label="Related">
            <div>
              <p className="text-[13px] font-medium">Components in this guide</p>
              <p className="text-[12px] text-faint">Up to 8, shown as cards under the post. Type a name or slug.</p>
            </div>
            {related.length > 0 && (
              <ul className="flex flex-wrap gap-1.5">
                {related.map((s) => (
                  <li key={s} className={"flex h-7 items-center gap-1 rounded-full pl-2.5 pr-1 text-[12px] " + (compNames.has(s) ? "bg-chip" : "bg-[#fdecec] text-[#9b1c1c]")}>
                    {compNames.get(s) ?? s}
                    <span className="font-fu-mono text-[11px] text-faint">{s}</span>
                    <button type="button" aria-label={`Remove ${s}`} onClick={() => setRelated(related.filter((x) => x !== s))} className="flex size-5 items-center justify-center rounded-full hover:bg-chip-2">
                      <CIco name="x" size={12} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex gap-2">
              <input
                list="post-components"
                value={relInput}
                onChange={(e) => {
                  const v = e.target.value;
                  // Picking from the list fills the exact slug: add it straight away.
                  if (compNames.has(v)) addRelated(v);
                  else setRelInput(v);
                }}
                onKeyDown={(e) => {
                  if (e.key !== "Enter") return;
                  e.preventDefault();
                  addRelated(relInput);
                }}
                placeholder="kpi-card"
                disabled={related.length >= 8}
                className={input + " font-fu-mono text-[12px]" + ring("related")}
              />
              <button type="button" onClick={() => addRelated(relInput)} className="btn-line shrink-0">
                <CIco name="plus" size={15} />
                Add
              </button>
              <datalist id="post-components">
                {components.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
              </datalist>
            </div>
            {err("related") && <span className="text-[12px] text-[#9b1c1c]">{err("related")}</span>}
            <fieldset className="flex flex-col gap-1.5 border-t border-hair pt-3">
              <legend className="mb-1.5 text-[12px] text-mute">Design systems it covers</legend>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                {systems.map((s) => (
                  <label key={s.slug} className="flex cursor-pointer items-center gap-2 text-[13px]">
                    <input type="checkbox" name="systems" value={s.slug} defaultChecked={post.systems.includes(s.slug)} className="size-4 accent-[#0b0b0b]" />
                    {s.name}
                  </label>
                ))}
              </div>
            </fieldset>
          </section>

          <section className="card flex flex-col gap-3 p-4" aria-label="FAQ">
            <div className="flex items-start gap-2">
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-medium">FAQ</p>
                <p className="text-[12px] text-faint">Shown under the post and sent to Google as FAQ data.</p>
              </div>
              <button type="button" onClick={() => setFaq([...faq, { q: "", a: "" }])} disabled={faq.length >= 12} className="btn-line shrink-0">
                <CIco name="plus" size={15} />
                Add question
              </button>
            </div>
            {faq.map((f, i) => (
              <div key={i} className="flex flex-col gap-1.5 rounded-[8px] bg-tile p-2.5">
                <div className="flex gap-2">
                  <input name="faq_q" value={f.q} onChange={(e) => setFaq(faq.map((x, j) => (j === i ? { ...x, q: e.target.value } : x)))} placeholder="Question" aria-label={`Question ${i + 1}`} className={input} />
                  <button type="button" aria-label={`Remove question ${i + 1}`} title="Remove" onClick={() => setFaq(faq.filter((_, j) => j !== i))} className="flex size-8 shrink-0 items-center justify-center rounded-[6px] text-mute hover:bg-white hover:text-[#9b1c1c]">
                    <CIco name="trash" size={16} />
                  </button>
                </div>
                <textarea name="faq_a" rows={2} value={f.a} onChange={(e) => setFaq(faq.map((x, j) => (j === i ? { ...x, a: e.target.value } : x)))} placeholder="Answer" aria-label={`Answer ${i + 1}`} className={textarea} />
              </div>
            ))}
            {err("faq") && <span className="text-[12px] text-[#9b1c1c]">{err("faq")}</span>}
          </section>
        </div>

        <div className={"min-w-0 " + (view === "write" ? "max-xl:hidden" : "")}>
          <div className="card sticky top-[72px] max-h-[calc(100dvh-152px)] overflow-y-auto">
            <p className="sticky top-0 z-10 flex items-center gap-2 border-b border-hair bg-white/95 px-4 py-2 text-[12px] text-mute backdrop-blur">
              <CIco name="eye" size={15} />
              Live preview with the site&apos;s post components
            </p>
            <div className="px-5 pb-8 pt-5">
              <PostPreview v={{ title, slug: liveSlug, category, scene, body, date: post.date || null, faq }} />
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 z-20 -mx-4 mt-5 flex flex-wrap items-center gap-2 border-t border-hair bg-white/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
        <p role="status" aria-live="polite" className={"mr-auto flex min-w-0 items-center gap-1.5 text-[13px] " + (state.err ? "text-[#9b1c1c]" : "text-mute")}>
          {state.err ? (
            <>
              <CIco name="x" size={15} className="shrink-0" />
              {state.err}
            </>
          ) : state.ok && !dirty ? (
            <>
              <CIco name="circle-check" size={15} className="shrink-0 text-ink" />
              {state.ok}
            </>
          ) : dirty ? (
            "Unsaved changes"
          ) : live ? (
            "Live on the site"
          ) : (
            "Draft, only staff can see it"
          )}
        </p>
        {live ? (
          <>
            <button name="intent" value="unpublish" disabled={pending} className="btn-line">
              <CIco name="eye-off" size={15} />
              Unpublish
            </button>
            <button ref={saveBtn} name="intent" value="save" disabled={pending || slugClash} className="btn-ink">
              <CIco name="device-floppy" size={15} />
              {pending ? "Saving" : "Update post"}
            </button>
          </>
        ) : (
          <>
            <button ref={saveBtn} name="intent" value="save" disabled={pending || slugClash} className="btn-line">
              <CIco name="device-floppy" size={15} />
              {pending ? "Saving" : "Save draft"}
            </button>
            <button name="intent" value="publish" disabled={pending || slugClash} className="btn-ink">
              <CIco name="send" size={15} />
              Publish
            </button>
          </>
        )}
      </div>
    </form>
  );
}
