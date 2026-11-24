import { json, openApiDoc } from "@/lib/agent-discovery";

/** OpenAPI 3.1 for the public endpoints (free component registry, llms.txt, pricing). */
export function GET() {
  return json(openApiDoc(), 3600);
}
