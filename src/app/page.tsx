import { Hero } from "@/components/home/Hero";
import { ProjectCard } from "@/components/home/ProjectCard";
import { ThemesStrip } from "@/components/home/ThemesStrip";
import { Reveal } from "@/components/Reveal";
import { getAllProjects } from "@/content";

export default function Home() {
  const projects = getAllProjects();
  const [featured, ...rest] = projects;

  return (
    <>
      <Hero />

      <section id="work" className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Selected work
          </h2>
          <p className="hidden text-sm text-ink-soft sm:block">
            4 games · 1 open-source library
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Reveal className="sm:col-span-2">
            <ProjectCard project={featured} featured />
          </Reveal>
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <ThemesStrip />
    </>
  );
}
