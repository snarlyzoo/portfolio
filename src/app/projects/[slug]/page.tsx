import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProject, loadCode } from "@/content";
import { accentVars } from "@/lib/theme";
import { VideoEmbed } from "@/components/VideoEmbed";
import { ShowcaseGallery } from "@/components/ShowcaseGallery";
import { SystemCard } from "@/components/SystemCard";
import { FileTree } from "@/components/FileTree";
import { CodeBlock } from "@/components/CodeBlock";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.oneLiner,
    openGraph: { title: project.title, description: project.oneLiner },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div style={accentVars(project.accent)}>
      {/* Header */}
      <header className="border-b border-line bg-[var(--accent-soft)]">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
          <Link
            href="/#work"
            className="text-sm font-medium text-[var(--accent-soft-on)] underline-offset-4 hover:underline"
          >
            ← All work
          </Link>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-[var(--accent-soft-on)]">
                {project.tagline}
              </p>
              <h1 className="mt-1 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
                {project.title}
              </h1>
            </div>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-canvas transition-transform duration-200 hover:-translate-y-0.5"
            >
              View on GitHub →
            </a>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {project.oneLiner}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl space-y-16 px-5 py-14 sm:px-8 sm:py-20">
        {/* 1. Video (games) or install hero (tooling) */}
        {project.youtubeId ? (
          <VideoEmbed youtubeId={project.youtubeId} title={project.title} />
        ) : project.install ? (
          <section className="grid gap-4">
            <div className="rounded-2xl border border-line bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                Install
              </p>
              <code className="mt-2 block font-mono text-sm text-ink">
                {project.install.command}
              </code>
              {project.npm && (
                <p className="mt-2 text-xs text-ink-faint">
                  {project.npm} · v{project.version}
                </p>
              )}
            </div>
            <CodeBlock
              code={project.install.usage}
              language="typescript"
              label="Usage"
              filePath="example.ts"
            />
          </section>
        ) : null}

        {/* 2. Showcase placeholders (Phase 2) */}
        <ShowcaseGallery showcases={project.showcases} />

        {/* 3. Overview */}
        <section>
          <h2 className="text-xl font-bold">Overview</h2>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink-soft">
            {project.overview}
          </p>
        </section>

        {/* 4. Key systems */}
        <section>
          <h2 className="text-xl font-bold">Key systems</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.systems.map((s) => (
              <SystemCard key={s.name} system={s} />
            ))}
          </div>
        </section>

        {/* 5. Annotated file tree */}
        <section>
          <h2 className="text-xl font-bold">How it&apos;s structured</h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-soft">
            The parts that matter, annotated — not the whole tree.
          </p>
          <div className="mt-5">
            <FileTree nodes={project.fileTree} />
          </div>
        </section>

        {/* 6. Full key files */}
        <section>
          <h2 className="text-xl font-bold">Key code</h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-soft">
            Real files from the repo. Copying any snippet includes a source +
            MIT attribution header automatically.
          </p>
          <div className="mt-5 space-y-6">
            {project.keyFiles.map((f) => (
              <CodeBlock
                key={f.codePath}
                code={loadCode(f.codePath)}
                language={f.language}
                label={f.label}
                filePath={f.repoPath}
              />
            ))}
          </div>
        </section>

        {/* 7. Repo link */}
        <section className="rounded-2xl border border-line bg-[var(--accent-soft)] p-6 text-center">
          <p className="text-ink-soft">
            All of {project.title} is public on GitHub.
          </p>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-canvas transition-transform duration-200 hover:-translate-y-0.5"
          >
            View the repository →
          </a>
        </section>
      </div>
    </div>
  );
}
