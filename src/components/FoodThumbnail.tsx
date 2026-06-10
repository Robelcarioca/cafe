"use client";

import { motion } from "framer-motion";
import { getCategoryCrop, MENU_REFERENCE_IMAGE } from "@/lib/images";
import type { MenuCategoryId } from "@/types/menu";

interface FoodThumbnailProps {
  categoryId: MenuCategoryId;
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

const sizes = {
  sm: "h-16 w-16",
  md: "h-24 w-24",
  lg: "h-36 w-36",
};

export function FoodThumbnail({ categoryId, size = "md", label, className = "" }: FoodThumbnailProps) {
  const crop = getCategoryCrop(categoryId);

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className={`group relative ${className}`}
    >
      <div
        className={`${sizes[size]} overflow-hidden rounded-full border-2 border-white shadow-photo dark:border-brand-brown-deep`}
        style={{
          backgroundImage: `url(${MENU_REFERENCE_IMAGE})`,
          backgroundSize: "280%",
          backgroundPosition: crop,
        }}
        role="img"
        aria-label={label ?? `${categoryId} dish`}
      />
      {label && size !== "sm" && (
        <p className="mt-3 max-w-[9rem] text-center text-[10px] font-semibold uppercase tracking-wider text-brand-brown/70 dark:text-brand-tan/60">
          {label}
        </p>
      )}
    </motion.div>
  );
}
