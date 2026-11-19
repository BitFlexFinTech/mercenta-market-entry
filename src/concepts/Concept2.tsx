import { ArrowRight, ArrowUpRight, Menu } from "lucide-react";

import { ConceptSwitcher } from "@/components/mercenta/ConceptSwitcher";
import { ShipmentTracker } from "@/components/mercenta/ShipmentTracker";
import { Wordmark } from "@/components/mercenta/Wordmark";
import { img } from "@/content/images";
import { AUDIENCES, CATEGORIES, INFRASTRUCTURE, NAV, REASONS, STEPS, TAGLINE } from "@/content/mercenta";
import { cn } from "@/lib/utils";

const serif = "font-serif font-normal tracking-[-0.015em]";

function Label({ children, dark }: { children: string; dark?: boolean }) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]",
        dark ? "text-paper/60" : "text-ink/55",
      )}
    >
      <span className="h-[3px] w-6 bg-signal" />
      {children}
    </p>
  );
}

export function Concept2() {
  return (
    <div className="bg-paper font-schibsted text-ink">
      {/* UTILITY BAR + HEADER */}
      <div className="bg-ink text-paper">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-xs tracking-[0.04em]">
          <span className="text-paper/60">UK wholesale distribution &amp; market-entry partner</span>
          <a href="#contact" className="hidden items-center gap-1.5 text-paper/80 hover:text-paper sm:flex">
            Partnership enquiries <ArrowUpRight className="h-3.5 w-3.5 text-signal" />
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Wordmark />
          <nav className="hidden items-center gap-9 lg:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-[15px] text-ink/70 transition-colors hover:text-ink">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 border border-ink bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-signal hover:text-ink hover:border-signal sm:inline-flex"
            >
              Discuss a partnership
            </a>
            <span className="flex h-10 w-10 items-center justify-center border border-ink/15 lg:hidden">
              <Menu className="h-4 w-4" />
            </span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
          <div className="flex flex-col justify-center px-6 py-16 md:py-24 lg:col-span-6 lg:border-r lg:border-ink/10 lg:pr-14">
            <Label>{TAGLINE}</Label>
            <h1 className={cn(serif, "mt-8 text-[2.75rem] leading-[1.04] md:text-6xl lg:text-[4.25rem]")}>
              The UK distribution partner for{" "}
              <span className="italic">international brands</span>
              <span className="text-signal">.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink/65">
              Mercenta helps established brands enter, establish and grow in the UK — providing the
              wholesale distribution, logistics coordination, storage and retail-channel operations
              behind a successful market entry.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-signal px-7 py-4 font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Begin a UK partnership <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#infrastructure" className="border-b border-ink pb-1 font-semibold">
                Our infrastructure
              </a>
            </div>
          </div>
          <div className="relative min-h-[560px] lg:col-span-6">
            <img
              src={img.warehouseAisle}
              alt="Two operatives walking an aisle of pallet racking in a UK warehouse"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/25" />
            <div className="absolute bottom-0 left-0 h-3 w-1/2 bg-signal" />
            <div className="absolute right-4 top-4 w-[calc(100%-2rem)] max-w-[400px] sm:right-8 sm:top-8">
              <ShipmentTracker className="[&>p]:bg-ink/70 [&>p]:px-3 [&>p]:py-2 [&>p]:text-paper/80" />
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITY INDEX */}
      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-5">
          {INFRASTRUCTURE.map((s, i) => (
            <div
              key={s.key}
              className={cn(
                "border-ink/10 px-6 py-7",
                i < 4 && "md:border-r",
                i % 2 === 0 && "border-r md:border-r",
                i < 4 && "border-b md:border-b-0",
              )}
            >
              <span className="font-serif text-sm text-signal">0{i + 1}</span>
              <p className="mt-2 text-sm font-semibold leading-snug">{s.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section id="infrastructure">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Label>Distribution infrastructure</Label>
              <h2 className={cn(serif, "mt-6 text-4xl leading-[1.1] md:text-5xl")}>
                Coordinated infrastructure for UK market entry.
              </h2>
              <p className="mt-6 leading-relaxed text-ink/60">
                Mercenta provides access to the operational foundations international brands need in
                the UK — managed as one coherent service rather than a chain of separate suppliers.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <img
              src={img.loadingDock}
              alt="Pallet being loaded onto a lorry at a distribution centre loading bay at dusk"
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
            <ol className="mt-4 border-t-2 border-ink">
              {INFRASTRUCTURE.map((s, i) => (
                <li
                  key={s.key}
                  className="grid gap-3 border-b border-ink/10 py-8 md:grid-cols-[80px_1fr_1.3fr] md:gap-8"
                >
                  <span className={cn(serif, "text-3xl text-signal")}>0{i + 1}</span>
                  <h3 className={cn(serif, "text-2xl leading-snug")}>{s.title}</h3>
                  <p className="leading-relaxed text-ink/60">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Label dark>How it works</Label>
              <h2 className={cn(serif, "mt-6 text-4xl leading-[1.1] md:text-5xl")}>
                A structured path from first review to sustained UK growth.
              </h2>
            </div>
            <p className="leading-relaxed text-paper/60 lg:col-span-4 lg:col-start-9">
              Each stage is managed by Mercenta, with clear responsibilities and visibility for your
              team throughout.
            </p>
          </div>

          <div className="relative mt-20">
            <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-paper/20 lg:block" />
            <div className="absolute left-0 top-[6px] hidden h-[3px] w-[30%] bg-signal lg:block" />
            <ol className="grid gap-12 lg:grid-cols-5 lg:gap-8">
              {STEPS.map((s, i) => (
                <li key={s.n} className="relative border-l border-paper/20 pl-6 lg:border-l-0 lg:pl-0">
                  <span
                    className={cn(
                      "absolute -left-[8px] top-0 h-4 w-4 rounded-full border-2 lg:static lg:block",
                      i < 2 ? "border-signal bg-signal" : "border-paper/60 bg-ink",
                    )}
                  />
                  <p className={cn(serif, "text-sm text-signal lg:mt-8")}>Stage {s.n}</p>
                  <h3 className={cn(serif, "mt-2 text-3xl")}>{s.title}</h3>
                  <p className="mt-4 leading-relaxed text-paper/60">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-20 grid gap-4 md:grid-cols-3">
            <img
              src={img.containerPort}
              alt="Aerial view of a container port"
              className="aspect-[4/3] w-full object-cover md:aspect-auto md:h-72"
              loading="lazy"
            />
            <img
              src={img.scanningCartons}
              alt="Warehouse operative scanning cartons"
              className="aspect-[4/3] w-full object-cover md:aspect-auto md:h-72"
              loading="lazy"
            />
            <img
              src={img.motorwayLorry}
              alt="Unbranded lorry on a British motorway at sunrise"
              className="aspect-[4/3] w-full object-cover md:aspect-auto md:h-72"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* WHY MERCENTA */}
      <section id="why-mercenta">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-12">
          <div className="relative self-start lg:col-span-5">
            <img
              src={img.commercialTeam}
              alt="Two commercial managers reviewing product samples in a London office"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 hidden bg-signal p-8 md:block">
              <p className={cn(serif, "max-w-[220px] text-2xl leading-snug text-ink")}>
                A UK partner, not a supplier.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Label>Why Mercenta</Label>
            <h2 className={cn(serif, "mt-6 text-4xl leading-[1.1] md:text-5xl")}>
              The commercial and operational partner behind your UK presence.
            </h2>
            <dl className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
              {REASONS.map((r, i) => (
                <div key={r.title} className="grid grid-cols-[48px_1fr] gap-4 py-6">
                  <dt className={cn(serif, "text-2xl text-signal")}>{i + 1}</dt>
                  <dd>
                    <p className="text-lg font-semibold">{r.title}</p>
                    <p className="mt-1.5 leading-relaxed text-ink/60">{r.body}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section id="who-we-work-with" className="border-t border-ink/10 bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Label>Who we work with</Label>
              <h2 className={cn(serif, "mt-6 text-4xl leading-[1.1] md:text-5xl")}>
                Brands and partners across the UK’s core consumer categories.
              </h2>
            </div>
            <ul className="space-y-3 self-end lg:col-span-5 lg:col-start-8">
              {AUDIENCES.map((a) => (
                <li key={a} className="flex items-start gap-3 text-ink/75">
                  <span className="mt-2.5 h-[3px] w-4 shrink-0 bg-signal" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-16 grid lg:grid-cols-12">
            <img
              src={img.productsShelf}
              alt="Assorted consumer products across kitchenware, baby, electronics, apparel, groceries and wine"
              className="h-full min-h-[320px] w-full object-cover lg:col-span-4"
              loading="lazy"
            />
            <div className="grid grid-cols-2 border-l border-t border-ink/10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5 lg:border-t-0">
              {CATEGORIES.map((c, i) => (
                <div
                  key={c.name}
                  className="group flex min-h-[160px] flex-col justify-between border-b border-r border-ink/10 p-5 transition-colors hover:bg-ink hover:text-paper lg:[&:nth-child(-n+5)]:border-t"
                >
                  <div className="flex items-start justify-between">
                    <c.icon className="h-6 w-6 text-ink/80 group-hover:text-signal" strokeWidth={1.5} />
                    <span className="font-serif text-xs text-ink/40 group-hover:text-paper/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[15px] font-semibold leading-snug">{c.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
          <div className="px-6 py-20 md:py-28 lg:col-span-7 lg:pr-16">
            <Label dark>Commercial partnerships</Label>
            <h2 className={cn(serif, "mt-6 text-4xl leading-[1.08] md:text-6xl")}>
              Considering the UK market? Let’s discuss a partnership.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/60">
              We welcome conversations with international brands, commercial partners and
              institutional investors interested in UK distribution.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-10 bg-signal px-6 py-14 text-ink md:px-12 lg:col-span-5">
            <p className={cn(serif, "text-2xl leading-snug")}>
              Tell us about your brand, your range and your ambitions for the UK.
            </p>
            <div className="space-y-3">
              <a
                href="#contact"
                className="flex items-center justify-between bg-ink px-6 py-5 font-semibold text-paper transition-opacity hover:opacity-90"
              >
                Request an introductory call <ArrowRight className="h-5 w-5 text-signal" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-between border border-ink px-6 py-5 font-semibold"
              >
                Investor &amp; partner enquiries <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pb-24">
        <div className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid gap-12 border-b border-ink/10 pb-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <Wordmark />
              <p className={cn(serif, "mt-6 max-w-sm text-xl leading-snug")}>{TAGLINE}</p>
            </div>
            {[
              { h: "Services", l: INFRASTRUCTURE.map((s) => s.short) },
              { h: "Company", l: ["Why Mercenta", "Who we work with", "Partnerships", "Investors"] },
              { h: "Legal", l: ["Privacy policy", "Terms of use", "Cookies"] },
            ].map((col) => (
              <div key={col.h} className="md:col-span-2 md:[&:nth-child(2)]:col-start-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">{col.h}</p>
                <ul className="mt-4 space-y-2.5 text-[15px] text-ink/75">
                  {col.l.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between gap-2 py-6 text-sm text-ink/50 sm:flex-row">
            <span>© 2026 Mercenta Partners Ltd. All rights reserved.</span>
            <span>United Kingdom</span>
          </div>
        </div>
      </footer>

      <ConceptSwitcher current={2} />
    </div>
  );
}
