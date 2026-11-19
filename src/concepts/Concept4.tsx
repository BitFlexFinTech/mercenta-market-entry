import { ArrowDownRight, ArrowRight } from "lucide-react";

import { ConceptSwitcher } from "@/components/mercenta/ConceptSwitcher";
import { ShipmentTracker } from "@/components/mercenta/ShipmentTracker";
import { MMark, Wordmark } from "@/components/mercenta/Wordmark";
import { img } from "@/content/images";
import { CATEGORIES, INFRASTRUCTURE, NAV, REASONS, STEPS, TAGLINE, TAGLINE_PARTS } from "@/content/mercenta";
import { cn } from "@/lib/utils";

/** Oversized editorial display: Bricolage Grotesque at large optical size, tight tracking. */
const big = "font-bricolage font-extrabold tracking-[-0.045em] [font-variation-settings:'opsz'_96]";
const caption = "font-mono text-[11px] uppercase tracking-[0.2em]";

export function Concept4() {
  return (
    <div className="bg-paper font-bricolage text-ink">
      {/* HEADER */}
      <header className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-6 md:px-10">
        <Wordmark />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n, i) => (
            <a key={n.href} href={n.href} className="group flex items-baseline gap-1.5 text-[15px] font-medium">
              <span className="font-mono text-[10px] text-signal">0{i + 1}</span>
              <span className="underline-offset-4 group-hover:underline">{n.label}</span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <span className={cn(caption, "hidden text-ink/50 xl:inline")}>Vol. 01 — UK Distribution</span>
          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-signal hover:text-ink"
          >
            Talk to us
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1500px] px-5 pb-16 md:px-10 md:pb-24">
        <div className="flex items-center justify-between border-t-2 border-ink pt-3">
          <span className={caption}>Mercenta Partners Ltd</span>
          <span className={cn(caption, "text-ink/50")}>Issue: UK market entry</span>
        </div>
        <h1 className={cn(big, "mt-6 text-[17vw] leading-[0.82] md:text-[13.5vw] xl:text-[12.5rem]")}>
          From the world
          <br />
          <span className="inline-flex items-center gap-[0.12em]">
            <span className="text-signal">to the</span>
            <MMark className="h-[0.7em] w-[0.7em]" tile="ink" />
            <span>UK.</span>
          </span>
        </h1>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <img
              src={img.containerPort}
              alt="Aerial view of shipping containers stacked at a port beside a container ship"
              className="aspect-[4/5] w-full object-cover"
            />
            <span className={cn(caption, "mt-3 block text-ink/50")}>
              Fig. 1 — Inbound freight, the first mile of UK entry
            </span>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col justify-between bg-signal p-7 md:p-9">
                <span className={caption}>Our positioning</span>
                <p className={cn(big, "mt-10 text-4xl leading-[0.95] md:text-5xl")}>
                  {TAGLINE_PARTS.map((t) => (
                    <span key={t} className="block">
                      {t}
                    </span>
                  ))}
                </p>
              </div>
              <div className="md:-mt-0">
                <ShipmentTracker className="[&>p]:text-ink/50" />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-xl leading-snug md:text-2xl">
                Mercenta is a UK wholesale distribution and market-entry platform. We help
                international brands enter the UK, establish a presence and build lasting growth —
                with the infrastructure to make it happen.
              </p>
              <a
                href="#infrastructure"
                className="flex h-28 w-28 items-center justify-center rounded-full bg-ink text-paper transition-colors hover:bg-signal hover:text-ink"
                aria-label="Read on"
              >
                <ArrowDownRight className="h-10 w-10" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section id="infrastructure" className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className={cn(caption, "text-signal")}>Chapter 01 — Infrastructure</span>
            <p className={cn(big, "mt-4 text-[10rem] leading-[0.8] text-signal md:text-[14rem]")}>05</p>
            <p className="mt-4 max-w-xs text-lg leading-snug">
              Five connected capabilities. One coordinated route into the UK market.
            </p>
            <img
              src={img.conveyor}
              alt="Cartons moving along a roller conveyor in a fulfilment centre"
              className="mt-10 hidden aspect-[3/4] w-4/5 object-cover lg:block"
              loading="lazy"
            />
          </div>
          <ol className="lg:col-span-8">
            {INFRASTRUCTURE.map((s, i) => (
              <li
                key={s.key}
                className={cn(
                  "group grid gap-4 border-t-2 border-ink py-8 md:grid-cols-2 md:gap-10",
                  i === INFRASTRUCTURE.length - 1 && "border-b-2",
                )}
              >
                <h3 className={cn(big, "text-4xl leading-[0.95] md:text-[3.4rem]")}>
                  <span className="mr-3 align-top font-mono text-sm font-normal tracking-normal text-signal">
                    0{i + 1}
                  </span>
                  {s.title}
                </h3>
                <p className="text-lg leading-relaxed text-ink/65 md:pt-3">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FULL-BLEED PHOTO */}
      <section className="relative">
        <img
          src={img.motorwayLorry}
          alt="Unbranded articulated lorry on a British motorway at sunrise"
          className="h-[60vh] min-h-[380px] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 max-w-xl bg-paper p-6 md:left-10 md:p-10">
          <span className={cn(caption, "text-ink/50")}>Fig. 2</span>
          <p className={cn(big, "mt-3 text-3xl leading-[0.95] md:text-5xl")}>
            Built for the roads, ports and shelves of Britain.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-ink text-paper">
        <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className={cn(big, "text-[15vw] leading-[0.82] md:text-[9rem]")}>
              How it
              <br />
              <span className="text-signal">works.</span>
            </h2>
            <span className={cn(caption, "text-paper/50")}>Chapter 02 — Five steps</span>
          </div>
          <ol className="mt-16 grid border-t border-paper/20 md:grid-cols-5">
            {STEPS.map((s, i) => (
              <li
                key={s.n}
                className={cn(
                  "border-b border-paper/20 py-8 md:border-b-0 md:px-5 md:py-10",
                  i > 0 && "md:border-l",
                  i === 0 && "md:pl-0",
                  i % 2 === 1 && "md:pt-28",
                )}
              >
                <span className={cn(big, "block text-7xl leading-none text-outline-paper md:text-8xl")}>
                  {s.n}
                </span>
                <h3 className="mt-6 text-2xl font-bold tracking-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-paper/60">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY MERCENTA */}
      <section id="why-mercenta" className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-32">
        <span className={cn(caption, "text-signal")}>Chapter 03 — Why Mercenta</span>
        <h2 className={cn(big, "mt-6 max-w-6xl text-5xl leading-[0.92] md:text-[6.5rem]")}>
          We don’t just launch brands in the UK. We build them a{" "}
          <span className="bg-signal px-2">place</span> in it.
        </h2>
        <div className="mt-20 grid gap-10 lg:grid-cols-12">
          <div className="relative lg:col-span-5 lg:col-start-1">
            <img
              src={img.commercialTeam}
              alt="Commercial team reviewing product samples in a London office"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-5 -right-5 hidden h-32 w-32 bg-ink md:block" />
          </div>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {REASONS.map((r, i) => (
              <div key={r.title} className={cn(i === 0 && "sm:col-span-2")}>
                <span className="font-mono text-xs text-signal">({String(i + 1).padStart(2, "0")})</span>
                <h3 className={cn(big, "mt-2 text-3xl leading-[0.95]", i === 0 && "md:text-5xl")}>
                  {r.title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink/65">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section id="who-we-work-with" className="border-t-2 border-ink">
        <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <span className={cn(caption, "text-signal")}>Chapter 04 — Who we work with</span>
              <p className="mt-6 text-lg leading-snug">
                International brands and established businesses across the categories UK shoppers
                rely on.
              </p>
              <img
                src={img.productsShelf}
                alt="Assorted consumer products on shelving"
                className="mt-8 aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className={cn(big, "min-w-0 text-[2.4rem] leading-[1.02] md:text-[4.6rem] lg:col-span-9")}>
              {CATEGORIES.map((c, i) => (
                <span key={c.name}>
                  <span className={cn(i % 3 === 1 && "text-signal", i % 3 === 2 && "text-outline-ink")}>
                    {c.name}
                  </span>
                  {i < CATEGORIES.length - 1 && <span className="mx-3 text-ink/20"> / </span>}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="bg-signal">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12">
          <h2 className={cn(big, "text-[22vw] leading-[0.8] lg:col-span-8 lg:text-[13rem]")}>
            Let’s
            <br />
            talk UK.
          </h2>
          <div className="flex flex-col justify-end gap-8 lg:col-span-4">
            <p className="text-xl leading-snug">
              For international brands ready to enter or expand in the UK — and for partners and
              investors who share the ambition.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-between gap-4 bg-ink px-7 py-6 text-lg font-semibold text-paper transition-transform hover:-translate-y-1"
            >
              Start a partnership conversation <ArrowRight className="h-5 w-5 text-signal" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink pb-28 text-paper">
        <div className="mx-auto max-w-[1500px] px-5 pt-14 md:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <p className="text-2xl font-semibold leading-tight tracking-tight md:col-span-5">{TAGLINE}</p>
            <ul className="space-y-2 text-paper/70 md:col-span-3 md:col-start-7">
              {NAV.map((n) => (
                <li key={n.href}>{n.label}</li>
              ))}
            </ul>
            <ul className="space-y-2 text-paper/50 md:col-span-3">
              <li>Partnerships</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className="mt-16 flex items-end justify-between gap-6 border-t border-paper/15 pt-8">
            <span className={cn(big, "text-[16vw] leading-[0.8] md:text-[11rem]")}>
              mercenta<span className="text-signal">.</span>
            </span>
          </div>
          <div className={cn(caption, "flex flex-col justify-between gap-2 py-6 text-paper/40 sm:flex-row")}>
            <span>© 2026 Mercenta Partners Ltd</span>
            <span>United Kingdom</span>
          </div>
        </div>
      </footer>

      <ConceptSwitcher current={4} />
    </div>
  );
}
