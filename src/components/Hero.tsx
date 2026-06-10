"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { restaurantInfo } from "@/data/restaurant";
import { MENU_REFERENCE_IMAGE } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-brown/70 dark:text-brand-tan/70"
          >
            {restaurantInfo.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-3 font-display text-6xl italic leading-none text-brand-brown-dark dark:text-brand-linen sm:text-7xl lg:text-8xl"
          >
            Menu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-5 max-w-md font-script text-xl leading-relaxed text-brand-brown/80 dark:text-brand-tan/80 sm:text-2xl lg:mx-0 mx-auto"
          >
            {restaurantInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-tan/60 bg-white/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-brown dark:border-brand-brown/50 dark:bg-brand-brown-deep/50 dark:text-brand-tan">
              {restaurantInfo.vatNote}
            </span>
            <span className="text-xs text-brand-brown/50 dark:text-brand-tan/50">
              {restaurantInfo.hours}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-tan/30 to-brand-brown/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-brand-tan/40 bg-white p-3 shadow-menu dark:border-brand-brown/40 dark:bg-brand-brown-deep/60">
            <Image
              src={MENU_REFERENCE_IMAGE}
              alt="Ethiopian Aviation Cafe menu"
              width={800}
              height={1000}
              priority
              className="w-full rounded-xl object-cover"
            />
          </div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-2 rounded-full border border-brand-tan/50 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-brown shadow-photo dark:bg-brand-brown-deep dark:text-brand-tan sm:-right-4"
          >
            Scan &amp; Order
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
