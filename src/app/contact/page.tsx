import type { Metadata } from "next";
import { restaurantInfo } from "@/data/restaurant";
import { formatPhoneDisplay } from "@/lib/format";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${restaurantInfo.name} for orders, reservations, and delivery. Call or message us on WhatsApp.`,
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
    "Hello! I'd like to place an order from Ethiopian Aviation Cafe."
  )}`;

  return (
    <div className="px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">Get in Touch</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-brand-red sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Order for delivery, make a reservation, or ask us anything
          </p>
        </div>

        <div className="mt-10 space-y-4">
          <a
            href={`tel:${restaurantInfo.phone}`}
            className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/90 p-5 shadow-card transition hover:border-brand-red/30 hover:shadow-card-hover dark:border-white/10 dark:bg-gray-900/80"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-2xl">
              📞
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Phone</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatPhoneDisplay(restaurantInfo.phone)}
              </p>
              <p className="text-sm text-brand-red">Tap to call</p>
            </div>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/90 p-5 shadow-card transition hover:border-[#25D366]/30 hover:shadow-card-hover dark:border-white/10 dark:bg-gray-900/80"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-2xl">
              💬
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">WhatsApp</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">Order via WhatsApp</p>
              <p className="text-sm text-[#25D366]">Fast & convenient ordering</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/90 p-5 shadow-card dark:border-white/10 dark:bg-gray-900/80">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-gold/20 text-2xl">
              📍
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Location</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{restaurantInfo.address}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/90 p-5 shadow-card dark:border-white/10 dark:bg-gray-900/80">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-2xl">
              🕐
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Hours</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{restaurantInfo.hours}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/90 p-5 shadow-card dark:border-white/10 dark:bg-gray-900/80">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-2xl">
              ✉️
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email</p>
              <a
                href={`mailto:${restaurantInfo.email}`}
                className="text-lg font-semibold text-gray-900 hover:text-brand-red dark:text-white"
              >
                {restaurantInfo.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-brand-red p-8 text-center text-white shadow-lg shadow-brand-red/25">
          <h2 className="font-script text-2xl">Delivery Available</h2>
          <p className="mt-2 text-sm text-white/90">
            For delivery service, call us or message on WhatsApp
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-red transition hover:bg-gray-100"
            >
              Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
