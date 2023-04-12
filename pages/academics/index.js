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

  const testing = {
    val: [
      {
        min: data.enrich["AP"][0],
        q1: data.enrich["AP"][1],
        q1: data.enrich["AP"][2],
        q3: data.enrich["AP"][3],
        max: data.enrich["AP"][4],
        outliers: data.enrich["AP"][5],
        mean: data.enrich["AP"][6],
        median: data.enrich["AP"][7],
      },
      {
        min: data.enrich["IB"][0],
        q1: data.enrich["IB"][1],
        q1: data.enrich["IB"][2],
        q3: data.enrich["IB"][3],
        max: data.enrich["IB"][4],
        outliers: data.enrich["IB"][5],
        mean: data.enrich["IB"][6],
        median: data.enrich["IB"][7],
      },
      {
        min: data.enrich["MaCS"][0],
        q1: data.enrich["MaCS"][1],
        q1: data.enrich["MaCS"][2],
        q3: data.enrich["MaCS"][3],
        max: data.enrich["MaCS"][4],
        outliers: data.enrich["MaCS"][5],
        mean: data.enrich["MaCS"][6],
        median: data.enrich["MaCS"][7],
      },
    ],
    label: ['AP', 'IB', 'MaCs'],
    color: colorTheme[1],
    title: "Box Plot Chart",
    xAxis: "X Axis",
    yAxis: "Y Axis",
    ymin: 65,
    ymax: 100,
    n: 5,
  }

  const enrichVsAverageData = {
    val: [
      {
        min: data.enrich["AP"][1],
        q1: data.enrich["AP"][2],
        q2: data.enrich["AP"][3],
        q3: data.enrich["AP"][4],
        max: data.enrich["AP"][5],
        outliers: data.enrich["AP"][6],
      },
      {
        min: data.enrich["IB"][1],
        q1: data.enrich["IB"][2],
        q2: data.enrich["IB"][3],
        q3: data.enrich["IB"][4],
        max: data.enrich["IB"][5],
        outliers: data.enrich["IB"][6],
      },
      {
        min: data.enrich["MaCS"][1],
        q1: data.enrich["MaCS"][2],
        q2: data.enrich["MaCS"][3],
        q3: data.enrich["MaCS"][4],
        max: data.enrich["MaCS"][5],
        outliers: data.enrich["MaCS"][6],
      },
    ],
    color: colorTheme[1],
    title: "Box Plot Title",
    xAxis: "X Axis",
    yAxis: "Y Axis",
    label: ["data1", "data2", "data3", "data4", "data5"],
    n: 5,
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

        <div className={styles.doubleChart}>
          <Chart type="box" data={testing} layout="double" />
        </div>
        <div>
          {/* {enrichVsAverageData.val.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>Min: {item.min}</p>
              <Chart type="box" data={testing} layout="double" />
            </div>
          ))} */}
        </div>
        <BottomNav currentPage="academics" />
      </div>
    </>
  );

}
