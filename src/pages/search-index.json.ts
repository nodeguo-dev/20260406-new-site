import { buildSiteSearchDocs } from "@/utils/siteSearchDocs";

export async function GET() {
  const docs = await buildSiteSearchDocs();

  return new Response(JSON.stringify(docs), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
