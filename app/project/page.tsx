"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type ProjectCardProps = {
  href: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
  linkText: string;
  delay?: number;
  lightImageBackground?: boolean;
};

function ProjectCard({
  href,
  image,
  alt,
  title,
  description,
  tags,
  linkText,
  delay = 0,
  lightImageBackground = false,
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 45,
              scale: 0.98,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.85,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
            }
      }
      className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-colors duration-500 hover:border-[#2f8f55]/30 hover:bg-white/[0.045]"
    >
      <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#2f8f55]/0 blur-[70px] transition duration-700 group-hover:bg-[#2f8f55]/10" />

      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="flex flex-col md:grid md:min-h-[220px] md:grid-cols-[46%_54%]">
          {/* IMAGE */}
          <div
            className={`border-b border-white/10 p-3 md:border-b-0 md:border-r ${
              lightImageBackground ? "bg-white" : "bg-black/25"
            }`}
          >
            <div
              className={`relative h-[190px] overflow-hidden rounded-[16px] md:h-[220px] ${
                lightImageBackground ? "bg-white" : "bg-black"
              }`}
            >
              <Image
                src={image}
                alt={alt}
                fill
                className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.025]"
                sizes="(max-width: 768px) 100vw, 46vw"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="relative flex flex-col justify-center p-5 sm:p-6">
            <h3 className="text-[1.8rem] font-light leading-tight tracking-[-0.025em] text-white">
              {title}
            </h3>

            <p className="mt-3 max-w-[30ch] text-[0.98rem] leading-7 text-white/65">
              {description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-[#2f8f55]">
              <span>{linkText}</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.09),transparent_48%)]" />

        <div className="absolute left-1/2 top-[38rem] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#2f8f55]/[0.07] blur-[120px] md:h-[650px] md:w-[650px]" />

        <div className="absolute bottom-[10rem] right-[-12rem] h-[420px] w-[420px] rounded-full bg-[#2f8f55]/[0.05] blur-[140px] md:h-[650px] md:w-[650px]" />
      </div>

      <div className="px-4 py-8 md:px-6">
        {/* NAV */}
        <div className="mx-auto max-w-7xl">
          <nav className="relative z-50 mb-6 flex items-center justify-center pt-6 md:mb-20 md:justify-between">
            <Link href="/" aria-label="FM Digital home">
              <Image
                src="/logo.png"
                alt="FM Digital web design and software development"
                width={220}
                height={100}
                loading="eager"
                className="h-auto w-auto object-contain"
              />
            </Link>

            <div className="hidden items-center gap-8 text-base font-light text-white/70 md:flex">
              <Link
                href="/"
                className="relative transition duration-300 hover:text-[#2f8f55]"
              >
                Home
              </Link>

              <Link
                href="/services"
                className="relative transition duration-300 hover:text-[#2f8f55]"
              >
                Services
              </Link>

              <Link
                href="/project"
                className="relative transition duration-300 hover:text-[#2f8f55]"
              >
                Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 transition duration-300 hover:border-[#2f8f55] hover:bg-[#2f8f55]/10 hover:text-[#2f8f55]"
              >
                Contact
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="absolute right-0 top-1/2 flex -translate-y-1/2 flex-col gap-1 rounded-lg p-3 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
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

          {/* MOBILE MENU */}
          <motion.div
            initial={false}
            animate={{
              height: menuOpen ? "auto" : 0,
              opacity: menuOpen ? 1 : 0,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-40 overflow-hidden md:hidden"
          >
            <div className="mb-8 mt-3 rounded-[22px] border border-white/10 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col gap-1 text-sm text-white/80">
                <Link
                  href="/"
                  className="rounded-xl px-4 py-3.5 transition hover:bg-white/[0.05] hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  href="/services"
                  className="rounded-xl px-4 py-3.5 transition hover:bg-white/[0.05] hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>

                <Link
                  href="/project"
                  className="rounded-xl px-4 py-3.5 transition hover:bg-white/[0.05] hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl px-4 py-3.5 transition hover:bg-white/[0.05] hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="mx-auto max-w-[1450px]">
          <section className="relative mt-10 md:mt-32">
            {/* INTRO */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full text-center md:w-[34%] md:text-left"
            >
              <h1 className="mx-auto text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl md:mx-0 md:text-6xl">
                Web Design, Software & App Projects
              </h1>

              <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/60 md:mx-0">
                Website, software and mobile app projects built by FM Digital,
                a Glasgow-based digital studio working with businesses across
                Scotland and the UK.
              </p>
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-48 top-0 h-[380px] w-[380px] rounded-full bg-[#2f8f55]/[0.07] blur-[120px] md:h-[560px] md:w-[560px]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.08, 1],
                      opacity: [0.35, 0.65, 0.35],
                    }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* WEBSITES */}
            <div className="mt-14 md:mt-20">
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h2 className="text-center text-2xl font-light tracking-[-0.02em] text-white md:text-left md:text-[2.05rem]">
                  Websites
                </h2>

                <div className="mx-auto mt-2 h-[2px] w-20 bg-[#2f8f55] md:mx-0" />
              </motion.div>

              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                <ProjectCard
                  href="https://gillespiestonework.vercel.app/"
                  image="/gillespie_screenshot.png"
                  alt="P. Gillespie and Son website designed and developed by FM Digital"
                  title="P. Gillespie & Son"
                  description="Premium trade website for dry stone dyking, stonework services and local SEO across Argyll, Oban and the Western Isles."
                  tags={["Web Design", "Development", "SEO Optimised"]}
                  linkText="View live site"
                />

                <ProjectCard
                  href="https://one-of-61.vercel.app/"
                  image="/one-of-61-screenshot.png"
                  alt="One of 61 speaker website designed by FM Digital"
                  title="One of 61"
                  description="Speaker website and landing page with a bold visual identity, clear messaging and a strong contact-focused structure."
                  tags={["Web Design", "Development"]}
                  linkText="View live site"
                  delay={0.12}
                />
              </div>
            </div>

            {/* APPS */}
            <div className="mt-20">
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h2 className="text-center text-2xl font-light tracking-[-0.02em] text-white md:text-left md:text-[2.05rem]">
                  Apps
                </h2>

                <div className="mx-auto mt-2 h-[2px] w-20 bg-[#2f8f55] md:mx-0" />
              </motion.div>

              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                <ProjectCard
                  href="https://apps.apple.com/gb/app/book-me-in-classes-near-you/id6800840658"
                  image="/bmi-icon-2.png"
                  alt="Book Me In mobile app developed by FM Digital"
                  title="Book Me In"
                  description="Class discovery and booking app connecting customers with local classes and giving businesses tools to manage bookings and schedules."
                  tags={["App Design", "Development", "iOS"]}
                  linkText="View on App Store"
                  lightImageBackground
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-24 border-t border-white/10 px-4 py-7 text-center text-xs text-white/40 md:px-6">
        <p>© 2026 FM Digital. All rights reserved.</p>

        <p className="mt-1">
          Glasgow-based web design, software development and app development by{" "}
          <Link
            href="/"
            className="transition duration-300 hover:text-[#2f8f55]"
          >
            FM Digital
          </Link>
          .
        </p>
      </footer>
    </main>
  );
}