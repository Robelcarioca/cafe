"use client";

import { motion } from "framer-motion";
import { formatPrice } from "@/lib/format";
import type { MenuItem } from "@/types/menu";

interface MenuCardProps {
  item: MenuItem;
  index?: number;
  variant?: "list" | "card";
}

export function MenuCard({ item, index = 0, variant = "list" }: MenuCardProps) {
  if (variant === "card") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.25) }}
        whileHover={{ y: -3 }}
        className="group rounded-xl border border-brand-tan/40 bg-white/80 p-5 shadow-soft transition-shadow hover:shadow-card dark:border-brand-brown/40 dark:bg-brand-brown-deep/50"
      >
        <MenuItemContent item={item} />
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.2) }}
      className="group border-b border-brand-tan/30 py-4 last:border-0 dark:border-brand-brown/30"
    >
      <MenuItemContent item={item} />
    </motion.article>
  );
}

function MenuItemContent({ item }: { item: MenuItem }) {
  return (
    <>
      <div className="flex items-baseline gap-2">
        <h3 className="shrink-0 font-sans text-sm font-bold uppercase tracking-wide text-brand-ink dark:text-brand-linen sm:text-[15px]">
          {item.name}
        </h3>
        <span className="dot-leader hidden min-w-[2rem] sm:block" aria-hidden />
        <p className="shrink-0 font-sans text-sm font-semibold tabular-nums text-brand-brown dark:text-brand-tan sm:text-[15px]">
          {formatPrice(item.price, item.currency)}
        </p>
      </div>

      {(item.description || item.popular || item.featured || item.tags?.length) && (
        <div className="mt-1.5">
          {item.description && (
            <p className="text-xs leading-relaxed text-brand-brown/65 dark:text-brand-tan/60">
              {item.description}
            </p>
          )}
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.featured && <Badge label="Signature" variant="gold" />}
            {item.popular && <Badge label="Popular" variant="brown" />}
            {item.tags?.map((tag) => (
              <Badge key={tag} label={tag} variant="muted" />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function Badge({
  label,
  variant,
}: {
  label: string;
  variant: "gold" | "brown" | "muted";
}) {
  const styles = {
    gold: "bg-brand-gold/15 text-brand-brown-dark dark:text-brand-gold",
    brown: "bg-brand-brown/10 text-brand-brown dark:bg-brand-tan/15 dark:text-brand-tan",
    muted: "bg-brand-parchment/80 text-brand-brown/70 capitalize dark:bg-brand-brown/30 dark:text-brand-tan/70",
  };

  return (
    <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${styles[variant]}`}>
      {label}
    </span>
  );
}
