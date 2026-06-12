import styles from "./SectionHead.module.css";

interface SectionHeadProps {
  number: string;
  heading: string;
  note?: string;
}

export default function SectionHead({ number, heading, note }: SectionHeadProps) {
  return (
    <div className={styles.secHead}>
      <span className={styles.n}>{number}</span>
      <h2 className={styles.heading}>{heading}</h2>
      {note && <span className={styles.note}>{note}</span>}
    </div>
  );
}
