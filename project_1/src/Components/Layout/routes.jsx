import Layout from "./Layout";
import Service from "../../Pages/Service";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Contect from "../../Pages/Contect";
import BlankLayout from "./blankLayout";
import Settings from "../../Pages/Settings";

export const route = [
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
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
  {
    element: <BlankLayout />,
    children: [
      {
        element: <Settings />,
        path: "/settings",
      },
    ],
  },
];
