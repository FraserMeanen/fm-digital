"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.09),transparent_48%)]" />

        <div className="absolute left-1/2 top-[34rem] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#2f8f55]/[0.07] blur-[120px] md:h-[650px] md:w-[650px]" />

        <div className="absolute bottom-[10rem] right-[-12rem] h-[420px] w-[420px] rounded-full bg-[#2f8f55]/[0.05] blur-[140px] md:h-[650px] md:w-[650px]" />
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

          {/* CONTENT */}
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
              className="w-full pt-0 text-center md:w-2/5 md:pt-8 md:text-left"
            >
              <h1 className="mx-auto text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl md:mx-0 md:max-w-xl md:text-6xl">
                Contact FM Digital
              </h1>

              <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/60 md:mx-0 md:max-w-lg">
                Have a digital project in mind? Based in Glasgow, FM Digital
                works with businesses across Scotland and the UK on websites,
                software, mobile apps and SEO. Get in touch to discuss your
                ideas.
              </p>

              <div className="mx-auto mt-8 h-[2px] w-16 bg-[#2f8f55] md:mx-0" />
            </motion.div>

            {/* GLOW */}
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

            {/* CONTACT CARDS */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
              {/* EMAIL */}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.01,
                      }
                }
                className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-colors duration-500 hover:border-[#2f8f55]/30 hover:bg-white/[0.05]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#2f8f55]/0 blur-[70px] transition duration-700 group-hover:bg-[#2f8f55]/10" />

                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 1.08,
                          rotate: -3,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                  className="relative w-fit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#2f8f55"
                    className="h-6 w-6"
                  >
                    <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.2l-10 6.25L2 5.2V5Zm0 2.6v11.4A2 2 0 0 0 4 21h16a2 2 0 0 0 2-2V7.6l-9.4 5.9a1 1 0 0 1-1.2 0L2 7.6Z" />
                  </svg>
                </motion.div>

                <h3 className="relative mt-6 text-xl font-light text-white">
                  Email
                </h3>

                <p className="relative mt-3 text-sm leading-relaxed text-white/60">
                  Email FM Digital to discuss web design, custom software,
                  mobile app development or SEO support.
                </p>

                <div className="relative mt-auto flex items-center justify-between pt-6">
                  <Link
                    href="mailto:fraser@fm-digital.co.uk"
                    className="text-sm text-[#2f8f55] transition duration-300 hover:text-white"
                  >
                    fraser@fm-digital.co.uk
                  </Link>

                  <span className="text-[#2f8f55] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
              </motion.div>

              {/* FACEBOOK */}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.85,
                  delay: reduceMotion ? 0 : 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.01,
                      }
                }
                className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-colors duration-500 hover:border-[#2f8f55]/30 hover:bg-white/[0.05]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#2f8f55]/0 blur-[70px] transition duration-700 group-hover:bg-[#2f8f55]/10" />

                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 1.08,
                          rotate: 3,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                  className="relative w-fit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#2f8f55"
                    className="h-6 w-6"
                  >
                    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.3-1.5 1.6-1.5H16V5.1c-.2 0-.9-.1-1.8-.1-2.4 0-4 1.5-4 4.2V11H8v3h2.4v7h3.1Z" />
                  </svg>
                </motion.div>

                <h3 className="relative mt-6 text-xl font-light text-white">
                  Facebook
                </h3>

                <p className="relative mt-3 text-sm leading-relaxed text-white/60">
                  Follow FM Digital for web design, software, app development,
                  SEO and digital project updates.
                </p>

                <div className="relative mt-auto flex items-center justify-between pt-6">
                  <Link
                    href="https://www.facebook.com/people/FM-Digital/61588982026581/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#2f8f55] transition duration-300 hover:text-white"
                  >
                    FM Digital Facebook
                  </Link>

                  <span className="text-[#2f8f55] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
              </motion.div>

              {/* INSTAGRAM */}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.85,
                  delay: reduceMotion ? 0 : 0.24,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.01,
                      }
                }
                className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-colors duration-500 hover:border-[#2f8f55]/30 hover:bg-white/[0.05]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#2f8f55]/0 blur-[70px] transition duration-700 group-hover:bg-[#2f8f55]/10" />

                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 1.08,
                          rotate: -3,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                  className="relative w-fit"
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
                    <circle
                      cx="17"
                      cy="7"
                      r="1.2"
                      fill="#2f8f55"
                      stroke="none"
                    />
                  </svg>
                </motion.div>

                <h3 className="relative mt-6 text-xl font-light text-white">
                  Instagram
                </h3>

                <p className="relative mt-3 text-sm leading-relaxed text-white/60">
                  Follow FM Digital on Instagram for website, software, app and
                  digital project updates.
                </p>

                <div className="relative mt-auto flex items-center justify-between pt-6">
                  <Link
                    href="https://www.instagram.com/fmdigital.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#2f8f55] transition duration-300 hover:text-white"
                  >
                    instagram.com/fmdigital.uk
                  </Link>

                  <span className="text-[#2f8f55] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
