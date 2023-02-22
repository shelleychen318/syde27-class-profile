import React, { useState } from "react";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import styles from "./Chart.module.scss";


const PieChart = ({ data }) => {
  return (
    <div className={styles.chart}>
      <Pie
        data={{
          labels: data.label,
          datasets: [
            {
              label: "# of Students",
              data: data.val,
              backgroundColor: data.color,
              borderColor: "white",
              borderWidth: 2,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                usePointStyle: true,
                padding: 16,
              },
              display: true,
            },
            title: {
              display: true,
              text: data.title,
              font: {
                size: 16,
              },
            },
            subtitle: {
              display: true,
              fontSize: 14,
              text: "number of respondents:",
              padding: {
                bottom: 10,
              },
            },
          },
        }}
        height="450px"
        width="450px"
      />
    </div>
  );
};

export default PieChart;
