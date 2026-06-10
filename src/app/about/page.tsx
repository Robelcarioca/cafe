import type { Metadata } from "next";
import Image from "next/image";
import { CategoryHeading } from "@/components/CategoryHeading";
import { restaurantInfo } from "@/data/restaurant";
import { MENU_REFERENCE_IMAGE } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${restaurantInfo.name} — our story, cuisine, and commitment to exceptional dining in Addis Ababa.`,
};

const values = [
  {
    title: "Authentic Flavors",
    description:
      "From traditional Ethiopian breakfast to Italian-inspired pizzas, every dish is crafted with care.",
  },
  {
    title: "Premium Quality",
    description: "We source fresh ingredients daily to deliver restaurant-quality meals every time.",
  },
  {
    title: "Warm Hospitality",
    description: "Inspired by Ethiopian aviation heritage, we welcome every guest like family.",
  },
  {
    title: "Convenient Dining",
    description: "Dine in, take away, or order for delivery — your favorite meals, your way.",
  },
];

export default function AboutPage() {
  return (
    <div className="px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-brown/60">
            Our Story
          </p>
          <h1 className="mt-4 font-display text-5xl italic text-brand-brown-dark dark:text-brand-linen sm:text-6xl">
            About
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-script text-xl text-brand-brown/75 dark:text-brand-tan/75 sm:text-2xl">
            Where Ethiopian warmth meets world-class cuisine
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-tan/25 to-transparent blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-brand-tan/50 bg-white p-3 shadow-menu dark:border-brand-brown/40 dark:bg-brand-brown-deep/50">
            <Image
              src={MENU_REFERENCE_IMAGE}
              alt="Ethiopian Aviation Cafe dining experience"
              width={1200}
              height={700}
              className="w-full rounded-xl object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-12 space-y-6 text-center leading-relaxed text-brand-brown/75 dark:text-brand-tan/75 sm:text-lg">
          <p>
            {restaurantInfo.name} brings together the best of Ethiopian culinary tradition
            and international favorites. Whether you&apos;re starting your day with a hearty
            chechebsa, enjoying our signature Kora pizzas, or sipping a freshly blended juice,
            every visit is designed to be memorable.
          </p>
          <p>
            Located in {restaurantInfo.address}, we serve guests daily with a menu that spans
            breakfast, lunch, dinner, and refreshing beverages. Scan our QR code to explore
            the full menu, place orders, and enjoy seamless delivery service.
          </p>
        </div>

        <div className="mt-16">
          <CategoryHeading title="Our Values" />
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="menu-section-box">
                <h2 className="font-sans text-sm font-bold uppercase tracking-wide text-brand-ink dark:text-brand-linen">
                  {value.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-brown/65 dark:text-brand-tan/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-section-box mt-12 text-center">
          <p className="font-script text-2xl text-brand-brown dark:text-brand-tan">
            {restaurantInfo.vatNote}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-brand-brown/50">
            {restaurantInfo.hours}
          </p>
        </div>
      </div>
    </div>
  );
}
