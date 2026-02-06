import React from "react";
import user from "../assets/user.jpg";
import { NavLink } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

function Sidebar() {
  const links = [{ name: "Dashboard", path: "/" }];
  return (
    <div className=" min-h-[90vh] min-w-60 max-w-60 bg-rose-400 text-white rounded  ">
      <div className="bg-white p-1  relative h-10">
        <div className="-bottom-5   -translate-x-1/2 left-1/2 absolute">
          <img
            src={user}
            className=" object-cover h-13 border-rose-400 border-2  w-13 rounded-full  "
            alt=""
          />
        </div>
      </div>
      <div className="p-2 ">
        <div className="p-4 border-b-2 border-gray-300">
          <p className=" text-center font-semibold text-xl" name="user name">
            Chily
          </p>
          <p name="email " className="text-center">
            chily@gmail.com
          </p>
        </div>
        <div className="pt-3 ">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-white rounded text-rose-400 w-full flex justify-center gap-1.5 items-center text-start p-1 "
                  : "flex justify-center items-center gap-1"
              }
            >
              <LayoutDashboard />
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
