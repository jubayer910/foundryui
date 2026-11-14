import type { Metadata } from "next";
import Link from "next/link";
import { asc, desc, eq } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { matchArticles } from "@/lib/support/match";
import { adminOnly, sp } from "@/components/admin/guard";
import { AdminHead, Confirm, Field, Flash, Section, Table, Tag, day, input, textarea, td } from "@/components/admin/ui";
import { Icon } from "@/registry/components/icons";
import { deleteArticle, saveArticle, togglePublished } from "./actions";

export const metadata: Metadata = { title: "Knowledge base" };

export default async function AdminKb({ searchParams }: PageProps<"/admin/kb">) {
  await adminOnly();
  const q = await searchParams;
  const editId = sp(q.edit);
  const fromTicket = sp(q.from);
  const isNew = sp(q.new) === "1" || !!fromTicket;
  const test = sp(q.test).trim();
  const cat = sp(q.cat);
  const db = await getDb();
  const A = schema.kbArticle;
  const all = await db.select().from(A).orderBy(asc(A.category), asc(A.question));
  const categories = [...new Set(all.map((a) => a.category))].sort();
  const rows = cat ? all.filter((a) => a.category === cat) : all;

  let draft: { id?: string; question: string; answer: string; keywords: string; category: string; slug: string; published: boolean } | null = null;
  if (editId) {
    const a = all.find((x) => x.id === editId);
    if (a) draft = a;
  } else if (fromTicket) {
    const [t] = await db.select().from(schema.ticket).where(eq(schema.ticket.id, fromTicket)).limit(1);
    const msgs = t ? await db.select().from(schema.ticketMessage).where(eq(schema.ticketMessage.ticketId, t.id)).orderBy(desc(schema.ticketMessage.createdAt)) : [];
    const reply = msgs.find((m) => m.author === "admin");
    draft = { question: t?.subject ?? "", answer: reply?.body ?? "", keywords: "", category: "General", slug: "", published: false };
  } else if (isNew) {
    draft = { question: "", answer: "", keywords: "", category: "General", slug: "", published: true };
  }

  const published = all.filter((a) => a.published);
  const matches = test ? matchArticles(test, published, 3) : [];
  const here = "/admin/kb" + (cat ? `?cat=${encodeURIComponent(cat)}` : "");

  return (
    <div>
      <AdminHead title="Knowledge base" sub={`${all.length} articles, ${published.length} published. The support widget answers from these.`}>
        <Link href="/admin/kb?new=1" className="btn-ink">
          <Icon name="plus" size={15} />
          New article
        </Link>
      </AdminHead>
      <Flash ok={q.ok} err={q.err} />

      {draft && (
        <form action={saveArticle} className="card mt-5 flex flex-col gap-3 p-4">
          <div className="flex items-center gap-2">
            <p className="text-[13px] font-medium">{draft.id ? "Edit article" : fromTicket ? "New article from ticket" : "New article"}</p>
            <Link href={here} className="ml-auto text-[12px] text-faint hover:text-ink">
              Close
            </Link>
          </div>
          {draft.id && <input type="hidden" name="id" value={draft.id} />}
          {fromTicket && <input type="hidden" name="fromTicket" value={fromTicket} />}
          <Field label="Question" hint="Write it the way a customer would ask it.">
            <input name="question" required defaultValue={draft.question} className={input} />
          </Field>
          <Field label="Answer">
            <textarea name="answer" required rows={7} defaultValue={draft.answer} className={textarea} />
          </Field>
          <div className="grid gap-3 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <Field label="Keywords" hint="Comma separated, extra words and synonyms people use.">
              <input name="keywords" defaultValue={draft.keywords} placeholder="refund, money back, cancel" className={input} />
            </Field>
            <Field label="Category">
              <input name="category" list="kb-categories" defaultValue={draft.category} className={input} />
              <datalist id="kb-categories">
                {categories.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </Field>
            <Field label="Slug" hint="Empty: made from the question.">
              <input name="slug" defaultValue={draft.slug} placeholder="auto" className={input + " font-fu-mono text-[12px]"} />
            </Field>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex cursor-pointer items-center gap-2 text-[13px]">
              <input type="checkbox" name="published" defaultChecked={draft.published} className="size-4 accent-[#0b0b0b]" />
              Published
            </label>
            <button className="btn-ink ml-auto">{draft.id ? "Save article" : "Create article"}</button>
          </div>
        </form>
      )}

      <Section title="Test the matcher" sub="Runs the same matcher as the support widget over published articles.">
        <form method="get" className="flex gap-2">
          {cat && <input type="hidden" name="cat" value={cat} />}
          <input name="test" defaultValue={test} placeholder="Type a customer question, e.g. can I get a refund?" className={input + " max-w-[520px]"} />
          <button className="btn-ink">
            <Icon name="search" size={15} />
            Test
          </button>
        </form>
        {test && (
          <ol className="mt-3 flex flex-col gap-2">
            {matches.map((m, i) => (
              <li key={m.article.id} className="card flex items-start gap-3 p-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-chip text-[12px] tabular-nums">{i + 1}</span>
                <span className="min-w-0 flex-1">
                  <Link href={`/admin/kb?edit=${m.article.id}`} className="font-medium hover:underline">
                    {m.article.question}
                  </Link>
                  <span className="mt-0.5 line-clamp-2 block text-[12px] text-mute">{m.article.answer}</span>
                </span>
                <span className="shrink-0 text-right">
                  <span className="block text-[12px] text-faint">score</span>
                  <span className="block text-[15px] font-medium tabular-nums">{Number.isInteger(m.score) ? m.score : m.score.toFixed(2)}</span>
                </span>
              </li>
            ))}
            {!matches.length && <li className="card p-3 text-[13px] text-mute">No article matches. This question would become a ticket.</li>}
          </ol>
        )}
      </Section>

      <Section
        title="Articles"
        action={
          <div className="flex flex-wrap gap-1.5">
            <Link href="/admin/kb" data-on={!cat} className="pill !h-7">All</Link>
            {categories.map((c) => (
              <Link key={c} href={`/admin/kb?cat=${encodeURIComponent(c)}`} data-on={cat === c} className="pill !h-7">
                {c}
              </Link>
            ))}
          </div>
        }
      >
        <Table head={["Question", "Category", "Slug", "Updated", "Status", ""]} empty="No articles yet.">
          {rows.map((a) => (
            <tr key={a.id} className={a.id === editId ? "bg-wash" : ""}>
              <td className={td + " max-w-[360px]"}>
                <Link href={`/admin/kb?edit=${a.id}`} className="hover:underline">{a.question}</Link>
              </td>
              <td className={td + " whitespace-nowrap"}>{a.category}</td>
              <td className={td + " font-fu-mono text-[12px] text-mute"}>{a.slug}</td>
              <td className={td + " whitespace-nowrap text-mute"}>{day(a.updatedAt)}</td>
              <td className={td}>
                <form action={togglePublished}>
                  <input type="hidden" name="id" value={a.id} />
                  <input type="hidden" name="back" value={here} />
                  <button title={a.published ? "Unpublish" : "Publish"} className="cursor-pointer">
                    <Tag tone={a.published ? "good" : "plain"}>{a.published ? "published" : "draft"}</Tag>
                  </button>
                </form>
              </td>
              <td className={td + " text-right whitespace-nowrap"}>
                <Link href={`/admin/kb?edit=${a.id}`} className="btn-line !h-7 !px-3">Edit</Link>{" "}
                <Confirm label="Delete" tone="bad">
                  <form action={deleteArticle} className="flex flex-col gap-2 text-left whitespace-normal">
                    <input type="hidden" name="id" value={a.id} />
                    <p className="text-[12px] text-mute">Delete this article? The widget stops using it right away. Its text stays in the audit log.</p>
                    <button className="btn-ink !h-7">Delete article</button>
                  </form>
                </Confirm>
              </td>
            </tr>
          ))}
        </Table>
      </Section>
    </div>
  );
}
