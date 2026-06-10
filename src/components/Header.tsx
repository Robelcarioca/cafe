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
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red text-lg font-bold text-white shadow-md shadow-brand-red/25 transition-transform group-hover:scale-105">
            EA
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-sm font-bold leading-tight tracking-wide text-brand-red sm:text-base">
              {restaurantInfo.name}
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              Digital Menu
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
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-brand-red"
                    : "text-gray-600 hover:text-brand-red dark:text-gray-300 dark:hover:text-brand-red-light"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-red/10"
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
            className="hidden rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand-red/25 transition hover:bg-brand-red-dark sm:inline-flex"
          >
            Order
          </Link>
        </div>
      </div>

      <nav className="flex border-t border-gray-100 px-2 py-2 md:hidden dark:border-white/5" aria-label="Mobile navigation">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex-1 rounded-lg py-2 text-center text-xs font-semibold uppercase tracking-wider ${
                active
                  ? "bg-brand-red/10 text-brand-red"
                  : "text-gray-500 dark:text-gray-400"
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
