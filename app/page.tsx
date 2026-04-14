"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-black bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)] text-white px-4 py-8 md:px-6">
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
        
        <section className="mt-10 flex flex-col gap-10 md:mt-32 md:flex-row">

          <div className="w-full pt-0 text-center md:w-2/5 md:pt-8 md:text-left">
          <h1 className="mx-auto text-4xl font-light leading-tight tracking-tight sm:text-5xl md:mx-0 md:max-w-xl md:text-6xl">
            Elevating Your Online Presence
          </h1>

          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-gray-300 md:mx-0 md:max-w-md">
            We build sleek, professional websites designed to drive your business forward.
          </p>

          <Link
          href="/contact"
          className="inline-block mt-8 rounded-xl border border-white/20 bg-gradient-to-r from-black via-[#0f2e1f] to-[#1f6f4a] px-10 py-4 font-medium text-white transition hover:scale-[1.02]"
          >
            Get Started
          </Link>
          </div>

          <div className="w-full flex justify-center pt-2 md:w-3/5 md:justify-end md:pt-6">
          <Image
          src="/laptop-up.png"
          alt="Website preview"
          width={880}
          height={550}
          loading="eager"
          className="h-auto w-full max-w-[340px] rounded-2xl object-contain drop-shadow-2xl sm:max-w-md md:max-w-none"
          />
          </div>
        
        </section>

        <section className="mt-32">
          <h2 className="text-3xl font-light leading-tight tracking-tight text-center">
            Our Services
          </h2>

          <div className="mt-12 flex flex-col gap-6 md:flex-row">

          <div className="w-full border border-white/10 bg-white/5 p-6 text-center md:w-1/3 md:text-left">
          <Image
          src="/web_graphic.png"
          alt="Web development icon"
          width={175}
          height={175}
          className="mx-auto h-[120px] w-auto object-contain md:mx-0"
          />
          <h3 className="text-xl font-semibold">
            Web Development
          </h3>

          <p className="mt-3 text-gray-300 text-sm">
            Crafting modern, responsive websites that make your business stand out.
          </p>
          </div>

          <div className="w-full border border-white/10 bg-white/5 p-6 text-center md:w-1/3 md:text-left">
          <Image
          src="/phone_graphic.png"
          alt="Mobile development icon"
          width={175}
          height={175}
          className="mx-auto h-[120px] w-auto object-contain md:mx-0"
          />
          <h3 className="text-xl font-semibold">
            Mobile App Development
          </h3>

          <p className="mt-3 text-gray-300 text-sm">
              Building custom apps tailored to your business and customer needs.
          </p>
          </div>

          <div className="w-full border border-white/10 bg-white/5 p-6 text-center md:w-1/3 md:text-left">
          <Image
          src="/head_graphic.png"
          alt="Support icon"
          width={175}
          height={175}
          className="mx-auto h-[120px] w-auto object-contain md:mx-0"
          />
          <h3 className="text-xl font-semibold">
            Ongoing Support
          </h3>

          <p className="mt-3 text-gray-300 text-sm">
            Providing reliable support and maintenance to keep your site running smoothly.
          </p>
          </div>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-light leading-tight tracking-tight text-center">
            Featured Projects
          </h2>
        </section>
      </div>
    </main>
  );
}
