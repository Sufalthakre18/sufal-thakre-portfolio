"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional mount guard
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-7 w-7 rounded-full bg-neutral-100 dark:bg-neutral-800" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group flex h-6 w-6 items-center justify-center rounded-full text-neutral-400 transition-all duration-300 hover:bg-neutral-100 hover:text-gray-900 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
    >
      {isDark
        ? <FaMoon size={10} className="transition-transform duration-300 group-hover:rotate-12" />
        : <FaSun size={10} className="transition-transform duration-300 group-hover:rotate-45" />
      }
    </button>
  );
}