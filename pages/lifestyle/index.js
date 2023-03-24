import Head from "next/head";
import { NavBar } from "../../components";
import { Chart } from "../../components";
import styles from "../profile.module.scss";
import { getSortedLifestyleData } from "../../lib/sort/getSortedLifestyleData";

export const getStaticProps = async () => {
  const data = await getSortedLifestyleData();
  return {
    props: {
      ...data,
    },
  };
};

export default function Lifestyle(data) {
  const colorTheme = ["#9a464a", "#D87576", "#F5C8C8", "#FFE4E4"];

  const friendsData = {
    label: data.friendsCount,
    val: data.friendsValues,
    color: colorTheme,
    title: "Gender Ratio",
    n: data.friendsRespondents,
  };

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
          <div className={styles.singleChart}>
            <Chart type="pie" data={friendsData} layout="single" />
          </div>
        </div>
      </div>
    </>
  );
}
