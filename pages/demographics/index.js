import Head from "next/head";
import { NavBar } from "../../components";
import { Chart } from "../../components";
import styles from "../profile.module.scss";

export default function Demographics() {

// SHEETY API
let url =
  "https://api.sheety.co/548ac0c82933b0ac3f74d465f7df8446/1AData/demographics";
fetch(url)
  .then((response) => response.json())
  .then((json) => {
    // Do something with the data
    console.log(json.demographics);
  });
  
  const primaryColor = "#9a464a";
  const colorTheme = ["#9a464a", "#e98c8d", "#FFDBDB"];

  // TEST DATA
  const genderData = {
    label: ["Male", "Female", "Non-binary"],
    val: [29, 42, 3],
    color: colorTheme,
    title: "Gender Ratio",
    n: 74 // number of respondents
  };

  const sexualityData = {
    label: ["Heterosexual", "Bisexual", "Asexual"],
    val: [58, 12, 2],
    color: colorTheme,
    primaryColor: "#9a464a",
    title: "Sexualities",
    n: 74,
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
            <Chart type="doughnut" data={genderData} position="left" />
            <Chart type="histogram" data={sexualityData} position="right" />
          </div>
        </div>
      </div>
    </>
  );
}
