import Head from "next/head";
import { NavBar } from "../../components";
import { Chart } from "../../components";
import { BottomNav } from "../../components";
import styles from "../profile.module.scss";
import colors from "../../styles/colors.module.scss";
import { getSortedDemographicsData } from "../../lib/sort/getSortedDemographicsData";
import { BoxPlot } from "../../components";
import { BoxPlotChart } from "../../components";

export const getStaticProps = async () => {
  const data = await getSortedDemographicsData();
  return {
    props: {
      ...data,
    },
  };
};

export default function Demographics(data) {
  const colorTheme = [
    colors.demographics1,
    colors.demographics2,
    colors.demographics3,
    colors.demographics4,
  ];

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
    n: data.ethnicityRespondents,
    xAxis: "Ethnicity",
    yAxis: "Number of Students",
  };

  const religionData = {
    label: data.religionUniques,
    val: data.religionValues,
    color: colorTheme[1],
    title: "Religions",
    n: data.religionRespondents,
    xAxis: "Religion",
    yAxis: "Number of Students",
  };

  const hometownData = {
    label: data.hometowns,
    val: data.hometownValues,
    color: colorTheme[1],
    title: "Hometowns",
    n: data.hometownRespondents,
    xAxis: "Number of Students",
    yAxis: "Hometown",
  };

  const boxPlotData = {
    label: ["1-10", "11-20", "21-30"],
    val: [
      {
        name: "Group 1",
        q1: 1,
        q2: 2,
        q3: 3,
        whiskerMin: 0,
        whiskerMax: 4,
        outliers: [5],
      },
      {
        name: "Group 2",
        q1: 2,
        q2: 3,
        q3: 4,
        whiskerMin: 1,
        whiskerMax: 5,
        outliers: [],
      },
      {
        name: "Group 3",
        q1: 3,
        q2: 4,
        q3: 5,
        whiskerMin: 2,
        whiskerMax: 6,
        outliers: [],
      },
    ],
    color: colorTheme[1],
    title: "Box Plot Title",
  };

  const dynamicdata = {
    val: [1, 2, 3, 4, 5],
    label: ["data1", "data2", "data3", "data4", "data5"],
    color: colorTheme[1],
    title: "Box Plot Chart",
    xAxis: "X Axis",
    yAxis: "Y Axis",
    ymin: 0,
    ymax: 10,
    n: 5,
  };
  
  return (
    <>
      <Head>
        <title>Demographics | SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <div className={`${styles.content} ${styles.demographics}`}>
        <h2>Demographics</h2>
        <h4>
          What are the characteristics of the individuals who make up the SYDE
          2027 cohort?
        </h4>
        <br />
        <h3>Gender and Sexuality</h3>
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

        {/* <BoxPlot data={boxPlotData} /> */}

        <BoxPlotChart data={dynamicdata} height={500} width={500} />

        <BottomNav currentPage="demographics" />
      </div>
    </>
  );
}
