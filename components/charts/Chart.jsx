import React from "react";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import HorizontalBarChart from "./HorizontalBarChart";
import Histogram from "./Histogram";
import BoxPlotChart from "./BoxPlotChart";
import MultiBarChart from "./MultiBarChart";
import ScatterPlot from "./ScatterPlot";
import styles from "./Chart.module.scss";

const Chart = ({ type, data, layout, width, height }) => {
  switch (type) {
    case "pie":
      return (
        <div className={`${styles[layout]}`}>
          <PieChart data={data} />
        </div>
      );
    case "doughnut":
      return (
        <div className={`${styles[layout]}`}>
          <DoughnutChart data={data} />
        </div>
      );
    case "bar":
      return (
        <div className={`${styles[layout]}`}>
          <BarChart data={data} />
        </div>
      );
    case "horizontalBar":
      return (
        <div className={`${styles[layout]}`}>
          <HorizontalBarChart data={data} />
        </div>
      );
    case "histogram":
      return (
        <div className={`${styles[layout]}`}>
          <Histogram data={data} />
        </div>
      );
    case "box":
      return (
        <div className={`${styles[layout]}`}>
          <BoxPlotChart data={data} width={width} height={height} />
        </div>
      );
    case "multiBar":
      return (
        <div className={`${styles[layout]}`}>
          <MultiBarChart data={data} width={width} height={height} />
        </div>
      );
    case "scatter":
      return (
        <div className={`${styles[layout]}`}>
          <ScatterPlot data={data} width={width} height={height} />
        </div>
      );
    default:
      return <h1>Invalid Chart Type!</h1>;
  }
};

export default Chart;
