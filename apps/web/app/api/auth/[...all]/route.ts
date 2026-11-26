import { getAuth } from "@/lib/auth";
import { isServerFailure, recordSignupFailure } from "@/lib/signup-failures";

const SIGN_UP = /\/sign-up\/email$/;

async function handle(req: Request) {
  const auth = await getAuth();
  if (req.method !== "POST" || !SIGN_UP.test(new URL(req.url).pathname)) return auth.handler(req);

  // Sign-up: keep the email and name typed when the server fails it (lib/signup-failures.ts). The password is never read.
  const body = (await req
    .clone()
    .json()
    .catch(() => null)) as { email?: unknown; name?: unknown } | null;
  let res: Response;
  try {
    res = await auth.handler(req);
  } catch (e) {
    await recordSignupFailure({ email: body?.email, name: body?.name, code: "EXCEPTION", message: String(e), status: 500 });
    throw e;
  }
  if (res.status >= 400) {
    const err = (await res
      .clone()
      .json()
      .catch(() => null)) as { code?: unknown; message?: unknown } | null;
    const code = typeof err?.code === "string" ? err.code : `HTTP_${res.status}`;
    if (isServerFailure(res.status, code)) await recordSignupFailure({ email: body?.email, name: body?.name, code, message: typeof err?.message === "string" ? err.message : "", status: res.status });
  }
  return res;
}
export { handle as GET, handle as POST };
