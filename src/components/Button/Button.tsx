import React from "react";

export default function Button({
  variant,
  children,
}: {
  variant: "solid" | "outline" | "ghost";
  children: React.ReactNode;
}) {
  if (variant === "solid")
    return (
      <button
        type="button"
        className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
      >
        {children}
      </button>
    );
  if (variant === "outline")
    return (
      <button
        type="button"
        className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:border-blue-600 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-blue-600 dark:hover:text-blue-500 dark:focus:border-blue-600 dark:focus:text-blue-500"
      >
        {children}
      </button>
    );
  if (variant === "ghost")
    return (
      <button
        type="button"
        className="inline-flex items-center gap-x-2 rounded-lg border border-transparent px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:outline-none active:bg-gray-200 disabled:pointer-events-none disabled:opacity-50"
      >
        {children}
      </button>
    );
}
