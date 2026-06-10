import type { Metadata } from "next";
import Image from "next/image";
import { restaurantInfo } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${restaurantInfo.name} — our story, cuisine, and commitment to exceptional dining in Addis Ababa.`,
};

const values = [
  {
    title: "Authentic Flavors",
    description: "From traditional Ethiopian breakfast to Italian-inspired pizzas, every dish is crafted with care.",
    icon: "🍽️",
  },
  {
    title: "Premium Quality",
    description: "We source fresh ingredients daily to deliver restaurant-quality meals every time.",
    icon: "✨",
  },
  {
    title: "Warm Hospitality",
    description: "Inspired by Ethiopian aviation heritage, we welcome every guest like family.",
    icon: "🤝",
  },
  {
    title: "Convenient Dining",
    description: "Dine in, take away, or order for delivery — your favorite meals, your way.",
    icon: "📱",
  },
];

export default function AboutPage() {
  return (
    <div className="px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">Our Story</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-brand-red sm:text-5xl">
            About {restaurantInfo.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-script text-xl text-gray-600 dark:text-gray-300 sm:text-2xl">
            Where Ethiopian warmth meets world-class cuisine
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/menu-page-2.jpg"
            alt="Ethiopian Aviation Cafe dining experience"
            width={1200}
            height={600}
            className="h-56 w-full object-cover sm:h-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="font-script text-2xl text-white sm:text-3xl">
              Elevated dining in the heart of Addis Ababa
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-6 text-center leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
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

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-card backdrop-blur-sm dark:border-white/10 dark:bg-gray-900/80"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-3xl">{value.icon}</span>
              <h2 className="mt-3 font-display text-xl font-semibold text-gray-900 dark:text-white">
                {value.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-brand-red/20 bg-brand-red/5 p-8 text-center dark:border-brand-red/30 dark:bg-brand-red/10">
          <p className="font-script text-2xl text-brand-red">{restaurantInfo.vatNote}</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{restaurantInfo.hours}</p>
        </div>
      </div>
    </div>
  );
}
