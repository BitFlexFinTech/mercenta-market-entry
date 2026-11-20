import { createFileRoute } from "@tanstack/react-router";

import { Concept3 } from "@/concepts/Concept3";

const TITLE = "Mercenta Partners — UK Distribution & Market Entry for Global Brands";
const DESC =
  "Global Brands. UK Distribution. Smarter Growth. Mercenta Partners helps international brands enter, establish and grow in the UK market.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Concept3,
});
