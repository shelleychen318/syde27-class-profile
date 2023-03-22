import Head from "next/head";
import { NavBar } from "../../components";
import styles from "../profile.module.scss";
import { Chart } from "../../components";
import { getSortedHighschoolData } from "../../lib/sort/getSortedHighschoolData";

export const getStaticProps = async () => {
  const data = await getSortedHighschoolData();
  return {
    props: {
      ...data,
    },
  };
};

export default function Highschool(data) {
  const colorTheme = ["#6698d4", "#8fbedc", "#C1E1F4"];

  const averageData = {
    label: data.averages,
    val: data.averageValues,
    color: colorTheme[1],
    title: "High School Admission Averages",
    xAxis: "Average (%)",
    yAxis: "Number of Students",
    n: data.averageRespondents,
  };

  const extraNumData = {
    label: data.extracurricularNum,
    val: data.extraNumValues,
    color: colorTheme[1],
    title: "How many extracurriculars were we part of?",
    xAxis: "Number of Extracurriculars",
    yAxis: "Number of Students",
    n: data.extraNumRespondents,
  };

  const extraTypeData = {
    label: data.extracurricularType,
    val: data.extraTypeValues,
    color: colorTheme[0],
    title: "What extracurriculars did we do?",
    xAxis: "Extracurricular Type",
    yAxis: "Number of Students",
    n: data.extraTypeRespondents,
  };

  const extraRoleData = {
    label: data.extraRoleUniques,
    val: data.extraRoleValues,
    color: colorTheme[1],
    title: "Roles in Extracurriculars",
    xAxis: "Extracurricular Role",
    yAxis: "Number of Students",
    n: data.extraRoleRespondents,
  };

  const enrichData = {
    label: data.enrichUniques,
    val: data.enrichValues,
    color: colorTheme,
    title: "Enrichment Data",
    xAxis: "Number of Students",
    yAxis: "Enrichment Program",
    n: data.enrichRespondents,
  };

  const postChoiceData = {
    label: data.postChoice,
    val: data.postChoicesValues,
    color: colorTheme,
    title: "Post Secondary Choices",
    n: data.postChoicesRespondents,
  };

  const sydeBoolData = {
    label: data.sydeBools,
    val: data.sydeBoolValues,
    color: colorTheme,
    title: "Was SYDE your top choice?",
    n: data.sydeBoolRespondents,
  };

  const topChoiceData = {
    label: data.topChoices,
    val: data.topChoiceValues,
    color: colorTheme[1],
    title: "Top Choices",
    n: data.topChoiceRespondents,
  };

  const considerData = {
    label: data.considers,
    val: data.considerValues,
    color: colorTheme,
    title: "Consideration",
    n: data.considerRespondents,
  };

  const decisionData = {
    label: data.decisions,
    val: data.decisionValues,
    color: colorTheme[0],
    title: "When did you decide you wanted to go into SYDE?",
    n: data.decisionRespondents,
  };

  const prepData = {
    label: data.preparation,
    val: data.prepareValues,
    color: colorTheme[1],
    title: "On a scale of 1-10, how well did high school prepare you for SYDE?",
    xAxis: "Level of Preparedness",
    yAxis: "Number of Students",
    n: data.prepareRespondents,
  };

  return (
    <>
      <Head>
        <title>High School | SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={styles.content}>
        <div className={styles.highschool}>
          <h2>High School</h2>
          <h4>What were we up to in high school?</h4>
          <br />

          <h3>High School Admission Average</h3>
          <div className={styles.doubleChart}>
            <Chart type="histogram" data={averageData} layout="double" />
            <p className={styles.text}>
              The admission average for SYDE 2027 was (insert average) %. Some
              more text about interesting admission average facts blah blah
              blah.
            </p>
          </div>

          <h3>Enrichment Programs</h3>
          <div className={styles.singleChart}>
            <Chart type="horizontalBar" data={enrichData} layout="single" />
          </div>

          <h3>Extracurriculars</h3>
          <div className={styles.doubleChart}>
            <Chart type="histogram" data={extraNumData} layout="double" />
            <p className={styles.text}>
              Add some interesting text about extra curriculars. Blah blah blah.
            </p>
          </div>

          <div className={styles.singleChart}>
            <Chart type="bar" data={extraTypeData} layout="double" />
            <Chart type="bar" data={extraRoleData} layout="double" />
          </div>

          <h3>Miscellaneous</h3>
          <div className={styles.doubleChart}>
            <Chart type="bar" data={decisionData} layout="double" />
            <Chart type="histogram" data={prepData} layout="double" />
          </div>
          <br />
          <div className={styles.doubleChart}>
            <Chart type="pie" data={sydeBoolData} layout="double" />
            <Chart type="horizontalBar" data={topChoiceData} layout="double" />
          </div>
          <br />

          <h3>Top Choice</h3>
          <p className={styles.text}>
            For those of us who said SYDE was not our top choice, these are the programs we were striving for in high school. 
          </p>
          <div className={styles.wordCloudContainer}>
            <img
              src="/assets/topChoiceWordCloud.png"
              alt="class picture"
              className={styles.wordCloud}
            />
          </div>
        </div>
      </div>
    </>
  );
}
