import React from "react";

import Sidebar from "../components/Sidebar";
import Form from "../components/Form";
import { useSelector } from "react-redux";
import Discard from "../components/Discart";
import DashbodBox from "../components/DashbodBox";
import { Outlet } from "react-router-dom";
function Dashbod() {
  const showTodoForm = useSelector((state) => state.app.showTodoForm);
  const showDiscardPage = useSelector((state) => state.app.showDiscardPage);
  return (
    <div className="flex justify-between  ">
      <Sidebar />

      <Outlet />
      {showTodoForm ? <Form /> : null}
      {showDiscardPage ? <Discard text="Discard Task" /> : null}
    </div>
  );
}

export default Dashbod;
