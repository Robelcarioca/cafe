"use client";

import { useEffect, useRef, useState } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 280);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: MenuCategoryId | "all") => {
    onCategoryChange(id);
    if (id !== "all" && onScrollToCategory) {
      onScrollToCategory(id);
    }
  };

  const tabs: { id: MenuCategoryId | "all"; label: string; icon?: string }[] = [
    { id: "all", label: "All" },
    ...categories.map((c) => ({ id: c.id, label: c.name, icon: c.icon })),
  ];

  return (
    <div
      className={`sticky top-[108px] z-40 transition-all duration-300 md:top-[65px] ${
        isSticky ? "shadow-md" : ""
      }`}
    >
      <div className="border-b border-gray-200/60 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/90">
        <div
          ref={scrollRef}
          className="scrollbar-hide mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 sm:px-6"
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
                className={`relative shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors sm:text-sm ${
                  isActive
                    ? "text-white"
                    : "text-gray-600 hover:text-brand-red dark:text-gray-300 dark:hover:text-brand-red-light"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="category-pill"
                    className="absolute inset-0 rounded-full bg-brand-red shadow-md shadow-brand-red/25"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {tab.icon && <span className="text-sm">{tab.icon}</span>}
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
