import {
  Baby,
  Car,
  CookingPot,
  HeartPulse,
  Headphones,
  Home,
  Paperclip,
  Shirt,
  ShoppingBasket,
  Wine,
  type LucideIcon,
} from "lucide-react";

/**
 * Shared Mercenta copy. All four concepts use the same positioning and content;
 * only layout and art direction differ. Keep claims factual: no figures,
 * testimonials, client names, capacities or certifications.
 */

export const TAGLINE = "Global Brands. UK Distribution. Smarter Growth.";
export const TAGLINE_PARTS = ["Global Brands.", "UK Distribution.", "Smarter Growth."] as const;

export const NAV = [
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Mercenta", href: "#why-mercenta" },
  { label: "Who we work with", href: "#who-we-work-with" },
];

export const INFRASTRUCTURE = [
  {
    key: "wholesale",
    title: "Wholesale distribution",
    short: "Wholesale",
    body: "One accountable UK wholesale partner that takes your range to market — commercial terms, ordering and supply managed in a single relationship.",
  },
  {
    key: "shipping",
    title: "Shipping & logistics coordination",
    short: "Shipping",
    body: "From origin collection through freight, customs and inbound delivery, every movement is coordinated so stock arrives where and when it is needed.",
  },
  {
    key: "storage",
    title: "Storage & fulfilment infrastructure",
    short: "Storage",
    body: "Access to UK storage and fulfilment, with inbound, stock levels and replenishment planned around real demand.",
  },
  {
    key: "retail",
    title: "Retail-channel operations",
    short: "Retail",
    body: "Product data, listings, ordering and compliance managed across the UK retail channels that matter for your category.",
  },
  {
    key: "growth",
    title: "Commercial growth support",
    short: "Growth",
    body: "Range planning, pricing and commercial development that builds a durable UK position — not a one-off launch.",
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Assess",
    body: "We review your range, category and readiness for the UK — and agree where the opportunity is.",
  },
  {
    n: "02",
    title: "Structure",
    body: "Commercial terms, compliance, labelling and the right route to market are agreed and documented.",
  },
  {
    n: "03",
    title: "Ship",
    body: "Freight and customs are coordinated from origin into UK storage, with visibility at every stage.",
  },
  {
    n: "04",
    title: "Launch",
    body: "Your products go live through UK retail channels, with day-to-day operations run by Mercenta.",
  },
  {
    n: "05",
    title: "Grow",
    body: "We review performance together, refine the range and extend availability over time.",
  },
] as const;

export const REASONS = [
  {
    title: "UK market knowledge",
    body: "A UK-based team that understands how categories, retail channels and consumer demand work here.",
  },
  {
    title: "Distribution infrastructure",
    body: "Wholesale, freight, storage and retail operations connected into one route to market.",
  },
  {
    title: "Operational coordination",
    body: "One partner coordinating the moving parts, so your team is not managing a chain of suppliers.",
  },
  {
    title: "Technology-enabled processes",
    body: "Shipments, stock and orders tracked in one live view that partner brands can see.",
  },
  {
    title: "Long-term growth partnership",
    body: "Commercial alignment built around growing your brand in the UK year after year.",
  },
] as const;

export const CATEGORIES: { name: string; icon: LucideIcon }[] = [
  { name: "Home", icon: Home },
  { name: "Office supplies", icon: Paperclip },
  { name: "Kitchenware", icon: CookingPot },
  { name: "Health & personal care", icon: HeartPulse },
  { name: "Baby products", icon: Baby },
  { name: "Consumer electronics", icon: Headphones },
  { name: "Automotive accessories", icon: Car },
  { name: "Groceries", icon: ShoppingBasket },
  { name: "Apparel", icon: Shirt },
  { name: "Beer & wine", icon: Wine },
];

export const AUDIENCES = [
  "International brands entering the UK",
  "Established businesses seeking a UK distribution partner",
  "Commercial and strategic partners",
  "Institutional investors and funders",
];

export const TRACKER = {
  reference: "MCT-2418",
  cargo: "Consumer goods",
  freight: "AIR FREIGHT",
  stages: [
    { label: "Origin collected", done: true },
    { label: "Export airport", done: true },
    { label: "Air transit", done: true },
    { label: "UK customs cleared", done: true },
    { label: "On shelf", done: false },
  ] as { label: string; done: boolean }[],
  caption: "An example of the live view partner brands see once onboarded",
};

export const CONCEPTS = [
  {
    n: 1,
    path: "/concept-1",
    name: "The Bold Orange World",
    short: "Bold Orange",
    summary:
      "Dominant orange, heavy expanded type and hard geometry. An advertising-led identity built to be recognised instantly.",
    balance: [60, 30, 10] as const,
  },
  {
    n: 2,
    path: "/concept-2",
    name: "The Premium Distribution Partner",
    short: "Premium Partner",
    summary:
      "A black-and-white corporate foundation with decisive orange. Serif-led, structured and credible for investors and institutional partners.",
    balance: [15, 25, 60] as const,
  },
  {
    n: 3,
    path: "/concept-3",
    name: "The Modern UK Market-Entry Platform",
    short: "Platform",
    summary:
      "Interface-inspired diagrams, mono labels and the live Shipment Tracker. Technology and physical distribution in balance.",
    balance: [20, 50, 30] as const,
  },
  {
    n: 4,
    path: "/concept-4",
    name: "The Distinctive Editorial Brand",
    short: "Editorial",
    summary:
      "Oversized type, asymmetric layouts and generous whitespace. Orange, black and white used as confident editorial blocks.",
    balance: [30, 30, 40] as const,
  },
] as const;
