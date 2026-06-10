"use client";

import { motion } from "framer-motion";
import { CategoryHeading } from "./CategoryHeading";
import { FoodThumbnail } from "./FoodThumbnail";
import { formatPrice } from "@/lib/format";
import type { MenuItem } from "@/types/menu";

interface FeaturedSectionProps {
  items: MenuItem[];
}

export function FeaturedSection({ items }: FeaturedSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="px-4 py-10 sm:px-6" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-6xl">
        <CategoryHeading title="Signature Selection" subtitle="Handpicked by our chefs" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 6).map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="menu-section-box flex flex-col items-center text-center"
            >
              <FoodThumbnail categoryId={item.categoryId} size="lg" />
              <h3
                id={index === 0 ? "featured-heading" : undefined}
                className="mt-5 font-sans text-sm font-bold uppercase tracking-wide text-brand-ink dark:text-brand-linen"
              >
                {item.name}
              </h3>
              {item.description && (
                <p className="mt-2 text-xs leading-relaxed text-brand-brown/65 dark:text-brand-tan/60 line-clamp-2">
                  {item.description}
                </p>
              )}
              <p className="mt-4 font-sans text-base font-semibold tabular-nums text-brand-brown dark:text-brand-tan">
                {formatPrice(item.price, item.currency)}
              </p>
              <span className="mt-3 rounded-full bg-brand-gold/15 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-brand-brown-dark dark:text-brand-gold">
                Signature
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
