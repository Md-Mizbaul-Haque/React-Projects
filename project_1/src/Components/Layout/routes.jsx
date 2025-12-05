import React, { Children } from "react";
import Layout from "./Layout";
import Service from "../../Pages/Service";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Contect from "../../Pages/Contect";



export const routes = () => [
  {
    element: <Layout />,
    Children: [
      {
        element: <Home />,
        path: "/home",
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <Contect />,
        path: "/contect",
      },
      {
        element: <Service />,
        path: "/service",
      },
    ],
  },
];
