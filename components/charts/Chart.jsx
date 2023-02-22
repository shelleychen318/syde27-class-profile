import React from "react";
import PieChart from "./PieChart";
import styles from "./Chart.module.scss";

const Chart = ({ type, data, position, options }) => {

  switch (type) {
    case "pie":
      return (
        <div className={`${styles[position]}`}>
          <PieChart data={data} options={options} />
        </div>
      );
    default:
      return <h1>Invalid Chart Type!</h1>;
  }
};

export default Chart;
