import Image from "next/image";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

import type { Project } from "@/types";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <article className="group relative grid grid-cols-1 overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-500 hover:border-red-200 hover:shadow-[0_8px_60px_-12px_rgba(185,28,28,0.15)] dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-red-900 md:grid-cols-2">
      {/* Image side */}
      <div
        className={`relative h-64 overflow-hidden md:h-auto ${
          isEven ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay with icon buttons on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-5  lg:opacity-0 transition-all duration-500 bg-slate-900/30 lg:group-hover:bg-slate-900/30 group-hover:opacity-100">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live`}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-red-700 transition-transform duration-300 hover:scale-125"
            >
              <FaArrowUpRightFromSquare />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-red-700 transition-transform duration-300 hover:scale-125"
            >
              <FaGithub />
            </a>
          ) : null}
        </div>

        {/* Status badge */}
        <span
          className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
            project.status === "Live"
              ? "bg-emerald-500/90 text-white"
              : "bg-amber-500/90 text-white"
          }`}
        >
          {project.status === "Live" ? "● Live" : "◐ In Progress"}
        </span>
      </div>

      {/* Content side */}
      <div
        className={`flex flex-col justify-between p-8 md:p-10 ${
          isEven ? "md:order-2" : "md:order-1"
        }`}
      >
        <div>
          

          <h3 className="mb-4 text-2xl font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-red-700 dark:text-gray-50 md:text-3xl">
            {project.title}
          </h3>

          <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mb-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>


      </div>
    </article>
  );
}