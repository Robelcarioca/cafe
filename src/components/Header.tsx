"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { restaurantInfo } from "@/data/restaurant";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-tan/40 bg-brand-cream/90 backdrop-blur-xl dark:border-brand-brown/40 dark:bg-brand-brown-deep/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-tan bg-brand-brown text-sm font-bold tracking-wider text-white shadow-soft transition-transform group-hover:scale-105">
            EA
          </div>
          <div className="hidden sm:block">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-brand-brown-dark dark:text-brand-linen">
              {restaurantInfo.name}
            </p>
            <p className="text-[9px] uppercase tracking-[0.25em] text-brand-brown/50 dark:text-brand-tan/50">
              Est. Addis Ababa
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                  active
                    ? "text-brand-brown-dark dark:text-brand-tan"
                    : "text-brand-brown/60 hover:text-brand-brown-dark dark:text-brand-tan/60 dark:hover:text-brand-tan"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-brown dark:bg-brand-tan"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full bg-brand-brown px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-soft transition hover:bg-brand-brown-dark sm:inline-flex"
          >
            Order
          </Link>
        </div>
      </div>

      <nav
        className="flex border-t border-brand-tan/30 px-2 py-2 md:hidden dark:border-brand-brown/30"
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex-1 py-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] ${
                active
                  ? "text-brand-brown-dark dark:text-brand-tan"
                  : "text-brand-brown/50 dark:text-brand-tan/50"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
