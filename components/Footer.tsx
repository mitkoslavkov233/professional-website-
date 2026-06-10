import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.col}>
          <div className={styles.brandName}>Dimitar Slavkov Dimitrov</div>
          <p className={styles.blurb}>Senior project &amp; program manager. Sofia, Bulgaria.</p>
        </div>
        <div className={styles.col}>
          <h4>Explore</h4>
          <a href="#about">About</a>
          <a href="#work">Experience</a>
          <Link href="/cover-letter">Cover letter</Link>
        </div>
        <div className={styles.col}>
          <h4>Elsewhere</h4>
          <a href="https://www.linkedin.com/in/dimitar-dimitrov-77460396/" target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a href="#">Download CV (PDF)</a>
        </div>
        <div className={styles.col}>
          <h4>Contact</h4>
          <a href="mailto:mitko.slavkov@gmail.com">mitko.slavkov@gmail.com</a>
          <a href="#contact">Available within 1–2 months</a>
        </div>
      </div>
      <div className={`wrap ${styles.bottom}`}>
        <span>© 2026 Dimitar Slavkov Dimitrov</span>
        <span>Sofia, Bulgaria</span>
      </div>
    </footer>
  );
}
