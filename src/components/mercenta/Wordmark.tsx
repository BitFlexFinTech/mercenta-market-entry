import { cn } from "@/lib/utils";

/**
 * Mercenta logo: an orange tile carrying a lowercase "m" mark, followed by the
 * MERCENTA wordmark. `tone` controls the wordmark colour for light or dark
 * backgrounds; `mark` lets orange-background layouts invert the tile.
 */
export function MMark({
  className,
  tile = "signal",
}: {
  className?: string | undefined;
  tile?: "signal" | "ink" | "paper";
}) {
  const tileCls = tile === "signal" ? "fill-signal" : tile === "ink" ? "fill-ink" : "fill-paper";
  const strokeCls = tile === "signal" ? "stroke-ink" : tile === "ink" ? "stroke-signal" : "stroke-ink";
  return (
    <svg viewBox="0 0 32 32" className={cn("h-8 w-8 shrink-0", className)} aria-hidden="true">
      <rect width="32" height="32" rx="3" className={tileCls} />
      <path
        d="M8 24V12.5M8 16.5a4 4 0 0 1 8 0V24M16 16.5a4 4 0 0 1 8 0V24"
        fill="none"
        strokeWidth="3.4"
        strokeLinecap="square"
        className={strokeCls}
      />
    </svg>
  );
}

export function Wordmark({
  tone = "ink",
  tile = "signal",
  className,
  markClassName,
  showText = true,
}: {
  tone?: "ink" | "paper";
  tile?: "signal" | "ink" | "paper";
  className?: string | undefined;
  markClassName?: string | undefined;
  showText?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)} aria-label="Mercenta">
      <MMark tile={tile} className={markClassName} />
      {showText && (
        <span
          className={cn(
            "font-brand text-[1.05rem] font-extrabold uppercase leading-none tracking-[0.22em] font-expanded",
            tone === "ink" ? "text-ink" : "text-paper",
          )}
        >
          Mercenta
        </span>
      )}
    </span>
  );
}
