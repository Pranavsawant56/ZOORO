/**
 * Canonical brand colours.
 *
 * These mirror the `--brand-*` variables in `src/app/globals.css`. Use them
 * only where CSS variables can't reach — the PWA manifest and the
 * `themeColor` metadata. For anything rendered in the page, prefer the
 * Tailwind utilities (bg-brand-red) or `var(--brand-red)`.
 */
export const brand = {
  red: "#b3121b",
  redDark: "#8e0e15",
  redLight: "#d8322a",
  gold: "#f0a81c",
  leaf: "#3f8f3c",
  leafLight: "#6db544",
  leafDark: "#2c7a33",
  leafMist: "#e8f5e0",
  ink: "#1b1b1b",
  cream: "#fff8ec",
} as const;
