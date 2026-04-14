"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)] px-4 py-8 text-white md:px-6">
      <div className="mx-auto max-w-7xl">
        <nav className="relative mb-12 flex items-center justify-center pt-4 md:mb-20 md:justify-between">
          <Image
            src="/logo.png"
            alt="FM Digital"
            width={220}
            height={100}
            className="object-contain h-auto w-auto"
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
            ></span>
            <span
              className={`h-[2px] w-6 bg-white transition-opacity duration-500 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`h-[2px] w-6 bg-white transition-transform duration-500 ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            ></span>
          </button>

          <div
            className={`absolute right-0 top-full z-50 mt-3 w-48 rounded-xl border border-white/10 bg-black/85 p-3 shadow-2xl backdrop-blur-md transition-all duration-1000 ease-in-out md:hidden ${
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

        <section className="mt-10 md:mt-32">
          <div className="w-full pt-0 text-center md:w-2/5 md:pt-8 md:text-left">
            <h1 className="mx-auto text-4xl font-light leading-tight tracking-tight sm:text-5xl md:mx-0 md:max-w-xl md:text-6xl">
              Services
            </h1>

            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-gray-300 md:mx-0 md:max-w-xl">
              We design and build high-quality digital products that help your
              business grow and stand out.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-6 md:mt-24">
            <div className="flex flex-col items-center gap-10 border border-white/10 bg-white/5 p-6 text-center md:h-[400px] md:flex-row md:gap-12 md:p-8 md:text-left">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-light md:text-3xl">
                  Web Development
                </h2>

                <p className="mx-auto mt-4 max-w-md text-gray-300 md:mx-0">
                  Custom-built websites tailored to your business, ensuring fast
                  performance and modern design.
                </p>

                <ul className="mx-auto mt-6 max-w-md space-y-2 text-gray-300 md:mx-0">
                  <li>• Custom-built websites</li>
                  <li>• Fast performance</li>
                  <li>• Mobile responsive</li>
                </ul>
              </div>

              <div className="flex w-full justify-center md:w-1/2 md:justify-end">
                <Image
                  src="/laptop-up.png"
                  alt="Web development preview"
                  width={520}
                  height={340}
                  className="h-auto w-full max-w-[320px] object-contain sm:max-w-[420px] md:max-w-[520px]"
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-10 border border-white/10 bg-white/5 p-6 text-center md:h-[400px] md:flex-row md:gap-12 md:p-8 md:text-left">
              <div className="order-2 w-full md:order-1 md:w-1/2 md:flex md:justify-start">
                <Image
                  src="/coffee_phone.png"
                  alt="App development preview"
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
                  Creating custom mobile apps that provide seamless, engaging,
                  and user-friendly experiences for both iOS and Android.
                </p>

                <ul className="mx-auto mt-6 max-w-md space-y-2 text-gray-300 md:mx-0">
                  <li>• iOS & Android apps</li>
                  <li>• User-centered design</li>
                  <li>• Feature-rich and scalable</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center gap-10 border border-white/10 bg-white/5 p-6 text-center md:h-[400px] md:flex-row md:gap-12 md:p-8 md:text-left">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-light md:text-3xl">
                  Ongoing Support
                </h2>

                <p className="mx-auto mt-4 max-w-md text-gray-300 md:mx-0">
                  Providing reliable support and maintenance to ensure your
                  website and apps stay secure, updated, and performing
                  smoothly.
                </p>

                <ul className="mx-auto mt-6 max-w-md space-y-2 text-gray-300 md:mx-0">
                  <li>• Monitoring</li>
                  <li>• Updates</li>
                  <li>• Technical support</li>
                </ul>
              </div>

              <div className="flex w-full justify-center md:w-1/2 md:justify-end">
                <Image
                  src="/head_services.png"
                  alt="Ongoing support preview"
                  width={600}
                  height={400}
                  className="h-auto w-full max-w-[320px] object-contain sm:max-w-[420px] md:max-w-[520px]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}