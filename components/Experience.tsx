import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import styles from "./Experience.module.css";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className="sheet">
        <SectionHead
          number="02"
          heading="Experience"
          note="Fifteen years, four companies, one throughline: delivery that holds."
        />
        {experience.map((job, i) => (
          <Reveal as="div" className={styles.row} key={job.id} delay={Math.min(i, 2) * 70}>
            <div className={styles.meta}>
              <div className={styles.when}>{job.when}</div>
              <div className={styles.where}>{job.company}</div>
            </div>
            <div>
              <h3 className={styles.title}>
                {job.title}
                {job.roleSuffix && <span className={styles.roleSuffix}> / {job.roleSuffix}</span>}
              </h3>
              <ul className={styles.bullets}>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {job.tags && <div className={styles.tags}>{job.tags.join(" · ")}</div>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
