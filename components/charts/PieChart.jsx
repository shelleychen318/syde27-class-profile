import React, { useState } from "react";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data }) => {
  return (
    <div>
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
          legend: {
            position: "right",
            display: true,
          },
          title: {
            display: true,
            text: data.title,
          },
        }}
        height="450px"
        width="450px"
      />
    </div>
  );
};

export default PieChart;
