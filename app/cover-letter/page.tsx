import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import styles from "./CoverLetter.module.css";
import { person } from "@/data/resume";

export const metadata: Metadata = {
  title: "Dimitar Dimitrov · Cover Letter",
};

export default function CoverLetterPage() {
  return (
    <div className={styles.page}>
      <div className={styles.topbar}>
        <Link className={styles.back} href="/">
          ← Back to CV
        </Link>
        <PrintButton className={styles.printBtn} />
      </div>

      <article className={styles.sheet}>
        <header className={styles.letterhead}>
          <div className={styles.name}>
            {person.name.line1}
            <br />
            {person.name.line2}
          </div>
          <div className={styles.role}>Cover Letter · {person.role}</div>
          <div className={styles.lhMeta}>
            {person.location} · {person.availability} · {person.email}
          </div>
        </header>

        <p className={styles.salutation}>Dear hiring team,</p>

        <div className={styles.letter}>
          <p>
            You’re looking for a Senior Project Manager who can own client relationships, keep
            remote delivery teams aligned across multiple projects, and help junior team members
            grow. I’ve been doing exactly that for seven years. Let me be direct about how.
          </p>

          <p>
            <span className={styles.lead}>Client ownership.</span> At Athlon I was the primary
            point of contact for multiple enterprise clients simultaneously, not a relay between
            the client and internal teams, but the person who understood each client’s business
            well enough to make decisions, manage expectations and keep trust intact through the
            difficult moments. Clients didn’t escalate past me, because they didn’t need to.
          </p>

          <p>
            <span className={styles.lead}>Remote delivery.</span> I’ve managed distributed and
            hybrid teams across time zones for most of my career. Sprint planning,
            retrospectives, daily standups, scope management, risk tracking: all of it running in
            parallel across different accounts, tech stacks and stakeholder personalities. The
            coordination overhead that breaks a lot of PMs is where I tend to do my best work.
          </p>

          <p>
            <span className={styles.lead}>Growing the team.</span> This one matters to me
            personally. I built a monthly skills-development programme for junior PMs, producers
            and QA from scratch. Every month I picked an agile topic, built a short presentation
            around it, and we worked through it together. It started informal and became a
            fixture in how the team operates. Delivery quality is a team property, not just a
            PM’s.
          </p>

          <p>
            What draws me to <span className={styles.editable}>this role</span> is the model
            itself. Building dedicated delivery teams for clients and keeping them performing
            over time is a genuinely hard problem, and one I understand from both sides. I’ve
            spent seven years being the person who makes that kind of arrangement work for the
            client. I know what good looks like, I know what breaks it, and I know how to fix it
            when it does.
          </p>

          <p>I’d be glad to talk through any of this in more detail.</p>
        </div>

        <div className={styles.signoff}>
          <span className={styles.small}>Warm regards,</span>
          <div className={styles.name}>
            {person.name.line1} {person.name.line2}
          </div>
        </div>

        <div className={styles.sheetFoot}>
          <span>{person.location}</span>
          <span>·</span>
          <span>{person.availability}</span>
          <span>·</span>
          <a href={person.linkedin.url} target="_blank" rel="noopener">
            {person.linkedin.label}
          </a>
        </div>
      </article>
    </div>
  );
}
