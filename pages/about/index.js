import Head from "next/head";
import { NavBar } from "../../components";
import styles from "./about.module.scss";

export default function About() {
  return (
    <>
      <Head>
        <title>About SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={styles.content}>
        <div>
          <h2 className={styles.heading}>About Systems Design Engineering </h2>
          <p className={styles.paragraph}>
            Systems Design Engineering is a unique interdisciplinary engineering
            program at the University of Waterloo that explores problem solving
            through a systems-thinking methodology. Our class, the class of
            2025, has had a first term experience unlike any other as all of our
            courses were taught online due to the pandemic. We hope that this
            class profile will reflect some of the different perspectives that
            our class may hold, and that you as the user will take something
            away from exploring the site.
          </p>
          <br />
          <img
            src="/assets/class_pic.jpg"
            alt="class picture"
            className={styles.image}
          />
          <br />
          <h2 className={styles.heading}>Preface</h2>
          <p className={styles.paragraph}>
            The objective of this website was to better understand the histories
            of the students in the Systems Design Engineering (SYDE) class of
            2025, as well as understanding the personalities of the students.
            This was also an opportunity to display and test our skills in
            design, data science, frontend development, and team collaboration.
            94 students in our first year class responded to this survey. The
            data from each question is displayed throughout the website. This is
            an iterative project that we are committed to working on for the
            entirety of our degree, so we look forward to seeing how it
            progresses over time!
          </p>
          <br />
          <h2 className={styles.heading}>Credits</h2>
          <div className={styles.linksContainer}>
            <a
              className={styles.link}
              href="https://github.com/shelleychen318/syde27-class-profile"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className={styles.link}>Data Report</a>
          </div>
        </div>
      </div>
    </>
  );
}
