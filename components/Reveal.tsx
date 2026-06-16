"use client";

import type { ComponentPropsWithoutRef, CSSProperties, ElementType } from "react";
import { useRevealRef } from "./useReveal";
import styles from "./Reveal.module.css";

type RevealProps<T extends ElementType> = {
  as?: T;
  /** Stagger delay in milliseconds, applied once the element enters the viewport. */
  delay?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export default function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  style,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRevealRef<HTMLElement>(styles.reveal, styles.in);

  return (
    <Tag
      ref={ref}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
      {...rest}
    />
  );
}
