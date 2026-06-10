"use client";

import { useEffect, useRef, useState } from "react";
import { cards, matchup } from "@/data/cards";
import { useFilter } from "./FilterContext";
import Card from "./Card";
import MatchupCard from "./MatchupCard";

type Item =
  | { kind: "card"; id: string; cat: (typeof cards)[number]["cat"]; data: (typeof cards)[number] }
  | { kind: "matchup"; id: "matchup"; cat: typeof matchup.cat };

// DOM order: profile, the matchup card, then the rest of the experience/highlight/more cards.
const items: Item[] = [
  { kind: "card", id: cards[0].id, cat: cards[0].cat, data: cards[0] },
  { kind: "matchup", id: "matchup", cat: matchup.cat },
  ...cards.slice(1).map((card) => ({ kind: "card" as const, id: card.id, cat: card.cat, data: card })),
];

const allIds = items.map((item) => item.id);

export default function CardStack() {
  const { active } = useFilter();
  const [revealed, setRevealed] = useState<Set<string>>(() => new Set());
  const elementsRef = useRef(new Map<string, HTMLElement>());

  const reveal = (id: string) => {
    setRevealed((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
  };

  const revealAll = () => setRevealed(new Set(allIds));

  // Scroll-reveal: animate cards in on first scroll into view, with the
  // fallbacks from the prototype so content can never get stuck hidden.
  useEffect(() => {
    document.body.classList.add("anim");

    const elements = [...elementsRef.current.entries()];

    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = elements.find(([, el]) => el === entry.target)?.[0];
              if (id) reveal(id);
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      elements.forEach(([, el]) => io?.observe(el));
    }

    // Defer the synchronous fallback checks to the next tick.
    const immediate = setTimeout(() => {
      if (!io || document.documentElement.scrollHeight <= window.innerHeight + 40) {
        revealAll();
      }
    }, 0);

    window.addEventListener("scroll", revealAll, { once: true, passive: true });
    const safety = setTimeout(revealAll, 1400);

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", revealAll);
      clearTimeout(immediate);
      clearTimeout(safety);
    };
  }, []);

  // When the filter changes, immediately reveal any newly-shown cards.
  useEffect(() => {
    const id = setTimeout(() => {
      items.forEach((item) => {
        if (active === "all" || item.cat === active) reveal(item.id);
      });
    }, 0);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <main className="cards" id="cards">
      {items.map((item) => {
        const hidden = !(active === "all" || item.cat === active);
        const isRevealed = revealed.has(item.id);
        const setRef = (el: HTMLElement | null) => {
          if (el) elementsRef.current.set(item.id, el);
          else elementsRef.current.delete(item.id);
        };

        if (item.kind === "matchup") {
          return <MatchupCard key={item.id} ref={setRef} hidden={hidden} revealed={isRevealed} />;
        }

        return <Card key={item.id} ref={setRef} card={item.data} hidden={hidden} revealed={isRevealed} />;
      })}
    </main>
  );
}
