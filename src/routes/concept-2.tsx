import { createFileRoute } from "@tanstack/react-router";

import { Concept2 } from "@/concepts/Concept2";

export const Route = createFileRoute("/concept-2")({
  head: () => ({
    meta: [
      { title: "Concept 2 — Premium Distribution Partner | Mercenta Partners" },
      { name: "description", content: "Mercenta Partners concept 2: a premium black-and-white corporate homepage for the UK wholesale distribution partner to international brands." },
      { property: "og:title", content: "Concept 2 — Premium Distribution Partner | Mercenta Partners" },
      { property: "og:description", content: "Mercenta Partners concept 2: a premium black-and-white corporate homepage for the UK wholesale distribution partner to international brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Concept2,
});
