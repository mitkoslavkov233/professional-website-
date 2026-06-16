import Reveal from "./Reveal";
import styles from "./Hero.module.css";
import { person } from "@/data/resume";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="sheet">
        <div className={styles.inner}>
          <Reveal as="span" className={styles.kicker}>
            <span className={styles.dot} />
            {person.role} / Sofia, BG
          </Reveal>
          <Reveal as="h1" className={styles.heading} delay={90}>
            {person.name.line1}
            <br />
            {person.name.line2}
          </Reveal>
          <Reveal as="p" className={styles.sub} delay={200}>
            Building trusted client relationships, leading distributed teams, and delivering
            complex digital work <span className={styles.strong}>without drama.</span>
          </Reveal>
          <div className={styles.meta}>
            <Reveal as="span" className={`${styles.chip} ${styles.fill}`} delay={310}>
              10+ yrs delivery
            </Reveal>
            <Reveal as="span" className={styles.chip} delay={360}>
              7 yrs agency
            </Reveal>
            <Reveal as="span" className={`${styles.chip} ${styles.acc}`} delay={410}>
              Available 1 to 2 mo
            </Reveal>
            <Reveal as="span" className={styles.chip} delay={460}>
              Relocation / Remote
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
