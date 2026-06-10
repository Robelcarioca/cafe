import type { MenuCategoryId } from "@/types/menu";

export const MENU_REFERENCE_IMAGE = "/images/menu-reference.jpg";

/** Crop positions on the reference menu for category thumbnails */
export const categoryImageCrops: Record<MenuCategoryId, string> = {
  breakfast: "55% 72%",
  pizza: "72% 88%",
  burgers: "12% 22%",
  plates: "18% 28%",
  bowls: "82% 18%",
  juice: "8% 12%",
  "cold-specials": "88% 82%",
  fizz: "45% 55%",
  "soft-beverages": "92% 15%",
  drinks: "78% 10%",
  extras: "50% 50%",
};

export function getCategoryCrop(categoryId: MenuCategoryId): string {
  return categoryImageCrops[categoryId] ?? "50% 50%";
}
