"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, useTransition } from "react";
import { RAW_HEADER, seoKey, type ContentMap } from "@/lib/content/edit";
import type { EditablePage } from "@/lib/content/pages";
import { savePageContent, undoContentEdit } from "@/app/admin/(panel)/pages/actions";
import { Tag, input, textarea } from "@/components/admin/ui";

type Field = { key: string; tag: string; text: string; long: boolean };
type Edit = { id: number; actor: string; path: string; keys: string[]; undo: number | null; at: string };

const PART: Record<string, string> = { title: "Title", sub: "Subtitle", eyebrow: "Small label above the title", intro: "Intro", cta: "Button", q: "Question", a: "Answer", h: "Heading", p: "Text", note: "Note", body: "Text" };
const GROUP: Record<string, string> = { head: "Page header", hero: "Hero", faq: "Questions", seo: "Search and sharing" };
const human = (s: string) => (s.charAt(0).toUpperCase() + s.slice(1)).replace(/[-_]+/g, " ");
const clean = (s: string) => s.replace(/\s+/g, " ").trim();

/** Reads the page as built (no saved edits) and lists every text the code marked editable, in page order. */
async function readPage(path: string): Promise<{ fields: Field[]; title: string; description: string }> {
  const res = await fetch(path, { headers: { [RAW_HEADER]: "1" }, cache: "no-store", credentials: "omit" });
  if (!res.ok) throw new Error(String(res.status));
  const doc = new DOMParser().parseFromString(await res.text(), "text/html");
  const seen = new Set<string>();
  const fields: Field[] = [];
  for (const el of doc.querySelectorAll<HTMLElement>("[data-edit]")) {
    const key = el.dataset.edit || "";
    if (!key || seen.has(key)) continue;
    seen.add(key);
    const text = clean(el.textContent || "");
    const tag = el.tagName.toLowerCase();
    fields.push({ key, tag, text, long: text.length > 70 || tag === "p" });
  }
  return { fields, title: clean(doc.title), description: clean(doc.querySelector('meta[name="description"]')?.getAttribute("content") || "") };
}

type Props = { pages: EditablePage[]; page: EditablePage; content: ContentMap; history: Edit[] };

/** Keyed by page, so switching pages starts clean. */
export function PagesEditor(props: Props) {
  return <Editor key={props.page.path} {...props} />;
}

function Editor({ pages, page, content, history }: Props) {
  const router = useRouter();
  const [data, setData] = useState<{ fields: Field[]; title: string; description: string } | null>(null);
  const [loadErr, setLoadErr] = useState("");
  // only what the owner typed since the last save; everything else shows the saved edit or the original
  const [typed, setTyped] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState<{ ok?: string; err?: string }>({});
  const [pending, start] = useTransition();

  const tKey = seoKey(page.path, "title");
  const dKey = seoKey(page.path, "description");

  useEffect(() => {
    let alive = true;
    readPage(page.path)
      .then((d) => alive && setData(d))
      .catch(() => alive && setLoadErr("Couldn't read this page. Open it once in a new tab, then reload this one."));
    return () => {
      alive = false;
    };
  }, [page.path]);

  // defaults: the text in the code; values: the saved edit, else the default
  const defaults = useMemo(() => {
    const m: Record<string, string> = {};
    if (!data) return m;
    for (const f of data.fields) m[f.key] = f.text;
    m[tKey] = data.title;
    m[dKey] = data.description;
    return m;
  }, [data, tKey, dKey]);

  const vals = useMemo(() => {
    const v: Record<string, string> = {};
    for (const k of Object.keys(defaults)) v[k] = typed[k] ?? content[k] ?? defaults[k];
    return v;
  }, [defaults, content, typed]);
  const setVal = (k: string, v: string) => setTyped((t) => ({ ...t, [k]: v }));

  const changes = useMemo(() => {
    const c: Record<string, string | null> = {};
    for (const k of Object.keys(defaults)) {
      const v = clean(vals[k] ?? "");
      const want = !v || v === defaults[k] ? null : v;
      if (want !== (content[k] ?? null)) c[k] = want;
    }
    return c;
  }, [vals, defaults, content]);
  const dirty = Object.keys(changes).length;

  const save = () =>
    start(async () => {
      const r = await savePageContent(page.path, changes);
      setMsg(r);
      if (r.ok) {
        setTyped({});
        router.refresh();
      }
    });
  const undo = (id: number) =>
    start(async () => {
      const r = await undoContentEdit(id);
      setMsg(r);
      if (r.ok) {
        setTyped({});
        router.refresh();
      }
    });

  // group fields by their second key part: "pricing.faq.refund.q" → faq
  const groups = useMemo(() => {
    const g: { id: string; fields: Field[] }[] = [];
    for (const f of data?.fields ?? []) {
      const parts = f.key.split(".");
      const id = parts.length > 2 ? parts[1] : "head";
      const last = g[g.length - 1];
      if (last && last.id === id) last.fields.push(f);
      else g.push({ id, fields: [f] });
    }
    return g;
  }, [data]);

  const byGroup = pages.reduce<Record<string, EditablePage[]>>((m, p) => ((m[p.group] ??= []).push(p), m), {});
  const edited = (k: string) => content[k] !== undefined;
  const labelOf = (path: string) => pages.find((p) => p.path === path)?.label ?? path;

  const fieldRow = (key: string, label: string, long: boolean, max = 2000) => {
    const v = vals[key] ?? "";
    const changedHere = clean(v) !== clean(content[key] ?? defaults[key] ?? "");
    return (
      <div key={key} className="flex flex-col gap-1.5 border-b border-hair px-4 py-3 last:border-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[12.5px] font-medium">{label}</span>
          {edited(key) && <Tag tone="ink">Edited</Tag>}
          {changedHere && <Tag tone="warn">Not saved</Tag>}
          {(edited(key) || clean(v) !== defaults[key]) && (
            <button type="button" onClick={() => setVal(key, defaults[key] ?? "")} className="ml-auto text-[12px] text-mute underline underline-offset-2 hover:text-ink">
              Back to original
            </button>
          )}
        </div>
        {long ? (
          <textarea value={v} maxLength={max} rows={Math.min(10, Math.max(2, Math.ceil(v.length / 70) + 1))} onChange={(e) => setVal(key, e.target.value)} className={textarea} />
        ) : (
          <input value={v} maxLength={max} onChange={(e) => setVal(key, e.target.value)} className={input} />
        )}
        {edited(key) && defaults[key] !== undefined && clean(v) !== defaults[key] && <p className="text-[12px] leading-snug text-faint">Original: {defaults[key] || "(empty)"}</p>}
      </div>
    );
  };

  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-[200px_minmax(0,1fr)]">
      <nav aria-label="Pages" className="hidden lg:block">
        {Object.entries(byGroup).map(([g, list]) => (
          <div key={g} className="mb-4">
            <p className="mb-1 px-2 text-[11px] font-medium tracking-[0.02em] text-faint uppercase">{g}</p>
            <ul>
              {list.map((p) => (
                <li key={p.path}>
                  <Link href={`/admin/pages?p=${encodeURIComponent(p.path)}`} aria-current={p.path === page.path ? "page" : undefined} className={"flex h-8 items-center rounded-[6px] px-2 text-[13px] " + (p.path === page.path ? "bg-tile font-medium text-ink" : "text-ink-2 hover:bg-tile")}>
                    <span className="truncate">{p.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="min-w-0">
        <label className="mb-4 block lg:hidden">
          <span className="sr-only">Page</span>
          <select value={page.path} onChange={(e) => router.push(`/admin/pages?p=${encodeURIComponent(e.target.value)}`)} className={input}>
            {pages.map((p) => (
              <option key={p.path} value={p.path}>{p.group}: {p.label}</option>
            ))}
          </select>
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-[15px] font-medium">{page.label}</h2>
          <a href={page.path} target="_blank" rel="noreferrer" className="text-[12.5px] text-mute underline underline-offset-2 hover:text-ink max-md:inline-flex max-md:min-h-11 max-md:items-center max-md:text-[13px]">
            Open {page.path} in a new tab
          </a>
        </div>

        {loadErr && <p className="mt-4 text-[13px] text-[#c0392b]">{loadErr}</p>}
        {!data && !loadErr && <p className="mt-4 text-[13px] text-mute">Reading the page…</p>}

        {data && (
          <>
            {groups.length === 0 && <p className="mt-4 text-[13px] text-mute">This page has no editable text yet, only its search title and description below.</p>}
            {groups.map((g) => (
              <section key={g.id + g.fields[0].key} className="mt-5">
                <h3 className="mb-2 text-[12px] font-medium text-mute">{GROUP[g.id] ?? human(g.id)}</h3>
                <div className="card bg-white">
                  {g.fields.map((f) => {
                    const parts = f.key.split(".");
                    const last = parts[parts.length - 1];
                    return fieldRow(f.key, PART[last] ?? human(last), f.long);
                  })}
                </div>
              </section>
            ))}

            <section className="mt-5">
              <h3 className="mb-2 text-[12px] font-medium text-mute">{GROUP.seo}</h3>
              <div className="card bg-white">
                {fieldRow(tKey, "Title in Google and on shared links", false, 120)}
                {fieldRow(dKey, "Description in Google and on shared links", true, 300)}
              </div>
              <p className="mt-2 text-[12px] text-mute">Keep the title under about 60 characters and the description under about 155, so Google shows them whole.</p>
            </section>
          </>
        )}

        <div className="sticky bottom-[var(--admin-bottom,0px)] z-10 -mx-1 mt-6 flex max-md:-mx-4 max-md:border-t max-md:border-hair max-md:px-4 flex-wrap items-center gap-3 bg-[var(--color-page,#fff)]/95 px-1 py-3 backdrop-blur">
          <button type="button" onClick={save} disabled={!dirty || pending} className="btn-ink disabled:opacity-50">
            {pending ? "Saving…" : dirty ? `Save ${dirty} ${dirty === 1 ? "change" : "changes"}` : "Saved"}
          </button>
          {dirty > 0 && (
            <button type="button" onClick={() => setTyped({})} className="btn-line">
              Discard
            </button>
          )}
          {msg.ok && <span className="text-[12.5px] text-[#18794e]">{msg.ok}</span>}
          {msg.err && <span className="text-[12.5px] text-[#c0392b]">{msg.err}</span>}
        </div>

        <section className="mt-8">
          <h3 className="mb-2 text-[13px] font-medium">Recent changes</h3>
          {history.length === 0 ? (
            <p className="text-[13px] text-mute">No text changed yet.</p>
          ) : (
            <div className="card bg-white">
              {history.map((h) => (
                <div key={h.id} className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-hair px-4 py-2.5 text-[13px] last:border-0">
                  <span className="font-medium">{labelOf(h.path)}</span>
                  <span className="text-mute">
                    {h.undo ? "Undo, " : ""}
                    {h.keys.length} {h.keys.length === 1 ? "field" : "fields"}
                  </span>
                  <span className="text-faint">{h.actor}</span>
                  <span className="ml-auto text-[12px] text-faint">{new Date(h.at).toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</span>
                  <button type="button" disabled={pending} onClick={() => undo(h.id)} className="text-[12px] text-mute underline underline-offset-2 hover:text-ink">
                    Undo
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
