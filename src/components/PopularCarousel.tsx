"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { CategoryHeading } from "./CategoryHeading";
import { FoodThumbnail } from "./FoodThumbnail";
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
    scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <section className="px-4 py-10 sm:px-6" aria-labelledby="popular-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-2 flex items-end justify-between">
          <div className="flex-1">
            <CategoryHeading title="Guest Favorites" subtitle="Loved by our regulars" />
          </div>
          <div className="mb-8 ml-4 hidden shrink-0 gap-2 sm:flex">
            <CarouselButton direction="left" onClick={() => scroll("left")} />
            <CarouselButton direction="right" onClick={() => scroll("right")} />
          </div>
        </div>

        <div
          ref={scrollRef}
          className="scrollbar-hide -mx-4 flex gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0"
        >
          {items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="w-56 shrink-0 menu-section-box flex flex-col items-center text-center sm:w-60"
            >
              <FoodThumbnail categoryId={item.categoryId} size="md" />
              <h3
                id={index === 0 ? "popular-heading" : undefined}
                className="mt-4 text-xs font-bold uppercase tracking-wide text-brand-ink dark:text-brand-linen"
              >
                {item.name}
              </h3>
              <p className="mt-2 text-sm font-semibold tabular-nums text-brand-brown dark:text-brand-tan">
                {formatPrice(item.price, item.currency)}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-tan/60 bg-white/80 text-brand-brown transition hover:border-brand-brown hover:bg-brand-cream dark:border-brand-brown/50 dark:bg-brand-brown-deep/60 dark:text-brand-tan"
      aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
    >
      {direction === "left" ? "←" : "→"}
    </button>
  );
}
