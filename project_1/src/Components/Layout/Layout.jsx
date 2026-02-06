import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="dark:bg-(--blackBg)">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
