import Link from "next/link";
import styles from "./Footer.module.css";
import { person } from "@/data/resume";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`sheet ${styles.grid}`}>
        <div>
          <div className={styles.name}>
            {person.name.line1} {person.name.line2}
          </div>
          <p>
            Senior project & program manager. {person.location}. Open to relocation &
            remote.
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={`mailto:${person.email}`}>Email</a>
          <a href={person.linkedin.url} target="_blank" rel="noopener">
            LinkedIn
          </a>
        </div>
        <div>
          <h4>More</h4>
          <Link href="/cover-letter">Cover letter</Link>
          <Link href="/cv">Download CV (PDF)</Link>
        </div>
      </div>
      <div className={`sheet ${styles.bottom}`}>
        <span>
          © 2026 {person.name.line1} {person.name.line2}
        </span>
        <span>{person.availability}</span>
      </div>
    </footer>
  );
}
