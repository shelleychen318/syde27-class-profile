import Head from "next/head";
import Link from "next/link";
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
        <div className={styles.title}>
          <h1>Systems Design Engineering 2027 Class Profile!</h1>
          <Link href="/demographics">
            <h4 className={styles.button}>Go to Profile</h4>
          </Link>
        </div>
        <img
          src="/assets/homeImg.png"
          alt="home image"
          className={styles.image}
        />
      </div>
    </>
  );
}
