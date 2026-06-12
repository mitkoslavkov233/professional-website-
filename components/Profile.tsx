import SectionHead from "./SectionHead";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <section className={styles.section} id="about">
      <div className="sheet">
        <SectionHead
          number="01"
          heading="Profile"
          note="A decade making delivery work, and the people around it trust each other."
        />
        <div className={styles.prose}>
          <p>
            I’ve worked across customer experience, enterprise operations and digital
            delivery. The common thread is making sure what gets built solves the real
            problem, and that clients and teams stay aligned the whole way through.
          </p>
          <p>
            Over seven years in agency delivery I grew from junior PM into program
            management, owning multi-client engagements end to end while coaching the
            people around me. Clients tend to call me when something needs untangling.
          </p>
        </div>
      </div>
    </section>
  );
}
