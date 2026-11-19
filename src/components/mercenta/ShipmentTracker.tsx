import { Check } from "lucide-react";

import { TRACKER } from "@/content/mercenta";
import { cn } from "@/lib/utils";

/**
 * Shipment Tracker — reproduced unchanged from the demo.mercenta.co.uk hero.
 * Structure, sizes and animation timings follow the demo spec exactly;
 * colours come from the --tracker-* tokens in styles.css.
 */
export function ShipmentTracker({ className }: { className?: string | undefined }) {
  return (
    <div className={cn("w-full", className)}>
      <div className="rounded-2xl border border-paper/[0.08] bg-tracker-surface p-6 shadow-2xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-tracker-muted">
            Shipment Tracker
          </span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-tracker-ping rounded-full bg-live opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-tracker-faint">
              Example
            </span>
          </span>
        </div>

        {/* Transit route track */}
        <div className="relative mb-1 h-10" aria-hidden="true">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-dotted border-tracker-line" />
          <span className="absolute top-1/2 flex -translate-y-1/2 animate-route-dot items-center justify-center">
            <span className="h-3.5 w-3.5 rounded-full bg-signal shadow-[0_0_12px_var(--signal)]" />
          </span>
          <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-tracker-ring bg-tracker-surface" />
          <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-tracker-ring bg-tracker-surface" />
          <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-signal bg-tracker-surface" />
        </div>
        <div className="mb-6 flex justify-between font-mono text-[11px] uppercase tracking-wider text-tracker-muted">
          <span>Origin</span>
          <span>In Transit</span>
          <span className="text-signal">UK Arrival</span>
        </div>

        {/* Live stages card */}
        <div className="divide-y divide-paper/[0.06] rounded-xl border border-paper/[0.06] bg-tracker-well">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="font-mono text-xs text-tracker-muted">
              {TRACKER.reference} · {TRACKER.cargo}
            </span>
            <span className="rounded-full border border-paper/[0.12] bg-paper/[0.06] px-2 py-0.5 font-mono text-[10px] text-tracker-text">
              {TRACKER.freight}
            </span>
          </div>
          {TRACKER.stages.map((s) => (
            <div key={s.label} className="flex items-center justify-between px-4 py-2.5">
              <span className="font-mono text-xs text-tracker-text">{s.label}</span>
              {s.done ? (
                <Check className="h-4 w-4 text-live" aria-label="Complete" />
              ) : (
                <span className="rounded-full bg-signal px-2 py-0.5 font-mono text-[10px] font-semibold text-ink">
                  IN PROGRESS
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3 text-center font-mono text-xs text-tracker-faint">{TRACKER.caption}</p>
    </div>
  );
}
