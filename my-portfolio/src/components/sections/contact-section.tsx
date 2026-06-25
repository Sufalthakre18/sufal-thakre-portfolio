"use client";

import { useState, type FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa6";

import { Reveal } from "@/components/ui/reveal";

type FormStatus = "idle" | "submitting" | "success";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");

  return (
    <section
      id="contact"
      className="bg-stone-50 py-20 transition-colors duration-300 dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-4xl px-6">

        {/* Eyebrow */}
        <Reveal>
          <div className="mb-2 flex items-center gap-3">
            <div className="h-px w-6 bg-red-600" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-red-600 dark:text-red-500">
              Contact
            </span>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={60}>
          <h2 className="mb-10 text-4xl font-black uppercase tracking-tight text-gray-900 dark:text-gray-50 md:text-5xl">
            Let&apos;s <span className="text-red-700">Talk.</span>
          </h2>
        </Reveal>

        {/* Divider */}
        <Reveal delay={80}>
          <div className="mb-10 h-px bg-neutral-200 dark:bg-neutral-800" />
        </Reveal>

        {/* Contact meta — one line */}
        <Reveal delay={100}>
          <div className="mb-10 flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: "Email", value: "sufalthakre4@gmail.com", href: "mailto:sufalthakre4@gmail.com" },
              { label: "Phone", value: "+91 77488 09606", href: "tel:+917748809606" },
              { label: "Location", value: "Balaghat, MP | Remote", href: null },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400">{label}</span>
                {href ? (
                  <a href={href} className="text-sm font-medium text-gray-800 hover:text-red-700 dark:text-gray-200 dark:hover:text-red-400 transition-colors">
                    {value}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{value}</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        
      </div>
    </section>
  );
}