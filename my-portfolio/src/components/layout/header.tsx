"use client";

import { useState, useEffect } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks } from "@/data/nav";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-[0_1px_0_0_rgba(0,0,0,0.08)] backdrop-blur-md dark:bg-neutral-950/95 dark:shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
      }`}
    >
      

      {/* Main nav */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="/" className="text-xl font-light tracking-widest" style={{ fontFamily: "var(--font-space-grotesk)" }}>
  Sufal<span className="text-red-700">.dev</span>
</a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-600 transition-colors duration-300 hover:text-red-700 dark:text-neutral-400 dark:hover:text-red-500"
              >
                {link.label}
                <span className="absolute bottom-1 left-3 right-3 h-px scale-x-0 bg-red-700 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}

          {/* Divider */}
          <li aria-hidden="true" className="mx-2 h-4 w-px bg-neutral-200 dark:bg-neutral-700" />

          {/* Theme toggle */}
          <li><ThemeToggle /></li>

          
        </ul>

        {/* Mobile right */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-9 w-9 items-center justify-center border border-neutral-200 text-gray-800 transition-colors hover:border-red-700 hover:text-red-700 dark:border-neutral-700 dark:text-gray-100"
          >
            {isOpen ? <FaXmark size={14} /> : <FaBars size={14} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-neutral-100 bg-white transition-all duration-500 ease-in-out dark:border-neutral-800 dark:bg-neutral-950 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-6 space-y-1">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
              className={`transition-all duration-300 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
            >
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between border-b border-neutral-100 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-800 transition-colors hover:text-red-700 dark:border-neutral-800 dark:text-gray-200"
              >
                {link.label}
                <span className="text-red-700">→</span>
              </a>
            </li>
          ))}
         
        </ul>
      </div>
    </header>
  );
}