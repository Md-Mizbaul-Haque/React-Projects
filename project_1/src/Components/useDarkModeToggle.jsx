import React, { useEffect, useState } from "react";

function useDarkmodeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    console.log("them is changes");
  }, [theme]);
  return [theme, setTheme];
}

export default useDarkmodeToggle;
