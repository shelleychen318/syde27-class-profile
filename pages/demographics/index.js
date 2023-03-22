import Head from "next/head";
import { NavBar } from "../../components";
import { Chart } from "../../components";
import { PieChart } from "../../components";
import styles from "../profile.module.scss";
import { getSortedDemographicsData } from "../../lib/sort/getSortedDemographicsData";

export const getStaticProps = async () => {
  const data = await getSortedDemographicsData();
  return {
    props: {
      ...data,
    },
  };
};

export default function Demographics(data) {
  const colorTheme = ["#9a464a", "#D87576", "#F5C8C8", "#FFE4E4"];

  const genderData = {
    label: data.genders,
    val: data.genderValues,
    color: colorTheme,
    title: "Gender Ratio",
    n: data.genderRespondents, 
  };

  const sexualityData = {
    label: data.sexualities,
    val: data.sexualityValues,
    color: colorTheme,
    title: "Sexualities",
    n: data.sexualityRespondents,
  };

  const ethnicityData = {
    label: data.ethnicityUniques,
    val: data.ethnicityValues,
    color: colorTheme[1],
    title: "Ethnicities",
    xAxis: "Ethnicity",
    yAxis: "Number of Students",
    n: data.ethnicityRespondents,
  };

  const religionData = {
    label: data.religionUniques,
    val: data.religionValues,
    color: colorTheme[1],
    title: "Religions",
    xAxis: "Religion",
    yAxis: "Number of Students",
    n: data.religionRespondents,
  };

  const hometownData = {
    label: data.hometowns,
    val: data.hometownValues,
    color: colorTheme[1],
    title: "Hometowns",
    xAxis: "Number of Students",
    yAxis: "Hometown",
    n: data.hometownRespondents,
  };

  return (
    <>
      <Head>
        <title>Demographics | SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <div className={styles.content}>
        <div className={styles.demographics}>
          <h2>Demographics</h2>
          <h4>
            What are the characteristics of the individuals who make up the SYDE
            2027 cohort?
          </h4>
          <br />
          <h3>Gender and Sexuality</h3>

          <div className={styles.chartConatiner}>
            <div className={styles.doubleChart}>
              <Chart type="pie" data={genderData} layout="double" />
              <Chart type="pie" data={sexualityData} layout="double" />
            </div>

            <h3>Ethnicities and Religion</h3>
            <div className={styles.doubleChart}>
              <Chart type="bar" data={ethnicityData} layout="double" />
              <Chart type="bar" data={religionData} layout="double" />
            </div>

            <h3>Hometowns</h3>
            <div className={styles.singleChart}>
              <Chart type="horizontalBar" data={hometownData} layout="single" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
