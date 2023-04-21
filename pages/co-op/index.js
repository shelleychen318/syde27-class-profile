import Head from "next/head";
import { NavBar } from "../../components";
import { Chart } from "../../components";
import { BottomNav } from "../../components";
import styles from "../profile.module.scss";
import colors from "../../styles/colors.module.scss";
import { getSortedCoopData } from "../../lib/sort/getSortedCoopData";

export const getStaticProps = async () => {
  const data = await getSortedCoopData();
  return {
    props: {
      ...data,
    },
  };
};

export default function Coop(data) {
  const colorTheme = [
    colors.coop1,
    colors.coop2,
    colors.coop3,
    colors.coop4,
    colors.coop5,
  ];

  const roundData = {
    label: data.rounds,
    val: data.roundValues,
    color: colorTheme[1],
    title: "Employment Rounds",
    n: data.roundRespondents,
    xAxis: "Round",
    yAxis: "Number of Students",
  };

  const jobPlatformData = {
    label: data.jobPlatforms,
    val: data.jobPlatformValues,
    color: [colorTheme[0], colorTheme[2]],
    title: "Job Platforms",
    n: data.jobPlatformRespondents,
  };

  const jobTypeData = {
    label: data.jobTypes,
    val: data.jobTypeValues,
    color: colorTheme[1],
    title: "What jobs did we do?",
    n: data.jobTypeRespondents,
    xAxis: "Job Type",
    yAxis: "Number of Students",
  };

  const locationData = {
    label: data.locations,
    val: data.locationValues,
    color: colorTheme[1],
    title: "Job Locations",
    n: data.locationRespondents,
    xAxis: "Location",
    yAxis: "Number of Students",
  };

  const payVsSatisfactionData = {
    val: data.pay,
    color: colorTheme[1],
    title: "Co-op Pay vs Job Satisfaction",
    n: data.payRespondents,
    xAxis: "Pay ($CAD/hr)",
    yAxis: "Level of Satisfaction",
    ymin: 1,
  };

  return (
    <>
      <Head>
        <title>Co-op | SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={`${styles.content} ${styles.coop}`}>
        <h2>Co-op</h2>
        <h4>Where is SYDE 2027 working?</h4>
        <br />

        <h3>Co-op Search Process</h3>
        <div className={styles.doubleChart}>
          <Chart type="bar" data={roundData} layout="double" />
          <Chart type="doughnut" data={jobPlatformData} layout="double" />
        </div>

        <h3>Job Roles</h3>
        <div className={styles.singleChart}>
          <Chart type="bar" data={jobTypeData} layout="single" />
        </div>

        <h3>Co-op Locations</h3>
        <div className={styles.doubleChart}>
          <p className={styles.textLeft}>
            68% of us had an in-person job, while 32% of us had a remote job.
            Among those who had in-person jobs, most were located in the GTA.
          </p>
          <Chart type="bar" data={locationData} layout="double" />
        </div>

        <h3>Co-op Pay vs Job Satisfaction</h3>
        <div className={styles.doubleChart}>
          <Chart type="scatter" data={payVsSatisfactionData} layout="double" />
          <p className={styles.textRight}>
            This chart aims to explore the relationship between job compensation
            and satisfaction, where a score of 1 indicates extreme
            dissatisfaction and 5 indicates extreme satisfaction.
            <br />
            <br />
            While the data reveals a discernible pattern, it is worth noting
            that all individuals earning $25 or more rated their satisfaction
            level 4 or higher. Maybe money does buy happiness after all 🤷‍♀️
          </p>
        </div>

        <BottomNav currentPage="co-op" />
      </div>
    </>
  );
}
