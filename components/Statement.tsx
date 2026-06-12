"use client";

import { useEffect, useRef } from "react";
import styles from "./Statement.module.css";

export default function Statement() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    el.classList.add(styles.anim);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(styles.in);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.statement}>
      <div className={styles.bg} />
      <div className="sheet">
        <div className={styles.inner}>
          <span className={styles.idx}>↳ The way I work</span>
          <h2 className={styles.heading}>
            Calm delivery,
            <br />
            clear outcomes.
          </h2>
        </div>
      </div>
    </section>
  );
}
