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
  const colorTheme = [colors.lifestyle1, colors.lifestyle2, colors.lifestyle3];

  const studyTimeData = {
    label: data.studyTimes,
    val: data.studyTimeValues,
    color: colorTheme[1],
    title: "Average Time Spent Studying Per Day in 1A",
    xAxis: "Hours Spent Studying Per Day",
    yAxis: "Number of Students",
    n: data.studyTimeRespondents,
  };

  const sleepTimeData = {
    label: data.sleepTimes,
    val: data.sleepTimeValues,
    color: colorTheme[1],
    title: "Average Hours of Sleep Per Night in 1A",
    xAxis: "Hours of Sleep Per Night",
    yAxis: "Number of Students",
    n: data.sleepTimeRespondents,
  };

  const stressLevelData = {
    label: data.stressLevels,
    val: data.stressLevelValues,
    color: colorTheme[1],
    title: "How stressed were you in 1A? (5 being extremely stressed)",
    n: data.stressLevelRespondents,
  };

  const friendsData = {
    label: data.friendsCount,
    val: data.friendsValues,
    color: colorTheme[1],
    title: "How easy was it to make friends? (5 being very easy)",
    xAxis: "Level of Ease",
    yAxis: "Number of Students",
    n: data.friendsRespondents,
  };

  const homeTimeData = {
    label: data.homeTimes,
    val: data.homeTimeValues,
    color: colorTheme[1],
    title: "Home Visits in 1A",
    xAxis: "Number of Home Visits Per Month",
    yAxis: "Number of Students",
    n: data.homeTimeRespondents,
  };

  const purityData = {
    label: data.purities,
    val: data.purityValues,
    color: colorTheme[1],
    title: "Rice Purity Scores",
    xAxis: "Rice Purity Score",
    yAxis: "Number of Students",
    n: data.purityRespondents,
  };

  // const stressLevels1AData = {
  //   label: data.stressLevels1A,
  //   val: data.stressLevel1AValues,
  //   color: colorTheme[1],
  //   title: "Stress Levels in 1A",
  //   xAxis: "Stress Level",
  //   yAxis: "Number of Students",
  //   n: data.stressLevel1ARespondents,
  // };

  // const stressLevelsCoopData = {
  //   label: data.stressLevelsCoop,
  //   val: data.stressLevelCoopValues,
  //   color: colorTheme[1],
  //   title: "Stress Levels in Co-op",
  //   xAxis: "Stress Level",
  //   yAxis: "Number of Students",
  //   n: data.stressLevelCoopRespondents,
  // };

  const stressLevelsData = {
    label: data.stressLevelsCoop,
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
    xAxis: "Stress Level",
    yAxis: "Number of Students",
    title: "Stress Levels in 1A vs Co-op",
    n: data.stressLevel1ARespondents,
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
          sleeping. Shoutout to the 5 students who dedicate 9+ hours per day to
          studying, y'all are the true embodiment of the "rise and grind"
          mentality!
        </p>
        <div className={styles.doubleChart}>
          <Chart type="histogram" data={studyTimeData} layout="double" />
          <Chart type="histogram" data={sleepTimeData} layout="double" />
        </div>

        <h3>Friends and Home Visits</h3>
        <div className={styles.doubleChart}>
          <Chart type="histogram" data={friendsData} layout="double" />
          <Chart type="histogram" data={homeTimeData} layout="double" />
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
