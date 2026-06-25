import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import type { Certification } from "@/types";

export function CertCard({ cert, index }: { cert: Certification; index: number }) {
  return (
    <article className="group relative grid grid-cols-1 overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-500 hover:border-red-200 hover:shadow-[0_8px_60px_-12px_rgba(185,28,28,0.15)] dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-red-900 md:grid-cols-2">
      {/* Image side */}
      <div className="relative h-56 overflow-hidden md:h-auto">
        <Image
          src={cert.image}
          alt={`${cert.title} certificate`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/30 transition-all duration-500 group-hover:bg-slate-900/50" />

        {/* Year pill */}
        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-widest text-red-700 uppercase dark:bg-neutral-900/90">
          {cert.year}
        </span>

        {/* View credential button — appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${cert.title} credential`}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-red-700 transition-transform duration-300 hover:scale-125"
          >
            <FaArrowUpRightFromSquare />
          </a>
        </div>
      </div>

      {/* Content side */}
      <div className="flex flex-col justify-between p-8 md:p-10">
        <div>
          {/* Index + issuer */}
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs font-medium tracking-[0.2em] text-red-600/60 dark:text-red-400/60">
              {String(index + 1).padStart(2, "0")} / CERTIFICATE
            </span>
            <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-700" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              {cert.issuer}
            </span>
          </div>

          <h3 className="mb-4 text-xl font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-red-700 dark:text-gray-50 md:text-2xl">
            {cert.title}
          </h3>

          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            {cert.description}
          </p>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex items-center justify-between border-t border-neutral-100 pt-6 dark:border-neutral-800">
          <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">
            Issued {cert.year}
          </span>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-red-700 transition-all duration-300 hover:gap-3 dark:text-red-400"
          >
            View Credential
            <FaArrowUpRightFromSquare className="text-xs" />
          </a>
        </div>
      </div>
    </article>
  );
}