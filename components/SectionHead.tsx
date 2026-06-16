"use client";

import { useRevealRef } from "./useReveal";
import revealStyles from "./Reveal.module.css";
import styles from "./SectionHead.module.css";

interface SectionHeadProps {
  number: string;
  heading: string;
  note?: string;
}

export default function SectionHead({ number, heading, note }: SectionHeadProps) {
  const ref = useRevealRef<HTMLDivElement>(revealStyles.reveal, revealStyles.in);

  return (
    <div ref={ref} className={styles.secHead}>
      <span className={styles.n}>{number}</span>
      <h2 className={styles.heading}>{heading}</h2>
      {note && <span className={styles.note}>{note}</span>}
    </div>
  );
}
