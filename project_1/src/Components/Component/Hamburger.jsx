import React, { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useDarkmodeToggle from "./useDarkModeToggle";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgDarkMode, CgProfile } from "react-icons/cg";
import { RiSettings5Fill } from "react-icons/ri";
import Capitalize from "./Capitalize";

function Hamburger() {
  const [showThemeButton, setShowThemeButton] = useState("");
  const [theme, setTheme] = useDarkmodeToggle();
  const [openHamburger, setOpenHamburger] = useState(false);
  const hamburgerItem = [
    {
      name: `${showThemeButton} mode`,
      icon: <CgDarkMode />,
      themeChanger: true,
    },
    { name: "Profile", icon: <CgProfile /> },
    { name: "Settings", icon: <RiSettings5Fill />, path: "/settings" },
  ];
  const menuRef = useRef();
  useEffect(() => {
    function handleOutClick() {
      if (menuRef.current && !menuRef.current.contains(event.target))
        setOpenHamburger(false);
    }
    document.addEventListener("mousedown", handleOutClick);
    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  useEffect(() => {
    if (theme === "light") {
      setShowThemeButton("Dark");
    } else {
      setShowThemeButton("Light");
    }
  }, [theme]);

  return (
    <div className="relative dark:text-white">
      <GiHamburgerMenu
        className="cursor-pointer"
        onClick={() => setOpenHamburger(  !openHamburger)}
      />
      {openHamburger && (
        <div
          className=" absolute right-0 left-auto dark:bg-(--blackBg) dark:border-gray-300  bg-(--whiteText) top-6 z-10  border-gray-400 rounded sm:w-40 md:w-50  w-30 "
          ref={menuRef}
        >
          <ul>
            {hamburgerItem?.map((item, index) => (
              <li
                onClick={() => {
                  if (item.themeChanger) {
                    setTheme(theme == "light" ? "dark" : "light");
                  }
                  if (item.path) {
                    Navigate(item.path);
                    setOpenHamburger(false);
                  }
                }}
                key={index}
                className="w-full flex items-center justify-between sm:text-sm  sm:font-medium text-xs font-light px-2 py-1 sm:p-2  hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded "
              >
                <div>{item.name}</div>
                <div>{item.icon}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Hamburger;
