import Link from "next/link";
import { getAllProjects } from "@/content";
import { THEME_LABELS, type ThemeKey } from "@/content/types";

const ORDER: ThemeKey[] = [
  "networking",
  "movement",
  "physics",
  "ui",
  "performance",
  "tooling",
];

export function ThemesStrip() {
  const projects = getAllProjects();

  const themes = ORDER.map((key) => ({
    key,
    label: THEME_LABELS[key],
    projects: projects.filter((p) => p.themes.includes(key)),
  })).filter((t) => t.projects.length > 0);

  return (
    <section id="build" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        What I build
      </h2>
      <p className="mt-3 max-w-2xl text-ink-soft">
        The same handful of problems show up across every project. Here&apos;s
        where each one lives.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {themes.map((t) => (
          <div key={t.key} className="border-t border-line pt-4">
            <h3 className="text-base font-bold text-ink">{t.label}</h3>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
              {t.projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="text-sm text-ink-soft underline-offset-4 transition-colors hover:text-teal-deep hover:underline"
                >
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
