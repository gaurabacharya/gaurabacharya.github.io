"use client";

import { useEffect, useRef } from "react";

export function useParallax(factor = -0.09) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      ref.current.style.transform = `translateY(${window.scrollY * factor}px)`;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [factor]);

  return ref;
}
