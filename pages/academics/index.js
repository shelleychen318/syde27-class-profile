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
    xAxis: "Average (%)",
    yAxis: "Number of Students",
  };

  const enrichVsAverageData = {
    label: [
      "AP",
      "French Immersion",
      "Gifted",
      "IB",
      "MaCS",
      "SHSM",
      "TOPS",
      "None",
    ],
    val: [
      {
        min: data.enrich["AP"][0],
        q1: data.enrich["AP"][1],
        q2: data.enrich["AP"][2],
        q3: data.enrich["AP"][3],
        max: data.enrich["AP"][4],
        outliers: data.enrich["AP"][5],
        mean: data.enrich["AP"][6],
        median: data.enrich["AP"][7],
      },
      {
        min: data.enrich["French Immersion"][0],
        q1: data.enrich["French Immersion"][1],
        q2: data.enrich["French Immersion"][2],
        q3: data.enrich["French Immersion"][3],
        max: data.enrich["French Immersion"][4],
        outliers: data.enrich["French Immersion"][5],
        mean: data.enrich["French Immersion"][6],
        median: data.enrich["French Immersion"][7],
      },
      {
        min: data.enrich["Gifted"][0],
        q1: data.enrich["Gifted"][1],
        q2: data.enrich["Gifted"][2],
        q3: data.enrich["Gifted"][3],
        max: data.enrich["Gifted"][4],
        outliers: data.enrich["Gifted"][5],
        mean: data.enrich["Gifted"][6],
        median: data.enrich["Gifted"][7],
      },
      {
        min: data.enrich["IB"][0],
        q1: data.enrich["IB"][1],
        q2: data.enrich["IB"][2],
        q3: data.enrich["IB"][3],
        max: data.enrich["IB"][4],
        outliers: data.enrich["IB"][5],
        mean: data.enrich["IB"][6],
        median: data.enrich["IB"][7],
      },
      {
        min: data.enrich["MaCS"][0],
        q1: data.enrich["MaCS"][1],
        q2: data.enrich["MaCS"][2],
        q3: data.enrich["MaCS"][3],
        max: data.enrich["MaCS"][4],
        outliers: data.enrich["MaCS"][5],
        mean: data.enrich["MaCS"][6],
        median: data.enrich["MaCS"][7],
      },
      {
        min: data.enrich["SHSM"][0],
        q1: data.enrich["SHSM"][1],
        q2: data.enrich["SHSM"][2],
        q3: data.enrich["SHSM"][3],
        max: data.enrich["SHSM"][4],
        outliers: data.enrich["SHSM"][5],
        mean: data.enrich["SHSM"][6],
        median: data.enrich["SHSM"][7],
      },
      {
        min: data.enrich["TOPS"][0],
        q1: data.enrich["TOPS"][1],
        q2: data.enrich["TOPS"][2],
        q3: data.enrich["TOPS"][3],
        max: data.enrich["TOPS"][4],
        outliers: data.enrich["TOPS"][5],
        mean: data.enrich["TOPS"][6],
        median: data.enrich["TOPS"][7],
      },
      {
        min: data.enrich["None"][0],
        q1: data.enrich["None"][1],
        q2: data.enrich["None"][2],
        q3: data.enrich["None"][3],
        max: data.enrich["None"][4],
        outliers: data.enrich["None"][5],
        mean: data.enrich["None"][6],
        median: data.enrich["None"][7],
      },
    ],
    color: colorTheme[2],
    title: "High School Enrichment Program vs 1A Average",
    xAxis: "Enrichment Program",
    yAxis: "Average (%)",
    ymin: 60,
    ymax: 100,
    n: data.enrichRespondents,
  };

  const highschoolVsUniAverageData = {
    label: ["91-92", "93-94", "95-96", "97-98", "99-100"],
    val: [
      {
        min: data.highschoolAverage[91][0],
        q1: data.highschoolAverage[91][1],
        q2: data.highschoolAverage[91][2],
        q3: data.highschoolAverage[91][3],
        max: data.highschoolAverage[91][4],
        outliers: data.highschoolAverage[91][5],
        mean: data.highschoolAverage[91][6],
        median: data.highschoolAverage[91][7],
      },
      {
        min: data.highschoolAverage[93][0],
        q1: data.highschoolAverage[93][1],
        q2: data.highschoolAverage[93][2],
        q3: data.highschoolAverage[93][3],
        max: data.highschoolAverage[93][4],
        outliers: data.highschoolAverage[93][5],
        mean: data.highschoolAverage[93][6],
        median: data.highschoolAverage[93][7],
      },
      {
        min: data.highschoolAverage[95][0],
        q1: data.highschoolAverage[95][1],
        q2: data.highschoolAverage[95][2],
        q3: data.highschoolAverage[95][3],
        max: data.highschoolAverage[95][4],
        outliers: data.highschoolAverage[95][5],
        mean: data.highschoolAverage[95][6],
        median: data.highschoolAverage[95][7],
      },
      {
        min: data.highschoolAverage[97][0],
        q1: data.highschoolAverage[97][1],
        q2: data.highschoolAverage[97][2],
        q3: data.highschoolAverage[97][3],
        max: data.highschoolAverage[97][4],
        outliers: data.highschoolAverage[97][5],
        mean: data.highschoolAverage[97][6],
        median: data.highschoolAverage[97][7],
      },
      {
        min: data.highschoolAverage[99][0],
        q1: data.highschoolAverage[99][1],
        q2: data.highschoolAverage[99][2],
        q3: data.highschoolAverage[99][3],
        max: data.highschoolAverage[99][4],
        outliers: data.highschoolAverage[99][5],
        mean: data.highschoolAverage[99][6],
        median: data.highschoolAverage[99][7],
      },
    ],
    color: colorTheme[2],
    title: "High School Admission Average vs 1A Average",
    xAxis: "High School Average (%)",
    yAxis: "1A Average (%)",
    ymin: 60,
    ymax: 100,
    n: data.highschoolAverageRespondents,
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

        <h3>High School Admission Average vs 1A Average</h3>
        <div className={styles.singleChart}>
          <Chart type="box" data={highschoolVsUniAverageData} layout="single" />
        </div>

        <h3>High School Enrichment Program vs 1A Average</h3>
        <div className={styles.singleChart}>
          <Chart type="box" data={enrichVsAverageData} layout="single" />
        </div>

        <BottomNav currentPage="academics" />
      </div>
    </>
  );
}
