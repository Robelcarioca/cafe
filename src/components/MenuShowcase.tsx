"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CategoryHeading } from "./CategoryHeading";
import { MENU_REFERENCE_IMAGE } from "@/lib/images";

export function MenuShowcase() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16" aria-labelledby="showcase-heading">
      <div className="mx-auto max-w-5xl">
        <h2 id="showcase-heading" className="sr-only">The Experience</h2>
        <CategoryHeading title="The Experience" subtitle="Crafted with care, served with warmth" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand-tan/20 via-transparent to-brand-brown/10 blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-brand-tan/50 bg-white p-4 shadow-menu dark:border-brand-brown/40 dark:bg-brand-brown-deep/50 sm:p-6">
            <Image
              src={MENU_REFERENCE_IMAGE}
              alt="Ethiopian Aviation Cafe curated dining menu"
              width={1200}
              height={900}
              className="w-full rounded-xl object-cover"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center font-script text-xl text-brand-brown/70 dark:text-brand-tan/70 sm:text-2xl"
        >
          Every dish tells a story of flavor, tradition, and hospitality
        </motion.p>
      </div>
    </section>
  );
}
