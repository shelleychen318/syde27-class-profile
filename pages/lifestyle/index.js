import Head from "next/head";
import { NavBar } from "../../components";
import { NavBar2 } from "../../components";
import styles from "../profile.module.scss";

export default function Lifestyle() {
  return (
    <>
      <Head>
        <title>Lifestyle | SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={styles.content}>
        <div className={styles.lifestyle}>
          <h2>Lifestyle</h2>
          <h4>How's life?</h4>
          <br />
          <h3>Hobbies</h3>
        </div>
      </div>
    </>
  );
}
