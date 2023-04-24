import Head from "next/head";
import { NavBar } from "../../components";
import { Chart } from "../../components";
import { BottomNav } from "../../components";
import styles from "../profile.module.scss";
import colors from "../../styles/colors.module.scss";
import { getSortedAcademicsData } from "../../lib/sort/getSortedAcademicsData";

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
      "Private School",
      "SHSM",
      "TOPS",
      "None",
    ],
    val: [
      {
        min: data.enrichVsAverage["AP"][0],
        q1: data.enrichVsAverage["AP"][1],
        q2: data.enrichVsAverage["AP"][2],
        q3: data.enrichVsAverage["AP"][3],
        max: data.enrichVsAverage["AP"][4],
        outliers: data.enrichVsAverage["AP"][5],
        mean: data.enrichVsAverage["AP"][6],
        median: data.enrichVsAverage["AP"][7],
      },
      {
        min: data.enrichVsAverage["French Immersion"][0],
        q1: data.enrichVsAverage["French Immersion"][1],
        q2: data.enrichVsAverage["French Immersion"][2],
        q3: data.enrichVsAverage["French Immersion"][3],
        max: data.enrichVsAverage["French Immersion"][4],
        outliers: data.enrichVsAverage["French Immersion"][5],
        mean: data.enrichVsAverage["French Immersion"][6],
        median: data.enrichVsAverage["French Immersion"][7],
      },
      {
        min: data.enrichVsAverage["Gifted"][0],
        q1: data.enrichVsAverage["Gifted"][1],
        q2: data.enrichVsAverage["Gifted"][2],
        q3: data.enrichVsAverage["Gifted"][3],
        max: data.enrichVsAverage["Gifted"][4],
        outliers: data.enrichVsAverage["Gifted"][5],
        mean: data.enrichVsAverage["Gifted"][6],
        median: data.enrichVsAverage["Gifted"][7],
      },
      {
        min: data.enrichVsAverage["IB"][0],
        q1: data.enrichVsAverage["IB"][1],
        q2: data.enrichVsAverage["IB"][2],
        q3: data.enrichVsAverage["IB"][3],
        max: data.enrichVsAverage["IB"][4],
        outliers: data.enrichVsAverage["IB"][5],
        mean: data.enrichVsAverage["IB"][6],
        median: data.enrichVsAverage["IB"][7],
      },
      {
        min: data.enrichVsAverage["MaCS"][0],
        q1: data.enrichVsAverage["MaCS"][1],
        q2: data.enrichVsAverage["MaCS"][2],
        q3: data.enrichVsAverage["MaCS"][3],
        max: data.enrichVsAverage["MaCS"][4],
        outliers: data.enrichVsAverage["MaCS"][5],
        mean: data.enrichVsAverage["MaCS"][6],
        median: data.enrichVsAverage["MaCS"][7],
      },
      {
        min: data.enrichVsAverage["Private School"][0],
        q1: data.enrichVsAverage["Private School"][1],
        q2: data.enrichVsAverage["Private School"][2],
        q3: data.enrichVsAverage["Private School"][3],
        max: data.enrichVsAverage["Private School"][4],
        outliers: data.enrichVsAverage["Private School"][5],
        mean: data.enrichVsAverage["Private School"][6],
        median: data.enrichVsAverage["Private School"][7],
      },
      {
        min: data.enrichVsAverage["SHSM"][0],
        q1: data.enrichVsAverage["SHSM"][1],
        q2: data.enrichVsAverage["SHSM"][2],
        q3: data.enrichVsAverage["SHSM"][3],
        max: data.enrichVsAverage["SHSM"][4],
        outliers: data.enrichVsAverage["SHSM"][5],
        mean: data.enrichVsAverage["SHSM"][6],
        median: data.enrichVsAverage["SHSM"][7],
      },
      {
        min: data.enrichVsAverage["TOPS"][0],
        q1: data.enrichVsAverage["TOPS"][1],
        q2: data.enrichVsAverage["TOPS"][2],
        q3: data.enrichVsAverage["TOPS"][3],
        max: data.enrichVsAverage["TOPS"][4],
        outliers: data.enrichVsAverage["TOPS"][5],
        mean: data.enrichVsAverage["TOPS"][6],
        median: data.enrichVsAverage["TOPS"][7],
      },
      {
        min: data.enrichVsAverage["None"][0],
        q1: data.enrichVsAverage["None"][1],
        q2: data.enrichVsAverage["None"][2],
        q3: data.enrichVsAverage["None"][3],
        max: data.enrichVsAverage["None"][4],
        outliers: data.enrichVsAverage["None"][5],
        mean: data.enrichVsAverage["None"][6],
        median: data.enrichVsAverage["None"][7],
      },
    ],
    color: colorTheme[2],
    title: "High School Enrichment Program vs 1A Average",
    n: data.enrichVsAverageRespondents,
    xAxis: "Enrichment Program",
    yAxis: "Average (%)",
    ymin: 50,
    ymax: 100,
  };

  const highschoolVsUniAverageData = {
    label: ["91-92", "93-94", "95-96", "97-98", "99-100"],
    val: [
      {
        min: data.highschoolVsUniAverage[91][0],
        q1: data.highschoolVsUniAverage[91][1],
        q2: data.highschoolVsUniAverage[91][2],
        q3: data.highschoolVsUniAverage[91][3],
        max: data.highschoolVsUniAverage[91][4],
        outliers: data.highschoolVsUniAverage[91][5],
        mean: data.highschoolVsUniAverage[91][6],
        median: data.highschoolVsUniAverage[91][7],
      },
      {
        min: data.highschoolVsUniAverage[93][0],
        q1: data.highschoolVsUniAverage[93][1],
        q2: data.highschoolVsUniAverage[93][2],
        q3: data.highschoolVsUniAverage[93][3],
        max: data.highschoolVsUniAverage[93][4],
        outliers: data.highschoolVsUniAverage[93][5],
        mean: data.highschoolVsUniAverage[93][6],
        median: data.highschoolVsUniAverage[93][7],
      },
      {
        min: data.highschoolVsUniAverage[95][0],
        q1: data.highschoolVsUniAverage[95][1],
        q2: data.highschoolVsUniAverage[95][2],
        q3: data.highschoolVsUniAverage[95][3],
        max: data.highschoolVsUniAverage[95][4],
        outliers: data.highschoolVsUniAverage[95][5],
        mean: data.highschoolVsUniAverage[95][6],
        median: data.highschoolVsUniAverage[95][7],
      },
      {
        min: data.highschoolVsUniAverage[97][0],
        q1: data.highschoolVsUniAverage[97][1],
        q2: data.highschoolVsUniAverage[97][2],
        q3: data.highschoolVsUniAverage[97][3],
        max: data.highschoolVsUniAverage[97][4],
        outliers: data.highschoolVsUniAverage[97][5],
        mean: data.highschoolVsUniAverage[97][6],
        median: data.highschoolVsUniAverage[97][7],
      },
      {
        min: data.highschoolVsUniAverage[99][0],
        q1: data.highschoolVsUniAverage[99][1],
        q2: data.highschoolVsUniAverage[99][2],
        q3: data.highschoolVsUniAverage[99][3],
        max: data.highschoolVsUniAverage[99][4],
        outliers: data.highschoolVsUniAverage[99][5],
        mean: data.highschoolVsUniAverage[99][6],
        median: data.highschoolVsUniAverage[99][7],
      },
    ],
    color: colorTheme[2],
    title: "High School Admission Average vs 1A Average",
    n: data.highschoolVsUniAverageRespondents,
    xAxis: "High School Admission Average (%)",
    yAxis: "1A Average (%)",
    ymin: 50,
    ymax: 100,
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
          An overview of our 1A academic term in SYDE, including details on
          averages and courses taken.
        </h4>
        <br />

        <h3>1A Average</h3>
        <div className={styles.doubleChart}>
          <p className={styles.textLeft}>
            The 1A average for SYDE 2027 was 85.4%.
            <br />
            <br />
            However, unlike the relatively narrow range of admission averages
            (89+), the 1A academic term encompassed a much broader spectrum of
            marks, ranging from a low of 54% to a high of 96%.
          </p>
          <Chart type="histogram" data={uniAverageData} layout="double" />
        </div>

        <h3>High School Admission Average vs 1A Average</h3>
        <p>
          Based on the data provided, there does not appear to be a clear
          proportional trend between high school admission averages and 1A
          averages.
        </p>
        <div className={styles.singleChart}>
          <Chart type="box" data={highschoolVsUniAverageData} layout="single" />
        </div>

        <h3>High School Enrichment Program vs 1A Average</h3>
        <p>
          The data provided does not suggest a clear trend or pattern between
          high school enrichment programs and 1A averages. While some programs
          may indicate a slightly higher or lower average than others, it is
          important to note that the sample sizes of each program vary greatly,
          potentially skewing the results.
          <br />
          <br />
          Students who selected multiple programs (e.g. AP and Private School)
          were accounted for in each group.
        </p>
        <div className={styles.singleChart}>
          <Chart type="box" data={enrichVsAverageData} layout="single" />
        </div>

        <h3>Average Dropoff</h3>
        <div className={styles.doubleChart}>
          <Chart type="histogram" data={averageDropoffData} layout="double" />
          <p className={styles.textRight}>
            The drop-off is calculated by: 1A average - admission average. For
            SYDE 2027, the median drop-off rate was 10%.
            <br />
            <br />
            In conclusion, everyone's mark dropped in 1A 😃
            {/* While this finding suggests a decrease in academic performance for
            the cohort as a whole upon entering university, it is important to
            note that this trend is not necessarily indicative of the potential
            or abilities of individual students. Instead, it may reflect the
            significant increase in academic rigor and adjustment required for
            university-level coursework. */}
          </p>
        </div>

        <h3>Favourite and Least Favourite Courses in 1A</h3>
        <p>
          Majority of us said that our favourite course was SYDE 101L and our
          least favourite course was SYDE 161. Sorry not sorry to all the
          TsTsians out there 🙄
        </p>
        <div className={styles.doubleChart}>
          <Chart type="doughnut" data={favCourseData} layout="double" />
          <Chart type="doughnut" data={leastFavCourseData} layout="double" />
        </div>

        <h3>Most Useful and Difficult Courses in 1A</h3>
        <p>
          Majority of us found SYDE 121 to be the most useful course. At the
          same time, over half of us found SYDE 113 to be the most difficult
          course, with SYDE 111 as a close second.
        </p>
        <div className={styles.doubleChart}>
          <Chart type="doughnut" data={usefulCourseData} layout="double" />
          <Chart type="doughnut" data={difficultCourseData} layout="double" />
        </div>

        <h3>Lecture Attendance in 1A</h3>
        <div className={styles.doubleChart}>
          <Chart type="histogram" data={lectureData} layout="double" />
          <p className={styles.textRight}>
            On average, SYDE students attended lectures only 64% of the time in
            1A. The urge to hit snooze and sleep in during those 8am lectures
            was just too strong 😴
          </p>
        </div>

        <BottomNav currentPage="academics" />
      </div>
    </>
  );
}
