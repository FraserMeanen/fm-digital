import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/project" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* BRAND */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="FM Digital home"
              className="inline-block"
            >
              <Image
                src="/logo.png"
                alt="FM Digital"
                width={180}
                height={82}
                className="h-auto w-[160px] object-contain"
              />
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-white/55">
              Modern websites and practical digital solutions, designed around
              your business.
            </p>
          </div>

          {/* NAVIGATION */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-8 gap-y-4 md:pt-5"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 transition-colors duration-300 hover:text-[#2f8f55]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FM Digital. All rights reserved.</p>

          <p>Digital development, SEO &amp; more.</p>
        </div>
      </div>
    </footer>
  );
}
