import { useState, useEffect, Component, createRef } from "react";
import { Chart, LinearScale, CategoryScale } from "chart.js";
import {
  BoxPlotController,
  BoxAndWiskers,
  Violin,
  ViolinController,
} from "@sgratzl/chartjs-chart-boxplot";

Chart.register(
  BoxPlotController,
  BoxAndWiskers,
  Violin,
  ViolinController,
  LinearScale,
  CategoryScale
);
class BoxPlotChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = createRef();
    this.myChart = null;
  }

  componentWillUnmount() {
    // Add this method to destroy the chart instance
    if (this.myChart) {
      this.myChart.destroy();
    }
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.label;
    this.myChart.data.datasets[0].data = this.props.data.val;
    this.myChart.data.datasets[0].backgroundColor = this.props.data.color;
    this.myChart.data.datasets[0].outlierColor = "rgb(255, 99, 132)";
    this.myChart.options.plugins.title.text = this.props.data.title;
    this.myChart.options.plugins.subtitle.text =
      "number of respondents: " + this.props.data.n;
    this.myChart.options.scales.x.title.text = this.props.data.xAxis;
    this.myChart.options.scales.y.title.text = this.props.data.yAxis;
    this.myChart.options.scales.y.min = this.props.data.ymin;
    this.myChart.options.scales.y.max = this.props.data.ymax;
    this.myChart.update();
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
      type: "boxplot",
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: this.props.data.title,
            font: {
              size: 16,
            },
          },
          subtitle: {
            display: true,
            text: "number of respondents: " + this.props.data.n,
            padding: {
              bottom: 20,
            },
          },
        },
        scales: {
          x: {
            gridlines: {
              lineWidth: 1,
            },
            title: {
              display: true,
              text: this.props.data.xAxis,
              font: {
                size: 15,
              },
            },
          },
          y: {
            gridlines: {
              lineWidth: 1,
            },
            title: {
              display: true,
              text: this.props.data.yAxis,
              font: {
                size: 15,
              },
            },
            min: this.props.data.ymin,
            max: this.props.data.ymax,
          },
        },
      },
      data: {
        labels: this.props.data.label,
        datasets: [
          {
            data: this.props.data.val,
            backgroundColor: this.props.data.color,
            borderColor: "gray",
            hoverBackgroundColor: "white",
            borderWidth: 1.5,
          },
        ],
      },
    });
  }

  render() {
    return (
      <canvas
        ref={this.chartRef}
        height={this.props.height}
        width={this.props.width}
      />
    );
  }
}

export default function BoxPlot(props) {
  const [data] = useState({
    val: [],
  });

  useEffect(() => {
    data.title = props.data.title;
    data.val = props.data.val;
    data.label = props.data.label;
    data.xAxis = props.data.xAxis;
    data.yAxis = props.data.yAxis;
    data.ymin = props.data.ymin;
    data.ymax = props.data.ymax;
    data.color = props.data.color;
    data.n = props.data.n;
  });

  return (
    <div className="chart">
      <BoxPlotChart
        data={data}
        height={props.height ? props.height : "100%"}
        width={props.width ? props.width : "100%"}
      />
    </div>
  );
}
