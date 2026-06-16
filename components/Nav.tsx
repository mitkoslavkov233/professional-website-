import Link from "next/link";
import styles from "./Nav.module.css";
import MobileMenuToggle from "./MobileMenuToggle";
import NavLinks from "./NavLinks";
import { nav } from "@/data/resume";

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`sheet ${styles.row}`}>
        <NavLinks links={nav.links} />
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
