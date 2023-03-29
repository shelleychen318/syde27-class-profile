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
    title: "How easy did you find it was to make friends? (5 being very easy)",
    xAxis: "Level of Ease",
    yAxis: "Number of Students",
    n: data.friendsRespondents,
  };

  const homeTimeData = {
    label: data.homeTimes,
    val: data.homeTimeValues,
    color: colorTheme[1],
    title: "On average, how many times did you visit home each month in 1A?",
    xAxis: "Number of Home Visits Per Month",
    yAxis: "Number of Students",
    n: data.homeTimeRespondents,
  };

  const purityData = {
    label: data.purities,
    val: data.purityValues,
    color: colorTheme[1],
    title: "Rice Purity Scores",
    xAxis: "Rice Purity Score Ranges",
    yAxis: "Number of Students",
    n: data.purityRespondents,
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
          The average SYDE student spends x amount of time studying and x amount
          of time sleeping. Add a joke or something.
        </p>
        <div className={styles.doubleChart}>
          <Chart type="bar" data={studyTimeData} layout="double" />
          <Chart type="bar" data={sleepTimeData} layout="double" />
        </div>
        <h3>Friends in SYDE</h3>
        <div className={styles.singleChart}>
          <Chart type="bar" data={friendsData} layout="single" />
        </div>
        <h3>Home</h3>
        <div className={styles.singleChart}>
          <Chart type="bar" data={homeTimeData} layout="single" />
        </div>
        <h3>Rice Purity 😳</h3>
        <p>
          Looks like many of us aim for 90s even outside of school! In all
          seriousness, the average rice purity score is x.
        </p>
        <div className={styles.singleChart}>
          <Chart type="bar" data={purityData} layout="single" />
        </div>
        <BottomNav currentPage="lifestyle" />
      </div>
    </>
  );
}
