/** Role label. Tone only, no dot. Server and client safe. */
export function RoleTag({ role }: { role: string }) {
  const tone = role === "owner" ? "bg-ink text-white" : role === "admin" ? "bg-chip-2 text-ink" : role === "moderator" ? "bg-[#eef2ff] text-[#3730a3]" : "bg-chip text-mute";
  const label = role === "owner" ? "Owner" : role === "admin" ? "Admin" : role === "moderator" ? "Moderator" : "User";
  return <span className={"inline-flex h-5 shrink-0 items-center rounded-full px-2 text-[11px] max-md:text-[12px] font-medium whitespace-nowrap " + tone}>{label}</span>;
}
