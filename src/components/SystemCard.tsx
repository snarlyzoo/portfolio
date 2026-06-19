import type { System } from "@/content/types";

export function SystemCard({ system }: { system: System }) {
  return (
    <article className="rounded-2xl border border-line bg-white p-5 transition-colors hover:border-[var(--accent)]">
      <h3 className="text-base font-bold text-ink">{system.name}</h3>
      <p className="mt-0.5 text-sm font-medium text-[var(--accent-soft-on)]">
        {system.summary}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{system.body}</p>
    </article>
  );
}
