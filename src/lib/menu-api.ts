/**
 * Admin-ready menu data access layer.
 * Swap implementations to fetch from a database or CMS without changing UI code.
 */
import {
  getCategoryById,
  getFeaturedItems,
  getItemsByCategory,
  getPopularItems,
  menuCategories,
  menuItems,
} from "@/data/menu";
import type { MenuCategory, MenuItem } from "@/types/menu";

export interface MenuQuery {
  categoryId?: MenuItem["categoryId"];
  search?: string;
  featured?: boolean;
  popular?: boolean;
}

export function parseMenuQuery(searchParams: URLSearchParams): MenuQuery {
  const query: MenuQuery = {};

  const categoryParam = searchParams.get("category");
  if (categoryParam) {
    const category = menuCategories.find((c) => c.id === categoryParam);
    if (category) {
      query.categoryId = category.id;
    }
  }

  const search = searchParams.get("search");
  if (search) {
    query.search = search;
  }

  if (searchParams.get("featured") === "true") {
    query.featured = true;
  }

  if (searchParams.get("popular") === "true") {
    query.popular = true;
  }

  return query;
}

export async function fetchMenuCategories(): Promise<MenuCategory[]> {
  return menuCategories.filter((c) => c.available).sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function fetchMenuItems(query: MenuQuery = {}): Promise<MenuItem[]> {
  let items = [...menuItems].filter((i) => i.available);

  if (query.categoryId) {
    items = items.filter((i) => i.categoryId === query.categoryId);
  }
  if (query.featured) {
    items = items.filter((i) => i.featured);
  }
  if (query.popular) {
    items = items.filter((i) => i.popular);
  }
  if (query.search?.trim()) {
    const term = query.search.trim().toLowerCase();
    items = items.filter(
      (i) =>
        i.name.toLowerCase().includes(term) ||
        i.description?.toLowerCase().includes(term) ||
        i.tags?.some((t) => t.toLowerCase().includes(term))
    );
  }

  return items.sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function fetchFeaturedItems(): Promise<MenuItem[]> {
  return getFeaturedItems();
}

export async function fetchPopularItems(): Promise<MenuItem[]> {
  return getPopularItems();
}

export { getCategoryById, getItemsByCategory };
