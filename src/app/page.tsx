import { MenuPage } from "@/components/MenuPage";
import {
  fetchFeaturedItems,
  fetchMenuCategories,
  fetchMenuItems,
  fetchPopularItems,
} from "@/lib/menu-api";

export default async function HomePage() {
  const [categories, items, featuredItems, popularItems] = await Promise.all([
    fetchMenuCategories(),
    fetchMenuItems(),
    fetchFeaturedItems(),
    fetchPopularItems(),
  ]);

  return (
    <MenuPage
      categories={categories}
      items={items}
      featuredItems={featuredItems}
      popularItems={popularItems}
    />
  );
}
