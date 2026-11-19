import { Link } from "@tanstack/react-router";

import { CONCEPTS } from "@/content/mercenta";
import { cn } from "@/lib/utils";

/** Floating bar on every concept page for jumping between designs or back to the hub. */
export function ConceptSwitcher({ current }: { current: 1 | 2 | 3 | 4 }) {
  return (
    <nav
      aria-label="Concept switcher"
      className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 font-mono"
    >
      <div className="flex items-center gap-1 rounded-md border border-paper/15 bg-ink/90 p-1 text-[11px] uppercase tracking-[0.14em] text-paper shadow-2xl backdrop-blur">
        <Link to="/" className="rounded-sm px-3 py-2 text-paper/60 transition-colors hover:text-paper">
          Hub
        </Link>
        <span className="h-4 w-px bg-paper/15" />
        {CONCEPTS.map((c) => (
          <Link
            key={c.n}
            to={c.path}
            className={cn(
              "flex items-center gap-2 rounded-sm px-3 py-2 transition-colors",
              c.n === current ? "bg-signal text-ink" : "text-paper/70 hover:text-paper",
            )}
          >
            <span className="font-semibold">0{c.n}</span>
            <span className="hidden md:inline">{c.short}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
