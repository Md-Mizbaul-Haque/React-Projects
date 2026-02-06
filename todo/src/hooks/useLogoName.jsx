import { useLocation } from "react-router-dom";

export function LogoNames() {
  // 1. Get the current location object
  const location = useLocation();
  // 2. Extract the pathname from the location object
  const path = location.pathname;

  // 3. Use the pathname in the switch statement
  switch (true) {
    case path === "/":
      return (
        <div className="text-4xl font-bold">
          <span className="text-rose-400">Dash</span>
          <span>board</span>
        </div>
      );

    case path.startsWith("/todo/"):
      return (
        <div className="text-4xl font-bold text-gray-800">
          <span className="text-rose-400">To</span>
          <span>Do</span>
        </div>
      );

    default:
      return <div>i don't know</div>;
  }
}
