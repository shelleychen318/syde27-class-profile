import Head from "next/head";
import { NavBar } from "../../components";
import { Chart } from "../../components";
import styles from "../profile.module.scss";
import { getDemographics } from '../api/demographics/index';

export const getStaticProps = async () => {
  const data = await getDemographics();
  const gender = {};
  const sexuality = {};
  const ethnicity = {};
  const religion = {};
  const hometown = {};

  for (var object in data) {
    if (data[object].gender in gender) { gender[data[object].gender] += 1 } 
      else if (data[object].gender != '') { gender[data[object].gender] = 1 }

    if (data[object].sexuality in sexuality) { sexuality[data[object].sexuality] += 1 } 
      else if (data[object].sexuality != '') { sexuality[data[object].sexuality] = 1 }

    if (data[object].ethnicity in ethnicity) { ethnicity[data[object].ethnicity] += 1 } 
      else if (data[object].ethnicity != '') { ethnicity[data[object].ethnicity] = 1 }

    if (data[object].religion in religion) { religion[data[object].religion] += 1 } 
      else if (data[object].religion != '') { religion[data[object].religion] = 1 }

    if (data[object].hometown in hometown) { hometown[data[object].hometown] += 1 } 
      else if (data[object].hometown != '') { hometown[data[object].hometown] = 1 }
  }
  
  return {
    props: {
      gender,
      sexuality,
      ethnicity,
      religion,
      hometown
    }
  }
}

export default function Demographics(data) {
// SHEETY API
let url =
  "https://api.sheety.co/548ac0c82933b0ac3f74d465f7df8446/1AData/demographics";
fetch(url)
  .then((response) => response.json())
  .then((json) => {
    // Do something with the data
  });

  const primaryColor = "#9a464a";
  const colorTheme = ["#9a464a", "#e98c8d", "#FFDBDB"];


  // ----------------------------- THIS IS WHAT DATA LOOKS LIKE -----------------------------
  console.log(data)

  // Destructure the data.genders into arrays of keys and values as well as the sum of values (n)
  // Use this as the data for the chart, allowing it to update dynamically
  const genders = Object.keys(data.gender)
  const genderValues = Object.values(data.gender)
  const genderRespondents = genderValues.reduce((a, b) => a+b, 0)

  const genderData = {
    label: genders,
    val: genderValues,
    color: colorTheme,
    title: "Gender Ratio",
    n: genderRespondents // number of respondents
  };

  // Destructure the data.sexuality into arrays of keys and values
  // Use this as the data for the chart, allowing it to update dynamically
  const sexualities = Object.keys(data.sexuality)
  const sexualityValues = Object.values(data.sexuality)
  const sexualityRespondents = sexualityValues.reduce((a, b) => a+b, 0)

  const sexualityData = {
    label: sexualities,
    val: sexualityValues,
    color: colorTheme,
    primaryColor: "#9a464a",
    title: "Sexualities",
    n: sexualityRespondents,
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




