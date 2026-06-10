"use client";

import { motion } from "framer-motion";
import { formatPrice } from "@/lib/format";
import type { MenuItem } from "@/types/menu";

interface MenuCardProps {
  item: MenuItem;
  index?: number;
}

export function MenuCard({ item, index = 0 }: MenuCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
      whileHover={{ y: -2 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white/90 p-4 shadow-card backdrop-blur-sm transition-shadow hover:shadow-card-hover dark:border-white/10 dark:bg-gray-900/80"
    >
      <div className="absolute left-0 top-0 h-full w-1 scale-y-0 bg-brand-red transition-transform duration-300 group-hover:scale-y-100" />

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white sm:text-base">
              {item.name}
            </h3>
            {item.popular && (
              <span className="rounded-full bg-brand-red/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-red">
                Popular
              </span>
            )}
            {item.featured && (
              <span className="rounded-full bg-brand-gold/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Chef&apos;s Pick
              </span>
            )}
          </div>
          {item.description && (
            <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
          )}
          {item.tags && item.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-green-50 px-1.5 py-0.5 text-[10px] font-medium capitalize text-green-700 dark:bg-green-900/30 dark:text-green-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="shrink-0 font-sans text-sm font-bold text-brand-red sm:text-base">
          {formatPrice(item.price, item.currency)}
        </p>
      </div>
    </motion.article>
  );
}
