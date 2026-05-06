"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState([false, false, false]);
  const featuredProjectRef = useRef<HTMLDivElement | null>(null);
  const [visibleFeaturedProject, setVisibleFeaturedProject] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index);
          const type = (entry.target as HTMLElement).dataset.type;

          if (entry.isIntersecting) {
            if (type === "featured-project") {
              setVisibleFeaturedProject(true);
              return;
            }

            setVisibleCards((prev) => {
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

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    if (featuredProjectRef.current) {
      observer.observe(featuredProjectRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)] px-4 py-8 text-white md:px-6">
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
                Project
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

        <section className="mt-4 flex flex-col gap-10 md:mt-32 md:flex-row">
          <div className="w-full pt-0 text-center md:w-2/5 md:pt-8 md:text-left">
            <h1 className="mx-auto text-4xl font-light leading-tight tracking-tight sm:text-5xl md:mx-0 md:max-w-xl md:text-6xl">
              Websites, Apps & Digital Solutions
            </h1>

            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-gray-300 md:mx-0 md:max-w-md">
              FM Digital builds modern websites, landing pages, mobile apps and
              web apps designed to help businesses grow online.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded-xl border border-white/20 bg-gradient-to-r from-black via-[#0f2e1f] to-[#1f6f4a] px-10 py-4 font-medium text-white transition hover:scale-[1.02]"
            >
              Get Started
            </Link>
          </div>

          <div className="flex w-full justify-center pt-2 md:w-3/5 md:justify-end md:pt-6">
            <Image
              src="/laptop-up.png"
              alt="FM Digital website and app development preview"
              width={880}
              height={550}
              loading="eager"
              className="h-auto w-full max-w-[340px] rounded-2xl object-contain drop-shadow-2xl sm:max-w-md md:max-w-none"
            />
          </div>
        </section>

        <section className="mt-32">
          <h2 className="text-center text-3xl font-light leading-tight tracking-tight">
            Website, App & SEO Services
          </h2>

          <div className="mt-12 flex flex-col gap-6 md:flex-row">
            <div
              ref={(el) => {
                serviceRefs.current[0] = el;
              }}
              data-index="0"
              className={`w-full border border-white/10 bg-white/5 p-6 text-center transition-all duration-1100 md:w-1/3 md:text-left ${
                visibleCards[0]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <Image
                src="/web_graphic.png"
                alt="Web development icon"
                width={175}
                height={175}
                className="mx-auto h-[120px] w-auto object-contain md:mx-0"
              />
              <h3 className="text-xl font-semibold">Web Development</h3>

              <p className="mt-3 text-sm text-gray-300">
                Modern, responsive websites and landing pages built to help your
                business look professional and convert visitors into enquiries.
              </p>
            </div>

            <div
              ref={(el) => {
                serviceRefs.current[1] = el;
              }}
              data-index="1"
              className={`w-full border border-white/10 bg-white/5 p-6 text-center transition-all delay-200 duration-1100 md:w-1/3 md:text-left ${
                visibleCards[1]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <Image
                src="/phone_graphic.png"
                alt="Mobile development icon"
                width={175}
                height={175}
                className="mx-auto h-[120px] w-auto object-contain md:mx-0"
              />
              <h3 className="text-xl font-semibold">Mobile App Development</h3>

              <p className="mt-3 text-sm text-gray-300">
                Mobile apps and web apps designed around your business
                processes, customers and future growth.
              </p>
            </div>

            <div
              ref={(el) => {
                serviceRefs.current[2] = el;
              }}
              data-index="2"
              className={`w-full border border-white/10 bg-white/5 p-6 text-center transition-all delay-400 duration-1100 md:w-1/3 md:text-left ${
                visibleCards[2]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <Image
                src="/head_graphic.png"
                alt="Support icon"
                width={175}
                height={175}
                className="mx-auto h-[120px] w-auto object-contain md:mx-0"
              />
              <h3 className="text-xl font-semibold">SEO & Ongoing Support</h3>

              <p className="mt-3 text-sm text-gray-300">
                SEO-focused improvements, website maintenance and ongoing
                digital support to keep your online presence moving forward.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-center text-3xl font-light leading-tight tracking-tight">
            Featured Projects
          </h2>

          <div
            ref={featuredProjectRef}
            data-type="featured-project"
            className={`mx-auto mt-12 max-w-5xl overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.02] transition-all duration-1100 ${
              visibleFeaturedProject
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
              <div className="flex flex-col md:grid md:min-h-[260px] md:grid-cols-[48%_52%]">
                <div className="border-b border-white/10 bg-black/25 p-3 md:border-b-0 md:border-r">
                  <div className="relative h-[220px] overflow-hidden rounded-[14px] bg-black md:h-full">
                    <Image
                      src="/gillespie_screenshot.png"
                      alt="P. Gillespie & Son Stonework website"
                      fill
                      loading="eager"
                      className="object-cover object-top transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 48vw"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center p-6 md:p-8">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#2f8f55]">
                    Featured Website
                  </p>

                  <h3 className="mt-4 text-[1.9rem] font-light leading-tight text-white md:text-4xl">
                    P. Gillespie & Son Stonework
                  </h3>

                  <p className="mt-4 max-w-[34ch] text-[1.02rem] leading-8 text-white/65">
                    Premium trade website built for dry stone dyking and
                    stonework services across Argyll, Oban and the Western
                    Isles.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
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

                  <div className="mt-7 flex items-center gap-3 text-sm text-[#2f8f55]">
                    <span>View project</span>
                    <span className="transition duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
