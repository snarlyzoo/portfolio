import type { Showcase } from "@/content/types";

/**
 * Phase 1 ships clearly-marked placeholder slots. Phase 2 drops real
 * WebP/MP4/GIF assets into the same data shape with no layout change.
 */
export function ShowcaseGallery({ showcases }: { showcases: Showcase[] }) {
  if (showcases.length === 0) return null;

  return (
    <section aria-label="Visual showcase">
      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-xl font-bold">Showcase</h2>
        <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent-soft-on)]">
          Phase 2 — visuals coming
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {showcases.map((s) => (
          <figure
            key={s.caption}
            className="group relative flex aspect-video flex-col justify-end overflow-hidden rounded-2xl border border-dashed border-line bg-canvas-soft p-4"
          >
            <div
              aria-hidden
              className="absolute inset-0 grid place-items-center text-ink-faint/50"
            >
              <span className="text-3xl">▶</span>
            </div>
            <figcaption className="relative">
              <p className="text-sm font-semibold text-ink">{s.caption}</p>
              <p className="text-xs text-ink-faint">{s.system}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
