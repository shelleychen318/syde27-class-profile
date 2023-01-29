import Head from "next/head";
import { NavBar } from "../../components";
import styles from "./demographics.module.scss";

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
          <h2 className={styles.heading}>Demographics</h2>
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
          
        </div>
      </div>
    </>
  );
}
