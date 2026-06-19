import Link from "next/link";
import type { Project } from "@/content/types";
import { accentVars } from "@/lib/theme";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      style={accentVars(project.accent)}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] bg-[var(--accent)] p-6 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1.5 sm:p-7 ${
        featured ? "min-h-[340px] sm:min-h-[380px]" : "min-h-[260px]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full bg-[var(--accent-on)]/12 px-2.5 py-1 text-xs font-semibold text-[var(--accent-on)]">
          {project.category === "tooling" ? "Open source" : project.tagline}
        </span>
        <span
          aria-hidden
          className="text-[var(--accent-on)] opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
        >
          →
        </span>
      </div>

      <div>
        <h3
          className={`font-display font-extrabold tracking-tight text-[var(--accent-on)] ${
            featured ? "text-4xl sm:text-5xl" : "text-3xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--accent-on)]/80">
          {project.oneLiner}
        </p>
      </div>
    </Link>
  );
}
