import Head from "next/head";

import { NavBar } from "../../components";
import styles from "../profile.module.scss";
import { PieChart } from "../../components";
import { Chart } from "../../components"

export default function Demographics() {

  // TEST DATA
  const data = {
    labels: ["Male", "Female", "Non-binary"],
    datasets: [
      {
        // label: "Genders",
        data: [29, 42, 3],
        backgroundColor: ["#9a464a", "#e98c8d", "#FFE4E0"],
      },
    ],
  };

  const options = {
    title: {
      text: "Gender Ratio",
    },
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

          {/* <PieChart data={data} options={options} /> */}

          <Chart type="Pie" data={data} position="left" options={options} />
        </div>
      </div>
    </>
  );
}
