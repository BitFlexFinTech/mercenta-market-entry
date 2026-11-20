import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Menu,
  Plane,
  ScanLine,
  Store,
  TrendingUp,
  Truck,
  Warehouse,
} from "lucide-react";

import { Link } from "@tanstack/react-router";
import { ShipmentTracker } from "@/components/mercenta/ShipmentTracker";
import { Wordmark } from "@/components/mercenta/Wordmark";
import { img } from "@/content/images";
import { AUDIENCES, CATEGORIES, INFRASTRUCTURE, NAV, REASONS, STEPS, TAGLINE } from "@/content/mercenta";
import { cn } from "@/lib/utils";

const MODULE_ICONS = [Boxes, Plane, Warehouse, Store, TrendingUp];

const FLOW = [
  { label: "Brand origin", sub: "Factory / HQ" },
  { label: "Freight", sub: "Air · Sea · Road" },
  { label: "UK customs", sub: "Clearance" },
  { label: "UK storage", sub: "Inbound · Stock" },
  { label: "Retail channels", sub: "Live listings" },
  { label: "Growth", sub: "Range · Pricing" },
];

function Eyebrow({ index, children, dark }: { index: string; children: string; dark?: boolean }) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em]",
        dark ? "text-paper/50" : "text-ink/50",
      )}
    >
      <span className="text-signal">{index}</span>
      <span className={cn("h-px w-8", dark ? "bg-paper/20" : "bg-ink/20")} />
      {children}
    </p>
  );
}

export function Concept3() {
  return (
    <div className="bg-ink font-geist text-paper">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-paper/10 bg-ink/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Wordmark tone="paper" />
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60 transition-colors hover:text-paper"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/ads-management"
              className="hidden items-center gap-2 rounded-md border border-paper/15 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/80 transition-colors hover:border-signal hover:text-paper md:inline-flex"
            >
              Ads Management
            </Link>
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-md bg-signal px-4 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Start UK entry <ArrowRight className="h-4 w-4" />
            </a>
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-paper/15 lg:hidden">
              <Menu className="h-4 w-4" />
            </span>
          </div>
        </div>
      </header>

      {/* HERO — 12-col grid; copy left (7), Shipment Tracker top-right (5) */}
      <section className="relative overflow-hidden grid-lines">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-signal/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-14 md:pt-20 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-28">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/[0.03] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/80">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              {TAGLINE}
            </span>
            <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.4rem]">
              Enter the UK market on infrastructure that’s{" "}
              <span className="text-signal">already running.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/65 md:text-lg">
              Mercenta is the UK wholesale distribution and market-entry platform for international
              brands — connecting freight, customs, storage and retail-channel operations into one
              coordinated route, with live visibility from origin to shelf.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3.5 font-semibold text-ink transition-opacity hover:opacity-90"
              >
                Start your UK entry <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-md border border-paper/20 px-6 py-3.5 font-medium text-paper transition-colors hover:border-paper/50"
              >
                See how it works
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-paper/10 bg-paper/10 sm:grid-cols-4">
              {[
                { k: "Wholesale", v: "distribution", i: Boxes },
                { k: "Freight &", v: "customs", i: Plane },
                { k: "UK storage &", v: "fulfilment", i: Warehouse },
                { k: "Retail-channel", v: "operations", i: Store },
              ].map(({ k, v, i: Icon }, idx) => (
                <div key={k} className="bg-ink p-4">
                  <div className="flex items-center justify-between">
                    <Icon className="h-4 w-4 text-signal" />
                    <span className="font-mono text-[10px] text-paper/35">0{idx + 1}</span>
                  </div>
                  <dt className="mt-4 text-sm font-medium leading-tight">{k}</dt>
                  <dd className="text-sm leading-tight text-paper/55">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-14 lg:col-span-5 lg:mt-0 lg:pl-4">
            <ShipmentTracker />
          </div>
        </div>
      </section>

      {/* PHYSICAL LAYER — annotated photo */}
      <section className="border-y border-paper/10">
        <div className="relative">
          <img
            src={img.warehouseAisle}
            alt="Pallet racking in a UK distribution warehouse with two operatives walking the aisle"
            className="h-[420px] w-full object-cover md:h-[560px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-ink/35" />
          <div className="absolute inset-0 mx-auto max-w-7xl px-6">
            {[
              { t: "Inbound", s: "Received · checked", x: "left-[8%]", y: "top-[22%]" },
              { t: "Stock", s: "Located · counted", x: "left-[52%]", y: "top-[40%]" },
              { t: "Dispatch", s: "Picked · to channel", x: "left-[30%]", y: "top-[70%]" },
            ].map((a) => (
              <div key={a.t} className={cn("absolute hidden items-center gap-3 sm:flex", a.x, a.y)}>
                <span className="relative flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full animate-tracker-ping rounded-full bg-signal opacity-60" />
                  <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-paper bg-signal" />
                </span>
                <span className="rounded-md border border-paper/15 bg-ink/80 px-3 py-2 backdrop-blur">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                    {a.t}
                  </span>
                  <span className="block font-mono text-[11px] text-paper/70">{a.s}</span>
                </span>
              </div>
            ))}
            <div className="absolute bottom-8 left-6 right-6 max-w-lg md:bottom-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper/60">
                The physical layer
              </p>
              <p className="mt-3 text-2xl font-semibold leading-tight tracking-tight md:text-4xl">
                Technology you can see. Distribution you can stand in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE — light treatment with route diagram */}
      <section id="infrastructure" className="bg-paper text-ink grid-lines-ink">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Eyebrow index="02">Distribution infrastructure</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">
                One connected route from origin to UK shelf.
              </h2>
            </div>
            <p className="self-end text-lg leading-relaxed text-ink/65 lg:col-span-5 lg:col-start-8">
              Mercenta provides access to coordinated UK market-entry infrastructure. Each layer is
              connected to the next, so stock, data and orders move as one system.
            </p>
          </div>

          {/* Flow diagram */}
          <div className="mt-14 rounded-md border border-ink/10 bg-paper p-5 md:p-8">
            <div className="mb-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">
              <span>Route map</span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" /> Coordinated by Mercenta
              </span>
            </div>
            <ol className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
              {FLOW.map((f, i) => (
                <li key={f.label} className="flex flex-col lg:flex-1 lg:flex-row lg:items-center">
                  <div
                    className={cn(
                      "flex items-center gap-4 rounded-md border p-4 lg:w-full lg:flex-col lg:items-start lg:gap-3",
                      i === 3 || i === 4
                        ? "border-signal bg-signal/[0.06]"
                        : "border-ink/12 bg-paper",
                      i === FLOW.length - 1 && "border-ink bg-ink text-paper",
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-[10px]",
                        i === FLOW.length - 1 ? "text-signal" : "text-ink/40",
                      )}
                    >
                      N{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span className="block text-[15px] font-semibold leading-tight">{f.label}</span>
                      <span
                        className={cn(
                          "block font-mono text-[11px]",
                          i === FLOW.length - 1 ? "text-paper/55" : "text-ink/50",
                        )}
                      >
                        {f.sub}
                      </span>
                    </span>
                  </div>
                  {i < FLOW.length - 1 && (
                    <>
                      <svg className="mx-auto h-8 w-2 lg:hidden" viewBox="0 0 2 32" aria-hidden="true">
                        <line
                          x1="1"
                          y1="0"
                          x2="1"
                          y2="32"
                          className="animate-dash stroke-signal"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        />
                      </svg>
                      <svg className="hidden h-2 w-10 shrink-0 lg:block" viewBox="0 0 40 2" aria-hidden="true">
                        <line
                          x1="0"
                          y1="1"
                          x2="40"
                          y2="1"
                          className="animate-dash stroke-signal"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        />
                      </svg>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Modules */}
          <div className="mt-6 grid gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-5">
            {INFRASTRUCTURE.map((m, i) => {
              const Icon = MODULE_ICONS[i] ?? Boxes;
              return (
                <article key={m.key} className="flex flex-col bg-paper p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-signal">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] text-ink/40">MOD-0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-snug tracking-tight">{m.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">{m.body}</p>
                  <p className="mt-6 flex items-center gap-2 border-t border-ink/10 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" /> Included
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — dark stepper */}
      <section id="how-it-works" className="border-b border-paper/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Eyebrow index="03" dark>
                How it works
              </Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">
                Five stages from first conversation to growing UK sales.
              </h2>
              <div className="relative mt-10 overflow-hidden rounded-md border border-paper/10">
                <img
                  src={img.airFreight}
                  alt="Air freight pallets being loaded into a cargo aircraft at dusk"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md border border-paper/15 bg-ink/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] backdrop-blur">
                  <Plane className="h-3.5 w-3.5 text-signal" /> Stage 03 · Ship
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-md border border-paper/15 bg-ink/80 p-3 backdrop-blur">
                  <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-paper/55">
                    <span>Origin</span>
                    <span className="text-signal">UK</span>
                  </div>
                  <div className="relative mt-2 h-1 rounded-full bg-paper/10">
                    <div className="absolute inset-y-0 left-0 w-3/5 rounded-full bg-signal" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ol className="relative lg:col-span-7">
            <span className="absolute bottom-6 left-[23px] top-6 w-px bg-paper/10" aria-hidden="true" />
            <span
              className="absolute left-[23px] top-6 h-[42%] w-px bg-signal"
              aria-hidden="true"
            />
            {STEPS.map((s, i) => (
              <li key={s.n} className="relative flex gap-6 pb-6 last:pb-0">
                <span
                  className={cn(
                    "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-md border font-mono text-sm",
                    i < 2
                      ? "border-signal bg-signal text-ink"
                      : i === 2
                        ? "border-signal bg-ink text-signal"
                        : "border-paper/15 bg-ink text-paper/50",
                  )}
                >
                  {s.n}
                </span>
                <div className="flex-1 rounded-md border border-paper/10 bg-paper/[0.02] p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em]",
                        i === 2
                          ? "bg-signal text-ink"
                          : "border border-paper/12 text-paper/50",
                      )}
                    >
                      Stage {i + 1} of 5
                    </span>
                  </div>
                  <p className="mt-3 max-w-lg leading-relaxed text-paper/60">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY MERCENTA — bento, light */}
      <section id="why-mercenta" className="bg-paper text-ink">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Eyebrow index="04">Why Mercenta</Eyebrow>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">
            Built for brands that want to be in the UK for the long term.
          </h2>
          <div className="mt-14 grid gap-4 md:grid-cols-6 lg:grid-rows-[auto_auto_auto]">
            <figure className="relative overflow-hidden rounded-md md:col-span-6 lg:col-span-3 lg:row-span-3">
              <img
                src={img.scanningCartons}
                alt="Warehouse operative scanning a barcode on stacked cartons"
                className="h-full min-h-[320px] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 rounded-md bg-ink/85 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-paper">
                <ScanLine className="h-3.5 w-3.5 text-signal" /> Every carton accounted for
              </figcaption>
            </figure>
            {REASONS.map((r, i) => (
              <article
                key={r.title}
                className={cn(
                  "flex flex-col justify-between rounded-md border p-6 md:col-span-3",
                  i === 3
                    ? "border-signal bg-signal text-ink lg:col-span-3"
                    : i === 4
                      ? "border-ink bg-ink text-paper lg:col-span-3"
                      : "border-ink/10 lg:col-span-1",
                  i < 3 && "lg:col-span-1",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[11px]",
                    i === 3 ? "text-ink/60" : i === 4 ? "text-signal" : "text-signal",
                  )}
                >
                  0{i + 1}
                </span>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold leading-snug tracking-tight">{r.title}</h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed",
                      i === 3 ? "text-ink/75" : i === 4 ? "text-paper/60" : "text-ink/60",
                    )}
                  >
                    {r.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section id="who-we-work-with" className="border-b border-paper/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow index="05" dark>
                Who we work with
              </Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">
                International brands across ten UK categories.
              </h2>
            </div>
            <ul className="space-y-3 self-end lg:col-span-6 lg:col-start-7">
              {AUDIENCES.map((a) => (
                <li
                  key={a}
                  className="flex items-center justify-between border-b border-paper/10 pb-3 text-paper/75"
                >
                  {a}
                  <ArrowUpRight className="h-4 w-4 text-signal" />
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-paper/10 bg-paper/10 sm:grid-cols-3 lg:grid-cols-5">
            {CATEGORIES.map((c, i) => (
              <div
                key={c.name}
                className="group flex aspect-[4/3] flex-col justify-between bg-ink p-5 transition-colors hover:bg-signal hover:text-ink"
              >
                <div className="flex items-center justify-between">
                  <c.icon className="h-5 w-5 text-signal group-hover:text-ink" />
                  <span className="font-mono text-[10px] text-paper/35 group-hover:text-ink/60">
                    CAT-{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-[15px] font-medium leading-tight">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden bg-signal text-ink">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink/60">
            Commercial partnerships
          </p>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-6xl lg:text-7xl">
            Your route into the UK starts with one conversation.
          </h2>
          <div className="relative mt-12 h-10 max-w-3xl" aria-hidden="true">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-dotted border-ink/40" />
            <span className="absolute top-1/2 flex -translate-y-1/2 animate-route-dot items-center justify-center">
              <span className="h-3.5 w-3.5 rounded-full bg-ink" />
            </span>
            <span className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-ink bg-signal" />
            <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-ink" />
          </div>
          <div className="mt-2 flex max-w-3xl justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70">
            <span>Your brand</span>
            <span>UK shelf</span>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-7 py-4 font-semibold text-paper transition-opacity hover:opacity-90"
            >
              Start a partnership conversation <ArrowRight className="h-4 w-4" />
            </a>
            <span className="font-mono text-sm text-ink/70">
              For brands, commercial partners and investors.
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pb-24">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Wordmark tone="paper" />
              <p className="mt-6 max-w-sm text-paper/55">{TAGLINE}</p>
              <p className="mt-2 max-w-sm text-sm text-paper/40">
                UK wholesale distribution and market-entry platform for international brands.
              </p>
            </div>
            {[
              { h: "Platform", l: ["Infrastructure", "How it works", "Shipment visibility"] },
              { h: "Company", l: ["Why Mercenta", "Who we work with", "Partnerships"] },
              { h: "Legal", l: ["Privacy", "Terms", "Cookies"] },
            ].map((col) => (
              <div key={col.h} className="md:col-span-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/40">{col.h}</p>
                <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
                  {col.l.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-col justify-between gap-3 border-t border-paper/10 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40 sm:flex-row">
            <span>© 2026 Mercenta Partners Ltd</span>
            <span className="flex items-center gap-2">
              <Truck className="h-3.5 w-3.5 text-signal" /> United Kingdom
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
