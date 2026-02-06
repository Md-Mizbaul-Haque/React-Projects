import React from "react";
import Layout from "./Layout";
import Dashbod from "../pages/Dashbod";
import DashbodBox from "../components/DashbodBox";
import TodoDetails from "../pages/TodoDetails";

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        element: <Dashbod />,
        children: [
          { index: true, element: <DashbodBox /> },
          { path: "todo/:id", element: <TodoDetails /> },
        ],
      },
    ],
  },
];
