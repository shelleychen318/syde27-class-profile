import Head from "next/head";
import { NavBar } from "../../components";
import styles from "../profile.module.scss";

export default function HighSchool() {
  return (
    <>
      <Head>
        <title>High School | SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={styles.content}>
        <div className={styles.highschool}>
          <h2>High School</h2>
          <h4>
            What were we up to in high school?
          </h4>
        </div>
      </div>
    </>
  );
}
