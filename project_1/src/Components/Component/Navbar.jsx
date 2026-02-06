import React from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
function Navbar() {
  const navLinks = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/about", name: "About" },
    { id: 3, link: "/contect", name: "Contect" },
    { id: 4, link: "/service", name: "Service" },
  ];
  //   CLASS NAME FOR NABLINKS
  const defaultClasses =
    "text-(--grayText) dark:text-(--whiteText) font-semibold";
  const activeClasses = "text-red-600 font-semibold";
  return (
    <div className="flex flex-col">
      <div className="flex px-5 py-2   bg-white shadow items-center justify-between sm:justify-around sm:py-4 sm:px-1  dark:bg-(--blackNav)">
        <div className="font-semibold text-red-600 text-xl sm:text-2xl md:text-3xl ">
          DEVLOPER
        </div>
        <div className="flex gap-3 sm:gap-6 items-center md:w-[50%] justify-between ">
          {/* NAVLINKS  */}
          <div className="hidden sm:block">
            <div className="flex gap-3 justify-between  sm:gap-5 md:gap-12  items-center ">
              {navLinks?.map((item, index) => (
                <div key={index}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? activeClasses : defaultClasses
                    }
                  >
                    {item.name}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>

          {/* HAMBARGER  */}
          <div>
            <Hamburger />
          </div>
        </div>
      </div>
      {/* NAVBAR FOR SMALL SCREEN  */}
      <div className="sm:hidden ">
        <div className="flex gap-3 justify-evenly pb-1 sm:p-2  sm:gap-5 md:gap-12  items-center bg-red-500 text-white">
          {navLinks?.map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "text-white border-b-2 border-white" : "text-white"
                }
              >
                {item.name}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
