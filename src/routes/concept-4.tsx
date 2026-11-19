import { createFileRoute } from "@tanstack/react-router";

import { Concept4 } from "@/concepts/Concept4";

export const Route = createFileRoute("/concept-4")({
  head: () => ({
    meta: [
      { title: "Concept 4 — Distinctive Editorial Brand | Mercenta Partners" },
      { name: "description", content: "Mercenta Partners concept 4: an editorial homepage with oversized type for the UK distribution and market-entry partner." },
      { property: "og:title", content: "Concept 4 — Distinctive Editorial Brand | Mercenta Partners" },
      { property: "og:description", content: "Mercenta Partners concept 4: an editorial homepage with oversized type for the UK distribution and market-entry partner." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Concept4,
});
