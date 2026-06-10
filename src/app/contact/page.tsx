import type { Metadata } from "next";
import { CategoryHeading } from "@/components/CategoryHeading";
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

  const contactItems = [
    {
      label: "Phone",
      value: formatPhoneDisplay(restaurantInfo.phone),
      href: `tel:${restaurantInfo.phone}`,
      hint: "Tap to call",
      external: false,
    },
    {
      label: "WhatsApp",
      value: "Order via WhatsApp",
      href: whatsappUrl,
      hint: "Fast & convenient",
      external: true,
    },
    {
      label: "Location",
      value: restaurantInfo.address,
      hint: restaurantInfo.hours,
      external: false,
    },
    {
      label: "Email",
      value: restaurantInfo.email,
      href: `mailto:${restaurantInfo.email}`,
      hint: "We reply within 24 hours",
      external: false,
    },
  ];

  return (
    <div className="px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-brown/60">
            Get in Touch
          </p>
          <h1 className="mt-4 font-display text-5xl italic text-brand-brown-dark dark:text-brand-linen sm:text-6xl">
            Contact
          </h1>
          <p className="mt-4 text-brand-brown/70 dark:text-brand-tan/70">
            Order for delivery, make a reservation, or ask us anything
          </p>
        </div>

        <div className="mt-12">
          <CategoryHeading title="Reach Us" />
          <div className="space-y-4">
            {contactItems.map((item) => {
              const inner = (
                <>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-brown/50">
                    {item.label}
                  </p>
                  <p className="mt-1 text-base font-semibold text-brand-ink dark:text-brand-linen">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-brand-brown/60 dark:text-brand-tan/50">{item.hint}</p>
                </>
              );

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="menu-section-box block transition hover:shadow-card"
                  >
                    {inner}
                  </a>
                );
              }

              return (
                <div key={item.label} className="menu-section-box">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-brand-brown p-8 text-center text-white shadow-menu">
          <h2 className="font-script text-2xl">Delivery Available</h2>
          <p className="mt-2 text-sm text-brand-tan/90">
            For delivery service, call us or message on WhatsApp
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand-brown transition hover:bg-brand-cream"
            >
              Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
