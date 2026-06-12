import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import styles from "./CV.module.css";
import { person, experience, cvSkillChips } from "@/data/resume";

export const metadata: Metadata = {
  title: "Dimitar Slavkov Dimitrov · CV",
};

const cvProfile =
  "Senior project and program manager with seven years owning multi-client delivery, remote teams, and the people who make it work. Primary point of contact for enterprise clients, managing expectations, scope and trust end to end, while coaching the wider delivery team. A decade across customer experience, enterprise operations and digital delivery, all pointed at making sure what gets built actually solves the problem.";

export default function CV() {
  return (
    <div className={styles.backdrop}>
      <div className={styles.toolbar}>
        <span className={styles.hint}>
          Press “Save as PDF”, then choose <strong>Save as PDF</strong> as the destination.
        </span>
        <PrintButton className={styles.printBtn} />
      </div>

      <article className={styles.page}>
        <header className={styles.head}>
          <div>
            <div className={styles.name}>
              Dimitar Slavkov
              <br />
              Dimitrov
            </div>
            <div className={styles.role}>{person.role}</div>
          </div>
          <div className={styles.contact}>
            <strong>{person.location}</strong>
            <br />
            {person.availability}
            <br />
            <a href={`mailto:${person.email}`}>{person.email}</a>
            <br />
            <a href={person.linkedin.url}>{person.linkedin.label}</a>
          </div>
        </header>

        <div className={styles.bodyGrid}>
          <section className={styles.profile}>
            <div className={styles.secLabel}>Profile</div>
            <p>{cvProfile}</p>
          </section>

          <section>
            <div className={styles.secLabel}>Experience</div>
            {experience.map((entry) => (
              <div className={styles.job} key={entry.id}>
                <div className={styles.jobHead}>
                  <div className={styles.jobTitle}>{entry.title}</div>
                  <div className={styles.jobMeta}>{entry.when}</div>
                </div>
                <div className={styles.jobWhere}>
                  {entry.roleSuffix ? `${entry.roleSuffix} · ${entry.company}` : entry.company}
                </div>
                <ul>
                  {(entry.cvBullets ?? entry.bullets).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <div className={styles.lower}>
            <section>
              <div className={styles.secLabel}>Skills</div>
              <div className={styles.chips}>
                {cvSkillChips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </section>
            <section>
              <div className={styles.secLabel}>Details</div>
              <div className={styles.facts}>
                <div>
                  <span className={styles.k}>Location</span> {person.location}
                </div>
                <div>
                  <span className={styles.k}>Availability</span> {person.availabilityShort}
                </div>
                <div>
                  <span className={styles.k}>Remote</span> Open to relocation & remote
                </div>
                <div>
                  <span className={styles.k}>Languages</span> English (fluent)
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
