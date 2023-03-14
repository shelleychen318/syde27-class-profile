import Head from "next/head";
import { NavBar } from "../../components";
import styles from "../profile.module.scss";
import { Chart } from "../../components";
import { PieChart } from "../../components";
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
  const colorTheme1 = ["#173753", "#6DAEDB", "#2892D7", "#1D70A2"];

  const averageData = {
    label: data.averages,
    val: data.averageValues,
    color: colorTheme1,
    title: "Average",
    n: data.averageRespondents, // number of respondents
  };

  const extraNumData = {
    label: data.extracurricularNum,
    val: data.extraNumValues,
    color: colorTheme1,
    title: "Extracurriculars",
    n: data.extraNumRespondents,
  };

  const extraTypeData = {
    label: data.extracurricularType,
    val: data.extraTypeValues,
    color: colorTheme1,
    title: "Type of Extracurriculars",
    n: data.extraTypeRespondents,
  };

  const extraRoleData = {
    label: data.extraRoles,
    val: data.extraRoleValues,
    color: colorTheme1,
    title: "Roles in Extracurriculars",
    n: data.extraRoleRespondents,
  };

  const enrichData = {
    label: data.enrichs,
    val: data.enrichValues,
    color: colorTheme1,
    title: "Enrichement Data",
    n: data.enrichsRespondents,
  };

    const postChoiceData = {
    label: data.postChoice,
    val: data.postChoicesValues,
    color: colorTheme1,
    title: "Post Secondary Choices",
    n: data.postChoicesRespondents,
  };

  const sydeBoolData = {
    label: data.sydeBools,
    val: data.sydeBoolValues,
    color: colorTheme1,
    title: "Yes or No to Syde?",
    n: data.sydeBoolRespondents,
  };

  const topChoiceData = {
    label: data.topChoices,
    val: data.topChoiceValues,
    color: colorTheme1,
    title: "Top Choices",
    n: data.topChoiceRespondents,
  };

    const considerData = {
    label: data.considers,
    val: data.considerValues,
    color: colorTheme1,
    title: "Consideration",
    n: data.considerRespondents,
  };

  const decisionData = {
    label: data.decisions,
    val: data.decisionValues,
    color: colorTheme1,
    title: "Decision",
    n: data.decisionRespondents,
  };

  const prepData = {
    label: data.preparation,
    val: data.prepareValues,
    color: colorTheme1,
    title: "Prep Level",
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
          <h4>
            What were we up to in high school?
          </h4>
          <br />
          <h3>High School Average</h3>

          <h3>Averages</h3>

          <div className={styles.doubleChart}>
            <Chart type="pie" data={averageData} position="left" />
            <Chart type="pie" data={extraNumData} position="right" />
          </div>

          <div className={styles.doubleChart}>
            <Chart type="pie" data={extraTypeData} position="left" />
            <Chart type="pie" data={extraRoleData} position="right" />
          </div>

          <div className={styles.doubleChart}>
            <Chart type="pie" data={enrichData} position="left" />
            <Chart type="pie" data={postChoiceData} position="right" />
          </div>

          <div className={styles.doubleChart}>
            <Chart type="pie" data={sydeBoolData} position="left" />
            <Chart type="pie" data={topChoiceData} position="right" />
          </div>

          <div className={styles.doubleChart}>
            <Chart type="pie" data={considerData} position="left" />
            <Chart type="pie" data={decisionData} position="right" />
          </div>

          <div className={styles.doubleChart}>
            <Chart type="pie" data={prepData} position="right" />
          </div>
        </div>
      </div>

    </>
  );
}
