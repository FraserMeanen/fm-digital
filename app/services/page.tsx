"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

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

          {/* PAGE INTRO */}
          <section className="relative mt-10 md:mt-32">
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
              className="w-full pt-0 text-center md:w-2/5 md:pt-8 md:text-left"
            >
              <h1 className="mx-auto text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl md:mx-0 md:max-w-xl md:text-6xl">
                Web Design, Software Development, Apps & SEO
              </h1>

              <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-gray-300 md:mx-0 md:max-w-xl">
                FM Digital is a Glasgow-based web design and software development
                studio providing websites, custom software, web applications,
                mobile apps and SEO services for businesses across Glasgow,
                Aberdeen, Scotland and the UK.
              </p>
            </motion.div>

            {/* SUBTLE HERO GLOW */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-48 top-0 h-[400px] w-[400px] rounded-full bg-[#2f8f55]/[0.08] blur-[120px] md:h-[600px] md:w-[600px]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.08, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </section>

          {/* SERVICES */}
          <section className="mt-16 md:mt-24">
            <div className="flex flex-col gap-6 md:gap-8">
              {/* WEB DESIGN */}
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 55,
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
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                      }
                }
                className="group relative flex flex-col items-center gap-10 overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.035] p-6 text-center shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-colors duration-500 hover:border-[#2f8f55]/30 hover:bg-white/[0.05] md:min-h-[400px] md:flex-row md:gap-12 md:p-8 md:text-left"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2f8f55]/[0.05] blur-[90px] transition duration-700 group-hover:bg-[#2f8f55]/[0.10]" />

                <div className="relative w-full md:w-1/2">
                  <h2 className="text-2xl font-light tracking-[-0.02em] md:text-3xl">
                    Web Design & Website Development
                  </h2>

                  <p className="mx-auto mt-4 max-w-md leading-relaxed text-gray-300 md:mx-0">
                    Professional web design and custom website development
                    focused on fast performance, responsive layouts, search
                    visibility and turning visitors into enquiries. We build
                    websites for businesses in Glasgow, Aberdeen and across the
                    UK.
                  </p>

                  <ul className="mx-auto mt-6 max-w-md space-y-3 text-gray-300 md:mx-0">
                    <li className="flex items-start gap-3">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f8f55]" />
                      <span>
                        Business websites and high-converting landing pages
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f8f55]" />
                      <span>Responsive, fast and modern website development</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f8f55]" />
                      <span>
                        SEO-ready structure built for Google search visibility
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="relative flex w-full justify-center md:w-1/2 md:justify-end">
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f8f55]/10 blur-[70px]" />

                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.035,
                            y: -5,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 18,
                    }}
                    className="relative w-full max-w-[340px] sm:max-w-md md:max-w-none"
                  >
                    <Image
                      src="/laptop-up.png"
                      alt="FM Digital web design and website development services in Glasgow and across the UK"
                      width={520}
                      height={340}
                      loading="eager"
                      className="h-auto w-full rounded-2xl object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* SOFTWARE & APPS */}
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 55,
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
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                      }
                }
                className="group relative flex flex-col items-center gap-10 overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.035] p-6 text-center shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-colors duration-500 hover:border-[#2f8f55]/30 hover:bg-white/[0.05] md:min-h-[400px] md:flex-row md:gap-12 md:p-8 md:text-left"
              >
                <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#2f8f55]/[0.05] blur-[90px] transition duration-700 group-hover:bg-[#2f8f55]/[0.10]" />

                <div className="order-2 relative flex w-full justify-center md:order-1 md:w-1/2 md:justify-start">
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f8f55]/10 blur-[75px]" />

                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.04,
                            y: -6,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 18,
                    }}
                    className="relative"
                  >
                    <Image
                      src="/coffee_phone.png"
                      alt="FM Digital custom software, web app and mobile app development services"
                      width={300}
                      height={500}
                      className="mx-auto h-auto w-full max-w-[180px] object-contain drop-shadow-2xl sm:max-w-[220px] md:mx-0 md:max-w-[250px]"
                    />
                  </motion.div>
                </div>

                <div className="order-1 relative w-full md:order-2 md:w-1/2">
                  <h2 className="text-2xl font-light tracking-[-0.02em] md:text-3xl">
                    Software & App Development
                  </h2>

                  <p className="mx-auto mt-4 max-w-md leading-relaxed text-gray-300 md:mx-0">
                    Bespoke software, web applications and mobile apps designed
                    around real business processes. From booking platforms and
                    customer portals to dashboards, internal systems and
                    scalable digital products, we build software around the way
                    your business actually works.
                  </p>

                  <ul className="mx-auto mt-6 max-w-md space-y-3 text-gray-300 md:mx-0">
                    <li className="flex items-start gap-3">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f8f55]" />
                      <span>Custom business software and web applications</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f8f55]" />
                      <span>Mobile app development for iOS and Android</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f8f55]" />
                      <span>
                        Booking systems, dashboards, portals and digital
                        platforms
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* SEO */}
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 55,
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
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                      }
                }
                className="group relative flex flex-col items-center gap-10 overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.035] p-6 text-center shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-colors duration-500 hover:border-[#2f8f55]/30 hover:bg-white/[0.05] md:min-h-[400px] md:flex-row md:gap-12 md:p-8 md:text-left"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2f8f55]/[0.05] blur-[90px] transition duration-700 group-hover:bg-[#2f8f55]/[0.10]" />

                <div className="relative w-full md:w-1/2">
                  <h2 className="text-2xl font-light tracking-[-0.02em] md:text-3xl">
                    SEO & Ongoing Digital Support
                  </h2>

                  <p className="mx-auto mt-4 max-w-md leading-relaxed text-gray-300 md:mx-0">
                    SEO, website optimisation, maintenance and technical support
                    designed to improve Google visibility, strengthen local
                    search rankings and keep websites and digital products
                    performing as your business grows.
                  </p>

                  <ul className="mx-auto mt-6 max-w-md space-y-3 text-gray-300 md:mx-0">
                    <li className="flex items-start gap-3">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f8f55]" />
                      <span>Local and on-page SEO improvements</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f8f55]" />
                      <span>Website optimisation, maintenance and updates</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f8f55]" />
                      <span>
                        Ongoing technical support for websites and apps
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="relative flex w-full justify-center md:w-1/2 md:justify-end">
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f8f55]/10 blur-[75px]" />

                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.035,
                            y: -5,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 18,
                    }}
                    className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px]"
                  >
                    <Image
                      src="/head_services.png"
                      alt="FM Digital SEO, local search optimisation and website support services"
                      width={600}
                      height={400}
                      className="h-auto w-full object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
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