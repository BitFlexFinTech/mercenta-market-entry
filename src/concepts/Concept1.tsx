import { ArrowRight, ArrowUpRight, Menu } from "lucide-react";

import { ConceptSwitcher } from "@/components/mercenta/ConceptSwitcher";
import { ShipmentTracker } from "@/components/mercenta/ShipmentTracker";
import { MMark, Wordmark } from "@/components/mercenta/Wordmark";
import { img } from "@/content/images";
import {
  CATEGORIES,
  INFRASTRUCTURE,
  NAV,
  REASONS,
  STEPS,
  TAGLINE,
  TAGLINE_PARTS,
} from "@/content/mercenta";
import { cn } from "@/lib/utils";

/** Big heavy display type: Archivo, expanded width, black weight. */
const display = "font-archivo font-black uppercase font-expanded tracking-[-0.02em]";

function Marquee({ tone }: { tone: "ink" | "signal" }) {
  const words = [...TAGLINE_PARTS, ...TAGLINE_PARTS];
  return (
    <div
      className={cn(
        "overflow-hidden border-y-4 py-5",
        tone === "ink" ? "border-ink bg-ink text-paper" : "border-ink bg-signal text-ink",
      )}
    >
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {[...words, ...words].map((w, i) => (
          <span key={i} className={cn(display, "flex items-center gap-10 text-3xl md:text-5xl")}>
            {w}
            <span
              className={cn(
                "inline-block h-5 w-5 rounded-full md:h-7 md:w-7",
                tone === "ink" ? "bg-signal" : "bg-ink",
              )}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Concept1() {
  return (
    <div className="bg-signal font-archivo text-ink">
      {/* HEADER */}
      <header className="border-b-4 border-ink bg-signal">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <Wordmark tone="ink" tile="ink" markClassName="h-9 w-9" />
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-bold uppercase tracking-[0.08em] underline-offset-8 hover:underline"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 bg-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-paper transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Partner with us <ArrowRight className="h-4 w-4" />
            </a>
            <span className="flex h-11 w-11 items-center justify-center bg-ink text-paper lg:hidden">
              <Menu className="h-5 w-5" />
            </span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-14 pt-10 md:px-10 md:pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-20">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-3 bg-ink px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-paper md:text-sm">
              <span className="h-2 w-2 rounded-full bg-signal" />
              {TAGLINE}
            </p>
            <h1 className={cn(display, "mt-8 text-[3.4rem] leading-[0.86] sm:text-[5.5rem] lg:text-[7.4rem] xl:text-[8.6rem]")}>
              Britain
              <br />
              starts
              <br />
              <span className="text-paper">here.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed md:text-xl">
              Mercenta is the UK wholesale distribution and market-entry partner for international
              brands. One partner for freight, storage, retail-channel operations and commercial
              growth — so your brand can enter the UK, establish itself and keep growing.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-ink px-8 py-5 text-base font-black uppercase tracking-[0.06em] text-paper font-expanded transition-transform hover:-translate-y-1"
              >
                Bring your brand to the UK <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-3 border-4 border-ink px-8 py-4 text-base font-black uppercase tracking-[0.06em] font-expanded transition-colors hover:bg-ink hover:text-paper"
              >
                How it works
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative z-10 lg:ml-auto lg:max-w-[440px]">
              <ShipmentTracker className="[&>p]:text-ink/70" />
            </div>
            <div className="relative ml-auto mt-8 aspect-[5/4] w-[88%] overflow-hidden rounded-tl-full border-4 border-ink">
              <img
                src={img.loadingDock}
                alt="Forklift moving a pallet towards a lorry at a UK distribution centre loading dock at dusk"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-0 hidden h-28 w-28 rounded-full bg-ink md:block" />
          </div>
        </div>
      </section>

      <Marquee tone="ink" />

      {/* INFRASTRUCTURE */}
      <section id="infrastructure" className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <h2 className={cn(display, "text-[2.3rem] leading-[0.9] sm:text-5xl md:text-7xl lg:col-span-8 lg:text-8xl")}>
              The whole <span className="text-signal">UK route.</span>
              <br />
              One partner.
            </h2>
            <p className="text-lg leading-relaxed text-paper/70 lg:col-span-4">
              Coordinated UK market-entry infrastructure — every part of getting your products in
              front of UK customers, connected and run as one.
            </p>
          </div>

          <div className="mt-16 grid gap-0 border-t-4 border-signal md:grid-cols-2 lg:grid-cols-5">
            {INFRASTRUCTURE.map((s, i) => (
              <article
                key={s.key}
                className={cn(
                  "group border-b border-paper/15 p-6 md:p-8 lg:border-b-0 lg:border-r",
                  i === 0 && "bg-signal text-ink",
                  i === 4 && "lg:border-r-0",
                )}
              >
                <span
                  className={cn(
                    display,
                    "block text-6xl leading-none",
                    i === 0 ? "text-ink" : "text-signal",
                  )}
                >
                  0{i + 1}
                </span>
                <h3 className="mt-8 text-lg font-extrabold uppercase leading-tight tracking-[0.01em]">
                  {s.title}
                </h3>
                <p className={cn("mt-4 leading-relaxed", i === 0 ? "text-ink/80" : "text-paper/65")}>
                  {s.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <div className="relative overflow-hidden md:col-span-2">
              <img
                src={img.warehouseAisle}
                alt="Long warehouse aisle lined with pallet racking"
                className="h-[360px] w-full object-cover md:h-[460px]"
                loading="lazy"
              />
              <span className="absolute left-0 top-0 bg-signal px-5 py-3 text-sm font-black uppercase tracking-[0.1em] text-ink font-expanded">
                Storage &amp; fulfilment
              </span>
            </div>
            <div className="flex flex-col justify-between bg-signal p-8 text-ink">
              <MMark tile="ink" className="h-14 w-14" />
              <p className={cn(display, "text-4xl leading-[0.95] md:text-5xl")}>
                Ship it. Store it. Sell it. Grow it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-signal">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className={cn(display, "text-[2.3rem] leading-[0.9] sm:text-5xl md:text-7xl lg:text-8xl")}>
              Five moves
              <br />
              to the UK.
            </h2>
            <p className="max-w-md text-lg font-medium leading-relaxed">
              A clear, managed sequence — from first review of your range to sustained growth in UK
              retail.
            </p>
          </div>
          <ol className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <li
                key={s.n}
                className={cn(
                  "relative flex min-h-[320px] flex-col justify-between border-4 border-ink p-6",
                  i % 2 === 1 ? "bg-ink text-paper" : "bg-signal",
                  i === 4 && "bg-paper",
                )}
              >
                <span
                  className={cn(
                    display,
                    "text-[4.5rem] leading-none",
                    i % 2 === 1 ? "text-signal" : "text-outline-ink",
                  )}
                >
                  {s.n}
                </span>
                <div>
                  <h3 className={cn(display, "text-2xl")}>{s.title}</h3>
                  <p className={cn("mt-3 leading-relaxed", i % 2 === 1 ? "text-paper/70" : "text-ink/80")}>
                    {s.body}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <span className="absolute -right-[22px] top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-4 border-ink bg-paper text-ink lg:flex">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY MERCENTA */}
      <section id="why-mercenta" className="bg-paper">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <h2 className={cn(display, "text-[3.6rem] leading-[0.85] md:text-[6rem] lg:text-[5.4rem] xl:text-[6.4rem]")}>
              Why
              <br />
              <span className="text-signal">Mer</span>
              <br />
              centa.
            </h2>
            <div className="mt-10 aspect-square w-3/4 overflow-hidden rounded-full border-4 border-ink">
              <img
                src={img.containerPort}
                alt="Aerial view of shipping containers stacked at a port"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <ul className="lg:col-span-7 lg:pt-6">
            {REASONS.map((r, i) => (
              <li key={r.title} className="group grid grid-cols-[auto_1fr] gap-6 border-t-4 border-ink py-8 last:border-b-4">
                <span className="flex h-14 w-14 items-center justify-center bg-signal text-xl font-black font-expanded">
                  {i + 1}
                </span>
                <div>
                  <h3 className={cn(display, "text-2xl leading-tight md:text-4xl")}>{r.title}</h3>
                  <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink/70">{r.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Marquee tone="signal" />

      {/* WHO WE WORK WITH */}
      <section id="who-we-work-with" className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <h2 className={cn(display, "text-[2.3rem] leading-[0.9] sm:text-5xl md:text-7xl lg:col-span-8 lg:text-8xl")}>
              Ten categories.
              <br />
              <span className="text-signal">One UK partner.</span>
            </h2>
            <p className="text-lg leading-relaxed text-paper/70 lg:col-span-4">
              We work with international brands and established businesses across the categories UK
              shoppers buy every day.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-1 md:grid-cols-5">
            {CATEGORIES.map((c, i) => {
              const style = [
                "bg-signal text-ink",
                "bg-paper text-ink",
                "bg-ink text-paper border-2 border-paper/20",
              ][(i + Math.floor(i / 5)) % 3];
              return (
                <div key={c.name} className={cn("flex aspect-square flex-col justify-between p-5 md:p-6", style)}>
                  <c.icon className="h-8 w-8 md:h-10 md:w-10" strokeWidth={2.2} />
                  <span className="text-base font-extrabold uppercase leading-tight tracking-[0.02em] font-expanded md:text-lg">
                    {c.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="relative overflow-hidden bg-signal">
        <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-ink md:-right-20" />
        <div className="absolute -right-6 top-40 hidden h-56 w-56 rounded-full bg-paper md:block" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
          <p className="text-sm font-bold uppercase tracking-[0.2em]">Commercial partnerships</p>
          <h2 className={cn(display, "mt-6 max-w-5xl text-[3.2rem] leading-[0.88] md:text-[6.5rem] lg:text-[8rem]")}>
            Let’s take your brand to the UK.
          </h2>
          <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed">
            If you are an international brand ready to enter or expand in the UK, we would like to
            hear from you.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 bg-ink px-9 py-6 text-lg font-black uppercase tracking-[0.06em] text-paper font-expanded transition-transform hover:-translate-y-1"
          >
            Start a partnership <ArrowUpRight className="h-6 w-6" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink pb-28 text-paper">
        <div className="mx-auto max-w-[1440px] px-5 pt-16 md:px-10">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <Wordmark tone="paper" />
              <p className="mt-5 max-w-sm text-paper/60">{TAGLINE}</p>
            </div>
            <ul className="space-y-2 text-sm font-semibold uppercase tracking-[0.08em]">
              {NAV.map((n) => (
                <li key={n.href}>{n.label}</li>
              ))}
            </ul>
            <ul className="space-y-2 text-sm font-semibold uppercase tracking-[0.08em] text-paper/60">
              <li>Partnerships</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
          <p
            className={cn(
              display,
              "mt-16 select-none overflow-hidden text-center text-[12vw] leading-[0.8] text-signal xl:text-[10.5rem]",
            )}
          >
            Mercenta
          </p>
          <div className="flex flex-col justify-between gap-2 border-t border-paper/15 py-6 text-xs uppercase tracking-[0.15em] text-paper/50 sm:flex-row">
            <span>© 2026 Mercenta Partners Ltd</span>
            <span>United Kingdom</span>
          </div>
        </div>
      </footer>

      <ConceptSwitcher current={1} />
    </div>
  );
}
