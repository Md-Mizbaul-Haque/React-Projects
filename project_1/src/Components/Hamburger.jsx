import React, { useState, useEffect, useRef } from "react";
import useDarkmodeToggle from "./useDarkModeToggle";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgDarkMode, CgProfile } from "react-icons/cg";
import { RiSettings5Fill } from "react-icons/ri";
import Capitalize from "./Capitalize";

function Hamburger() {
  const [theme, setTheme] = useDarkmodeToggle();
  const [openHamburger, setOpenHamburger] = useState(false);
  const hamburgerItem = [
    {
      name: `${Capitalize(theme)} mode`,
      icon: <CgDarkMode />,
      themeChanger: true,
    },
    { name: "Profile", icon: <CgProfile /> },
    { name: "Settings", icon: <RiSettings5Fill /> },
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

  return (
    <div className="relative dark:text-white">
      <GiHamburgerMenu
        className="cursor-pointer"
        onClick={() => setOpenHamburger(!openHamburger)}
      />
      {openHamburger && (
        <div
          className=" absolute right-0 left-auto dark:bg-(--blackBg) dark:border-gray-300  bg-(--whiteText) top-6 z-10 border border-gray-400 rounded sm:w-35 md:w-40  w-30 "
          ref={menuRef}
        >
          <ul>
            {hamburgerItem?.map((item, index) => (
              <li
                onClick={() => {
                  if (item.themeChanger) {
                    setTheme(theme == "light" ? "dark" : "light");
                  }
                }}
                key={index}
                className="w-full flex items-center justify-between sm:text-sm  sm:font-medium text-xs font-light p-1 sm:p-2  hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
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
