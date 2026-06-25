import { navLinks } from "@/data/nav";
import { socialLinks } from "@/data/social";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      {/* Top strip */}
      <div className="border-b border-gray-800 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">

          {/* Brand */}
          <div>
            <h3 className="font-mono text-2xl font-black">
              Sufal<span className="text-red-700">.dev</span>
            </h3>
            <p className="mt-1 text-xs tracking-widest text-gray-500 uppercase">
              Full Stack Developer
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-none border border-gray-700 text-gray-400 transition-all duration-300 hover:border-red-700 hover:text-red-500"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Middle row */}
      <div className="border-b border-gray-800 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-8">

          {/* Nav links */}
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500">
              Navigation
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-medium text-gray-400 transition-colors duration-300 hover:text-red-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500">
              Services
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {["Web Development", "UI/UX Design", "Maintenance"].map((s) => (
                <li key={s} className="text-xs font-medium text-gray-400">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500">
              Contact
            </p>
            <div className="flex flex-col gap-1">
              <a href="mailto:sufalthakre4@gmail.com" className="text-xs font-medium text-gray-400 transition-colors hover:text-red-500">
                sufalthakre4@gmail.com
              </a>
              <a href="tel:+917748809606" className="text-xs font-medium text-gray-400 transition-colors hover:text-red-500">
                +91 77488 09606
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="text-[11px] text-gray-600">
            © {new Date().getFullYear()} <span className="text-gray-400 font-medium">Sufal Thakre</span>. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-600 uppercase tracking-widest">
            Balaghat, MP | Remote
          </p>
        </div>
      </div>

    </footer>
  );
}