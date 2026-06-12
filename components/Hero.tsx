import styles from "./Hero.module.css";
import { person } from "@/data/resume";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="sheet">
        <div className={styles.inner}>
          <span className={styles.kicker}>
            <span className={styles.dot} />
            {person.role} / Sofia, BG
          </span>
          <h1 className={styles.heading}>
            {person.name.line1}
            <br />
            {person.name.line2}
          </h1>
          <p className={styles.sub}>
            Building trusted client relationships, leading distributed teams, and delivering
            complex digital work <span className={styles.strong}>without drama.</span>
          </p>
          <div className={styles.meta}>
            <span className={`${styles.chip} ${styles.fill}`}>10+ yrs delivery</span>
            <span className={styles.chip}>7 yrs agency</span>
            <span className={`${styles.chip} ${styles.acc}`}>Available 1 to 2 mo</span>
            <span className={styles.chip}>Relocation / Remote</span>
          </div>
        </div>
      </div>
    </section>
  );
}
