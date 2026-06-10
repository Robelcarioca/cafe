"use client";

import { motion } from "framer-motion";
import { formatPrice } from "@/lib/format";
import type { MenuItem } from "@/types/menu";

interface FeaturedSectionProps {
  items: MenuItem[];
}

export function FeaturedSection({ items }: FeaturedSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="px-4 py-8 sm:px-6" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <h2 id="featured-heading" className="font-script text-3xl text-gray-800 dark:text-gray-100">
            Featured Selection
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Handpicked favorites from our kitchen
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 6).map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-red to-brand-red-dark p-[1px] shadow-lg shadow-brand-red/20"
            >
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-900">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-2xl">
                    {item.categoryId === "pizza" ? "🍕" : item.categoryId === "burgers" ? "🍔" : item.categoryId === "breakfast" ? "🌅" : "✨"}
                  </span>
                  <span className="rounded-full bg-brand-gold/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                    Featured
                  </span>
                </div>
                <h3 className="font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                    {item.description}
                  </p>
                )}
                <p className="mt-3 text-lg font-bold text-brand-red">
                  {formatPrice(item.price, item.currency)}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
