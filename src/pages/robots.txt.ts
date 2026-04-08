import { site } from "@/config/site";

export function GET() {
  const body = `# https://${site.domain}
User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap-index.xml
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

