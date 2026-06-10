import { forwardRef } from "react";
import { matchup } from "@/data/cards";
import type { CSSVars } from "./css-vars";

interface MatchupCardProps {
  hidden: boolean;
  revealed: boolean;
}

const MatchupCard = forwardRef<HTMLElement, MatchupCardProps>(function MatchupCard(
  { hidden, revealed },
  ref
) {
  const className = ["card", "matchup", revealed && "in"].filter(Boolean).join(" ");

  const style: CSSVars = {
    "--bg": matchup.theme.bg,
    "--fg": matchup.theme.fg,
    "--acc": matchup.accent,
    display: hidden ? "none" : undefined,
  };

  return (
    <article className={className} data-cat={matchup.cat} style={style} ref={ref}>
      <div className="mh">
        <span className="card-date">{matchup.eyebrow}</span>
        <h2>{matchup.heading}</h2>
      </div>
      <div className="mrows">
        <div className="mhead-row">
          <span className="l">What you need</span>
          <span className="r">What I bring</span>
        </div>
        {matchup.rows.map((row) => (
          <div className="mrow" key={row.need}>
            <div className="need">{row.need}</div>
            <div className="bring">{row.bring}</div>
          </div>
        ))}
      </div>
    </article>
  );
});

export default MatchupCard;
