import { MenuPage } from "@/components/MenuPage";
import {
  fetchFeaturedItems,
  fetchGalleryImages,
  fetchMenuCategories,
  fetchMenuItems,
  fetchPopularItems,
} from "@/lib/menu-api";

export default async function HomePage() {
  const [categories, items, featuredItems, popularItems, galleryImages] = await Promise.all([
    fetchMenuCategories(),
    fetchMenuItems(),
    fetchFeaturedItems(),
    fetchPopularItems(),
    fetchGalleryImages(),
  ]);

  return (
    <MenuPage
      categories={categories}
      items={items}
      featuredItems={featuredItems}
      popularItems={popularItems}
      galleryImages={galleryImages}
    />
  );
}
