import { NextResponse } from "next/server";
import { fetchMenuCategories, fetchMenuItems, parseMenuQuery } from "@/lib/menu-api";

/**
 * Public menu API — ready to swap for database-backed implementation.
 * GET /api/menu — all items
 * GET /api/menu?category=pizza — filter by category
 * GET /api/menu?search=chicken — search items
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = parseMenuQuery(searchParams);
  const includeCategories = searchParams.get("categories") === "true";

  const items = await fetchMenuItems(query);

  if (includeCategories) {
    const categories = await fetchMenuCategories();
    return NextResponse.json({ categories, items });
  }

  return NextResponse.json({ items });
}
