"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CategoryNav } from "./CategoryNav";
import { FeaturedSection } from "./FeaturedSection";
import { Hero } from "./Hero";
import { ImageGallery } from "./ImageGallery";
import { MenuSection } from "./MenuSection";
import { PopularCarousel } from "./PopularCarousel";
import { SearchBar } from "./SearchBar";
import type { GalleryImage, MenuCategory, MenuItem, MenuCategoryId } from "@/types/menu";

interface MenuPageProps {
  categories: MenuCategory[];
  items: MenuItem[];
  featuredItems: MenuItem[];
  popularItems: MenuItem[];
  galleryImages: GalleryImage[];
}

export function MenuPage({
  categories,
  items,
  featuredItems,
  popularItems,
  galleryImages,
}: MenuPageProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId | "all">("all");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const filteredItems = useMemo(() => {
    let result = items;
    if (activeCategory !== "all") {
      result = result.filter((i) => i.categoryId === activeCategory);
    }
    if (search.trim()) {
      const term = search.trim().toLowerCase();
      result = result.filter(
        (i) =>
          i.name.toLowerCase().includes(term) ||
          i.description?.toLowerCase().includes(term) ||
          i.tags?.some((t) => t.toLowerCase().includes(term))
      );
    }
    return result;
  }, [items, activeCategory, search]);

  const itemsByCategory = useMemo(() => {
    const map = new Map<MenuCategoryId, MenuItem[]>();
    for (const cat of categories) {
      map.set(
        cat.id,
        filteredItems.filter((i) => i.categoryId === cat.id).sort((a, b) => a.sortOrder - b.sortOrder)
      );
    }
    return map;
  }, [categories, filteredItems]);

  const visibleCategories = useMemo(() => {
    if (activeCategory !== "all") {
      return categories.filter((c) => c.id === activeCategory);
    }
    return categories.filter((c) => (itemsByCategory.get(c.id)?.length ?? 0) > 0);
  }, [categories, activeCategory, itemsByCategory]);

  const scrollToCategory = useCallback((id: MenuCategoryId) => {
    const el = sectionRefs.current[id] ?? document.getElementById(`category-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const showHighlights = !search && activeCategory === "all";

  return (
    <>
      <Hero />

      <div className="px-4 pb-4 sm:px-6">
        <SearchBar
          value={search}
          onChange={setSearch}
          resultCount={search ? filteredItems.length : undefined}
        />
      </div>

      {showHighlights && (
        <>
          <FeaturedSection items={featuredItems} />
          <PopularCarousel items={popularItems} />
        </>
      )}

      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onScrollToCategory={scrollToCategory}
      />

      {filteredItems.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 py-16 text-center sm:px-6"
        >
          <p className="text-4xl">🔍</p>
          <p className="mt-4 font-script text-2xl text-gray-700 dark:text-gray-200">No items found</p>
          <p className="mt-2 text-sm text-gray-500">Try a different search or category</p>
        </motion.div>
      ) : (
        visibleCategories.map((category) => (
          <MenuSection
            key={category.id}
            ref={(el) => {
              sectionRefs.current[category.id] = el;
            }}
            category={category}
            items={itemsByCategory.get(category.id) ?? []}
          />
        ))
      )}

      {showHighlights && <ImageGallery images={galleryImages} />}
    </>
  );
}
