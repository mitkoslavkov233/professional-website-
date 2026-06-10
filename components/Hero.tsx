import styles from "./Hero.module.css";
import FilterPills from "./FilterPills";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.eyebrow}>Curriculum Vitae · 2026</div>
      <h1 className={styles.name}>
        Dimitar
        <span className={styles.ln2}>Dimitrov</span>
      </h1>
      <p className={styles.tag}>
        Senior project &amp; program manager — seven years owning multi-client delivery, remote
        teams, and the people who make it work. Sofia, Bulgaria · open to relocation &amp; remote.
      </p>
      <FilterPills />
    </section>
  );
}
