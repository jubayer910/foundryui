"use client";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/registry/components/icons";

type Seat = { id: string; email: string; role: string; status: "joined" | "pending"; invitedAt: string; joinedAt: string | null; link: string | null };
type State = {
  email: string;
  owner: { active: boolean; seats: number; used: number; members: Seat[] } | null;
  member: { memberId: string; ownerEmail: string; ownerName: string; active: boolean } | null;
  invite:
    | { valid: false }
    | { valid: true; email: string; ownerEmail: string; ownerName: string; emailMatches: boolean; ownTeam: boolean; teamActive: boolean; alreadyInTeam: boolean }
    | null;
};

const ERRORS: Record<string, string> = {
  invalid_email: "Enter a valid email address.",
  own_email: "That is your own email. You already have the owner seat.",
  already_invited: "That person is already on the team or invited.",
  seats_full: "All seats are in use. Remove someone or cancel an invite to free a seat.",
  team_required: "Invites need an active Team plan.",
  invalid_invite: "This invite link is no longer valid. Ask the owner for a new one.",
  email_mismatch: "This invite is for a different email address.",
  team_inactive: "The owner's Team plan is not active right now, so the invite can't be used.",
  already_in_team: "You are already on a team. Leave it first, then use this link.",
  own_team: "This invite is for your own team.",
};
const msg = (code: string | undefined) => (code && ERRORS[code]) || "Something went wrong. Try again in a moment.";
const day = (iso: string | null) => (iso ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "");

async function send(url: string, method: string, body?: unknown) {
  const r = await fetch(url, { method, headers: body ? { "content-type": "application/json" } : undefined, body: body ? JSON.stringify(body) : undefined });
  const d = (await r.json().catch(() => ({}))) as { error?: string; link?: string; email?: string };
  return { ok: r.ok, ...d };
}

/** Team seats on /account: seats used, invite by email, pending invites with a copyable link, remove, join, leave. */
export function TeamSeats({ invite }: { invite?: string | null }) {
  const [state, setState] = useState<State | null>(null);
  const [token, setToken] = useState(invite ?? null);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [fresh, setFresh] = useState<{ email: string; link: string } | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [confirm, setConfirm] = useState<string | null>(null);

  const load = useCallback(async (t: string | null) => {
    const r = await fetch("/api/team" + (t ? "?invite=" + encodeURIComponent(t) : ""), { cache: "no-store" });
    if (r.ok) setState((await r.json()) as State);
  }, []);
  useEffect(() => {
    void load(token);
  }, [load, token]);

  async function copy(link: string, id: string) {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(id);
      setTimeout(() => setCopied((c) => (c === id ? null : c)), 2000);
    } catch {
      window.prompt("Copy this invite link", link);
    }
  }

  async function doInvite(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const r = await send("/api/team/invite", "POST", { email });
    setBusy(false);
    if (!r.ok || !r.link) return setError(msg(r.error));
    setFresh({ email: r.email ?? email, link: r.link });
    setEmail("");
    void load(token);
  }

  async function remove(id: string) {
    setConfirm(null);
    const r = await send("/api/team/members/" + encodeURIComponent(id), "DELETE");
    if (!r.ok) return setError(msg(r.error));
    if (fresh && state?.owner?.members.find((m) => m.id === id)?.email === fresh.email) setFresh(null);
    void load(token);
  }

  async function join() {
    if (!token) return;
    setBusy(true);
    setError(null);
    const r = await send("/api/team/join", "POST", { token });
    setBusy(false);
    if (!r.ok) return setError(msg(r.error));
    setNotice("You joined the team. Every system and component is unlocked.");
    setToken(null);
    window.history.replaceState(null, "", "/account");
  }

  async function leave() {
    setConfirm(null);
    const r = await send("/api/team/leave", "POST");
    if (!r.ok) return setError(msg(r.error));
    setNotice("You left the team.");
    void load(null);
  }

  if (!state) return <section className="mt-10" aria-busy="true" aria-label="Team" />;
  const { owner, member, invite: inv } = state;

  return (
    <section className="mt-10" aria-labelledby="team-h">
      <h2 id="team-h" className="text-[13px] font-medium">
        Team
      </h2>

      <div aria-live="polite">
        {notice && (
          <p role="status" className="mt-3 flex items-start gap-2 rounded-[8px] bg-tile p-4 text-[13px]">
            <Icon name="user-check" size={16} className="mt-0.5 shrink-0" />
            {notice}
          </p>
        )}
        {error && (
          <p role="alert" className="mt-3 rounded-[8px] bg-tile p-4 text-[13px]">
            {error}
          </p>
        )}
      </div>

      {inv && token && <InviteCard inv={inv} me={state.email} busy={busy} onJoin={join} />}

      {member && (
        <div className="card mt-3 flex flex-wrap items-center gap-4 p-4">
          <span className="grid size-10 shrink-0 place-items-center rounded-[8px] bg-tile">
            <Icon name="user-check" size={18} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-medium">You are on {member.ownerName || member.ownerEmail}’s team</p>
            <p className="text-[13px] text-mute">
              {member.active ? "Every system and component is unlocked while their Team plan is active. Billing is handled by " + member.ownerEmail + "." : "Their Team plan has ended, so Pro items are locked again. Ask " + member.ownerEmail + " to restart it."}
            </p>
          </div>
          {confirm === "leave" ? (
            <div className="flex gap-2">
              <button onClick={leave} className="pill !bg-transparent text-[#c4321b] hover:!bg-chip">
                Leave team
              </button>
              <button onClick={() => setConfirm(null)} className="pill">
                Cancel
              </button>
            </div>
          ) : (
            <button onClick={() => setConfirm("leave")} className="btn-line">
              Leave team
            </button>
          )}
        </div>
      )}

      {owner && (
        <div className="mt-3 flex flex-col gap-3">
          <div className="card p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[13px] font-medium tabular-nums">
                {owner.used} of {owner.seats} seats used
              </p>
              <p className="text-[12px] text-mute">You are the owner. Members get everything in Pro; billing stays with you.</p>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-chip" role="progressbar" aria-label="Seats used" aria-valuemin={0} aria-valuemax={owner.seats} aria-valuenow={owner.used}>
              <div className="h-full rounded-full bg-ink" style={{ width: Math.min(100, Math.round((owner.used / owner.seats) * 100)) + "%" }} />
            </div>
            {!owner.active && <p className="mt-3 text-[13px] text-mute">Your Team plan is not active, so members don’t have access right now. Restart it from Manage billing or on the pricing page.</p>}
            {owner.active && owner.used < owner.seats && (
              <form onSubmit={doInvite} className="mt-4 flex flex-wrap gap-2">
                <label htmlFor="team-invite-email" className="sr-only">
                  Teammate’s email
                </label>
                <input
                  id="team-invite-email"
                  type="email"
                  required
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Co-founder or teammate’s email"
                  className="h-8 min-w-56 flex-1 rounded-full bg-chip px-3.5 text-[13px] outline-none focus:bg-white focus:shadow-[inset_0_0_0_1.5px_var(--color-ink)]"
                />
                <button type="submit" disabled={busy} className="btn-ink disabled:opacity-60">
                  <Icon name="plus" size={14} /> Invite
                </button>
              </form>
            )}
            {owner.active && owner.used >= owner.seats && <p className="mt-3 text-[13px] text-mute">All seats are in use. Remove someone or cancel an invite to free a seat. Need more? <Link href="/support" className="font-medium text-ink underline underline-offset-2">Talk to us</Link>.</p>}
          </div>

          {fresh && (
            <div className="rounded-[8px] bg-tile p-4">
              <p className="text-[13px] font-medium">Send this link to {fresh.email}.</p>
              <p className="text-[13px] text-mute">It works once, for that email. They sign in or create an account, then join. The link stays below until they do.</p>
              <div className="mt-2 flex items-center gap-2">
                <code className="min-w-0 flex-1 truncate rounded-[6px] bg-white px-2 py-1.5 font-fu-mono text-[12px]">{fresh.link}</code>
                <button onClick={() => copy(fresh.link, "fresh")} className="pill">
                  <Icon name={copied === "fresh" ? "check" : "copy"} size={14} /> {copied === "fresh" ? "Copied" : "Copy link"}
                </button>
              </div>
            </div>
          )}

          <ul className="card overflow-hidden" aria-label="Team seats">
            {owner.members.map((m) => (
              <li key={m.id} className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-hair px-4 py-3 text-[13px] last:border-0">
                <Icon name={m.status === "pending" ? "mail" : m.role === "owner" ? "user" : "user-check"} size={16} className="shrink-0 text-mute" />
                <div className="min-w-[200px] flex-1">
                  <p className="truncate font-medium">{m.email}</p>
                  <p className="text-[12px] text-mute">{m.role === "owner" ? "Owner" : m.status === "pending" ? "Invite pending, sent " + day(m.invitedAt) : "Member since " + day(m.joinedAt)}</p>
                </div>
                {m.link && (
                  <button onClick={() => copy(m.link!, m.id)} className="pill" aria-label={"Copy invite link for " + m.email}>
                    <Icon name={copied === m.id ? "check" : "copy"} size={14} /> {copied === m.id ? "Copied" : "Copy link"}
                  </button>
                )}
                {m.role !== "owner" &&
                  (confirm === m.id ? (
                    <span className="flex gap-2">
                      <button onClick={() => remove(m.id)} className="pill !bg-transparent text-[#c4321b] hover:!bg-chip">
                        {m.status === "pending" ? "Cancel invite" : "Remove"}
                      </button>
                      <button onClick={() => setConfirm(null)} className="pill">
                        Keep
                      </button>
                    </span>
                  ) : (
                    <button onClick={() => setConfirm(m.id)} className="pill !bg-transparent text-[#c4321b] hover:!bg-chip" aria-label={(m.status === "pending" ? "Cancel invite for " : "Remove ") + m.email}>
                      {m.status === "pending" ? "Cancel" : "Remove"}
                    </button>
                  ))}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!owner && !member && !(inv && token) && (
        <div className="card mt-3 flex flex-wrap items-center gap-4 p-4">
          <span className="grid size-10 shrink-0 place-items-center rounded-[8px] bg-tile">
            <Icon name="user" size={18} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-medium">Building with a co-founder or first hires?</p>
            <p className="text-[13px] text-mute">The Team plan puts 5 people on one bill, each with everything in Pro. You invite them here.</p>
          </div>
          <Link href="/pricing#team" className="btn-line">
            See Team
          </Link>
        </div>
      )}
    </section>
  );
}

function InviteCard({ inv, me, busy, onJoin }: { inv: NonNullable<State["invite"]>; me: string; busy: boolean; onJoin: () => void }) {
  let title: string;
  let line: string;
  let canJoin = false;
  if (!inv.valid) {
    title = "This invite link is no longer valid.";
    line = "It was used already or cancelled. Ask the team owner for a new link.";
  } else if (inv.ownTeam) {
    title = "This is an invite to your own team.";
    line = "Send it to the teammate it is for.";
  } else if (!inv.emailMatches) {
    title = "This invite is for " + inv.email + ".";
    line = "You are signed in as " + me + ". Sign out and sign in with " + inv.email + ", or ask " + inv.ownerEmail + " to invite " + me + " instead.";
  } else if (!inv.teamActive) {
    title = (inv.ownerName || inv.ownerEmail) + "’s Team plan is not active.";
    line = "The invite will work once they restart it.";
  } else if (inv.alreadyInTeam) {
    title = "You are already on a team.";
    line = "Leave that team below, then open this link again.";
  } else {
    title = (inv.ownerName || inv.ownerEmail) + " invited you to their team.";
    line = "Join to get every system and component, the Figma kits and unlimited MCP. " + inv.ownerEmail + " pays; you pay nothing.";
    canJoin = true;
  }
  return (
    <div className={"mt-3 flex flex-wrap items-center gap-4 rounded-[8px] p-4 " + (canJoin ? "bg-ink text-white" : "bg-tile")}>
      <Icon name={canJoin ? "mail" : "lock"} size={18} className="shrink-0" />
      <div className="min-w-[220px] flex-1">
        <p className="text-[13px] font-medium">{title}</p>
        <p className={"text-[13px] " + (canJoin ? "text-white/70" : "text-mute")}>{line}</p>
      </div>
      {canJoin && (
        <button onClick={onJoin} disabled={busy} className="btn-line !bg-white hover:!bg-white/90 w-full disabled:opacity-60 sm:w-auto">
          Join team
        </button>
      )}
    </div>
  );
}
