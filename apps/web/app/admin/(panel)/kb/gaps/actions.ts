"use server";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { audit, requireStaff } from "@/lib/admin";
import { getDb } from "@/lib/db";
import { botGap } from "@/lib/support/assistant/gaps";
import { back, str } from "@/components/admin/back";

export async function dismissGap(f: FormData) {
  const { user: me } = await requireStaff("kb");
  const id = str(f, "id", 200);
  if (id) {
    const db = await getDb();
    await db.update(botGap).set({ dismissed: true }).where(eq(botGap.id, id));
    await audit(me.email, "kb.gap.dismiss", id);
  }
  revalidatePath("/admin/kb/gaps");
  back("/admin/kb/gaps", { ok: "Dismissed." });
}
