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

  // const ethnicityData = {
  //   label: data.ethnicities,
  //   val: data.ethnicityValues,
  //   color: colorTheme[1],
  //   title: "Ethnicities",
  //   n: data.ethnicityRespondents,
  // };

  // const religionData = {
  //   label: data.religions,
  //   val: data.religionValues,
  //   color: colorTheme[1],
  //   title: "Religions",
  //   n: data.religionRespondents,
  // };

  // const hometownData = {
  //   label: data.hometowns,
  //   val: data.hometownValues,
  //   color: colorTheme[1],
  //   title: "Hometowns",
  //   n: data.hometownRespondents,
  // };

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
        </div>
      </div>

    </>
  );
}
