import Link from "next/link";
import styles from "./Nav.module.css";
import MobileMenuToggle from "./MobileMenuToggle";
import { nav } from "@/data/resume";

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`sheet ${styles.row}`}>
        <nav className={styles.navPill}>
          {nav.links.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            )
          )}
        </nav>
        <div className={styles.navRight}>
          <Link className={styles.navCta} href={nav.cta.href}>
            {nav.cta.label}
          </Link>
          <MobileMenuToggle links={nav.links} />
        </div>
      </div>
    </header>
  );
}
