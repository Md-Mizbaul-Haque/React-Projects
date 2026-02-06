import React from "react";
import TodoBoard from "./TodoBoard";
import CompletedTask from "./completedTask";
import PieChart from "./pieChart";

function DashbodBox() {
  return (
    <div className="w-full max-h-[83vh]     m-6 bg-white grid grid-cols-2 justify-between items-center  ">
      <TodoBoard />
      <div className="grid grid-rows-2">
        <PieChart />
        <CompletedTask />
      </div>
    </div>
  );
}

export default DashbodBox;
