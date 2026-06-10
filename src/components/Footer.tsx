import Link from "next/link";
import { restaurantInfo } from "@/data/restaurant";
import { formatPhoneDisplay } from "@/lib/format";

export function Footer() {
  return (
    <footer className="mt-8 bg-brand-brown text-brand-linen">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <div className="space-y-1 text-xs uppercase tracking-[0.15em] text-brand-tan/80">
              <p>{restaurantInfo.hours}</p>
              <p>{restaurantInfo.vatNote}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="font-medium text-white transition hover:text-brand-tan"
              >
                {formatPhoneDisplay(restaurantInfo.phone)}
              </a>
              {restaurantInfo.social.instagram && (
                <a
                  href={restaurantInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-tan/80 transition hover:text-white"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              )}
              {restaurantInfo.social.facebook && (
                <a
                  href={restaurantInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-tan/80 transition hover:text-white"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
              )}
              <Link href="/about" className="text-brand-tan/80 transition hover:text-white">
                About
              </Link>
              <Link href="/contact" className="text-brand-tan/80 transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div className="text-right">
            <p className="font-sans text-2xl font-bold uppercase tracking-[0.12em] text-white sm:text-3xl">
              {restaurantInfo.name.split(" ").slice(-2).join(" ")}
            </p>
            <p className="mt-1 font-sans text-lg font-light uppercase tracking-[0.3em] text-brand-tan">
              {restaurantInfo.name.split(" ").slice(0, -2).join(" ")}
            </p>
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-center text-[10px] uppercase tracking-[0.2em] text-brand-tan/50">
          © {new Date().getFullYear()} {restaurantInfo.name}
        </p>
      </div>
    </footer>
  );
}
