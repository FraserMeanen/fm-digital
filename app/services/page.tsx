"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index);

          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
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
          <div className="mb-8 mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl backdrop-blur-md">
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

        <section className="mt-10 md:mt-32">
          <div className="w-full pt-0 text-center md:w-2/5 md:pt-8 md:text-left">
            <h1 className="mx-auto text-4xl font-light leading-tight tracking-tight sm:text-5xl md:mx-0 md:max-w-xl md:text-6xl">
              Website, App & SEO Services
            </h1>

            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-gray-300 md:mx-0 md:max-w-xl">
              FM Digital designs and builds websites, landing pages, mobile
              apps, web apps and SEO-focused digital content for businesses
              across the UK.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-6 md:mt-24">
            <div
              ref={(el) => {
                serviceRefs.current[0] = el;
              }}
              data-index="0"
              className={`flex flex-col items-center gap-10 border border-white/10 bg-white/5 p-6 text-center transition-all duration-1100 md:h-[400px] md:flex-row md:gap-12 md:p-8 md:text-left ${
                visibleSections[0]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-light md:text-3xl">
                  Web Development
                </h2>

                <p className="mx-auto mt-4 max-w-md text-gray-300 md:mx-0">
                  Custom-built websites and landing pages tailored to your
                  business, with fast performance, responsive design and a clear
                  focus on enquiries.
                </p>

                <ul className="mx-auto mt-6 max-w-md space-y-2 text-gray-300 md:mx-0">
                  <li>• Business websites and landing pages</li>
                  <li>• Fast, responsive design</li>
                  <li>• SEO-ready page structure</li>
                </ul>
              </div>

              <div className="flex w-full justify-center md:w-1/2 md:justify-end">
                <Image
                  src="/laptop-up.png"
                  alt="FM Digital website and landing page development preview"
                  width={520}
                  height={340}
                  loading="eager"
                  className="h-auto w-full max-w-[340px] rounded-2xl object-contain drop-shadow-2xl sm:max-w-md md:max-w-none"
                />
              </div>
            </div>

            <div
              ref={(el) => {
                serviceRefs.current[1] = el;
              }}
              data-index="1"
              className={`flex flex-col items-center gap-10 border border-white/10 bg-white/5 p-6 text-center transition-all delay-200 duration-1100 md:h-[400px] md:flex-row md:gap-12 md:p-8 md:text-left ${
                visibleSections[1]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="order-2 w-full md:order-1 md:w-1/2 md:flex md:justify-start">
                <Image
                  src="/coffee_phone.png"
                  alt="FM Digital mobile app and web app development preview"
                  width={300}
                  height={500}
                  className="mx-auto h-auto w-full max-w-[180px] object-contain sm:max-w-[220px] md:mx-0 md:max-h-[80%] md:max-w-[250px]"
                />
              </div>

              <div className="order-1 w-full md:order-2 md:w-1/2">
                <h2 className="text-2xl font-light md:text-3xl">
                  App Development
                </h2>

                <p className="mx-auto mt-4 max-w-md text-gray-300 md:mx-0">
                  Creating mobile apps and web apps that give businesses better
                  tools, smoother customer experiences and room to scale.
                </p>

                <ul className="mx-auto mt-6 max-w-md space-y-2 text-gray-300 md:mx-0">
                  <li>• Mobile apps for iOS and Android</li>
                  <li>• Web apps and business tools</li>
                  <li>• Scalable user-focused features</li>
                </ul>
              </div>
            </div>

            <div
              ref={(el) => {
                serviceRefs.current[2] = el;
              }}
              data-index="2"
              className={`flex flex-col items-center gap-10 border border-white/10 bg-white/5 p-6 text-center transition-all delay-400 duration-1100 md:h-[400px] md:flex-row md:gap-12 md:p-8 md:text-left ${
                visibleSections[2]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-light md:text-3xl">
                  SEO & Ongoing Support
                </h2>

                <p className="mx-auto mt-4 max-w-md text-gray-300 md:mx-0">
                  Providing SEO-focused improvements, website maintenance, app
                  support and technical updates to keep your digital presence
                  performing.
                </p>

                <ul className="mx-auto mt-6 max-w-md space-y-2 text-gray-300 md:mx-0">
                  <li>• SEO improvements</li>
                  <li>• Website and app updates</li>
                  <li>• Technical support and maintenance</li>
                </ul>
              </div>

              <div className="flex w-full justify-center md:w-1/2 md:justify-end">
                <Image
                  src="/head_services.png"
                  alt="FM Digital SEO support and website maintenance preview"
                  width={600}
                  height={400}
                  className="h-auto w-full max-w-[320px] object-contain sm:max-w-[420px] md:max-w-[520px]"
                />
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
