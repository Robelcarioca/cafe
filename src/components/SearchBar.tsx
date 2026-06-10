"use client";

import { motion } from "framer-motion";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultCount?: number;
}

export function SearchBar({ value, onChange, resultCount }: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mx-auto max-w-xl"
    >
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search menu items..."
          className="w-full rounded-2xl border border-gray-200/80 bg-white/90 py-3.5 pl-12 pr-12 text-sm text-gray-900 shadow-sm backdrop-blur-sm transition focus:border-brand-red/50 focus:outline-none focus:ring-2 focus:ring-brand-red/20 dark:border-white/10 dark:bg-gray-900/80 dark:text-white dark:placeholder-gray-500"
          aria-label="Search menu items"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-red"
            aria-label="Clear search"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      {value && resultCount !== undefined && (
        <p className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
          {resultCount} {resultCount === 1 ? "item" : "items"} found
        </p>
      )}
    </motion.div>
  );
}
