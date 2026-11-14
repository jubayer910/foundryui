import type { Metadata } from "next";
import Link from "next/link";
import { requireStaff } from "@/lib/admin";
import { sp } from "@/components/admin/guard";
import { AdminHead, Confirm, Field, Flash, Table, Tag, input, td, textarea, when } from "@/components/admin/ui";
import { IlloTile } from "@/components/site/illo";
import { CIco } from "@/components/admin/content/icons";
import { ScenePicker } from "@/components/admin/content/scene-picker";
import { Icon } from "@/registry/components/icons";
import { fmtChangelogDate, listChangelog } from "@/app/changelog/entries";
import { deleteEntry, saveEntry, toggleEntry } from "./actions";

export const metadata: Metadata = { title: "Changelog" };

export default async function AdminChangelog({ searchParams }: PageProps<"/admin/changelog">) {
  await requireStaff("content", "/admin/changelog");
  const q = await searchParams;
  const editId = sp(q.edit);
  const isNew = sp(q.new) === "1";
  const all = await listChangelog({ all: true });
  const shown = all.filter((e) => e.published).length;
  const editing = editId ? all.find((e) => e.id === editId) : undefined;
  const draft = editing ?? (isNew ? { id: "", date: new Date().toISOString().slice(0, 10), title: "", items: [], scene: "stack", published: true } : null);

  return (
    <div>
      <AdminHead title="Changelog" sub={`${all.length} entries, ${shown} on /changelog. Newest first; the page updates as soon as you save.`}>
        <a href="/changelog" target="_blank" rel="noopener" className="btn-line">
          <CIco name="external-link" size={15} />
          View on site
        </a>
        <Link href="/admin/changelog?new=1" className="btn-ink">
          <Icon name="plus" size={15} />
          New entry
        </Link>
      </AdminHead>
      <Flash ok={q.ok} err={q.err} />

      {draft && (
        <form action={saveEntry} className="card mt-5 grid gap-4 p-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <p className="text-[13px] font-medium">{draft.id ? "Edit entry" : "New entry"}</p>
              <Link href="/admin/changelog" className="ml-auto text-[12px] text-faint hover:text-ink">
                Close
              </Link>
            </div>
            {draft.id && <input type="hidden" name="id" value={draft.id} />}
            <div className="grid gap-3 sm:grid-cols-[160px_minmax(0,1fr)]">
              <Field label="Date">
                <input type="date" name="date" required defaultValue={draft.date} className={input} />
              </Field>
              <Field label="Title">
                <input name="title" required defaultValue={draft.title} placeholder="Charts for every system" className={input} />
              </Field>
            </div>
            <Field label="What shipped" hint="One line each. Each line shows with a plus icon.">
              <textarea name="items" required rows={7} defaultValue={draft.items.join("\n")} placeholder={"New Kargo system: 240 components\nMCP get_chart returns the data shape"} className={textarea} />
            </Field>
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex cursor-pointer items-center gap-2 text-[13px]">
                <input type="checkbox" name="published" defaultChecked={draft.published} className="size-4 accent-[#0b0b0b]" />
                Show on /changelog
              </label>
              <button className="btn-ink ml-auto">
                <CIco name="device-floppy" size={15} />
                {draft.id ? "Save entry" : "Add entry"}
              </button>
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-1">
            <span className="text-[12px] text-mute">Illustration</span>
            <ScenePicker name="scene" defaultValue={draft.scene} />
          </div>
        </form>
      )}

      <div className="mt-5">
        <Table head={["", "Date", "Title", "Lines", "Status", "Updated", ""]} empty="No entries yet.">
          {all.map((e) => (
            <tr key={e.id} className={e.id === editId ? "bg-wash" : ""}>
              <td className={td + " w-[76px]"}>
                <IlloTile scene={e.scene} label={e.title} className="h-[44px] w-[60px]" />
              </td>
              <td className={td + " whitespace-nowrap"}>{fmtChangelogDate(e.date)}</td>
              <td className={td + " max-w-[380px]"}>
                <Link href={`/admin/changelog?edit=${e.id}`} className="font-medium hover:underline">{e.title}</Link>
                <span className="block truncate text-[12px] text-mute">{e.items[0]}</span>
              </td>
              <td className={td + " tabular-nums"}>{e.items.length}</td>
              <td className={td}>
                <form action={toggleEntry}>
                  <input type="hidden" name="id" value={e.id} />
                  <button title={e.published ? "Hide from /changelog" : "Show on /changelog"} className="cursor-pointer">
                    <Tag tone={e.published ? "good" : "plain"}>{e.published ? "Shown" : "Hidden"}</Tag>
                  </button>
                </form>
              </td>
              <td className={td + " whitespace-nowrap text-mute"}>{when(e.updatedAt)}</td>
              <td className={td + " whitespace-nowrap text-right"}>
                <Link href={`/admin/changelog?edit=${e.id}`} className="btn-line !h-7 !px-3">
                  <CIco name="pencil" size={14} />
                  Edit
                </Link>{" "}
                <Confirm label="Delete" tone="bad">
                  <form action={deleteEntry} className="flex flex-col gap-2 text-left whitespace-normal">
                    <input type="hidden" name="id" value={e.id} />
                    <p className="text-[12px] text-mute">Delete &quot;{e.title}&quot;? It leaves /changelog right away. The full entry stays in the audit log.</p>
                    <button className="btn-ink !h-7">Delete entry</button>
                  </form>
                </Confirm>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
