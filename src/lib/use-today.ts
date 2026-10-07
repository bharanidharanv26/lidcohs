"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const interval = window.setInterval(onChange, 60_000);
  window.addEventListener("focus", onChange);
  return () => { window.clearInterval(interval); window.removeEventListener("focus", onChange); };
}

export function localDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

// The server fallback is stable; the browser supplies today's local date after hydration.
export function useToday() {
  const date = useSyncExternalStore(subscribe, () => localDate(), () => "");
  return date ? new Date(`${date}T12:00:00`) : null;
}
