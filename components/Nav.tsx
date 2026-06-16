"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";
import MobileMenuToggle from "./MobileMenuToggle";
import NavLinks from "./NavLinks";
import { nav } from "@/data/resume";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`sheet ${styles.row}`}>
        <NavLinks links={nav.links} />
        <Link className={styles.navCta} href={nav.cta.href}>
          {nav.cta.label}
        </Link>
        <div className={styles.toggleWrap}>
          <MobileMenuToggle links={nav.links} />
        </div>
      </div>
    </header>
  );
}
