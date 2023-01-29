import Head from "next/head";
import { NavBar } from "../components";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={styles.banner}>
        <h1>SYDE 2027 Class Profile!</h1>
        <a className={styles.button} href="/demographics">
          Go to Profile
        </a>
      </div>
    </>
  );
}
