"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaLocationDot, FaGraduationCap, FaCode } from "react-icons/fa6";

import { Reveal } from "@/components/ui/reveal";

const stack = ["MERN Stack", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Python", "Socket.io","Git & Github", "Deployment"];

export function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-stone-50 py-24 transition-colors duration-300 dark:bg-neutral-950"
    >
      {/* Faint background watermark text */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-0 select-none text-[clamp(80px,18vw,200px)] font-black uppercase leading-none tracking-tighter text-neutral-100 dark:text-neutral-900"
      >
        ABOUT
      </span>

      <div className="relative mx-auto max-w-6xl px-6">

        {/* ── Section eyebrow ── */}
        <Reveal>
          <div className="mb-16 flex items-center gap-4">
            <div className="h-px w-8 bg-red-600" />
            <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-red-600 dark:text-red-500">
              About Me
            </span>
          </div>
        </Reveal>

        {/* ── Main layout ── */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2px_1fr] lg:gap-0">

          {/* LEFT column */}
          <div className="flex flex-col gap-10 lg:pr-16">

            {/* Image with asymmetric clip + floating badges */}
            <Reveal>
              <div className="relative">
                {/* Decorative offset border box */}
                <div className="absolute -top-3 -left-3 h-full w-full rounded-2xl border border-red-200 dark:border-red-900/60" />

                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 85% 100%, 0 100%)" }}
                >
                  <div className="relative h-[420px] w-full">
                    <Image
                      src="/images/profile2.jpeg"
                      alt="Sufal Thakre"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/10 to-transparent" />
                  </div>
                </div>

                {/* Name tag */}
                <div className="absolute bottom-5 left-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Full Stack Developer</p>
                  <p className="text-xl font-bold text-white">Sufal Thakre</p>
                </div>

                {/* Open to work pill */}
                <div className="absolute -top-4 -right-4 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-lg ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-700">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-200">Open to Work</span>
                </div>
              </div>
            </Reveal>

            {/* Quick info list */}
            <Reveal delay={80}>
              <ul className="space-y-3">
                {[
                  { icon: <FaLocationDot className="text-red-600" />, text: "Balaghat, Madhya Pradesh / Remote" },
                  { icon: <FaGraduationCap className="text-red-600" />, text: "BCA · Graduating 2027" },
                  { icon: <FaCode className="text-red-600" />, text: "Full Stack Developer" },
                ].map(({ icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900">
                      {icon}
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Vertical red rule — signature element */}
          <Reveal delay={60} className="hidden lg:flex lg:justify-center">
            <div className="relative w-px self-stretch bg-neutral-200 dark:bg-neutral-800">
              <div className="absolute top-0 left-1/2 h-1/3 w-0.5 -translate-x-1/2 bg-red-600" />
            </div>
          </Reveal>

          {/* RIGHT column */}
          <Reveal delay={150} className="flex flex-col justify-center lg:pl-16">

            {/* Large display heading */}
            <h2 className="mb-8 text-5xl font-black uppercase leading-none tracking-tight text-gray-900 dark:text-gray-50 md:text-6xl">
              Crafting<br />
              <span className="text-red-700">Digital</span><br />
              Experiences
            </h2>

            {/* Body text */}
            <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
              I&apos;m Sufal Thakre, a Full-Stack Developer specializing in the MERN stack. Currently pursuing my BCA at IGNOU (Class of 2027), I focus on engineering scalable, real-world applications and delivering seamless digital experiences.
            </p>

            {expanded && (
              <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                I approach software development with a product-first mindset, ensuring everything I build is as efficient under the hood as it is beautiful on the screen. When I'm not coding, I explore my creative side through content creation. I'm actively looking for opportunities to bring my technical skills and creative energy to a forward-thinking team.
              </p>
            )}

            {/* Stats row */}
            <div className="my-8 grid grid-cols-3 divide-x divide-neutral-200 border-y border-neutral-200 py-6 dark:divide-neutral-800 dark:border-neutral-800">
              {[
                { value: "11+", label: "Projects" },
                { value: "2027", label: "Graduating" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-1 px-4 first:pl-0 last:pr-0">
                  <span className="text-2xl font-black text-red-700 dark:text-red-500">{value}</span>
                  <span className="text-xs uppercase tracking-widest text-neutral-400">{label}</span>
                </div>
              ))}
            </div>

            {/* Tech stack chips */}
            <div className="mb-8 flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Read more button */}
            <button
              type="button"
              onClick={() => setExpanded((p) => !p)}
              aria-expanded={expanded}
              className="group relative inline-flex w-fit items-center overflow-hidden rounded-lg bg-stone-200 px-8 py-3 text-sm font-semibold text-zinc-900 transition-all duration-300 dark:bg-neutral-800 dark:text-gray-100"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-red-700 transition-transform duration-500 ease-in-out group-hover:scale-y-100" />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-white">
                {expanded ? "Read Less" : "Read More"}
                <FaArrowRight className={`transition-transform duration-300 ${expanded ? "rotate-90" : ""}`} />
              </span>
            </button>

          </Reveal>
        </div>
      </div>
    </section>
  );
}