import Head from "next/head";
import { NavBar } from "../../components";
import styles from "../profile.module.scss";

export default function Academics() {

  return (
    <>
      <Head>
        <title>Academics | SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={styles.content}>
        <div className={styles.academics}>
          <h2>Academics</h2>
          <h4>What were our favourite courses and professors in SYDE? </h4>
          <br />
          <h3>1A Average</h3>
        </div>
      </div>
    </>
  );
}
