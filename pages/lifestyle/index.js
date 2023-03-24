import Head from "next/head";
import { NavBar } from "../../components";
import { Chart } from "../../components";
import styles from "../profile.module.scss";
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
  const colorTheme = ["#518C63", "#85C296", "#BDE0C5"];

  const sleepTimeData = {
    label: data.sleepTimes,
    val: data.sleepTimeValues,
    color: colorTheme[1],
    title: "On average, how many hours of sleep did you get each night in 1A?",
    n: data.sleepTimeRespondents,
  };

  const studyTimeData = {
    label: data.studyTimes,
    val: data.studyTimeValues,
    color: colorTheme[1],
    title: "Average time spent studying per day in 1A",
    n: data.studyTimeRespondents,
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
    n: data.friendsRespondents,
  };

  const homeTimeData = {
    label: data.homeTimes,
    val: data.homeTimeValues,
    color: colorTheme[1],
    title: "On average, how many times did you visit home each month in 1A?",
    n: data.homeTimeRespondents,
  };

  const purityData = {
    label: data.purities,
    val: data.purityValues,
    color: colorTheme[1],
    title: "Rice Purity Scores",
    n: data.purityRespondents,
  };

  return (
    <>
      <Head>
        <title>Lifestyle | SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={styles.content}>
        <div className={styles.lifestyle}>
          <h2>Lifestyle</h2>
          <h4>How's life?</h4>
          <br />

          <h3>Sleep and Study</h3>
          <div className={styles.doubleChart}>
            <Chart type="bar" data={sleepTimeData} layout="double" />
            <Chart type="bar" data={studyTimeData} layout="double" />
          </div>

          <h3>Friends in SYDE</h3>
          <div className={styles.singleChart}>
            <Chart type="bar" data={friendsData} layout="single" />
          </div>

          <h3>Home</h3>
          <div className={styles.singleChart}>
            <Chart type="bar" data={homeTimeData} layout="single" />
          </div>

          <h3>Rice Purity</h3>
          <div className={styles.singleChart}>
            <Chart type="bar" data={purityData} layout="single" />
          </div>

        </div>
      </div>
    </>
  );
}
