"use client";

import { useState, type FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa6";

import { Reveal } from "@/components/ui/reveal";

type FormStatus = "idle" | "submitting" | "success";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 500));
    setStatus("success");
    event.currentTarget.reset();
  }

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

        {/* Form */}
        <Reveal delay={130}>
          <form onSubmit={handleSubmit} className="space-y-0">

            {/* Name */}
            <div className="border-b border-neutral-200 py-4 dark:border-neutral-800">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-transparent text-sm text-gray-800 placeholder-neutral-400 outline-none dark:text-gray-100"
              />
            </div>

            {/* Email */}
            <div className="border-b border-neutral-200 py-4 dark:border-neutral-800">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full bg-transparent text-sm text-gray-800 placeholder-neutral-400 outline-none dark:text-gray-100"
              />
            </div>

            {/* Message */}
            <div className="border-b border-neutral-200 py-4 dark:border-neutral-800">
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                placeholder="Your Message"
                className="w-full resize-none bg-transparent text-sm text-gray-800 placeholder-neutral-400 outline-none dark:text-gray-100"
              />
            </div>

            {/* Submit row */}
            <div className="flex items-center justify-between pt-6">
              {status === "success" ? (
                <p role="status" className="text-xs font-medium tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
                  ✓ Sent — I&apos;ll reply soon
                </p>
              ) : (
                <span className="text-xs tracking-widest text-neutral-400 uppercase">Open to work</span>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-none border border-gray-900 px-7 py-2.5 text-xs font-semibold uppercase tracking-widest text-gray-900 transition-all duration-300 disabled:opacity-50 dark:border-gray-100 dark:text-gray-100"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-red-700 transition-transform duration-500 ease-in-out group-hover:scale-y-100" />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-white">
                  {status === "submitting" ? "Sending" : "Send"}
                  <FaPaperPlane className="text-[10px]" />
                </span>
              </button>
            </div>

          </form>
        </Reveal>

      </div>
    </section>
  );
}