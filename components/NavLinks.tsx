"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";

interface NavLink {
  href: string;
  label: string;
}

export default function NavLinks({ links }: { links: NavLink[] }) {
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef(new Map<string, HTMLElement>());
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sections = links
      .filter((link) => link.href.startsWith("#"))
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => !!el);

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, [links]);

  useEffect(() => {
    const nav = navRef.current;
    const link = activeHref ? linkRefs.current.get(activeHref) : null;
    if (!nav || !link) {
      setIndicator(null);
      return;
    }

    const update = () => {
      const navRect = nav.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      setIndicator({ left: linkRect.left - navRect.left, width: linkRect.width });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeHref]);

  return (
    <nav className={styles.navPill} ref={navRef}>
      {indicator && (
        <span
          className={styles.activeIndicator}
          style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }}
        />
      )}
      {links.map((link) =>
        link.href.startsWith("/") ? (
          <Link
            key={link.href}
            href={link.href}
            ref={(el) => {
              if (el) linkRefs.current.set(link.href, el);
            }}
          >
            {link.label}
          </Link>
        ) : (
          <a
            key={link.href}
            href={link.href}
            ref={(el) => {
              if (el) linkRefs.current.set(link.href, el);
            }}
          >
            {link.label}
          </a>
        )
      )}
    </nav>
  );
}
