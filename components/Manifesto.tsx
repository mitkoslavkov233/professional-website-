import styles from "./Manifesto.module.css";
import { manifesto } from "@/data/resume";

export default function Manifesto() {
  return (
    <section className={styles.manifesto} id="principles">
      <div className="sheet">
        <div className={styles.inner}>
          <span className={styles.idx}>{manifesto.idx}</span>
          <ul className={styles.lines}>
            {manifesto.lines.map((line) => (
              <li key={line.text}>
                {line.text}
                {line.strong && <b>{line.strong}</b>}
                {line.suffix}
              </li>
            ))}
          </ul>
          <div className={styles.by}>{manifesto.by}</div>
        </div>
      </div>
    </section>
  );
}
