import React from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import HorizontalBarChart from "./HorizontalBarChart";
import styles from "./Chart.module.scss";

const Chart = ({ type, data, position }) => {
  switch (type) {
    case "pie":
      return (
        <div className={`${styles[position]}`}>
          <PieChart data={data} />
        </div>
      );
    case "bar":
      return (
        <div className={`${styles[position]}`}>
          <BarChart data={data} />
        </div>
      );
    case "horizontalBar":
      return (
        <div className={`${styles[position]}`}>
          <HorizontalBarChart data={data} />
        </div>
      );
    default:
      return <h1>Invalid Chart Type!</h1>;
  }
};

export default Chart;
