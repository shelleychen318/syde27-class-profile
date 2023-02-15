import React, { useState } from "react";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data, options }) => {
  return (
    <div>
      <Pie
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          legend: {
            position: "right",
            display: true,
          },
          title: {
            display: true,
            text: options.title,
            fontSize: 15,
            fontColor: "black",
            padding: 14,
          },
        }}
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default PieChart;
