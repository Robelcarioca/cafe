export type MenuCategoryId =
  | "breakfast"
  | "pizza"
  | "burgers"
  | "plates"
  | "bowls"
  | "juice"
  | "cold-specials"
  | "fizz"
  | "soft-beverages"
  | "drinks"
  | "extras";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  currency: "ETB";
  description?: string;
  image?: string;
  featured?: boolean;
  popular?: boolean;
  available: boolean;
  tags?: string[];
  categoryId: MenuCategoryId;
  sortOrder: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface MenuCategory {
  id: MenuCategoryId;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  sortOrder: number;
  available: boolean;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
  vatNote: string;
  social: {
    instagram?: string;
    facebook?: string;
  };
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: MenuCategoryId;
}
