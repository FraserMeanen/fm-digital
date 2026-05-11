"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const contactRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleBoxes, setVisibleBoxes] = useState([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index);

          if (entry.isIntersecting) {
            setVisibleBoxes((prev) => {
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

    contactRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)] px-4 py-8 text-white md:px-6">
      {/* NAV WRAPPER - MATCHES PROJECTS PAGE */}
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

      {/* CONTENT WRAPPER */}
      <div className="mx-auto max-w-7xl">
        <section className="mt-10 md:mt-32">
          <div className="w-full pt-0 text-center md:w-2/5 md:pt-8 md:text-left">
            <h1 className="mx-auto text-4xl font-light leading-tight tracking-tight sm:text-5xl md:mx-0 md:max-w-xl md:text-6xl">
              Contact FM Digital
            </h1>

            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/60 md:mx-0 md:max-w-lg">
              Get in touch to discuss a website, landing page, mobile app, web
              app or SEO-focused digital project.
            </p>

            <div className="mx-auto mt-8 h-[2px] w-16 bg-[#2f8f55] md:mx-0" />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div
              ref={(el) => {
                contactRefs.current[0] = el;
              }}
              data-index="0"
              className={`rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-1100 ${
                visibleBoxes[0]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2f8f55"
                className="h-6 w-6"
              >
                <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.2l-10 6.25L2 5.2V5Zm0 2.6v11.4A2 2 0 0 0 4 21h16a2 2 0 0 0 2-2V7.6l-9.4 5.9a1 1 0 0 1-1.2 0L2 7.6Z" />
              </svg>

              <h3 className="mt-6 text-xl font-light text-white">Email</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Email FM Digital to discuss your website, app or digital
                project.
              </p>

              <div className="mt-6 flex items-center justify-between">
                <Link
                  href="mailto:fmdigital.uk@gmail.com"
                  className="text-sm text-[#2f8f55] transition hover:text-white"
                >
                  fmdigital.uk@gmail.com
                </Link>

                <span className="text-[#2f8f55]">↗</span>
              </div>
            </div>

            <div
              ref={(el) => {
                contactRefs.current[1] = el;
              }}
              data-index="1"
              className={`rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all delay-200 duration-1100 ${
                visibleBoxes[1]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2f8f55"
                className="h-6 w-6"
              >
                <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.3-1.5 1.6-1.5H16V5.1c-.2 0-.9-.1-1.8-.1-2.4 0-4 1.5-4 4.2V11H8v3h2.4v7h3.1Z" />
              </svg>

              <h3 className="mt-6 text-xl font-light text-white">Facebook</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Follow FM Digital on Facebook for website, app, SEO and digital
                project updates.
              </p>

              <div className="mt-6 flex items-center justify-between">
                <Link
                  href="https://www.facebook.com/people/FM-Digital/61588982026581/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#2f8f55] transition hover:text-white"
                >
                  FM Digital Facebook
                </Link>

                <span className="text-[#2f8f55]">↗</span>
              </div>
            </div>

            <div
              ref={(el) => {
                contactRefs.current[2] = el;
              }}
              data-index="2"
              className={`rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all delay-400 duration-1100 ${
                visibleBoxes[2]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2f8f55"
                strokeWidth="1.8"
                className="h-6 w-6"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.2" fill="#2f8f55" stroke="none" />
              </svg>

              <h3 className="mt-6 text-xl font-light text-white">Instagram</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Follow or message FM Digital on Instagram for project updates
                and digital services.
              </p>

              <div className="mt-6 flex items-center justify-between">
                <Link
                  href="https://www.instagram.com/fmdigital.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#2f8f55] transition hover:text-white"
                >
                  instagram.com/fmdigital.uk
                </Link>

                <span className="text-[#2f8f55]">↗</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-24 border-t border-white/10 py-6 text-center text-xs text-white/40">
        <p>© 2026 FM Digital. All rights reserved.</p>
        <p className="mt-1">
          Website by{" "}
          <Link href="/" className="transition hover:text-[#2f8f55]">
            FM Digital
          </Link>
          .
        </p>
      </footer>
    </main>
  );
}
