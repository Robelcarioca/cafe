"use client";

import { motion } from "framer-motion";
import { restaurantInfo } from "@/data/restaurant";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-10 sm:px-6 sm:pt-14">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-red/5 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-brand-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-red/20 bg-white shadow-lg dark:bg-gray-900"
        >
          <span className="font-display text-3xl font-bold text-brand-red">EA</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-display text-3xl font-bold tracking-tight text-brand-red sm:text-5xl"
        >
          {restaurantInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-3 font-script text-xl text-gray-600 dark:text-gray-300 sm:text-2xl"
        >
          {restaurantInfo.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-brand-red dark:border-brand-red/30"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
          {restaurantInfo.vatNote}
        </motion.p>
      </div>
    </section>
  );
}
