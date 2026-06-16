import Reveal from "./Reveal";
import styles from "./Manifesto.module.css";
import { manifesto } from "@/data/resume";

export default function Manifesto() {
  return (
    <section className={styles.manifesto} id="principles">
      <div className="sheet">
        <div className={styles.inner}>
          <Reveal as="span" className={styles.idx}>
            {manifesto.idx}
          </Reveal>
          <ul className={styles.lines}>
            {manifesto.lines.map((line, i) => (
              <Reveal as="li" key={line.text} delay={i * 90}>
                {line.text}
                {line.strong && <b>{line.strong}</b>}
                {line.suffix}
              </Reveal>
            ))}
          </ul>
          <Reveal as="div" className={styles.by} delay={manifesto.lines.length * 90}>
            {manifesto.by}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
