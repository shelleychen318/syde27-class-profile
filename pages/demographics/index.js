import Head from "next/head";

import { NavBar } from "../../components";
import styles from "../profile.module.scss";
import { Chart } from "../../components";

export default function Demographics() {
  const colorTheme = ["#9a464a", "#e98c8d", "#FFDBDB"];

  // TEST DATA
  const genderData = {
    label: ["Male", "Female", "Non-binary"],
    val: [29, 42, 3],
    color: colorTheme,
    title: "Gender Ratio",
  };

  const sexualityData = {
    label: ["Heterosexual", "Bisexual", "Asexual"],
    val: [58, 12, 2],
    color: colorTheme,
    title: "Sexualities",
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
