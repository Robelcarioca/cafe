"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { CategoryHeading } from "./CategoryHeading";
import { MenuCard } from "./MenuCard";
import { FoodThumbnail } from "./FoodThumbnail";
import type { MenuCategory, MenuItem } from "@/types/menu";

interface MenuSectionProps {
  category: MenuCategory;
  items: MenuItem[];
  showThumbnail?: boolean;
}

export const MenuSection = forwardRef<HTMLElement, MenuSectionProps>(
  function MenuSection({ category, items, showThumbnail = true }, ref) {
    if (items.length === 0) return null;

    const featuredInCategory = items.find((i) => i.featured || i.popular);

    return (
      <section
        ref={ref}
        id={`category-${category.id}`}
        className="scroll-mt-48 px-4 py-6 sm:px-6"
        aria-labelledby={`heading-${category.id}`}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="menu-section-box"
          >
            <CategoryHeading title={category.name} subtitle={category.description} />

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-10">
              <div className="min-w-0">
                {items.map((item, index) => (
                  <MenuCard key={item.id} item={item} index={index} variant="list" />
                ))}
              </div>

              {showThumbnail && featuredInCategory && (
                <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-start lg:pt-2">
                  <FoodThumbnail
                    categoryId={category.id}
                    size="lg"
                    label={featuredInCategory.name}
                  />
                </div>
              )}
            </div>

            {showThumbnail && featuredInCategory && (
              <div className="mt-6 flex justify-center lg:hidden">
                <FoodThumbnail
                  categoryId={category.id}
                  size="md"
                  label={featuredInCategory.name}
                />
              </div>
            )}
          </motion.div>
        </div>
      </section>
    );
  }
);
