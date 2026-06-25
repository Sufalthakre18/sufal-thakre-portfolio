"use client";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillCard } from "@/components/ui/skill-card";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-stone-100 py-20 transition-colors duration-300 dark:bg-neutral-900"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          heading="My"
          highlight="Skills"
          description="Hover or tap a skill to see what it covers."
        />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <Reveal key={skill.id} delay={(index % 5) * 60}>
              <SkillCard skill={skill} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}