"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { MenuCategory, MenuCategoryId } from "@/types/menu";

interface CategoryNavProps {
  categories: MenuCategory[];
  activeCategory: MenuCategoryId | "all";
  onCategoryChange: (id: MenuCategoryId | "all") => void;
  onScrollToCategory?: (id: MenuCategoryId) => void;
}

export function CategoryNav({
  categories,
  activeCategory,
  onCategoryChange,
  onScrollToCategory,
}: CategoryNavProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 320);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: MenuCategoryId | "all") => {
    onCategoryChange(id);
    if (id !== "all" && onScrollToCategory) {
      onScrollToCategory(id);
    }
  };

  const tabs: { id: MenuCategoryId | "all"; label: string }[] = [
    { id: "all", label: "All" },
    ...categories.map((c) => ({ id: c.id, label: c.name })),
  ];

  return (
    <div
      className={`sticky top-[108px] z-40 transition-shadow duration-300 md:top-[61px] ${
        isSticky ? "shadow-soft" : ""
      }`}
    >
      <div className="border-y border-brand-tan/40 bg-brand-cream/95 backdrop-blur-xl dark:border-brand-brown/40 dark:bg-brand-brown-deep/95">
        <div
          className="scrollbar-hide mx-auto flex max-w-6xl gap-0.5 overflow-x-auto px-4 py-3 sm:gap-1 sm:px-6"
          role="tablist"
          aria-label="Menu categories"
        >
          {tabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleClick(tab.id)}
                className={`relative shrink-0 rounded-lg px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors sm:px-4 sm:text-[11px] ${
                  isActive
                    ? "text-white"
                    : "text-brand-brown/70 hover:text-brand-brown-dark dark:text-brand-tan/60 dark:hover:text-brand-tan"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="category-pill"
                    className="absolute inset-0 rounded-lg bg-brand-brown shadow-soft dark:bg-brand-brown-light"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
