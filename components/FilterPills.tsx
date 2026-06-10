"use client";

import { filters } from "@/data/cards";
import { useFilter } from "./FilterContext";
import styles from "./FilterPills.module.css";

export default function FilterPills() {
  const { active, setActive } = useFilter();

  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <button
          key={filter.key}
          className={`${styles.pill} ${active === filter.key ? styles.active : ""}`}
          onClick={() => setActive(filter.key)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
