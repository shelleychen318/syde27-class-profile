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
  const colorTheme = [
    colors.academics1,
    colors.academics2,
    colors.academics3,
    colors.academics4,
    colors.academics5,
    colors.academics6,
  ];

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
        min: data.enrichUnique["AP"][0],
        q1: data.enrichUnique["AP"][1],
        q2: data.enrichUnique["AP"][2],
        q3: data.enrichUnique["AP"][3],
        max: data.enrichUnique["AP"][4],
        outliers: data.enrichUnique["AP"][5],
        mean: data.enrichUnique["AP"][6],
        median: data.enrichUnique["AP"][7],
      },
      {
        min: data.enrichUnique["French Immersion"][0],
        q1: data.enrichUnique["French Immersion"][1],
        q2: data.enrichUnique["French Immersion"][2],
        q3: data.enrichUnique["French Immersion"][3],
        max: data.enrichUnique["French Immersion"][4],
        outliers: data.enrichUnique["French Immersion"][5],
        mean: data.enrichUnique["French Immersion"][6],
        median: data.enrichUnique["French Immersion"][7],
      },
      {
        min: data.enrichUnique["Gifted"][0],
        q1: data.enrichUnique["Gifted"][1],
        q2: data.enrichUnique["Gifted"][2],
        q3: data.enrichUnique["Gifted"][3],
        max: data.enrichUnique["Gifted"][4],
        outliers: data.enrichUnique["Gifted"][5],
        mean: data.enrichUnique["Gifted"][6],
        median: data.enrichUnique["Gifted"][7],
      },
      {
        min: data.enrichUnique["IB"][0],
        q1: data.enrichUnique["IB"][1],
        q2: data.enrichUnique["IB"][2],
        q3: data.enrichUnique["IB"][3],
        max: data.enrichUnique["IB"][4],
        outliers: data.enrichUnique["IB"][5],
        mean: data.enrichUnique["IB"][6],
        median: data.enrichUnique["IB"][7],
      },
      {
        min: data.enrichUnique["MaCS"][0],
        q1: data.enrichUnique["MaCS"][1],
        q2: data.enrichUnique["MaCS"][2],
        q3: data.enrichUnique["MaCS"][3],
        max: data.enrichUnique["MaCS"][4],
        outliers: data.enrichUnique["MaCS"][5],
        mean: data.enrichUnique["MaCS"][6],
        median: data.enrichUnique["MaCS"][7],
      },
      {
        min: data.enrichUnique["SHSM"][0],
        q1: data.enrichUnique["SHSM"][1],
        q2: data.enrichUnique["SHSM"][2],
        q3: data.enrichUnique["SHSM"][3],
        max: data.enrichUnique["SHSM"][4],
        outliers: data.enrichUnique["SHSM"][5],
        mean: data.enrichUnique["SHSM"][6],
        median: data.enrichUnique["SHSM"][7],
      },
      {
        min: data.enrichUnique["TOPS"][0],
        q1: data.enrichUnique["TOPS"][1],
        q2: data.enrichUnique["TOPS"][2],
        q3: data.enrichUnique["TOPS"][3],
        max: data.enrichUnique["TOPS"][4],
        outliers: data.enrichUnique["TOPS"][5],
        mean: data.enrichUnique["TOPS"][6],
        median: data.enrichUnique["TOPS"][7],
      },
      {
        min: data.enrichUnique["None"][0],
        q1: data.enrichUnique["None"][1],
        q2: data.enrichUnique["None"][2],
        q3: data.enrichUnique["None"][3],
        max: data.enrichUnique["None"][4],
        outliers: data.enrichUnique["None"][5],
        mean: data.enrichUnique["None"][6],
        median: data.enrichUnique["None"][7],
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

  const averageDropoffData = {
    label: data.averageDropoffs,
    val: data.averageDropoffValues,
    color: colorTheme[2],
    title: "Average Drop-off",
    n: data.averageDropoffRespondents,
    xAxis: "Drop-off (%)",
    yAxis: "Number of Students",
  };

  const favCourseData = {
    label: data.favCourses,
    val: data.favCourseValues,
    color: colorTheme,
    title: "Favourite Courses in 1A",
    n: data.favCourseRespondents,
  };

  const leastFavCourseData = {
    label: data.leastFavCourses,
    val: data.leastFavCourseValues,
    color: colorTheme,
    title: "Least Favourite Courses in 1A",
    n: data.leastFavCourseRespondents,
  };

  const usefulCourseData = {
    label: data.usefulCourses,
    val: data.usefulCourseValues,
    color: colorTheme,
    title: "Most Useful Courses in 1A",
    n: data.usefulCourseRespondents,
  };

  const difficultCourseData = {
    label: data.difficultCourses,
    val: data.difficultCourseValues,
    color: colorTheme,
    title: "Most Difficult Courses in 1A",
    n: data.difficultCourseRespondents,
  };

  const lectureData = {
    label: data.lectures,
    val: data.lectureValues,
    color: colorTheme[2],
    title: "Lecture Attendance in 1A",
    n: data.lectureRespondents,
    xAxis: "Percentage of Lectures Attended",
    yAxis: "Number of Students",
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
        <h4>
          An overview of our 1A term in SYDE, including details on averages and
          courses taken.
        </h4>
        <br />
        <h3>1A Average</h3>
        <div className={styles.doubleChart}>
          <p className={styles.textLeft}>
            The 1A average for SYDE 2027 was 85.6%. It seems that our averages
            have dropped slightly from high school.
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

        <h3>Average Dropoff</h3>
        <div className={styles.doubleChart}>
          <Chart type="histogram" data={averageDropoffData} layout="double" />
          <p className={styles.textRight}>
            The drop-off is calculated by: 1A average - admission average. For
            SYDE 2027, the average drop-off rate was 10.8%.
          </p>
        </div>

        <h3>Favourite and Least Favourite Courses in 1A</h3>
        <div className={styles.doubleChart}>
          <Chart type="doughnut" data={favCourseData} layout="double" />
          <Chart type="doughnut" data={leastFavCourseData} layout="double" />
        </div>

        <h3>Most Useful and Difficult Courses in 1A</h3>
        <div className={styles.doubleChart}>
          <Chart type="doughnut" data={usefulCourseData} layout="double" />
          <Chart type="doughnut" data={difficultCourseData} layout="double" />
        </div>

        <h3>Lecture Attendance in 1A</h3>
        <div className={styles.singleChart}>
          <Chart type="histogram" data={lectureData} layout="single" />
        </div>

        <BottomNav currentPage="academics" />
      </div>
    </>
  );
}
