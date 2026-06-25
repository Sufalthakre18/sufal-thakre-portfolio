"use client";

import { useInView } from "@/hooks/use-in-view";
import type { Skill } from "@/types";

const RADIUS = 38;
const STROKE = 7;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function SkillCard({ skill }: { skill: Skill }) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const Icon = skill.icon;
  const offset = CIRCUMFERENCE * (1 - (isInView ? skill.percentage : 0) / 100);

  return (
    <div
      ref={ref}
      tabIndex={0}
      role="group"
      aria-label={`${skill.name}: ${skill.percentage}% — ${skill.tags.join(", ")}`}
      className="group relative flex flex-col items-center gap-2 rounded-2xl p-3 text-center outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-red-700"
    >
      {/* Radial progress ring — icon + percentage live inside it instead of a separate bar */}
      <div aria-hidden="true" className="relative h-20 w-20">
        <svg viewBox="0 0 88 88" className="h-full w-full -rotate-90">
          <circle
            cx="44"
            cy="44"
            r={RADIUS}
            strokeWidth={STROKE}
            className="fill-none stroke-gray-200 dark:stroke-neutral-700"
          />
          <circle
            cx="44"
            cy="44"
            r={RADIUS}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            className="fill-none stroke-red-700 transition-[stroke-dashoffset] duration-1000 ease-out dark:stroke-red-500"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon size={20} className="text-red-700 dark:text-red-400" />
          <span className="mt-0.5 text-[11px] font-bold text-gray-800 dark:text-gray-100">
            {skill.percentage}%
          </span>
        </div>
      </div>

      <span aria-hidden="true" className="text-sm font-semibold text-gray-800 dark:text-gray-100">
        {skill.name}
      </span>

      {/* Tags — tucked into a hover/focus tooltip so the grid stays compact by default */}
      <div
        aria-hidden="true"
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-44 -translate-x-1/2 translate-y-1 rounded-xl bg-gray-900 p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 dark:bg-neutral-700"
      >
        <div className="flex flex-wrap justify-center gap-1.5">
          {skill.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-white">
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-neutral-700" />
      </div>
    </div>
  );
}