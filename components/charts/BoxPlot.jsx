import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

import { LinearScale, CategoryScale } from "chart.js";
import {
  BoxPlotController,
  BoxAndWiskers,
  Violin,
  ViolinController,
} from "@sgratzl/chartjs-chart-boxplot";
//import { BoxPlotChart } from '@sgratzl/chartjs-chart-boxplot';
// register controller in chart.js and ensure the defaults are set
Chart.register(
  BoxPlotController,
  BoxAndWiskers,
  Violin,
  ViolinController,
  LinearScale,
  CategoryScale
);

const BoxPlot = ({ data }) => {
  const canvasRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // Check if there is an existing chart instance associated with the canvas element
    if (chart) {
      // If so, destroy the chart instance before creating a new one
      chart.destroy();
      const updatedChart = new Chart(canvas, {
        type: "boxplot",
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              text: data.title,
              color: "#ffffff",
              padding: 14,
            },
            subtitle: {
              display: true,

              text: "number of respondents: " + data.n,
              padding: {
                bottom: 20,
              },
            },
          },
          scales: {
            x: {
              grid: {
                zeroLineColor: "#fff",
                color: "rgba(255, 255, 255, 0.05)",
                lineWidth: 1,
              },
              title: {
                display: true,
                text: data.xAxis,
                color: "#ffffff",
              },
              ticks: {
                color: "#ffffff",
              },
            },
            y: {
              grid: {
                zeroLineColor: "#fff",
                color: "rgba(255, 255, 255, 0.05)",
                lineWidth: 1,
              },
              title: {
                display: true,
                text: data.yAxis,
                color: "#ffffff",
              },
              ticks: {
                color: "#ffffff",
              },
              min: parseInt(data.xmin),
              max: parseInt(data.xmax),
            },
          },
        },
        data: {
          labels: data.label,
          datasets: [
            {
              //label: '',
              data: data.val,
              backgroundColor: data.color,
              borderColor: "white",
              hoverBackgroundColor: "white",
              borderWidth: 1.5,
              marker: {
                color: "rgb(8,81,156)",
                outliercolor: "rgba(219, 64, 82, 0.6)",
                line: {
                  outliercolor: "rgba(219, 64, 82, 1.0)",
                  outlierwidth: 2,
                },
              },
            },
          ],
        },
      });
      setChart(updatedChart);
    }
  }, [chart]);

  useEffect(() => {
    if (chart) {
      const updatedData = {
        datasets: [],
      };
      // Iterate through the data and create a dataset for each set of box plot data
      data.val.forEach((d, i) => {
        updatedData.datasets.push({
          label: d.name,
          data: [
            {
              q1: d.q1,
              q2: d.q2,
              q3: d.q3,
              whiskerMin: d.whiskerMin,
              whiskerMax: d.whiskerMax,
              outliers: d.outliers,
            },
          ],
          borderColor: "black",
          backgroundColor: "white",
        });
      });
      chart.data = updatedData;
      chart.update();
    }
  }, [data, chart]);

  return <canvas ref={canvasRef} />;
};

export default BoxPlot;
