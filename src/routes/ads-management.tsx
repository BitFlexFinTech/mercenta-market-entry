import { createFileRoute } from "@tanstack/react-router";

import { AdsManagement } from "@/ads/AdsManagement";

const TITLE = "Mercenta Ads Management — Brand Partner Portal";
const DESC = "Track Amazon ad performance and create ads in every Amazon size, still and video, in one Mercenta portal.";

export const Route = createFileRoute("/ads-management")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdsManagement,
});
