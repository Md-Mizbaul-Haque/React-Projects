import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const todos = useSelector((state) => state.todos.todos);

  const { completed, inProgress, notStarted } = todos.reduce(
    (acc, curr) => {
      if (curr.status === "Completed") acc.completed++;
      else if (curr.status === "In Progress") acc.inProgress++;
      else if (curr.status === "Not Started") acc.notStarted++;
      return acc;
    },
    {
      completed: 0,
      inProgress: 0,
      notStarted: 0,
    },
  );

  // ✅ build chart data dynamically (NO zero values)
  const labels = [];
  const values = [];
  const colors = [];

  if (completed > 0) {
    labels.push("Completed");
    values.push(completed);
    colors.push("#22c55e");
  }

  if (inProgress > 0) {
    labels.push("In Progress");
    values.push(inProgress);
    colors.push("#facc15");
  }

  if (notStarted > 0) {
    labels.push("Not Started");
    values.push(notStarted);
    colors.push("#ef4444");
  }

  const hasData = values.length > 0;

  const data = {
    labels: hasData ? labels : ["No Data"],
    datasets: [
      {
        data: hasData ? values : [1],
        backgroundColor: hasData ? colors : ["#a69f9f"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      datalabels: {
        color: "#fff",
        formatter: (value, context) => {
          if (!hasData) return "";
          const total = context.chart.data.datasets[0].data.reduce(
            (a, b) => a + b,
            0,
          );
          return `${((value / total) * 100).toFixed(1)}%`;
        },
      },
    },
  };

  return (
    <div style={{ width: "200px", margin: "auto", marginTop: "5px" }} className="">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
