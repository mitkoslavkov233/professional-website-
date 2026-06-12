import SectionHead from "./SectionHead";
import styles from "./Skills.module.css";
import { skillColumns } from "@/data/resume";

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className="sheet">
        <SectionHead
          number="03"
          heading="Skills & Tools"
          note="What I bring to a delivery team, day to day."
        />
        <div className={styles.services}>
          {skillColumns.map((col) => (
            <div className={styles.svc} key={col.index}>
              <span className={styles.svcIdx}>{col.index}</span>
              <span className={styles.svcTitle}>{col.title}</span>
              <ul className={styles.svcList}>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
