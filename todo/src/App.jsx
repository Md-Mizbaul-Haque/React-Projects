import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./Layouts/Routes.jsx";

function App() {
  const route = useRoutes(routes);

  return <div className="bg-white h-screen w-full">{route}</div>;
}

export default App;
