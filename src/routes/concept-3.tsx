import { createFileRoute } from "@tanstack/react-router";

import { Concept3 } from "@/concepts/Concept3";

export const Route = createFileRoute("/concept-3")({
  head: () => ({
    meta: [
      { title: "Concept 3 — Modern UK Market-Entry Platform | Mercenta Partners" },
      { name: "description", content: "Mercenta Partners concept 3: a technology-led homepage with live shipment visibility for international brands entering the UK." },
      { property: "og:title", content: "Concept 3 — Modern UK Market-Entry Platform | Mercenta Partners" },
      { property: "og:description", content: "Mercenta Partners concept 3: a technology-led homepage with live shipment visibility for international brands entering the UK." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Concept3,
});
