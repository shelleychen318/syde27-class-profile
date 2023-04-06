import Head from "next/head";
import { NavBar } from "../../components";
import { Chart } from "../../components";
import { getSortedAcademicsData } from "../../lib/sort/getSortedAcademicsData";
import styles from "../profile.module.scss";
import colors from "../../styles/colors.module.scss";

export const getStaticProps = async () => {
  const data = await getSortedAcademicsData();
  return {
    props: {
      ...data,
    },
  };
};

export default function Academics(data) {

  const colorTheme = ["#9a464a", "#D87576", "#F5C8C8", "#FFE4E4"];

  const averageData = {
    label: data.averages,
    val: data.averageValues,
    color: colorTheme,
    title: "Average Ratio",
    n: data.averageRespondents,
  };

  return (
    <>
      <Head>
        <title>Academics | SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={`${styles.content} ${styles.academics}`}>
        <h2>Academics</h2>
        <h4>What were our favourite courses and professors in SYDE? </h4>
        <br />
        <h3>1A Average</h3>
        <div className={styles.chartConatiner}>
          <div className={styles.doubleChart}>
            <Chart type="pie" data={averageData} />
          </div>
        </div>
        <BottomNav currentPage="academics" />
      </div>
    </>
  );
}
