"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/format";
import type { MenuItem } from "@/types/menu";

interface PopularCarouselProps {
  items: MenuItem[];
}

export function PopularCarousel({ items }: PopularCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (items.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -280 : 280;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="px-4 py-8 sm:px-6" aria-labelledby="popular-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="popular-heading" className="font-script text-3xl text-gray-800 dark:text-gray-100">
              Popular Dishes
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Loved by our guests
            </p>
          </motion.div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-brand-red hover:text-brand-red dark:border-white/10 dark:bg-gray-900 dark:text-gray-300"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-brand-red hover:text-brand-red dark:border-white/10 dark:bg-gray-900 dark:text-gray-300"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="scrollbar-hide -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0"
        >
          {items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="w-64 shrink-0 rounded-2xl border border-gray-100 bg-white p-5 shadow-card dark:border-white/10 dark:bg-gray-900/80"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-2xl">
                {item.categoryId === "pizza" ? "🍕" : item.categoryId === "juice" ? "🥤" : item.categoryId === "breakfast" ? "🍳" : "⭐"}
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
                {item.name}
              </h3>
              <p className="mt-2 text-base font-bold text-brand-red">
                {formatPrice(item.price, item.currency)}
              </p>
              <span className="mt-2 inline-block rounded-full bg-brand-red/10 px-2 py-0.5 text-[10px] font-bold uppercase text-brand-red">
                Popular
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
