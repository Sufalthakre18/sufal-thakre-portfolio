import { CertCard } from "@/components/ui/cert-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="bg-stone-50 py-24 transition-colors duration-300 dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <Reveal>
          <SectionHeading
            heading="Certifications"
            description="A curated showcase of formal validation from leading tech institutions."
          />
        </Reveal>

        {/* Divider line with count */}
        <Reveal delay={100}>
          <div className="mb-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase">
              {certifications.length} Certificates
            </span>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </Reveal>

        {/* Cards */}
        <div className="flex flex-col gap-8">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={80}>
              <CertCard cert={cert} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}