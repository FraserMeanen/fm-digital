"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleProjects, setVisibleProjects] = useState([false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index);

          if (entry.isIntersecting) {
            setVisibleProjects((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)] px-4 py-8 text-white md:px-6">
      {/* NAV WRAPPER - MATCHES HOME PAGE */}
      <div className="mx-auto max-w-7xl">
        <nav className="relative mb-6 flex items-center justify-center pt-6 md:mb-20 md:justify-between">
          <Image
            src="/logo.png"
            alt="FM Digital"
            width={220}
            height={100}
            loading="eager"
            className="h-auto w-auto object-contain"
          />

          <div className="hidden gap-8 text-base font-light text-white/70 md:flex">
            <Link href="/" className="transition hover:text-[#2f8f55]">
              Home
            </Link>
            <Link href="/services" className="transition hover:text-[#2f8f55]">
              Services
            </Link>
            <Link href="/project" className="transition hover:text-[#2f8f55]">
              Projects
            </Link>
            <Link href="/contact" className="transition hover:text-[#2f8f55]">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute right-0 top-1/2 flex -translate-y-1/2 flex-col gap-1 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-[2px] w-6 bg-white transition-transform duration-500 ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition-opacity duration-500 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition-transform duration-500 ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>

        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out md:hidden ${
            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mb-8 mt-4 rounded-2xl border border-white/10 border-t-white/10 bg-white/[0.03] p-4 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Link
                href="/"
                className="rounded-xl px-4 py-3 transition duration-300 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/services"
                className="rounded-xl px-4 py-3 transition duration-300 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>

              <Link
                href="/project"
                className="rounded-xl px-4 py-3 transition duration-300 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-xl px-4 py-3 transition duration-300 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT WRAPPER - WIDER FOR PROJECT CARDS */}
      <div className="mx-auto max-w-[1450px]">
        <section className="mt-10 md:mt-32">
          <div className="w-full text-center md:w-[34%] md:text-left">
            <h1 className="mx-auto text-4xl font-light leading-tight tracking-tight sm:text-5xl md:mx-0 md:text-6xl">
              Projects
            </h1>

            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/60 md:mx-0">
              A collection of our work. Clean design, strong performance, real
              results.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-center text-2xl font-light text-white md:text-left md:text-[2.05rem]">
              Websites
            </h2>

            <div className="mx-auto mt-2 h-[2px] w-20 bg-[#2f8f55] md:mx-0" />

            <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
              {/* Gillespie */}
              <div
                ref={(el) => {
                  projectRefs.current[0] = el;
                }}
                data-index="0"
                className={`overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.02] transition-all duration-1100 ${
                  visibleProjects[0]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <Link
                  href="https://gillespiestonework.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="flex flex-col md:grid md:min-h-[195px] md:grid-cols-[46%_54%]">
                    <div className="border-b border-white/10 bg-black/25 p-3 md:border-b-0 md:border-r">
                      <div className="relative h-[170px] overflow-hidden rounded-[14px] bg-black md:h-full">
                        <Image
                          src="/gillespie_screenshot.png"
                          alt="P. Gillespie & Son Stonework website"
                          fill
                          className="object-cover object-top transition duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 46vw"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center p-5">
                      <h3 className="text-[1.9rem] font-light leading-tight text-white">
                        P. Gillespie & Son
                      </h3>

                      <p className="mt-3 max-w-[28ch] text-[1.02rem] leading-8 text-white/65">
                        Premium trade website for dry stone dyking and
                        stonework services across Argyll, Oban and the Western
                        Isles.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
                          Web Design
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
                          Development
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
                          SEO Ready
                        </span>
                      </div>

                      <div className="mt-5 flex items-center gap-2 text-sm text-[#2f8f55]">
                        <span>View live site</span>
                        <span className="transition duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* One of 61 */}
              <div
                ref={(el) => {
                  projectRefs.current[1] = el;
                }}
                data-index="1"
                className={`overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.02] transition-all duration-1100 ${
                  visibleProjects[1]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="flex flex-col md:grid md:min-h-[195px] md:grid-cols-[46%_54%]">
                  <div className="border-b border-white/10 bg-black/25 p-3 md:border-b-0 md:border-r">
                    <div className="relative h-[170px] overflow-hidden rounded-[14px] bg-black md:h-full">
                      <Image
                        src="/one-of-61-screenshot.png"
                        alt="One of 61 website"
                        fill
                        className="object-contain object-top"
                        sizes="(max-width: 768px) 100vw, 46vw"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-5">
                    <h3 className="text-[1.9rem] font-light leading-tight text-white">
                      One of 61
                    </h3>

                    <p className="mt-3 max-w-[28ch] text-[1.02rem] leading-8 text-white/65">
                      Speaker website with a bold visual identity, clear
                      messaging, and a strong landing section.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
                        Web Design
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
                        Development
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}