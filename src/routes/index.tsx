import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Wordmark } from "@/components/mercenta/Wordmark";
import { CONCEPTS, TAGLINE } from "@/content/mercenta";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mercenta Partners — Four Homepage Concepts" },
      {
        name: "description",
        content:
          "Compare four homepage design directions for Mercenta Partners Ltd, the UK wholesale distribution and market-entry partner for international brands.",
      },
      { property: "og:title", content: "Mercenta Partners — Four Homepage Concepts" },
      {
        property: "og:description",
        content: "Four homepage design directions for Mercenta Partners Ltd. Global Brands. UK Distribution. Smarter Growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Hub,
});

function BalanceBar({ balance }: { balance: readonly [number, number, number] }) {
  const [orange, black, white] = balance;
  return (
    <div className="flex h-2 w-full overflow-hidden border border-paper/20">
      <span className="bg-signal" style={{ width: `${orange}%` }} />
      <span className="bg-ink" style={{ width: `${black}%` }} />
      <span className="bg-paper" style={{ width: `${white}%` }} />
    </div>
  );
}

function Hub() {
  return (
    <div className="min-h-screen bg-ink font-geist text-paper">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <Wordmark tone="paper" />
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/45">
          Homepage concepts · 2026
        </span>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20">
        <section className="border-t border-paper/15 pt-14">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">{TAGLINE}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">
            Four homepage directions for Mercenta Partners.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/60">
            Same positioning, same content, four distinct visual approaches. Open each one to see the
            full homepage, then use the switcher at the bottom of the page to compare.
          </p>
        </section>

        <ol className="mt-14 grid gap-px overflow-hidden border border-paper/15 bg-paper/15 md:grid-cols-2">
          {CONCEPTS.map((c) => (
            <li key={c.n}>
              <Link
                to={c.path}
                className="group flex h-full flex-col justify-between gap-10 bg-ink p-7 transition-colors hover:bg-paper/[0.04] md:p-9"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={cn(
                      "flex h-12 w-12 items-center justify-center font-mono text-sm font-semibold",
                      c.n === 1 ? "bg-signal text-ink" : "border border-paper/25 text-paper",
                    )}
                  >
                    0{c.n}
                  </span>
                  <ArrowUpRight className="h-6 w-6 text-paper/40 transition-colors group-hover:text-signal" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{c.name}</h2>
                  <p className="mt-3 leading-relaxed text-paper/60">{c.summary}</p>
                  <div className="mt-8">
                    <BalanceBar balance={c.balance} />
                    <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40">
                      <span>Orange · Black · White balance</span>
                      <span className="text-paper/70 group-hover:text-signal">Open {c.path}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/35">
          Design concepts only · Buttons and forms are visual · © 2026 Mercenta Partners Ltd
        </p>
      </main>
    </div>
  );
}
