interface CategoryHeadingProps {
  title: string;
  subtitle?: string;
}

export function CategoryHeading({ title, subtitle }: CategoryHeadingProps) {
  return (
    <div className="mb-8 text-center">
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-tan to-brand-tan/80" />
        <h2 className="shrink-0 font-sans text-xs font-bold uppercase tracking-[0.28em] text-brand-brown dark:text-brand-tan sm:text-sm">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-brand-tan to-brand-tan/80" />
      </div>
      {subtitle && (
        <p className="mt-2 text-xs tracking-wide text-brand-brown/60 dark:text-brand-tan/60">
          {subtitle}
        </p>
      )}
    </div>
  );
}
