import { forwardRef } from "react";
import type { ResumeCard } from "@/data/cards";
import CardArt from "./CardArt";
import type { CSSVars } from "./css-vars";

interface CardProps {
  card: ResumeCard;
  hidden: boolean;
  revealed: boolean;
}

const Card = forwardRef<HTMLElement, CardProps>(function Card({ card, hidden, revealed }, ref) {
  const className = ["card", card.reverse && "reverse", revealed && "in"].filter(Boolean).join(" ");

  const style: CSSVars = {
    "--bg": card.theme.bg,
    "--fg": card.theme.fg,
    display: hidden ? "none" : undefined,
  };

  return (
    <article ref={ref} id={card.anchorId} className={className} data-cat={card.cat} style={style}>
      <div className="card-text">
        <span className="card-date">{card.date}</span>
        <h2>
          {card.heading}
          {card.roleAt && <span className="role-at"> {card.roleAt}</span>}
        </h2>
        {card.body && <p>{card.body}</p>}
        {card.bullets && (
          <ul className="bullets">
            {card.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
        {card.chips && (
          <div className="meta">
            {card.chips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        )}
        {card.link && (
          <a className="card-link" href={card.link.href}>
            {card.link.label}
          </a>
        )}
      </div>
      <div className="card-visual">
        <CardArt motif={card.art.motif} ink={card.theme.fg} accent={card.art.accent} />
      </div>
    </article>
  );
});

export default Card;
