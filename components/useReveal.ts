"use client";

import { useEffect, useRef } from "react";

/**
 * Adds `revealClass` on mount and `inClass` once the element scrolls into view,
 * unless the user prefers reduced motion (in which case it's left untouched and
 * stays at its default, fully-visible styles).
 */
export function useRevealRef<T extends HTMLElement>(revealClass: string, inClass: string) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    el.classList.add(revealClass);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(inClass);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [revealClass, inClass]);

  return ref;
}
