"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Nav.module.css";

interface MobileMenuToggleProps {
  links: { href: string; label: string }[];
}

export default function MobileMenuToggle({ links }: MobileMenuToggleProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.navToggle}
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
      </button>
      <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
        {links.map((link) =>
          link.href.startsWith("/") ? (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ) : (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          )
        )}
      </div>
    </>
  );
}
