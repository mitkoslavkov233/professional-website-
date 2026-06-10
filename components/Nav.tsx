import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`wrap ${styles.inner}`}>
        <nav className={styles.links}>
          <a href="#work">Experience</a>
          <a href="#about">About</a>
          <Link href="/cover-letter">Cover Letter</Link>
          <a href="#contact">Contact</a>
        </nav>
        <a className={styles.cta} href="/dimitar-slavkov-dimitrov-resume.pdf" download>
          Download CV
        </a>
      </div>
    </header>
  );
}
