import Head from "next/head";
import { NavBar } from "../../components";
import { Chart } from "../../components";
import styles from "../profile.module.scss";
import { getSortedDemographicsData } from "../../lib/sort/getSortedDemographicsData"

export const getStaticProps = async () => {
  const data = await getSortedDemographicsData();
  return {
    props: {
      ...data
    }
  }
}

export default function Demographics(data) {
  const colorTheme = ["#9a464a", "#D87576", "#F5C8C8", "#FFE4E4"];
  const primaryColor = colorTheme[0];

  const genderData = {
    label: data.genders,
    val: data.genderValues,
    color: colorTheme,
    title: "Gender Ratio",
    n: data.genderRespondents // number of respondents
  };

  const sexualityData = {
    label: data.sexualities,
    val: data.sexualityValues,
    color: colorTheme,
    primaryColor: "#9a464a",
    title: "Sexualities",
    n: data.sexualityRespondents,
    xAxis: "Sexualities",
    yAxis: "Number of Students"
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

          {/* <PieChart data={data} options={options} className={styles.left}/> */}

          <div className={styles.doubleChart}>
            <Chart type="pie" data={genderData} position="left" />
            <Chart type="pie" data={sexualityData} position="right" />
          </div>
        </div>
      </div>
    </>
  );
}




