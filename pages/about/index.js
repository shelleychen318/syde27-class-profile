import Head from "next/head";
import { NavBar } from "../../components";
import styles from "./about.module.scss";

export default function About() {
  return (
    <>
      <Head>
        <title>About | SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={styles.content}>
        <div>
          <h2 className={styles.heading}>About the Program</h2>
          <p className={styles.paragraph}>
            Systems Design Engineering (SYDE) is an interdisciplinary
            engineering program offered at the University of Waterloo. This
            unique program encourages big-picture thinking with a heavy emphasis
            on design to develop creative solutions to complex problems. During
            our first term in the program, we accomplished a lot: we balanced
            university academics and our first co-op search, adjusted to life in
            a new city, and most importantly, built gardening tools for
            non-existent aliens.
          </p>
          <br />
          <div className={styles.imageContainer}>
            <img
              src="/assets/class_pic.jpg"
              alt="class picture"
              className={styles.image}
            />
            <div className={styles.caption}>
              Class photo taken in E7 after our SYDE 121 final.
            </div>
          </div>
          <br />
          <h2 className={styles.heading}>Preface</h2>
          <p className={styles.paragraph}>
            Inspired by past SYDE cohorts, we have put together this class
            profile to shed light on students' experiences in our first term of
            the program. We hope that this profile provides you with insight on
            the SYDE experience for the class of 2027, as well as the
            individuals who make up this diverse program.
          </p>
          <p className={styles.paragraph}>
            The findings in this profile were derived from the results of a
            class survey conducted by SYDE '27 students. 75 out of 113 students
            (66%) of students in our first year class responded to the survey.
            All questions were optional.
          </p>
          <br />
          <h2 className={styles.heading}>Contributors</h2>
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
