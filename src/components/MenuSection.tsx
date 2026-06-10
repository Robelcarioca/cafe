"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { MenuCard } from "./MenuCard";
import type { MenuCategory, MenuItem } from "@/types/menu";

interface MenuSectionProps {
  category: MenuCategory;
  items: MenuItem[];
}

export const MenuSection = forwardRef<HTMLElement, MenuSectionProps>(
  function MenuSection({ category, items }, ref) {
    if (items.length === 0) return null;

    return (
      <section
        ref={ref}
        id={`category-${category.id}`}
        className="scroll-mt-44 px-4 py-8 sm:px-6"
        aria-labelledby={`heading-${category.id}`}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="text-3xl" aria-hidden>{category.icon}</span>
            <div>
              <h2
                id={`heading-${category.id}`}
                className="font-script text-3xl text-gray-800 dark:text-gray-100"
              >
                {category.name}
              </h2>
              {category.description && (
                <p className="text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
              )}
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }
);
