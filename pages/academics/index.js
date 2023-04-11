import Head from "next/head";
import { NavBar } from "../../components";
import { Chart } from "../../components";
import { BottomNav } from "../../components";
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
  const colorTheme = [colors.academics1, colors.academics2, colors.academics3];

  const uniAverageData = {
    label: data.uniAverages,
    val: data.uniAverageValues,
    color: colorTheme[2],
    title: "1A Averages",
    n: data.uniAverageRespondents,
  };

  const enrichVsAverageData = {
    val: [
      {
        name: "AP",
        min: data.apData[1],
        q1: data.apData[2],
        q2: data.apData[3],
        q3: data.apData[4],
        max: data.apData[5],
        outliers: data.apData[6],
      },
      {
        name: "IB",
        min: data.ibData[1],
        q1: data.ibData[2],
        q2: data.ibData[3],
        q3: data.ibData[4],
        max: data.ibData[5],
        outliers: data.ibData[6],
      },
      {
        name: "MaCS",
        min: data.macsData[1],
        q1: data.macsData[2],
        q2: data.macsData[3],
        q3: data.macsData[4],
        max: data.macsData[5],
        outliers: data.macsData[6],
      },
    ],
    color: colorTheme[1],
    title: "Box Plot Title",
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
        <div className={styles.doubleChart}>
          <p className={styles.text}>
            The 1A average for SYDE 2027 was %. It seems that our averages have
            dropped slightly from high school.
          </p>
          <Chart type="histogram" data={uniAverageData} layout="double" />
        </div>
        <BottomNav currentPage="academics" />
      </div>
    </>
  );
}
