import Link from "next/link";
import { desc } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { Drawer } from "@/components/admin/drawer";
import { Field, PhoneList, Table, Tag, input, td, when } from "@/components/admin/ui";
import { giftLifetime, resendGiftAction, revokeGiftAction } from "./actions";

const TONE = { pending: "warn", claimed: "good", revoked: "plain" } as const;
const LABEL = { pending: "Invite sent", claimed: "Lifetime on", revoked: "Cancelled" } as const;
type St = keyof typeof TONE;
const st = (s: string): St => (s in TONE ? (s as St) : "pending");

/** Every gift, newest first: waiting invites, claimed gifts and cancelled ones. */
export async function GiftList({ canGift }: { canGift: boolean }) {
  const db = await getDb();
  const rows = await db.select().from(schema.gift).orderBy(desc(schema.gift.createdAt)).limit(200);
  const actions = (g: (typeof rows)[number]) =>
    canGift && g.status !== "revoked" ? (
      <div className="flex flex-wrap gap-2 md:flex-nowrap md:justify-end">
        {g.status === "pending" && (
          <form action={resendGiftAction}>
            <input type="hidden" name="id" value={g.id} />
            <button className="btn-line !h-8 !px-3 max-md:!h-11 max-md:!px-4">Resend</button>
          </form>
        )}
        <form action={revokeGiftAction}>
          <input type="hidden" name="id" value={g.id} />
          <button className="btn-line !h-8 !px-3 text-[#a3261a] max-md:!h-11 max-md:!px-4">{g.status === "claimed" ? "Take back" : "Cancel invite"}</button>
        </form>
      </div>
    ) : null;
  const sub = (g: (typeof rows)[number]) => (g.status === "claimed" && g.claimedAt ? `Claimed ${when(g.claimedAt)}` : g.sentAt ? `Sent ${when(g.sentAt)}` : `Saved ${when(g.createdAt)}, not emailed`);

  return (
    <div className="mt-4">
      <p className="mb-3 text-[13px] text-mute">
        Lifetime given by staff. Gifts are not sales: they never count in revenue, orders, buyers, Paying customers or the launch-deal spots.
      </p>
      <Table
        head={["Email", "Status", "Note", "Given by", "Date", ""]}
        right={[5]}
        empty="No gifts yet. Use Gift Lifetime to send the first one."
        mobile={
          <PhoneList label="Gifts">
            {rows.map((g) => (
              <li key={g.id} className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="min-w-0 flex-1 truncate text-[15px] font-medium">{g.email}</span>
                  <Tag tone={TONE[st(g.status)]}>{LABEL[st(g.status)]}</Tag>
                </div>
                <p className="mt-0.5 text-[13px] text-mute">
                  {sub(g)}
                  {g.note ? `, ${g.note}` : ""}
                </p>
                <div className="mt-2">{actions(g)}</div>
              </li>
            ))}
          </PhoneList>
        }
      >
        {rows.map((g) => (
          <tr key={g.id}>
            <td className={td + " whitespace-nowrap"}>{g.userId ? <Link href={`/admin/users/${g.userId}`} className="font-medium hover:underline">{g.email}</Link> : <span className="font-medium">{g.email}</span>}</td>
            <td className={td}><Tag tone={TONE[st(g.status)]}>{LABEL[st(g.status)]}</Tag></td>
            <td className={td + " max-w-[260px] truncate text-mute"}>{g.note || <span className="text-faint">None</span>}</td>
            <td className={td + " text-mute"}>{g.invitedBy}</td>
            <td className={td + " whitespace-nowrap text-mute tabular-nums"}>{sub(g)}</td>
            <td className={td}>{actions(g)}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

/** The Gift Lifetime form, in a drawer (a bottom sheet on phones). */
export function GiftDrawer({ closeHref, err }: { closeHref: string; err?: string }) {
  return (
    <Drawer title="Gift Lifetime" sub="Free Lifetime access, kept apart from sales" closeHref={closeHref}>
      <form action={giftLifetime} className="grid gap-4">
        {err && (
          <p role="alert" className="rounded-[8px] bg-[#fdecea] px-3 py-2 text-[13px] text-[#a3261a]">
            {err}
          </p>
        )}
        <Field label="Email">
          <input name="email" type="email" required autoComplete="off" placeholder="name@company.com" className={input} />
        </Field>
        <Field label="Note (optional)" hint="Why, for the audit log. The person does not see it.">
          <input name="note" placeholder="Giveaway winner, partner, press" className={input} />
        </Field>
        <ul className="grid gap-2 text-[13px] text-mute">
          <li>Has an account already: Lifetime switches on now, and we email them.</li>
          <li>No account yet: we email an invite link. Lifetime switches on when they create an account from it.</li>
          <li>Not counted as a sale anywhere: revenue, orders, buyers and deal spots leave gifts out.</li>
        </ul>
        <button className="btn-ink !h-11 w-full">Send gift</button>
      </form>
    </Drawer>
  );
}
