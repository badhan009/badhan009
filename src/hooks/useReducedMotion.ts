"use client";

import { useSyncExternalStore } from "react";

const preference = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(preference);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(preference).matches;
}

function getServerSnapshot() {
  return false;
}

// Keep the first client render identical to the server. React applies the
// browser's preference immediately after hydration and tracks later changes.
export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
