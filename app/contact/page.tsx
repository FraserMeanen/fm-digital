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

          {/* TEXT BLOCK */}
          <div className="w-full pt-0 text-center md:w-2/5 md:pt-8 md:text-left">
            <h1 className="mx-auto text-4xl font-light leading-tight tracking-tight sm:text-5xl md:mx-0 md:max-w-xl md:text-6xl">
              Contact
            </h1>

            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/60 md:mx-0 md:max-w-lg">
              Let’s talk about your next project. I’ll get back to you as soon as possible.
            </p>

            <div className="mx-auto mt-8 h-[2px] w-16 bg-[#2f8f55] md:mx-0" />
          </div>

          {/* ✅ FIXED: BOXES NOW OUTSIDE WIDTH CONSTRAINT */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3
          ">

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
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
                Send me an email and I’ll get back to you.
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-[#2f8f55]">
                  hello@fmdigital.co.uk
                </span>

                <span className="text-[#2f8f55]">↗</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
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
                Contact me on Facebook and I’ll get back to you.
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-[#2f8f55]">
                  facebook.com/fmdigital
                </span>

                <span className="text-[#2f8f55]">↗</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#2f8f55"
              className="h-6 w-6"
              >
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9Zm4.6-7.8a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" />
              </svg>

              <h3 className="mt-6 text-xl font-light text-white">Instagram</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Follow or message on Instagram.
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-[#2f8f55]">
                  instagram.com/fmdigital
                </span>

                <span className="text-[#2f8f55]">↗</span>
              </div>
            </div>

          </div>

        </section>
      </div>
    </main>
  );
}