import { createFileRoute } from "@tanstack/react-router";

import { Concept1 } from "@/concepts/Concept1";

export const Route = createFileRoute("/concept-1")({
  head: () => ({
    meta: [
      { title: "Concept 1 — Bold Orange World | Mercenta Partners" },
      { name: "description", content: "Mercenta Partners concept 1: a bold orange advertising-led homepage for the UK distribution and market-entry partner for international brands." },
      { property: "og:title", content: "Concept 1 — Bold Orange World | Mercenta Partners" },
      { property: "og:description", content: "Mercenta Partners concept 1: a bold orange advertising-led homepage for the UK distribution and market-entry partner for international brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Concept1,
});
