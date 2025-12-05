
import { useRoutes } from "react-router-dom";
import { route } from "./Components/Layout/Routes";
function App() {
  const apps = useRoutes(route);
  return apps;
}

export default App
