// Mock data for the Ads Management frontend. Replace with API responses in the backend build.
export type CampaignType = "SP" | "SB" | "SBV" | "SD";

export const BRANDS = ["Nordic Living UK", "Kaito Kitchenware", "Alba Baby Care"];

export const KPIS = [
  { label: "Ad spend", value: "£24,850", delta: "+8.4%", up: true },
  { label: "Attributed sales", value: "£118,420", delta: "+14.2%", up: true },
  { label: "ROAS", value: "4.76x", delta: "+0.3x", up: true },
  { label: "ACoS", value: "21.0%", delta: "-1.6pt", up: true },
  { label: "Impressions", value: "1.42M", delta: "+5.1%", up: true },
  { label: "Clicks", value: "38,410", delta: "-2.0%", up: false },
  { label: "Avg CPC", value: "£0.65", delta: "+£0.02", up: false },
];

// 30 days of spend / sales (£)
export const SERIES = Array.from({ length: 30 }, (_, i) => {
  const spend = 620 + Math.round(Math.sin(i / 3) * 90 + i * 9);
  const sales = Math.round(spend * (4.2 + Math.cos(i / 4) * 0.7));
  return { day: i + 1, spend, sales };
});

export const CAMPAIGNS: {
  id: string; name: string; type: CampaignType; status: "Active" | "Paused";
  budget: number; spend: number; sales: number; pacing: number;
}[] = [
  { id: "C-10421", name: "SP · Insulated Bottle · Exact", type: "SP", status: "Active", budget: 120, spend: 2840, sales: 14200, pacing: 82 },
  { id: "C-10422", name: "SB · Brand Headline · Kitchen", type: "SB", status: "Active", budget: 80, spend: 1920, sales: 8450, pacing: 74 },
  { id: "C-10423", name: "SBV · Product Video · 16:9", type: "SBV", status: "Active", budget: 100, spend: 2310, sales: 9870, pacing: 91 },
  { id: "C-10424", name: "SD · Retargeting · Views", type: "SD", status: "Paused", budget: 50, spend: 410, sales: 1230, pacing: 0 },
  { id: "C-10425", name: "SP · Auto · Catalogue", type: "SP", status: "Active", budget: 60, spend: 1385, sales: 5120, pacing: 66 },
];

export const ASINS = [
  { asin: "B0C4K2L89X", title: "Insulated Steel Bottle 750ml", price: "£24.99", spend: 4120, sales: 21840 },
  { asin: "B0B7Q1M23D", title: "Oak Serving Board Set", price: "£39.00", spend: 2980, sales: 11650 },
  { asin: "B0D2H9P41K", title: "Ceramic Pour-Over Kit", price: "£32.50", spend: 2210, sales: 9420 },
  { asin: "B0A8T5R66W", title: "Linen Tea Towels (3)", price: "£14.99", spend: 1460, sales: 3980 },
];

export type Format = {
  id: string; group: string; name: string; media: "Image" | "Video";
  w: number; h: number; spec: string; headline: number;
};

// Amazon Ads creative sizes. Verify against current Amazon creative policy before launch.
export const FORMATS: Format[] = [
  { id: "sb-image", group: "Sponsored Brands", name: "Custom image", media: "Image", w: 1200, h: 628, spec: "Min 1200×628 · JPG/PNG · ≤5MB · no text overlay", headline: 50 },
  { id: "sb-logo", group: "Sponsored Brands", name: "Brand logo", media: "Image", w: 400, h: 400, spec: "Min 400×400 · PNG · ≤1MB", headline: 50 },
  { id: "sbv-169", group: "Sponsored Brands Video", name: "Landscape video", media: "Video", w: 1920, h: 1080, spec: "16:9 · 6–45s · MP4/MOV · ≤500MB", headline: 50 },
  { id: "sbv-11", group: "Sponsored Brands Video", name: "Square video", media: "Video", w: 1080, h: 1080, spec: "1:1 · 6–45s · MP4/MOV", headline: 50 },
  { id: "sbv-916", group: "Sponsored Brands Video", name: "Vertical video", media: "Video", w: 1080, h: 1920, spec: "9:16 · 6–45s · MP4/MOV", headline: 50 },
  { id: "sd-1200", group: "Sponsored Display", name: "Native landscape", media: "Image", w: 1200, h: 628, spec: "1.91:1 · JPG/PNG", headline: 50 },
  { id: "sd-sq", group: "Sponsored Display", name: "Square", media: "Image", w: 1200, h: 1200, spec: "1:1 · JPG/PNG", headline: 50 },
  { id: "sd-300x250", group: "Sponsored Display", name: "Medium rectangle", media: "Image", w: 300, h: 250, spec: "300×250 · display", headline: 50 },
  { id: "sd-300x600", group: "Sponsored Display", name: "Half page", media: "Image", w: 300, h: 600, spec: "300×600 · display", headline: 50 },
  { id: "sd-160x600", group: "Sponsored Display", name: "Skyscraper", media: "Image", w: 160, h: 600, spec: "160×600 · display", headline: 50 },
  { id: "sd-728x90", group: "Sponsored Display", name: "Leaderboard", media: "Image", w: 728, h: 90, spec: "728×90 · display", headline: 50 },
  { id: "sd-video", group: "Sponsored Display", name: "Display video", media: "Video", w: 1920, h: 1080, spec: "16:9 · 6–45s · MP4", headline: 50 },
  { id: "sp-main", group: "Sponsored Products", name: "Product main image", media: "Image", w: 2000, h: 2000, spec: "1:1 · pure white background · ≥1000px", headline: 0 },
];

export const LIBRARY = [
  { name: "Kitchen hero · v3", format: "SB · 1200×628", status: "Approved", campaign: "C-10422" },
  { name: "Bottle unboxing · 15s", format: "SBV · 16:9", status: "Approved", campaign: "C-10423" },
  { name: "Retarget square", format: "SD · 1200×1200", status: "In review", campaign: "—" },
  { name: "Leaderboard summer", format: "SD · 728×90", status: "Rejected", campaign: "—" },
  { name: "Vertical reel · 20s", format: "SBV · 9:16", status: "Draft", campaign: "—" },
];
