import Head from "next/head";
import Image from "next/image";
import { NavBar } from "../../components";
import { BottomNav } from "../../components";
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
        <h2 className={styles.heading}>About the Program</h2>
        <p className={styles.paragraph}>
          Systems Design Engineering (SYDE) is an interdisciplinary engineering
          program offered at the University of Waterloo. This unique program
          encourages big-picture thinking with a heavy emphasis on design to
          develop creative solutions to complex problems. During our first term
          in the program, we accomplished a lot: we balanced university
          academics and our first co-op search, adjusted to life in a new city,
          and most importantly, built gardening tools for non-existent aliens.
        </p>
        <br />
        <div className={styles.imageContainer}>
          <Image
            src="/assets/classPic.jpg"
            alt="class picture"
            width="600"
            height="400"
            className={styles.image}
          />
          <div className={styles.caption}>
            Class photo taken in E7 after our SYDE 121 final.
          </div>
        </div>
        <br />
        <h2 className={styles.heading}>Preface</h2>
        <p className={styles.paragraph}>
          Inspired by past SYDE cohorts, we have put together this class profile
          to shed light on students' experiences in our first term of the
          program. We hope that this profile provides you with insight on the
          SYDE experience for the class of 2027, as well as the individuals who
          make up this diverse program.
        </p>
        <p className={styles.paragraph}>
          The findings in this profile were derived from the results of a class
          survey conducted by SYDE '27 students. 82 out of 106 students (77%) of
          students in our first year class responded to the survey. A secondary
          survey was sent out with 60 (57%) respondents so far. All questions
          were optional. The data presented in this class profile may not be a
          complete reflection of the class and as such, this profile includes
          the number of respondents for each data set.
        </p>
        <br />
        <h2 className={styles.heading}>Contributors</h2>
        <a
          className={styles.github}
          href="https://github.com/shelleychen318/syde27-class-profile"
          target="_blank"
          rel="noreferrer"
        >
          <p>view GitHub repo</p>
        </a>

        <BottomNav currentPage="about" />
      </div>
    </>
  );
}
