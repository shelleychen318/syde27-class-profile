import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BoxPlot = ({ data }) => {
  const canvasRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // Check if there is an existing chart instance associated with the canvas element
    if (chart) {
      // If so, destroy the chart instance before creating a new one
      chart.destroy();
    }

    const updatedChart = new Chart(canvas, {
      type: "boxplot",
      data: {
        datasets: [],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });
    setChart(updatedChart);
  }, [chart]);

  useEffect(() => {
    if (chart) {
      const updatedData = {
        datasets: [],
      };
      // Iterate through the data and create a dataset for each set of box plot data
      data.forEach((d, i) => {
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

