import { LibraryPage } from "@/components/site/library-page";

export default async function Home({ searchParams }: PageProps<"/">) {
  const sp = await searchParams;
  return <LibraryPage q={typeof sp.q === "string" ? sp.q : ""} c={typeof sp.c === "string" ? sp.c : "all"} s={typeof sp.s === "string" ? sp.s : "all"} />;
}
