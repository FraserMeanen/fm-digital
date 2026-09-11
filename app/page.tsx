"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const heroRef = useRef<HTMLElement | null>(null);
  const featuredProjectRef = useRef<HTMLElement | null>(null);

  const reduceMotion = useReducedMotion();

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroTextYRaw = useTransform(
    heroScrollProgress,
    [0, 1],
    [0, reduceMotion ? 0 : -45],
  );

  const heroTextOpacity = useTransform(
    heroScrollProgress,
    [0, 0.8],
    [1, reduceMotion ? 1 : 0.25],
  );

  const laptopYRaw = useTransform(
    heroScrollProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 65],
  );

  const laptopScaleRaw = useTransform(
    heroScrollProgress,
    [0, 1],
    [1, reduceMotion ? 1 : 1.07],
  );

  const laptopRotateRaw = useTransform(
    heroScrollProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 1.2],
  );

  const laptopY = useSpring(laptopYRaw, {
    stiffness: 110,
    damping: 26,
    mass: 0.8,
  });

  const laptopScale = useSpring(laptopScaleRaw, {
    stiffness: 110,
    damping: 26,
    mass: 0.8,
  });

  const laptopRotate = useSpring(laptopRotateRaw, {
    stiffness: 110,
    damping: 26,
    mass: 0.8,
  });

  const { scrollYProgress: projectScrollProgress } = useScroll({
    target: featuredProjectRef,
    offset: ["start end", "end start"],
  });

  const projectImageScale = useTransform(
    projectScrollProgress,
    [0, 0.5, 1],
    [1.04, 1, 1.04],
  );

  const projectImageY = useTransform(
    projectScrollProgress,
    [0, 1],
    [reduceMotion ? 0 : 18, reduceMotion ? 0 : -18],
  );

  const serviceCards = [
    {
      image: "/web_graphic.png",
      alt: "Web design and website development services by FM Digital",
      title: "Web Design & Development",
      text: "Professional web design and website development for businesses in Glasgow, Aberdeen and across the UK, with responsive design, fast performance, clear user journeys and SEO-ready foundations built to generate enquiries.",
    },
    {
      image: "/phone_graphic.png",
      alt: "Custom software, web app and mobile app development services",
      title: "Software & App Development",
      text: "Custom software, business systems, web applications and mobile apps built around real workflows, customers and future growth, from booking platforms and dashboards to bespoke digital products.",
    },
    {
      image: "/head_graphic.png",
      alt: "SEO and website support services by FM Digital",
      title: "SEO & Website Support",
      text: "Technical and on-page SEO, website optimisation, maintenance and ongoing digital support designed to improve Google search visibility, strengthen local rankings and keep your website performing.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.09),transparent_48%)]" />

        <div className="absolute left-1/2 top-[35rem] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#2f8f55]/[0.08] blur-[120px] md:h-[650px] md:w-[650px]" />

        <div className="absolute bottom-[20rem] right-[-10rem] h-[380px] w-[380px] rounded-full bg-[#2f8f55]/[0.05] blur-[140px] md:h-[600px] md:w-[600px]" />
      </div>

      <div className="px-4 py-8 md:px-6">
        <div className="mx-auto max-w-7xl">
          {/* NAV */}
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

          {/* HERO */}
          <section
            ref={heroRef}
            className="relative mt-4 flex min-h-[680px] flex-col items-center justify-center gap-12 pb-16 md:mt-12 md:min-h-[720px] md:flex-row md:gap-8 md:pb-24"
          >
            {/* HERO GLOW */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-10rem] top-[7rem] h-[420px] w-[420px] rounded-full bg-[#2f8f55]/10 blur-[120px] md:right-[-4rem] md:h-[600px] md:w-[600px]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.08, 1],
                      opacity: [0.45, 0.7, 0.45],
                    }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* HERO TEXT */}
            <motion.div
              style={{
                y: heroTextYRaw,
                opacity: heroTextOpacity,
              }}
              className="relative z-10 w-full text-center md:w-2/5 md:text-left"
            >
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
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h1 className="mx-auto max-w-[12ch] text-[2.65rem] font-light leading-[1.05] tracking-[-0.035em] sm:text-5xl md:mx-0 md:max-w-xl md:text-6xl lg:text-[4.4rem]">
                  Web Design, Software & App Development
                </h1>

                <p className="mx-auto mt-6 max-w-md text-[1.02rem] leading-7 text-gray-300 sm:text-lg sm:leading-relaxed md:mx-0 md:max-w-md">
                  FM Digital is a Glasgow-based web design and software
                  development studio creating modern websites, custom software,
                  web apps and mobile apps for businesses across Glasgow,
                  Aberdeen, Scotland and the UK.
                </p>

                <div className="mt-8 flex justify-center md:justify-start">
                  <Link
                    href="/contact"
                    className="group relative inline-flex min-h-[52px] items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/[0.04] px-8 py-3.5 font-medium text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-500 hover:border-[#2f8f55]/60 hover:bg-[#2f8f55]/10 sm:px-10"
                  >
                    {/* MOBILE AUTOMATIC SHINE */}
                    {!reduceMotion && (
                      <motion.span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-transparent via-white/[0.10] to-transparent md:hidden"
                        initial={{ x: "-140%" }}
                        animate={{ x: "340%" }}
                        transition={{
                          duration: 0.75,
                          repeat: Infinity,
                          repeatDelay: 4.25,
                          ease: "easeInOut",
                        }}
                      />
                    )}

                    {/* DESKTOP HOVER SHINE */}
                    <span className="pointer-events-none absolute inset-0 hidden translate-x-[-120%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-[120%] md:block" />

                    <span className="relative flex items-center gap-3">
                      Get Started

                      <motion.span
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                x: [0, 0, 0, 0, 3, 0],
                              }
                        }
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        →
                      </motion.span>
                    </span>
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* HERO LAPTOP */}
            <motion.div
              style={{
                y: laptopY,
                scale: laptopScale,
                rotate: laptopRotate,
              }}
              className="relative z-10 flex w-full justify-center md:w-3/5 md:justify-end"
            >
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.92,
                        y: 30,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full max-w-[390px] sm:max-w-[520px] md:max-w-none"
              >
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[45%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f8f55]/15 blur-[80px]" />

                <Image
                  src="/laptop-up.png"
                  alt="FM Digital web design, software development and app development projects"
                  width={880}
                  height={550}
                  loading="eager"
                  priority
                  className="relative h-auto w-full rounded-2xl object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.75)]"
                />
              </motion.div>
            </motion.div>
          </section>

          {/* SERVICES */}
          <section className="relative mt-24 md:mt-32">
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#2f8f55]">
                What we do
              </p>

              <h2 className="text-3xl font-light leading-tight tracking-[-0.025em] sm:text-4xl">
                Web Design, Software Development, App Development & SEO
              </h2>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
              {serviceCards.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 50,
                          scale: 0.97,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.18,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: reduceMotion ? 0 : index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -6,
                          scale: 1.012,
                        }
                  }
                  className="group relative flex min-h-[355px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] p-6 text-center shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-colors duration-500 hover:border-[#2f8f55]/30 hover:bg-white/[0.055] md:min-h-[390px] md:p-7 md:text-left"
                >
                  <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#2f8f55]/0 blur-3xl transition duration-700 group-hover:bg-[#2f8f55]/10" />

                  <div className="relative mb-6 flex h-[130px] items-center justify-center md:justify-start">
                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              scale: 1.06,
                              rotate: index === 1 ? 1.5 : -1.5,
                            }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 18,
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={service.alt}
                        width={175}
                        height={175}
                        className="h-[120px] w-auto object-contain"
                      />
                    </motion.div>
                  </div>

                  <h3 className="relative text-xl font-medium tracking-[-0.015em] text-white">
                    {service.title}
                  </h3>

                  <p className="relative mt-4 text-sm leading-6 text-gray-300">
                    {service.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FEATURED PROJECT */}
          <section
            ref={featuredProjectRef}
            className="relative mt-28 md:mt-36"
          >
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center"
            >
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#2f8f55]">
                Selected work
              </p>

              <h2 className="text-3xl font-light leading-tight tracking-[-0.025em] sm:text-4xl">
                Featured Web Design Project
              </h2>
            </motion.div>

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 55,
                      scale: 0.97,
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
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-12 max-w-5xl"
            >
              <Link
                href="https://gillespiestonework.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.025] shadow-[0_35px_120px_rgba(0,0,0,0.32)] backdrop-blur-xl transition duration-500 hover:border-[#2f8f55]/30"
              >
                <div className="flex flex-col md:grid md:min-h-[360px] md:grid-cols-[50%_50%]">
                  {/* PROJECT IMAGE */}
                  <div className="relative overflow-hidden border-b border-white/10 bg-black/30 p-3 sm:p-4 md:border-b-0 md:border-r">
                    <div className="relative h-[250px] overflow-hidden rounded-[18px] bg-black sm:h-[320px] md:h-[360px]">
                      <motion.div
                        style={{
                          scale: projectImageScale,
                          y: projectImageY,
                        }}
                        className="absolute inset-0 h-full w-full"
                      >
                        <Image
                          src="/gillespie_screenshot.png"
                          alt="P. Gillespie & Son Stonework website designed and developed by FM Digital"
                          fill
                          loading="eager"
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </motion.div>

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* PROJECT TEXT */}
                  <div className="relative flex flex-col justify-center overflow-hidden p-6 sm:p-8 md:p-10">
                    <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-[#2f8f55]/[0.06] blur-[80px]" />

                    <div className="relative">
                      <p className="text-xs uppercase tracking-[0.28em] text-[#2f8f55] sm:text-sm">
                        Featured Web Design Project
                      </p>

                      <h3 className="mt-4 text-[2rem] font-light leading-tight tracking-[-0.025em] text-white sm:text-[2.35rem] md:text-4xl">
                        P. Gillespie & Son Stonework
                      </h3>

                      <p className="mt-5 max-w-[34ch] text-[0.98rem] leading-7 text-white/65 sm:text-[1.02rem] sm:leading-8">
                        SEO-ready trade website designed and developed by FM
                        Digital for P. Gillespie & Son, targeting dry stone
                        dyking and stonework customers across Argyll, Oban and
                        the Western Isles.
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70">
                          Web Design
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70">
                          Website Development
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70">
                          SEO Optimised
                        </span>
                      </div>

                      <div className="mt-8 flex items-center gap-3 text-sm text-[#2f8f55]">
                        <span>View website project</span>

                        <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
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