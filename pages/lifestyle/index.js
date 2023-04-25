import Head from "next/head";
import { NavBar } from "../../components";
import { Chart } from "../../components";
import { BottomNav } from "../../components";
import styles from "../profile.module.scss";
import colors from "../../styles/colors.module.scss";
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
  const colorTheme = [
    colors.lifestyle1,
    colors.lifestyle2,
    colors.lifestyle3,
    colors.lifestyle4,
    colors.lifestyle5,
  ];

  const studyTimeData = {
    label: data.studyTimes,
    val: data.studyTimeValues,
    color: colorTheme[1],
    title: "Average Time Spent Studying Per Day in 1A",
    n: data.studyTimeRespondents,
    xAxis: "Hours Spent Studying Per Day",
    yAxis: "Number of Students",
  };

  const sleepTimeData = {
    label: data.sleepTimes,
    val: data.sleepTimeValues,
    color: colorTheme[1],
    title: "Average Hours of Sleep Per Night in 1A",
    n: data.sleepTimeRespondents,
    xAxis: "Hours of Sleep Per Night",
    yAxis: "Number of Students",
  };

  const stressLevelsData = {
    label: data.stressLevels1A,
    val: [
      {
        label: "1A",
        data: data.stressLevel1AValues,
        backgroundColor: colorTheme[0],
      },
      {
        label: "Co-op",
        data: data.stressLevelCoopValues,
        backgroundColor: colorTheme[2],
      },
    ],
    title: "Stress Levels in 1A vs Co-op",
    n: data.stressLevel1ARespondents,
    xAxis: "Stress Level",
    yAxis: "Number of Students",
  };

  const exerciseLevelsData = {
    label: data.exerciseLevels1A,
    val: [
      {
        label: "1A",
        data: data.exerciseLevel1AValues,
        backgroundColor: colorTheme[0],
      },
      {
        label: "Co-op",
        data: data.exerciseLevelCoopValues,
        backgroundColor: colorTheme[2],
      },
    ],
    title: "Exercise Frequency in 1A vs Co-op",
    n: data.exerciseLevel1ARespondents,
    xAxis: "Exercise Frequency",
    yAxis: "Number of Students",
  };

  const residenceData = {
    label: data.residences,
    val: data.residenceValues,
    color: colorTheme,
    title: "Living Arrangements in 1A",
    n: data.residenceRespondents,
  };

  const friendsData = {
    label: data.friendsCount,
    val: data.friendsValues,
    color: colorTheme[1],
    title: "How easy was it to make friends?",
    n: data.friendsRespondents,
    xAxis: "Level of Ease",
    yAxis: "Number of Students",
  };

  const homeTimeData = {
    label: data.homeTimes,
    val: data.homeTimeValues,
    color: colorTheme[1],
    title: "Home Visits in 1A",
    n: data.homeTimeRespondents,
    xAxis: "Number of Home Visits Per Month",
    yAxis: "Number of Students",
  };

  const purityData = {
    label: data.purities,
    val: data.purityValues,
    color: colorTheme[1],
    title: "Rice Purity Scores",
    n: data.purityRespondents,
    xAxis: "Rice Purity Score",
    yAxis: "Number of Students",
  };

  return (
    <>
      <Head>
        <title>Lifestyle | SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={`${styles.content} ${styles.lifestyle}`}>
        <h2>Lifestyle</h2>
        <h4>How's life?</h4>
        <br />

        <h3>Study and Sleep Time</h3>
        <p>
          On average, SYDE students spend 4.9 hours studying and 6.1 hours
          sleeping. Shoutout to the 5 students who dedicate 9-10 hours per day
          to studying, y'all are the true embodiment of the "rise and grind"
          mentality!
        </p>
        <div className={styles.doubleChart}>
          <Chart type="histogram" data={studyTimeData} layout="double" />
          <Chart type="histogram" data={sleepTimeData} layout="double" />
        </div>

        <h3>Stress Levels in 1A vs Co-op</h3>
        <div className={styles.doubleChart}>
          <Chart
            type="stackedHistogram"
            data={stressLevelsData}
            layout="double"
          />
          <p className={styles.textRight}>
            Data was collected on the stress levels of students during their 1A
            term and their first co-op term. The stress levels were rated on a
            scale of 1 to 5, where 1 indicated little to no stress and 5
            indicated high stress.
            <br />
            <br />
            In general, students experienced lower levels of stress during their
            co-op term compared to their 1A term, as the average stress level
            during 1A was 3.8, while the average stress level during co-op was
            2.4.
          </p>
        </div>

        <h3>Exercise Frequency in 1A vs Co-op</h3>
        <div className={styles.doubleChart}>
          <Chart type="multiBar" data={exerciseLevelsData} layout="double" />
          <p className={styles.textRight}>
            Data was collected on the stress levels of students during their 1A
            term and their first co-op term. The stress levels were rated on a
            scale of 1 to 5, where 1 indicated little to no stress and 5
            indicated high stress.
            <br />
            <br />
            In general, students experienced lower levels of stress during their
            co-op term compared to their 1A term, as the average stress level
            during 1A was 3.8, while the average stress level during co-op was
            2.4.
          </p>
        </div>

        <h3>Living Arrangements in 1A</h3>
        <div className={styles.doubleChart}>
          <p className={styles.textLeft}>
            Over 90% of the cohort chose to live away from home for university.
            The most popular on-campus housing was CMH, with UWP as the second
            most popular.
          </p>
          <Chart type="doughnut" data={residenceData} layout="double" />
        </div>

        <h3>Friends and Home Visits</h3>
        <div className={styles.doubleChart}>
          <Chart type="histogram" data={friendsData} layout="double" />
          <Chart type="histogram" data={homeTimeData} layout="double" />
        </div>

        <h3>Rice Purity 😳</h3>
        <p>
          Looks like many of us strive for 90s even outside of school! In all
          seriousness, the average rice purity score is 72.2.
        </p>
        <div className={styles.singleChart}>
          <Chart type="histogram" data={purityData} layout="single" />
        </div>

        <BottomNav currentPage="lifestyle" />
      </div>
    </>
  );
}
