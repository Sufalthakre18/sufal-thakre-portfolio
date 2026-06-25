import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-stone-50 py-24 transition-colors duration-300 dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <Reveal>
          <SectionHeading
            heading="Featured"
            highlight="Projects"
            description="Explore a selection of applications I've designed, built, and shipped."
          />
        </Reveal>

        {/* Divider line with label */}
        <Reveal delay={100}>
          <div className="mb-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase">
              {projects.length} Projects
            </span>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </Reveal>

        {/* Project cards — two-column alternating layout */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={80}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={100}>
          <div className="mt-16 text-center">
            <a
              href="https://github.com/Sufalthakre18"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 transition-all duration-300 hover:border-red-400 hover:text-red-700 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-red-600 dark:hover:text-red-400"
            >
              View all on GitHub
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}