import Image from "next/image";
import { FaDownload, FaLinkedinIn, FaGithub, FaXTwitter, FaDev } from "react-icons/fa6";

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-stone-100 pt-20 transition-colors duration-300 dark:bg-[#171717]"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="flex flex-col items-center justify-between gap-8">
          
          {/* Headings - Exact typography and custom animation */}
          <div className="mb-8 w-full space-y-2 text-center md:text-left">
            <h2 className="animate-slide-left-exact font-poppins text-[2.8rem] font-extrabold uppercase leading-[32px] text-gray-800 md:text-[3.8rem] md:leading-[0.8] lg:text-[8rem] dark:text-[#eee]">
              Hi, I&apos;m
            </h2>
            <h2 className="animate-slide-left-exact whitespace-nowrap font-poppins text-[2.8rem] font-extrabold uppercase leading-[32px] text-gray-800 md:text-[3.8rem] md:leading-[0.8] lg:text-[8rem] dark:text-[#eee]">
              Sufal Thakre
            </h2>
          </div>

          {/* Profile Image & Fixed Hero Background */}
          <div
            className="relative mb-8 flex h-[130px] w-full items-center justify-center md:h-[170px] lg:h-[250px]"
            style={{
              backgroundImage: "url('/images/hero3.png')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundAttachment: "fixed", 
            }}
          >
            <div className="absolute z-10">
              <div className="relative h-[160px] w-[160px] overflow-hidden rounded-full bg-white/20 shadow-2xl backdrop-blur-sm sm:h-[200px] sm:w-[200px] md:h-80 md:w-80">
                <Image
                  src="/images/profile.jpg" 
                  alt="Profile"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 480px) 160px, (max-width: 768px) 200px, 320px"
                />
              </div>
            </div>
          </div>

          {/* Hero Content (Text & Buttons) */}
          <div className="flex w-full flex-col items-center justify-between gap-8 text-gray-800 md:flex-row dark:text-[#eee]">
            <div className="text-center md:w-1/2 md:text-left">
              <h3 className="mb-4 text-2xl font-bold uppercase text-gray-600 md:text-3xl dark:text-[#a1a1aa]">
                Full-Stack Developer (MERN, Next.js) &amp; Open to Work
              </h3>
              <p className="mx-auto mb-6 max-w-md text-lg text-gray-600 md:mx-0 dark:text-[#a1a1aa]">
                I create stunning websites and FullStack applications that provide
                exceptional user experiences. Let&apos;s build something amazing
                together!
              </p>

              {/* Social Links */}
              <div className="mb-6 flex justify-center space-x-4 md:justify-start">
                <a
                  href="https://www.linkedin.com/in/sufal-thakre/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white transition duration-300 hover:scale-110 hover:bg-blue-600"
                >
                  <FaLinkedinIn className="text-xl" />
                </a>
                <a
                  href="https://github.com/Sufalthakre18"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white transition duration-300 hover:scale-110 hover:bg-gray-900"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://x.com/SufalThakre"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-white transition duration-300 hover:scale-110 hover:bg-gray-500"
                >
                  <FaXTwitter className="text-xl" />
                </a>
                <a
                  href="https://dev.to/sufalthakre"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition duration-300 hover:scale-110 hover:bg-gray-500"
                >
                  <FaDev className="text-xl" />
                </a>
              </div>

              {/* ========================================= */}
              {/* FIXED DOWNLOAD BUTTON - ZERO BORDER BLEED */}
              {/* ========================================= */}
              <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start">
                <a
                  href="/resume.pdf"
                  download
                  // ADDED: z-0 and isolate to strictly contain child layers
                  className="group relative z-0 isolate inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-zinc-900 px-8 py-3 text-base font-medium text-zinc-900 transition-colors duration-300 hover:border-red-700 dark:border-[#eee] dark:text-[#eee] dark:hover:border-red-700"
                >
                  {/* CHANGED: Removed scale-y and origin-bottom. Added translate-y-full and -z-10 */}
                  <span className="absolute inset-0 -z-10 translate-y-full bg-red-700 transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
                  
                  <span className="relative z-10 flex items-center transition-colors duration-500 group-hover:text-white dark:group-hover:text-white">
                    <FaDownload className="mr-2 h-5 w-5" />
                    Download Resume
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}