import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle, ArrowDownRight, ArrowUpRight, BarChart3, Check, ChevronDown, Download,
  Film, Grid3x3, Image as ImageIcon, LayoutGrid, Monitor, Plus, Smartphone, Sparkles, Upload,
} from "lucide-react";

import { Wordmark } from "@/components/mercenta/Wordmark";
import { img } from "@/content/images";
import { cn } from "@/lib/utils";
import { ASINS, BRANDS, CAMPAIGNS, FORMATS, KPIS, LIBRARY, SERIES, type Format } from "./data";

type Tab = "performance" | "studio" | "library";

const card = "rounded-xl border border-signal bg-tracker-surface";
const mono = "font-mono text-[11px] uppercase tracking-[0.2em] text-tracker-muted";
const gbp = (n: number) => `£${n.toLocaleString("en-GB")}`;

function Beacon() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-tracker-ping rounded-full bg-live opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
    </span>
  );
}

export function AdsManagement() {
  const [tab, setTab] = useState<Tab>("performance");
  const [brand, setBrand] = useState(BRANDS[0] ?? "");
  const tabs: { id: Tab; label: string; icon: typeof BarChart3 }[] = [
    { id: "performance", label: "Performance", icon: BarChart3 },
    { id: "studio", label: "Creative Studio", icon: Sparkles },
    { id: "library", label: "Campaigns & Assets", icon: LayoutGrid },
  ];

  return (
    <div className="min-h-screen bg-ink font-geist text-paper">
      <header className="sticky top-0 z-40 border-b border-signal bg-ink backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-4">
            <Link to="/"><Wordmark tone="paper" /></Link>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.25em] text-signal sm:inline">// Ads Management</span>
          </div>
          <div className="flex items-center gap-3">
            <label className="relative">
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="appearance-none rounded-md border border-signal bg-tracker-surface py-2 pl-3 pr-8 text-sm text-paper"
              >
                {BRANDS.map((b) => <option key={b}>{b}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-tracker-muted" />
            </label>
            <span className="hidden items-center gap-2 rounded-md border border-signal px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-tracker-muted md:flex">
              <Beacon /> Live sync · example data
            </span>
          </div>
        </div>
        <nav className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-6">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm transition-colors",
                tab === t.id ? "border-signal text-paper" : "border-transparent text-paper hover:text-paper",
              )}
            >
              <t.icon className="h-4 w-4" /> {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {tab === "performance" && <Performance onCreate={() => setTab("studio")} />}
        {tab === "studio" && <Studio brand={brand} />}
        {tab === "library" && <Library onCreate={() => setTab("studio")} />}
      </main>
    </div>
  );
}

/* ---------------- PERFORMANCE ---------------- */
function Performance({ onCreate }: { onCreate: () => void }) {
  const [range, setRange] = useState(30);
  const [campaigns, setCampaigns] = useState(CAMPAIGNS);
  const data = SERIES.slice(-range);
  const max = Math.max(...data.map((d) => d.sales));
  const pts = (key: "spend" | "sales") =>
    data.map((d, i) => `${(i / Math.max(data.length - 1, 1)) * 100},${100 - (d[key] / max) * 92}`).join(" ");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className={mono}>Overview</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Advertising performance</h1>
        </div>
        <div className="flex gap-2">
          {[7, 14, 30].map((r) => (
            <button key={r} onClick={() => setRange(r)}
              className={cn("rounded-md border px-3 py-1.5 font-mono text-xs", range === r ? "border-signal bg-signal text-ink" : "border-signal text-paper")}>
              {r}D
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-7">
        {KPIS.map((k) => (
          <div key={k.label} className={cn(card, "p-4")}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-tracker-faint">{k.label}</p>
            <p className="mt-2 text-xl font-semibold tabular-nums">{k.value}</p>
            <p className={cn("mt-1 flex items-center gap-1 font-mono text-[11px]", k.up ? "text-paper" : "text-signal")}>
              {k.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}{k.delta}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className={cn(card, "p-6 lg:col-span-8")}>
          <div className="flex items-center justify-between">
            <p className={mono}>Spend vs attributed sales</p>
            <div className="flex gap-4 font-mono text-[11px] text-tracker-muted">
              <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-signal" />Sales</span>
              <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-paper" />Spend</span>
            </div>
          </div>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="mt-6 h-56 w-full">
            {[25, 50, 75].map((y) => <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="var(--signal)" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 1 }} strokeDasharray="2 4" />)}
            <polyline points={pts("sales")} fill="none" stroke="var(--signal)" strokeWidth="0.8" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 2 }} />
            <polyline points={pts("spend")} fill="none" stroke="currentColor" className="text-paper" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 1.5 }} strokeDasharray="4 3" />
          </svg>
          <div className="mt-2 flex justify-between font-mono text-[10px] text-tracker-faint">
            <span>Day {data[0]?.day}</span><span>Today</span>
          </div>
        </div>

        <div className={cn(card, "flex flex-col gap-3 p-6 lg:col-span-4")}>
          <p className={mono}>Quick actions</p>
          <button onClick={onCreate} className="flex items-center justify-between rounded-md bg-signal px-4 py-3 text-sm font-semibold text-ink">
            Create new ad <Plus className="h-4 w-4" />
          </button>
          <button className="flex items-center justify-between rounded-md border border-signal px-4 py-3 text-sm">New campaign <Plus className="h-4 w-4" /></button>
          <button className="flex items-center justify-between rounded-md border border-signal px-4 py-3 text-sm">Export report <Download className="h-4 w-4" /></button>
          <div className="mt-auto rounded-lg border border-signal bg-tracker-well p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-tracker-faint">Monthly budget pacing</p>
            <p className="mt-2 text-lg font-semibold">£24,850 <span className="text-sm text-tracker-muted">/ £32,000</span></p>
            <div className="mt-3 h-1.5 rounded-full bg-paper"><div className="h-full w-[78%] rounded-full bg-signal" /></div>
          </div>
        </div>
      </div>

      <div className={cn(card, "overflow-hidden")}>
        <div className="flex items-center justify-between p-5"><p className={mono}>Campaigns</p></div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm">
            <thead className="border-y border-signal font-mono text-[10px] uppercase tracking-[0.2em] text-tracker-faint">
              <tr>{["Status", "Campaign", "Type", "Budget/day", "Spend", "Sales", "ACoS", "Pacing"].map((h) => <th key={h} className="px-5 py-3 text-left font-normal">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-signal">
              {campaigns.map((c) => {
                const on = c.status === "Active";
                return (
                  <tr key={c.id} className="hover:bg-ink">
                    <td className="px-5 py-3">
                      <button
                        aria-label={on ? "Pause campaign" : "Resume campaign"}
                        onClick={() => setCampaigns((all) => all.map((x) => x.id === c.id ? { ...x, status: on ? "Paused" : "Active" } : x))}
                        className={cn("relative h-5 w-9 rounded-full transition-colors", on ? "bg-signal" : "bg-paper")}
                      >
                        <span className={cn("absolute top-0.5 h-4 w-4 rounded-full bg-ink transition-all", on ? "left-[18px]" : "left-0.5")} />
                      </button>
                    </td>
                    <td className="px-5 py-3"><p className="font-medium">{c.name}</p><p className="font-mono text-[10px] text-tracker-faint">{c.id}</p></td>
                    <td className="px-5 py-3"><span className="rounded-full border border-signal bg-ink px-2 py-0.5 font-mono text-[10px] text-tracker-text">{c.type}</span></td>
                    <td className="px-5 py-3 tabular-nums">{gbp(c.budget)}</td>
                    <td className="px-5 py-3 tabular-nums">{gbp(c.spend)}</td>
                    <td className="px-5 py-3 tabular-nums">{gbp(c.sales)}</td>
                    <td className="px-5 py-3 tabular-nums">{((c.spend / c.sales) * 100).toFixed(1)}%</td>
                    <td className="px-5 py-3"><div className="h-1.5 w-20 rounded-full bg-paper"><div className="h-full rounded-full bg-signal" style={{ width: `${on ? c.pacing : 0}%` }} /></div></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className={cn(card, "p-5")}>
        <p className={mono}>Top advertised products</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {ASINS.map((a) => (
            <div key={a.asin} className="rounded-lg border border-signal bg-tracker-well p-4">
              <p className="font-mono text-[10px] text-tracker-faint">{a.asin}</p>
              <p className="mt-1 text-sm font-medium">{a.title}</p>
              <div className="mt-3 flex justify-between font-mono text-xs">
                <span className="text-tracker-muted">Spend {gbp(a.spend)}</span>
                <span className="text-signal">ROAS {(a.sales / a.spend).toFixed(1)}x</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- CREATIVE STUDIO ---------------- */
const STYLES = [
  { id: "dark", label: "Bold dark", bg: "bg-ink", fg: "text-paper" },
  { id: "light", label: "Clean white", bg: "bg-paper", fg: "text-ink" },
  { id: "signal", label: "Signal orange", bg: "bg-signal", fg: "text-ink" },
] as const;

function Studio({ brand }: { brand: string }) {
  const [fmt, setFmt] = useState<Format>(FORMATS[0]!);
  const [asin, setAsin] = useState(ASINS[0]!.asin);
  const [headline, setHeadline] = useState("Scandinavian design for every kitchen");
  const [style, setStyle] = useState<(typeof STYLES)[number]>(STYLES[0]);
  const [safe, setSafe] = useState(true);
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [uploaded, setUploaded] = useState<string | null>(null);
  const [generated, setGenerated] = useState(false);
  const [showPayload, setShowPayload] = useState(false);

  const groups = useMemo(() => [...new Set(FORMATS.map((f) => f.group))], []);
  const product = ASINS.find((a) => a.asin === asin) ?? ASINS[0]!;
  const media = uploaded ?? img.productsShelf;
  const tooLong = fmt.headline > 0 && headline.length > fmt.headline;
  const checks = [
    { ok: true, label: `Canvas ${fmt.w}×${fmt.h}` },
    { ok: !tooLong, label: fmt.headline ? `Headline ${headline.length}/${fmt.headline}` : "No headline required" },
    { ok: true, label: "Brand logo attached" },
    { ok: fmt.id !== "sp-main" || style.id === "light", label: fmt.id === "sp-main" ? "Pure white background" : "Safe zones clear" },
  ];
  const ratio = fmt.w / fmt.h;

  const payload = {
    brand, format: fmt.id, adType: fmt.group, media: fmt.media,
    dimensions: { width: fmt.w, height: fmt.h }, asins: [asin],
    headline: fmt.headline ? headline : undefined, style: style.id,
  };

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      {/* FORMATS */}
      <aside className={cn(card, "max-h-[78vh] overflow-y-auto p-4 lg:col-span-3")}>
        <p className={cn(mono, "px-2")}>01 · Format</p>
        {groups.map((g) => (
          <div key={g} className="mt-4">
            <p className="px-2 text-xs font-semibold text-paper">{g}</p>
            <div className="mt-1 space-y-0.5">
              {FORMATS.filter((f) => f.group === g).map((f) => (
                <button key={f.id} onClick={() => { setFmt(f); setGenerated(false); }}
                  className={cn("flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm",
                    fmt.id === f.id ? "bg-signal text-ink ring-1 ring-signal" : "text-paper hover:text-signal")}>
                  <span className="flex items-center gap-2">
                    {f.media === "Video" ? <Film className="h-3.5 w-3.5" /> : <ImageIcon className="h-3.5 w-3.5" />}{f.name}
                  </span>
                  <span className="font-mono text-[10px] text-tracker-faint">{f.w}×{f.h}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </aside>

      {/* CONTROLS */}
      <section className={cn(card, "space-y-5 p-5 lg:col-span-4")}>
        <p className={mono}>02 · Creative</p>
        <div>
          <p className="text-xs text-tracker-muted">Product (ASIN)</p>
          <select value={asin} onChange={(e) => setAsin(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-signal bg-tracker-well px-3 py-2 text-sm">
            {ASINS.map((a) => <option key={a.asin} value={a.asin}>{a.asin} · {a.title}</option>)}
          </select>
        </div>
        {fmt.headline > 0 && (
          <div>
            <div className="flex justify-between text-xs text-tracker-muted">
              <span>Headline</span>
              <span className={cn("font-mono", tooLong ? "text-signal" : "")}>{headline.length}/{fmt.headline}</span>
            </div>
            <textarea value={headline} onChange={(e) => setHeadline(e.target.value)} rows={2}
              className="mt-1.5 w-full resize-none rounded-md border border-signal bg-tracker-well px-3 py-2 text-sm" />
          </div>
        )}
        <div>
          <p className="text-xs text-tracker-muted">{fmt.media === "Video" ? "Video" : "Image"} · {fmt.spec}</p>
          <label className="mt-1.5 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-signal bg-tracker-well px-4 py-6 text-center text-sm text-paper hover:border-signal">
            <Upload className="h-5 w-5 text-signal" />
            {uploaded ? "Replace media" : `Drop ${fmt.media.toLowerCase()} or click to upload`}
            <input type="file" accept={fmt.media === "Video" ? "video/*" : "image/*"} className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f && f.type.startsWith("image")) setUploaded(URL.createObjectURL(f)); }} />
          </label>
        </div>
        <div>
          <p className="text-xs text-tracker-muted">Style</p>
          <div className="mt-1.5 grid grid-cols-3 gap-2">
            {STYLES.map((s) => (
              <button key={s.id} onClick={() => setStyle(s)}
                className={cn("rounded-md border px-2 py-2 text-xs", style.id === s.id ? "border-signal text-paper" : "border-signal text-paper")}>
                <span className={cn("mb-1.5 block h-4 rounded-sm border border-signal", s.bg)} />{s.label}
              </button>
            ))}
          </div>
        </div>
        <button onClick={() => setGenerated(true)}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-signal py-3 text-sm font-semibold text-ink">
          <Sparkles className="h-4 w-4" /> Generate variants
        </button>
        {generated && (
          <div className="grid grid-cols-3 gap-2">
            {STYLES.map((s) => (
              <button key={s.id} onClick={() => setStyle(s)} className={cn("aspect-square overflow-hidden rounded-md border", style.id === s.id ? "border-signal" : "border-signal")}>
                <div className={cn("flex h-full flex-col justify-end p-1.5 text-left text-[9px] font-semibold leading-tight", s.bg, s.fg)}>{headline.slice(0, 28)}</div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* PREVIEW */}
      <section className={cn(card, "flex flex-col p-5 lg:col-span-5")}>
        <div className="flex items-center justify-between">
          <p className={mono}>03 · Preview</p>
          <div className="flex gap-1">
            <button aria-label="Desktop" onClick={() => setDevice("desktop")} className={cn("rounded p-1.5", device === "desktop" ? "bg-signal text-ink" : "text-paper")}><Monitor className="h-4 w-4" /></button>
            <button aria-label="Mobile" onClick={() => setDevice("mobile")} className={cn("rounded p-1.5", device === "mobile" ? "bg-signal text-ink" : "text-paper")}><Smartphone className="h-4 w-4" /></button>
            <button aria-label="Safe zones" onClick={() => setSafe(!safe)} className={cn("rounded p-1.5", safe ? "bg-signal text-ink" : "text-paper")}><Grid3x3 className="h-4 w-4" /></button>
          </div>
        </div>

        <div className="mt-4 flex flex-1 items-center justify-center rounded-lg bg-tracker-well p-4">
          <div className={cn("w-full", device === "mobile" ? "max-w-[260px]" : "max-w-full")}>
            <div
              className={cn("relative mx-auto overflow-hidden rounded-md", style.bg, style.fg)}
              style={{ aspectRatio: `${fmt.w} / ${fmt.h}`, maxHeight: device === "mobile" ? 460 : 380, width: ratio < 0.6 ? "auto" : "100%", height: ratio < 0.6 ? (device === "mobile" ? 420 : 360) : "auto" }}
            >
              {fmt.id === "sp-main" ? (
                <div className="flex h-full items-center justify-center bg-paper p-6">
                  <img src={media} alt="" className="max-h-full max-w-full object-contain" />
                </div>
              ) : (
                <div className={cn("flex h-full", ratio > 3 ? "flex-row items-center" : ratio >= 1 ? "flex-row" : "flex-col")}>
                  <img src={media} alt="" className={cn("object-cover", ratio > 3 ? "h-full w-1/4" : ratio >= 1 ? "h-full w-1/2" : "h-1/2 w-full")} />
                  <div className={cn("flex flex-1 flex-col justify-center gap-1 p-[6%]", ratio > 3 && "flex-row items-center justify-between")}>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em]">{brand}</span>
                    {fmt.headline > 0 && <p className={cn("font-semibold leading-tight", ratio > 3 ? "text-xs" : "text-sm md:text-base")}>{headline}</p>}
                    <span className={cn("mt-1 w-fit rounded-sm px-2 py-0.5 text-[10px] font-semibold", style.id === "signal" ? "bg-ink text-paper" : "bg-signal text-ink")}>Shop now · {product.price}</span>
                  </div>
                </div>
              )}
              {fmt.media === "Video" && (
                <span className="absolute left-2 top-2 rounded-sm bg-ink px-1.5 py-0.5 font-mono text-[9px] text-paper">▶ 0:15</span>
              )}
              <span className="absolute bottom-1.5 right-2 font-mono text-[8px]">Sponsored</span>
              {safe && <div className="pointer-events-none absolute inset-[6%] rounded-sm border border-dashed border-signal" />}
            </div>
          </div>
        </div>

        <ul className="mt-4 grid grid-cols-2 gap-2">
          {checks.map((c) => (
            <li key={c.label} className="flex items-center gap-2 font-mono text-[11px] text-tracker-text">
              {c.ok ? <Check className="h-3.5 w-3.5 text-live" /> : <AlertTriangle className="h-3.5 w-3.5 text-signal" />}{c.label}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex gap-2">
          <button onClick={() => setShowPayload(!showPayload)} className="flex-1 rounded-md border border-signal py-2.5 text-sm">
            {showPayload ? "Hide" : "View"} payload
          </button>
          <button disabled={tooLong} className="flex flex-1 items-center justify-center gap-2 rounded-md bg-signal py-2.5 text-sm font-semibold text-ink disabled:opacity-40">
            <Download className="h-4 w-4" /> Export for Amazon
          </button>
        </div>
        {showPayload && (
          <pre className="mt-3 max-h-48 overflow-auto rounded-md bg-tracker-well p-3 font-mono text-[10px] text-tracker-text">{JSON.stringify(payload, null, 2)}</pre>
        )}
      </section>
    </div>
  );
}

/* ---------------- LIBRARY ---------------- */
function Library({ onCreate }: { onCreate: () => void }) {
  const tone: Record<string, string> = {
    Approved: "text-live", "In review": "text-tracker-text", Rejected: "text-signal", Draft: "text-tracker-faint",
  };
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div><p className={mono}>Library</p><h1 className="mt-2 text-3xl font-semibold tracking-tight">Creatives & campaigns</h1></div>
        <button onClick={onCreate} className="flex items-center gap-2 rounded-md bg-signal px-4 py-2 text-sm font-semibold text-ink"><Plus className="h-4 w-4" /> New creative</button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LIBRARY.map((l, i) => (
          <div key={l.name} className={cn(card, "overflow-hidden")}>
            <img src={[img.productsShelf, img.warehouseAisle, img.scanningCartons, img.conveyor, img.loadingDock][i]} alt="" className="aspect-video w-full object-cover" />
            <div className="p-4">
              <p className="font-medium">{l.name}</p>
              <div className="mt-2 flex justify-between font-mono text-[11px]">
                <span className="text-tracker-muted">{l.format}</span>
                <span className={tone[l.status]}>{l.status}</span>
              </div>
              <p className="mt-1 font-mono text-[10px] text-tracker-faint">Campaign {l.campaign}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
