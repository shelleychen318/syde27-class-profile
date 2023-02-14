import Head from "next/head";
import { NavBar } from "../../components";
import styles from "../profile.module.scss";

//Test

export default function Coop() {
  return (
    <>
      <Head>
        <title>Co-op | SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={styles.content}>
        <div className={styles.coop}>
          <h2>Co-op</h2>
          <h4>Where is SYDE 2027 working?</h4>
          <br />
          <h3>Co-op Round vs. Type</h3>
        </div>
      </div>
    </>
  );
}
