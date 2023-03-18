import React from "react";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import HorizontalBarChart from "./HorizontalBarChart";
import Histogram from "./Histogram";
import styles from "./Chart.module.scss";

const Chart = ({ type, data }) => {
  switch (type) {
    case "pie":
      return (
        <div className={styles.graph}>
          <PieChart data={data} />
        </div>
      );
    case "doughnut":
      return (
        <div className={styles.graph}>
          <DoughnutChart data={data} />
        </div>
      );
    case "bar":
      return (
        <div className={styles.graph}>
          <BarChart data={data} />
        </div>
      );
    case "horizontalBar":
      return (
        <div className={styles.graph}>
          <HorizontalBarChart data={data} />
        </div>
      );
    case "histogram":
      return (
        <div className={styles.graph}>
          <Histogram data={data} />
        </div>
      );
    default:
      return <h1>Invalid Chart Type!</h1>;
  }
};

export default Chart;
