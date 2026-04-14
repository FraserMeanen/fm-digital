"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)] px-4 py-8 text-white md:px-6">
      <div className="mx-auto max-w-[1450px]">
        <nav className="relative mb-12 flex items-center justify-center pt-4 md:mb-20 md:justify-between">
          <Image
            src="/logo.png"
            alt="FM Digital"
            width={220}
            height={100}
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
              Project
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

          <div
            className={`absolute right-0 top-full z-50 mt-3 w-48 rounded-xl border border-white/10 bg-black/85 p-3 shadow-2xl backdrop-blur-md transition-all duration-500 ease-in-out md:hidden ${
              menuOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Link
                href="/"
                className="rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/project"
                className="rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Project
              </Link>
              <Link
                href="/contact"
                className="rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <section className="mt-10 md:mt-28">
          <div className="w-full text-center md:w-[34%] md:text-left">
            <h1 className="mx-auto text-4xl font-light leading-tight tracking-tight sm:text-5xl md:mx-0 md:text-6xl">
              Projects
            </h1>

            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/60 md:mx-0">
              A collection of our work. Clean design, strong performance, real
              results.
            </p>
          </div>

          <div className="relative mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#2f8f55]/70 to-transparent md:block" />

            {/* Websites */}
            <div>
              <h2 className="text-2xl font-light text-white md:text-[2.05rem]">
                Websites
              </h2>
              <div className="mt-2 h-[2px] w-20 bg-[#2f8f55]" />

              <div className="mt-6 overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.02]">
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
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[1.9rem] font-light leading-tight text-white">
                        One of 61
                      </h3>

                    </div>

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

            {/* Apps */}
            <div>
              <h2 className="text-2xl font-light text-white md:text-[2.05rem]">
                Apps
              </h2>
              <div className="mt-2 h-[2px] w-14 bg-[#2f8f55]" />

              <div className="mt-6 overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.02]">
                <div className="flex flex-col md:grid md:min-h-[195px] md:grid-cols-[46%_54%]">
                  <div className="border-b border-white/10 bg-black/25 p-3 md:border-b-0 md:border-r">
                    <div className="relative h-[170px] overflow-hidden rounded-[14px] bg-black md:h-full">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src="/find-my-pint-screenshot.png"
                          alt="Find My Pint app"
                          width={240}
                          height={240}
                          className="w-auto scale-[0.8] rounded-[12px] object-contain sm:scale-[0.8] md:scale-[1.0]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[1.9rem] font-light leading-tight text-white">
                        Find My Pint
                      </h3>

                    </div>

                    <p className="mt-3 max-w-[28ch] text-[1.02rem] leading-8 text-white/65">
                      Mobile app built to help users find pubs, compare pint
                      prices, and explore nearby options.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
                        iOS
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
                        UI/UX
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