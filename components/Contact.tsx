import Link from "next/link";
import SectionHead from "./SectionHead";
import styles from "./Contact.module.css";
import { person } from "@/data/resume";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className="sheet">
        <SectionHead
          number="05"
          heading="Get in touch"
          note="Open to senior delivery roles. Let’s talk about the problem you’re solving."
        />
        <div className={styles.cta}>
          <a className={styles.big} href={`mailto:${person.email}`}>
            {person.email}
          </a>
        </div>
        <div className={styles.links}>
          <a href={person.linkedin.url} target="_blank" rel="noopener">
            LinkedIn
          </a>
          <Link href="/cover-letter">Cover letter</Link>
          <Link href="/cv">Download CV (PDF)</Link>
          <span className={styles.loc}>
            {person.location} · available {person.availabilityShort}
          </span>
        </div>
      </div>
    </section>
  );
}
