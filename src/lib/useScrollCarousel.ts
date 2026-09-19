"use client";

import { useRef } from "react";

export function useScrollCarousel() {
  const ref = useRef<HTMLDivElement>(null);

  function scrollBy(dir: 1 | -1) {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: "smooth" });
  }

  return { ref, prev: () => scrollBy(-1), next: () => scrollBy(1) };
}
