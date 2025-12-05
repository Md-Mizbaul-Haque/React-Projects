import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./Components/Layout/Routes";
function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
