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
    </>
  );
}
