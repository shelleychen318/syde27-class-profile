import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const MultiBarChart = ({ data }) => {
  function dataset_chartjs(data) {
    var datasets = [];
    var datasets_sorted = [];
    for (var i = 0; i < data.val.length; i++) {
      var add_data = {
        label: data.label[i],
        data: data.val[i],
        backgroundColor: data.color[i],
        borderColor: data.color[i],
        hoverBorderWidth: 2,
        sum: data.val[i].reduce((a, b) => a + b, 0),
      };
      datasets.push(add_data);
    }
    datasets = orderBySubKey(datasets, "sum");

    datasets.forEach(function (elem, index) {
      datasets_sorted.push(elem.value);
    });

    return datasets_sorted;
  }

  function orderBySubKey(input, key) {
    return Object.keys(input)
      .map((key) => ({ key, value: input[key] }))
      .sort((a, b) => a.value[key] - b.value[key]);
  }
  return (
    <div>
      <Bar
        data={{
          labels: data.label,
          datasets: dataset_chartjs(data),
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              title: {
                display: true,
                text: data.xAxis,
                font: {
                  size: 15,
                },
              },
            },
            y: {
              title: {
                display: true,
                text: data.yAxis,
                font: {
                  size: 15,
                },
              },
            },
          },
          plugins: {
            legend: {
              position: "right",
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
              text: "number of respondents: " + data.n,
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

export default MultiBarChart;
