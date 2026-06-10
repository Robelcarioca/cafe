import Link from "next/link";
import { restaurantInfo } from "@/data/restaurant";
import { formatPhoneDisplay } from "@/lib/format";

export function Footer() {
  return (
    <footer className="border-t border-gray-200/60 bg-white/60 dark:border-white/10 dark:bg-gray-950/60">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <p className="font-script text-2xl text-brand-red">{restaurantInfo.name}</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{restaurantInfo.tagline}</p>
          </div>

          <p className="rounded-full border border-brand-red/20 bg-brand-red/5 px-5 py-2 text-xs font-medium uppercase tracking-widest text-brand-red dark:border-brand-red/30 dark:bg-brand-red/10">
            {restaurantInfo.vatNote}
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <a href={`tel:${restaurantInfo.phone}`} className="hover:text-brand-red">
              {formatPhoneDisplay(restaurantInfo.phone)}
            </a>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <Link href="/about" className="hover:text-brand-red">About</Link>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <Link href="/contact" className="hover:text-brand-red">Contact</Link>
          </div>

          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
