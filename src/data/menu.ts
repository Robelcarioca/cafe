import type { MenuCategory, MenuItem } from "@/types/menu";

export const menuCategories: MenuCategory[] = [
  { id: "breakfast", name: "Breakfast", slug: "breakfast", icon: "🌅", sortOrder: 1, available: true },
  { id: "pizza", name: "Pizza", slug: "pizza", icon: "🍕", sortOrder: 2, available: true },
  { id: "burgers", name: "Burgers", slug: "burgers", icon: "🍔", sortOrder: 3, available: true },
  { id: "plates", name: "Plates", slug: "plates", icon: "🍽️", sortOrder: 4, available: true },
  { id: "bowls", name: "Bowls", slug: "bowls", icon: "🥣", sortOrder: 5, available: true },
  { id: "juice", name: "Juice", slug: "juice", icon: "🥤", sortOrder: 6, available: true },
  { id: "cold-specials", name: "Cold Specials", slug: "cold-specials", icon: "🧊", sortOrder: 7, available: true },
  { id: "fizz", name: "Fizz", slug: "fizz", icon: "✨", sortOrder: 8, available: true },
  { id: "soft-beverages", name: "Soft Beverages", slug: "soft-beverages", icon: "🫧", sortOrder: 9, available: true },
  { id: "drinks", name: "Drinks", slug: "drinks", icon: "🍺", sortOrder: 10, available: true },
  { id: "extras", name: "Extras", slug: "extras", icon: "➕", sortOrder: 11, available: true },
];

function item(
  id: string,
  name: string,
  price: number,
  categoryId: MenuItem["categoryId"],
  sortOrder: number,
  options?: Partial<MenuItem>
): MenuItem {
  return {
    id,
    name,
    price,
    currency: "ETB",
    categoryId,
    sortOrder,
    available: true,
    ...options,
  };
}

export const menuItems: MenuItem[] = [
  // Breakfast
  item("bf-01", "Chechebsa Normal", 230, "breakfast", 1),
  item("bf-02", "Chechebsa Special", 286, "breakfast", 2, { popular: true }),
  item("bf-03", "Egg Sandwich", 310, "breakfast", 3),
  item("bf-04", "Egg and Avocado Toast", 333, "breakfast", 4, { featured: true }),
  item("bf-05", "Egg and Croissant", 508, "breakfast", 5),
  item("bf-06", "Foul Bowl Normal", 328, "breakfast", 6),
  item("bf-07", "Foul Bowl Special", 381, "breakfast", 7, { popular: true }),
  item("bf-08", "Pancake", 410, "breakfast", 8, { featured: true }),
  item("bf-09", "Kinche", 382, "breakfast", 9),
  item("bf-10", "Omelette", 400, "breakfast", 10),
  item("bf-11", "Oat Meal", 405, "breakfast", 11),
  item("bf-12", "Scrambled Egg", 292, "breakfast", 12),
  item("bf-13", "Shakshuka", 316, "breakfast", 13, { popular: true }),

  // Kora Pizza
  item("pz-01", "Chicken", 600, "pizza", 1, { description: "Tender chicken on our signature Kora crust" }),
  item("pz-02", "Beef", 600, "pizza", 2),
  item("pz-03", "Margarita", 550, "pizza", 3, { popular: true }),
  item("pz-04", "Tuna", 600, "pizza", 4),
  item("pz-05", "Tuna Mozzarella", 600, "pizza", 5),
  item("pz-06", "Calzoni", 700, "pizza", 6),
  item("pz-07", "Diavola", 720, "pizza", 7, { featured: true }),
  item("pz-08", "Indiya", 580, "pizza", 8),
  item("pz-09", "Marinara", 500, "pizza", 9),
  item("pz-10", "Napolitana", 700, "pizza", 10),
  item("pz-11", "Prosciutto Cotto", 700, "pizza", 11),
  item("pz-12", "Prosciutto Crudo", 800, "pizza", 12, { featured: true }),
  item("pz-13", "Quattro Formaggi", 760, "pizza", 13, { popular: true }),
  item("pz-14", "Quattro Stagioni", 650, "pizza", 14),
  item("pz-15", "Regina", 600, "pizza", 15),
  item("pz-16", "Kora Special", 900, "pizza", 16, { featured: true, popular: true }),
  item("pz-17", "Vegetable", 500, "pizza", 17, { tags: ["vegetarian"] }),
  item("pz-18", "Veg. with Mozzarella", 600, "pizza", 18, { tags: ["vegetarian"] }),
  item("pz-19", "Focaccia with Oregano", 400, "pizza", 19),
  item("pz-20", "Focaccia with Rosemary", 400, "pizza", 20),
  item("pz-21", "Nutella", 500, "pizza", 21),
  item("pz-22", "Teff", 500, "pizza", 22),

  // Burgers
  item("bg-01", "Normal Burger", 600, "burgers", 1),
  item("bg-02", "Cheese Burger", 600, "burgers", 2, { popular: true, featured: true }),
  item("bg-03", "Club Sandwich", 550, "burgers", 3, { popular: true }),
  item("bg-04", "Special Burger", 600, "burgers", 4, { featured: true }),

  // Plates
  item("pl-01", "Chicken Sandwich", 558, "plates", 1),
  item("pl-02", "Cheese Burger", 632, "plates", 2),
  item("pl-03", "Tuna Sandwich", 437, "plates", 3),
  item("pl-04", "Tuna Wrap", 524, "plates", 4, { popular: true }),
  item("pl-05", "Veggie Sandwich", 376, "plates", 5, { tags: ["vegetarian"] }),
  item("pl-06", "Potato Wedges", 230, "plates", 6),

  // Bowls
  item("bw-01", "Spaghetti Bowl", 350, "bowls", 1, { popular: true }),
  item("bw-02", "Spaghetti Bowl Tuna", 460, "bowls", 2),
  item("bw-03", "Spaghetti Bowl Beef", 460, "bowls", 3, { featured: true }),
  item("bw-04", "Chicken Rice", 731, "bowls", 4, { popular: true }),

  // Juice
  item("jc-01", "Avocado", 195, "juice", 1),
  item("jc-02", "Mango", 195, "juice", 2, { popular: true }),
  item("jc-03", "Papaya", 195, "juice", 3),
  item("jc-04", "Pineapple", 195, "juice", 4),
  item("jc-05", "Strawberry", 213, "juice", 5),
  item("jc-06", "Watermelon", 195, "juice", 6),
  item("jc-07", "Smoothie", 230, "juice", 7, { featured: true }),
  item("jc-08", "Mix", 230, "juice", 8),
  item("jc-09", "Breakfast Smoothie", 260, "juice", 9, { popular: true }),

  // Cold Specials
  item("cs-01", "Caramel Ice Latte", 253, "cold-specials", 1, { featured: true }),
  item("cs-02", "Fasting Ice Latte", 150, "cold-specials", 2),
  item("cs-03", "Ice Cafe Latte", 251, "cold-specials", 3, { popular: true }),
  item("cs-04", "Ice Coffee", 230, "cold-specials", 4),
  item("cs-05", "Iced Tea", 132, "cold-specials", 5),

  // Fizz
  item("fz-01", "Ginger Mint", 173, "fizz", 1),
  item("fz-02", "Mint", 173, "fizz", 2),
  item("fz-03", "Pineapple", 173, "fizz", 3, { popular: true }),
  item("fz-04", "Strawberry", 173, "fizz", 4),

  // Soft Beverages
  item("sb-01", "Soft Drink", 70, "soft-beverages", 1),
  item("sb-02", "Ambo Water", 56, "soft-beverages", 2),
  item("sb-03", "Water 1L", 70, "soft-beverages", 3),
  item("sb-04", "Water 0.5L", 45, "soft-beverages", 4),

  // Drinks
  item("dr-01", "Beer", 94.99, "drinks", 1, { popular: true }),

  // Extras (Pizza + Plates)
  item("ex-01", "Extra Chicken", 80, "extras", 1, { description: "Pizza add-on" }),
  item("ex-02", "Extra Black Olives", 80, "extras", 2),
  item("ex-03", "Extra Egg", 40, "extras", 3),
  item("ex-04", "Extra Beef", 80, "extras", 4),
  item("ex-05", "Extra Prosciutto Cotto", 100, "extras", 5),
  item("ex-06", "Extra Tuna", 100, "extras", 6),
  item("ex-07", "Extra Cheese", 100, "extras", 7),
  item("ex-08", "Extra Vegetable", 50, "extras", 8),
  item("ex-09", "Extra Mushroom", 80, "extras", 9),
  item("ex-10", "Take Away Box", 50, "extras", 10),
  item("ex-11", "Take Away Small", 25, "extras", 11),
  item("ex-12", "Extra Bread", 17, "extras", 12, { description: "Plates add-on" }),
  item("ex-13", "Extra Egg (Plates)", 29, "extras", 13),
  item("ex-14", "Extra Chicken (Plates)", 110, "extras", 14),
  item("ex-15", "Extra Mayonnaise", 25, "extras", 15),
  item("ex-16", "Extra Tuna (Plates)", 150, "extras", 16),
];

export const galleryImages = [
  { id: "g1", src: "/images/menu-page-1.jpg", alt: "Pizza, burgers and plates", category: "pizza" as const },
  { id: "g2", src: "/images/menu-page-2.jpg", alt: "Breakfast and drinks", category: "breakfast" as const },
  { id: "g3", src: "/images/gallery-club-sandwich.jpg", alt: "Club sandwich", category: "burgers" as const },
  { id: "g4", src: "/images/gallery-burger.jpg", alt: "Cheese burger with fries", category: "burgers" as const },
  { id: "g5", src: "/images/gallery-pizza.jpg", alt: "Fresh pizza", category: "pizza" as const },
  { id: "g6", src: "/images/gallery-smoothie.jpg", alt: "Fresh mango smoothie", category: "juice" as const },
];

export function getItemsByCategory(categoryId: MenuItem["categoryId"]): MenuItem[] {
  return menuItems
    .filter((i) => i.categoryId === categoryId && i.available)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFeaturedItems(): MenuItem[] {
  return menuItems.filter((i) => i.featured && i.available);
}

export function getPopularItems(): MenuItem[] {
  return menuItems.filter((i) => i.popular && i.available);
}

export function getCategoryById(id: MenuItem["categoryId"]): MenuCategory | undefined {
  return menuCategories.find((c) => c.id === id);
}
